import React from 'react';
import Image from 'next/image';
import kittiPortrait from '../../../public/kitti_1.jpg';
import workshopImage from '../../../public/kitti_2.jpg';

const milestones = [
  {
    year: '2007',
    description:
      'Édesanyámmal közösen megsütjük az első házi sütemény-szériát és megnyitjuk a lépcső alatti kis büfénket az Andrássy utcán.',
  },
  {
    year: '2022',
    description:
      'Átveszem édesanyámtól a Barátfüle Házi Süteményeket, bővítem a kínálatot, és elvégzem a cukrász illetve rendezvényszervező képzéseket.',
  },
  {
    year: '2023',
    description:
      'Megnyitjuk a Teleki utcai második üzletünket, ahol a vásárhelyi ízeket még több vendég kóstolhatja meg.',
  },
];

const values = [
  {
    title: 'Családi örökség',
    description:
      'Nagymamám receptjei és édesanyám tanácsai adják a Barátfüle lelke alapját. Minden torta és sütemény mögött generációs tudás áll.',
  },
  {
    title: 'Hazai alapanyag',
    description:
      'Őstermelőktől szerzett alapanyagokkal dolgozunk, színezék, tartósítószer és felesleges adalékmentesen.',
  },
  {
    title: 'Egyedi élmény',
    description:
      'Akár esküvő, akár céges fogadás: személyre szabott kínálatot, kiszállítást és dekorációt biztosítunk.',
  },
];

export default function AboutUs() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '';
  const phoneHref = contactPhone.replace(/\s+/g, '');

  return (
    <main className="bg-background text-primary-brown">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12 lg:gap-16 lg:py-20">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:gap-24 lg:text-left">
          <div className="relative aspect-4/5 w-full max-w-lg overflow-hidden rounded-[3.5rem] bg-primary-brown/10 shadow-[0_35px_80px_-45px_rgba(71,41,24,0.5)] lg:max-w-2xl xl:max-w-xl">
            <Image
              src={kittiPortrait}
              alt="Domján-Molnár Kitti portréja"
              sizes="(min-width: 1920px) 720px, (min-width: 1536px) 640px, (min-width: 1280px) 560px, (min-width: 1024px) 460px, (min-width: 768px) 340px, 280px"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col items-center gap-6 lg:items-start">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-brown/60 lg:text-sm">
              Domján-Molnár Kitti · alapító és vezető
            </p>
            <h1 className="text-2xl font-semibold leading-tight uppercase tracking-[0.25em] lg:text-3xl">
              Barátfüle Házi Sütemények
            </h1>
            <p className="text-base leading-relaxed text-primary-brown/85 lg:text-lg">
              Tősgyökeres vásárhelyiként nagymamám kedvenc süteményéről neveztem
              el a sütödét. A lépcső alatti kis büféből indultunk el, ma pedig
              már több száz rendezvény desszertasztalát álmodjuk meg.
            </p>
            <p className="text-sm leading-relaxed text-primary-brown/80 lg:text-base">
              A sütemény készítés fortélyait nagymamámtól, Molnárné Horváth
              Franciskától és édesanyámtól, Molnárné Baki Máriától tanultam.
              2007-ben közösen kezdtünk sütni, 2022-ben pedig átvettem az
              üzletet, bővítettem a kínálatot és cukrász, illetve
              rendezvényszervező képesítést szereztem.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary-brown text-primary-beige">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-12 md:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-primary-beige/80">
              a mi történetünk
            </h2>
            <p className="text-base leading-relaxed text-primary-beige/80">
              A Barátfüle név gyermekkorom kedvenc süteményét idézi. Az első
              üzletet a családi ház lépcsője alatt nyitottuk, ma pedig két
              vásárhelyi egységben szolgáljuk ki vendégeinket. Férjemmel
              2023-ban nyitottuk meg a Teleki utcai Barátfülét, ahol egyedülálló
              desszertélményt kínálunk.
            </p>
            <div className="flex gap-6 text-sm uppercase tracking-[0.3em] text-primary-beige/70">
              <span className="flex-1 rounded-3xl border border-primary-beige/25 px-4 py-3 text-center">
                családi örökség
              </span>
              <span className="flex-1 rounded-3xl border border-primary-beige/25 px-4 py-3 text-center">
                egyedi receptek
              </span>
            </div>
          </div>

          <div className="grid gap-6 text-sm">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="rounded-3xl border border-primary-beige/20 bg-primary-beige/10 px-5 py-4"
              >
                <span className="text-lg uppercase tracking-[0.2em] text-primary-beige/70">
                  {milestone.year}
                </span>
                <p className="mt-2 text-primary-beige/85">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12 lg:gap-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-24">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-primary-brown/70">
              Miért minket válassz?
            </h2>
            <p className="text-base leading-relaxed text-primary-brown/85 lg:text-lg">
              Hiszünk abban, hogy a desszertasztal igazi közösségi élmény. Éppen
              ezért minden eseményhez úgy állunk hozzá, mintha a saját
              családunknak készítenénk. A menüt az alkalomhoz illesztjük, a
              díszítést pedig a rendezvény arculatához igazítjuk.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-3xl border border-primary-brown/15 bg-primary-brown/5 px-5 py-6 text-left"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-brown/70">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-brown/80">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-4/3 w-full max-w-xl overflow-hidden rounded-[3.5rem] bg-primary-brown/10 shadow-[0_35px_80px_-50px_rgba(71,41,24,0.5)] lg:max-w-2xl">
            <Image
              src={workshopImage}
              alt="Workshop egyedi desszertasztalokkal"
              fill
              className="object-cover"
              sizes="(min-width: 1920px) 720px, (min-width: 1536px) 640px, (min-width: 1280px) 560px, (min-width: 1024px) 480px, (min-width: 768px) 360px, 300px"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary-beige text-primary-brown">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 py-12 text-center lg:gap-12 lg:py-16">
          <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-primary-brown/80">
            Dolgozzunk együtt
          </h2>
          <p className="text-base leading-relaxed text-primary-brown/80 lg:text-lg">
            Legyen szó esküvői desszertasztalról, céges rendezvényről vagy egy
            különleges ajándékcsomagról – keress minket bizalommal, és
            megálmodjuk a hozzád illő süteményválogatást.
          </p>
          <div className="flex flex-col items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary-brown/70 md:flex-row md:gap-8">
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="rounded-full border border-primary-brown/40 px-6 py-3 transition-colors hover:bg-primary-brown/15 hover:text-primary-brown"
              >
                {contactEmail}
              </a>
            )}
            {contactPhone && (
              <a
                href={`tel:${phoneHref}`}
                className="rounded-full border border-primary-brown/40 px-6 py-3 transition-colors hover:bg-primary-brown/15 hover:text-primary-brown"
              >
                {contactPhone}
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
