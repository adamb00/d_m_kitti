'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Facebook, Instagram, Mail, Phone, Sparkles } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const MapEmbed = dynamic(() => import('./MapEmbed'), { ssr: false });

const parseCoordinate = (value: string | undefined, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const CONTACT_SECTIONS = [
  {
    title: 'Rendezvény desszertasztal',
    description:
      'Esküvő, céges esemény vagy születésnap? Segítünk személyre szabott desszertasztal összeállításában.',
  },

  {
    title: 'Egyedi megrendelés',
    description:
      'Ha csak néhány tálcányi desszertet szeretnél, különleges családi alkalomra, szakértő csapatunk gondoskodik róla.',
  },
];

const ContactFormSchema = z.object({
  name: z
    .string({ message: 'Kérlek add meg a neved.' })
    .trim()
    .min(2, 'Legalább 2 karakter hosszú legyen.'),
  email: z
    .string({ message: 'Kérlek add meg az email címed.' })
    .trim()
    .email('Érvényes email címet adj meg.'),
  phone: z
    .string()
    .trim()
    .regex(
      /^$|^\+?\d[\d\s\-()]{6,}$/,
      'Adj meg érvényes telefonszámot (pl. +36 ...).',
    ),
  eventType: z.string().trim(),
  message: z
    .string({ message: 'Kérlek írd le az igényeidet.' })
    .trim()
    .min(20, 'Legalább 20 karakterben részletezd, mire van szükséged.'),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

export default function ContactPage() {
  const contactAddress = '6800 Hódmezővásárhely, Lehel utca 4.';
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '';
  const phoneHref = contactPhone.replace(/\s+/g, '');
  const contactLat = parseCoordinate(
    process.env.NEXT_PUBLIC_CONTACT_LAT,
    46.41443688661204,
  );
  const contactLng = parseCoordinate(
    process.env.NEXT_PUBLIC_CONTACT_LNG,
    20.32328862649831,
  );

  const [_, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventType: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      setSubmitStatus('idle');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Hiba történt az üzenet küldésekor.');
      }
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <main className="bg-background text-primary-brown">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 py-12 text-center lg:gap-14 lg:py-16">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-brown/55 sm:text-sm">
            Lépj kapcsolatba velünk
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.5rem]">
            Szeretettel várjuk a megkeresésed
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-primary-brown/80 sm:text-lg">
            Írd meg nekünk, milyen alkalomra készülsz, és néhány órán belül
            felvesszük veled a kapcsolatot a részletekkel.
          </p>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2">
          {CONTACT_SECTIONS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-3xl border border-primary-brown/20 bg-primary-brown/5 px-6 py-6 text-left"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-brown/70">
                {item.title}
              </h2>
              <p className="text-sm leading-relaxed text-primary-brown/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-primary-beige bg-primary-brown text-primary-beige">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 md:px-6 py-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:py-16">
          <div className="space-y-8">
            <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-primary-beige/75">
              közvetlen elérhetőségek
            </h2>
            <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-primary-beige md:tracking-[0.25em]">
              {contactPhone && (
                <a
                  href={`tel:${phoneHref}`}
                  className="flex items-center gap-4 rounded-full border border-primary-beige/25 px-5 py-3 text-center transition-colors hover:bg-primary-beige/15 sm:flex-row sm:justify-center sm:gap-3"
                >
                  <Phone className="h-4 w-4" />
                  {contactPhone}
                </a>
              )}
              {contactEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-4 rounded-full border border-primary-beige/25 px-5 py-3 text-center transition-colors hover:bg-primary-beige/15 sm:flex-row sm:justify-center sm:gap-3"
                >
                  <Mail className="h-4 w-4" />
                  {contactEmail}
                </a>
              )}
            </div>

            <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.25em] text-primary-beige/60">
              <span>Nyitvatartás</span>
              <p className="text-sm leading-relaxed text-primary-beige/70">
                Hétfő és szombat: 06:00 – 12:00 <br />
                Kedd, szerda, csütörtök, péntek: 06:00 – 17:00 <br />
                Vasárnap: zárva, de egyedi rendezvényre egyeztetünk.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.3em] text-primary-beige/60">
              <p className="text-sm leading-relaxed text-primary-beige/70">
                {contactAddress}
              </p>
              <MapEmbed
                address={contactAddress}
                lat={contactLat}
                lng={contactLng}
              />
            </div>

            <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-primary-beige/70 sm:flex-row sm:tracking-[0.3em]">
              <a
                href="https://www.facebook.com/profile.php?id=100064197902848"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-primary-beige/25 px-4 py-3 transition-colors hover:bg-primary-beige/15 hover:text-primary-beige"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/baratfulehazisutik/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-primary-beige/25 px-4 py-3 transition-colors hover:bg-primary-beige/15 hover:text-primary-beige"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@bartfle.hzi.stemn?_r=1&_t=ZN-93aHN1I5K2p"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-primary-beige/25 px-4 py-3 transition-colors hover:bg-primary-beige/15 hover:text-primary-beige"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  style={{ opacity: 1 }}
                  className="h-4 w-4"
                >
                  <path d="M20.357 7.75a.537.537 0 0 0-.495-.516a4.7 4.7 0 0 1-2.415-.938a4.85 4.85 0 0 1-1.887-3.3a.54.54 0 0 0-.517-.496h-2.108a.517.517 0 0 0-.517.527v12.59a2.794 2.794 0 0 1-2.974 2.762a2.815 2.815 0 0 1-2.51-3.711A2.836 2.836 0 0 1 9.93 12.78a.506.506 0 0 0 .558-.506V9.807s-.896-.063-1.202-.063a5.27 5.27 0 0 0-4.101 1.93a5.8 5.8 0 0 0-1.37 2.52a5.86 5.86 0 0 0 2.14 6.072A5.93 5.93 0 0 0 9.591 21.5q.451 0 .896-.063A5.95 5.95 0 0 0 13.8 19.78a5.84 5.84 0 0 0 1.75-4.133V8.71a7.84 7.84 0 0 0 4.218 1.613a.517.517 0 0 0 .548-.527V7.751z" />
                </svg>
                TikTok
              </a>
            </div>
          </div>

          <div className="rounded-[3rem] border border-primary-beige/20 bg-primary-beige/10 p-8 backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-beige/80">
              Küldj üzenetet
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-beige/70">
              Írd meg, milyen alkalomra, hány főre és milyen ízekkel számolsz.
              24 órán belül visszajelzünk.
            </p>

            <form
              className="mt-6 grid grid-cols-1 gap-5 text-left md:grid-cols-2"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <label className="text-xs uppercase tracking-[0.3em] text-primary-beige/70">
                Név
                <input
                  type="text"
                  placeholder="Teljes neved"
                  className="mt-2 w-full rounded-2xl border border-primary-beige/25 bg-primary-beige/10 px-4 py-3 text-sm text-primary-beige outline-none transition-colors placeholder:text-primary-beige/40 focus:border-primary-beige"
                  {...register('name')}
                />
                {errors.name && (
                  <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.3em] text-red-200">
                    {errors.name.message}
                  </span>
                )}
              </label>

              <label className="text-xs uppercase tracking-[0.3em] text-primary-beige/70">
                Email
                <input
                  type="email"
                  placeholder="email@példa.hu"
                  className="mt-2 w-full rounded-2xl border border-primary-beige/25 bg-primary-beige/10 px-4 py-3 text-sm text-primary-beige outline-none transition-colors placeholder:text-primary-beige/40 focus:border-primary-beige"
                  {...register('email')}
                />
                {errors.email && (
                  <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.3em] text-red-200">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <label className="text-xs uppercase tracking-[0.3em] text-primary-beige/70">
                Telefonszám
                <input
                  type="tel"
                  placeholder="+36..."
                  className="mt-2 w-full rounded-2xl border border-primary-beige/25 bg-primary-beige/10 px-4 py-3 text-sm text-primary-beige outline-none transition-colors placeholder:text-primary-beige/40 focus:border-primary-beige"
                  {...register('phone')}
                />
                {errors.phone && (
                  <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.3em] text-red-200">
                    {errors.phone.message}
                  </span>
                )}
              </label>

              <label className="text-xs uppercase tracking-[0.3em] text-primary-beige/70">
                Rendezvény típusa
                <input
                  type="text"
                  placeholder="Esküvő, céges esemény, stb."
                  className="mt-2 w-full rounded-2xl border border-primary-beige/25 bg-primary-beige/10 px-4 py-3 text-sm text-primary-beige outline-none transition-colors placeholder:text-primary-beige/40 focus:border-primary-beige"
                  {...register('eventType')}
                />
              </label>

              <label className="text-xs uppercase tracking-[0.3em] text-primary-beige/70 md:col-span-2">
                Üzenet
                <textarea
                  rows={4}
                  placeholder="Milyen ízeket keresel? Hány főre számolsz? Van-e egyedi kérésetek?"
                  className="mt-2 w-full rounded-2xl border border-primary-beige/25 bg-primary-beige/10 px-4 py-3 text-sm text-primary-beige outline-none transition-colors placeholder:text-primary-beige/40 focus:border-primary-beige"
                  {...register('message')}
                />
                {errors.message && (
                  <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.3em] text-red-200">
                    {errors.message.message}
                  </span>
                )}
              </label>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-beige px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary-brown transition-all duration-200 hover:scale-[1.02] hover:bg-primary-beige/90 disabled:opacity-60"
                  disabled={isSubmitting}
                >
                  <Sparkles className="h-4 w-4" />
                  {isSubmitting ? 'Küldés folyamatban' : 'Üzenet küldése'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
