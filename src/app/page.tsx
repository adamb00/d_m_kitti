import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_URLS } from '@/lib/image-urls';
import Header from './_components/Header';

const HERITAGE_POINTS = [
  'A nagyi receptfüzete ma is ott van a pult mögött, tele kézzel írt megjegyzésekkel.',
  'Őstermelői gyümölcsöket, friss tejtermékeket és jó minőségű vajat használunk – adalékok nélkül.',
  'Minden desszertet úgy díszítünk, mintha a vasárnapi családi asztalra készülne.',
];

const SIGNATURE_SWEETS = [
  {
    title: 'Házi túrós lepény',
    description: 'Vajas tészta, házi, friss túrókrém – a nagymama kedvence.',
    image: '/sweets/sweet/túrós_lepény.jpg',
    alt: 'Túrós pite',
    note: 'Ahogy a nagyi készíti',
  },
  {
    title: 'Szilvalekváros házi barátfüle',
    description: 'Omlós tészta, gazdag szilvalekvár töltelék.',
    note: 'Házias ízek',
    image: '/sweets/sweet/barátfüle.jpg',
    alt: 'Szilvalekváros házi barátfüle',
  },
  {
    title: 'Sós-sajtos falatkák',
    description:
      'Házi perec · sós és sajtos stangli · sörkifli · sajtos tallér · pogácsák',
    image: '/sweets/savory/stangli.jpg',
    alt: 'Sós falatkák',
  },
];

const SERVICE_STEPS = [
  {
    title: 'Ötletelés és kóstoló',
    description:
      'Beszélgetünk az eseményről, hangulatokról, kedvenc ízekről, majd összekóstoljuk a kiválasztott desszerteket.',
  },
  {
    title: 'Desszertasztal megtervezése',
    description:
      'A teljes dekorációt, eszközparkot és a mennyiségeket is megtervezzük. Gondolunk az ételérzékenyekre is.',
  },
  {
    title: 'Kézműves elkészítés',
    description:
      'A rendezvényt megelőző napon készül minden frissen, kézzel, szeretettel a műhelyünkben.',
  },
  {
    title: 'Gondoskodó jelenlét',
    description:
      'Az esemény napján segítünk a tálalással, újratöltéssel, hogy az asztal a fináléig csalogató maradjon.',
  },
];

export default function Home() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '';
  const phoneHref = contactPhone.replace(/\s+/g, '');

  return (
    <div className="order-3 flex flex-col">
      <Header />

      <section className="relative overflow-hidden bg-[#f8efe4] py-16 text-primary-brown lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,180,145,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.7),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.35),transparent_60%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:items-center lg:gap-20">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-primary-brown/25 bg-[#fff7ef] px-5 py-2 text-xs uppercase tracking-[0.35em] text-primary-brown/70 shadow-[0_18px_42px_-30px_rgba(89,51,30,0.5)]">
              Családi hagyomány
            </span>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                Otthonos hangulatú sütiműhely, ahol a vasárnapi desszert
                mindennapos élmény.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-primary-brown/80 sm:text-lg">
                Hódmezővásárhely belvárosában sütjük újra a nagyszülők
                kedvenceit – olyan süteményeket, amelyekről a családi asztal és
                a közös ünnepek mosolya jut eszünkbe. A műhelyben ma is kézzel
                dagasztunk, régi formákat használunk, és minden tálcára kerül
                egy csipet nosztalgia.
              </p>
            </div>

            {/* <blockquote className="rounded-[2.5rem] border-l-4 border-primary-brown/25 bg-[#fff2e5] px-7 py-5 font-serif text-lg italic text-primary-brown/80 shadow-[0_20px_60px_-40px_rgba(89,51,30,0.45)]">
              „Minden tepsit úgy töltünk meg, mintha a család várna rá vasárnap
              délután.”
              <cite className="mt-3 block text-xs uppercase tracking-[0.3em] text-primary-brown/60">
                Domján-Molnár Kitti
              </cite>
            </blockquote> */}

            <ul className="space-y-3 text-sm leading-relaxed text-primary-brown/75 sm:text-base">
              {HERITAGE_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-4 rounded-2xl border border-primary-brown/15 bg-[#fff7ef] px-5 py-3 shadow-[0_18px_40px_-36px_rgba(89,51,30,0.4)]"
                >
                  <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-primary-brown/50" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col gap-6">
            <div className="relative -rotate-2 overflow-hidden rounded-[3rem] border border-primary-brown/15 bg-[#fff7ef] shadow-[0_35px_95px_-50px_rgba(89,51,30,0.5)]">
              <div className="relative aspect-4/3">
                <Image
                  src={IMAGE_URLS.home.heritageWorkshop}
                  alt="Kézműves sütés a Barátfülé műhelyében"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 460px, (min-width: 1024px) 400px, (min-width: 768px) 340px, 280px"
                  priority
                />
              </div>
            </div>

            <div className="relative ml-auto w-full max-w-sm rotate-3 overflow-hidden rounded-[2.5rem] border border-primary-brown/15 bg-[#fff7ef] shadow-[0_30px_90px_-50px_rgba(89,51,30,0.5)]">
              <div className="relative aspect-4/5">
                <Image
                  src={IMAGE_URLS.home.heritageGathering}
                  alt="Desszertasztal régi porcelán tányérokkal"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 320px, (min-width: 1024px) 280px, (min-width: 768px) 240px, 220px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#5f3b24] py-16 text-primary-beige lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[url('/bg-1.png')] bg-cover bg-center"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-primary-brown/30 backdrop-blur-sm"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_70%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.25),transparent_65%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="flex flex-col gap-4 text-center">
            <span className="inline-flex items-center justify-center self-center rounded-full border border-primary-beige/30 bg-primary-beige/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-primary-beige/70">
              Válogatás a pultból
            </span>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Régi kedvencek, frissen sütve
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-primary-beige/80 sm:text-lg">
              A Barátfüle desszertválogatásában minden generáció megtalálja a
              kedvencét. Ezek a sütemények mindig elsőként fogynak el a pulton -
              bármilyen eseményre kérheted őket.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SIGNATURE_SWEETS.map((sweet) => (
              <article
                key={sweet.title}
                className="group flex flex-col gap-4 rounded-[2.75rem] border border-primary-beige/25 bg-primary-beige/10 p-6 shadow-[0_35px_85px_-55px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-[2.25rem] border border-primary-beige/25 bg-primary-beige/10">
                  <div className="relative aspect-4/3">
                    <Image
                      src={sweet.image}
                      alt={sweet.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1280px) 360px, (min-width: 1024px) 300px, (min-width: 768px) 240px, 320px"
                    />
                  </div>
                </div>
                <h3 className="font-serif text-xl text-primary-beige">
                  {sweet.title}
                </h3>
                <p className="text-sm leading-relaxed text-primary-beige/80">
                  {sweet.description}
                </p>
                <span className="text-xs uppercase tracking-[0.3em] text-primary-beige/60">
                  {sweet.note}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8efe4_0%,#f4dbc6_100%)] py-16 text-primary-brown lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_60%),radial-gradient(circle_at_bottom,rgba(231,201,173,0.5),transparent_65%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-primary-brown/25 bg-[#fff7ef] px-5 py-2 text-xs uppercase tracking-[0.35em] text-primary-brown/65 shadow-[0_20px_45px_-35px_rgba(89,51,30,0.45)]">
              Rendezvényekre hangolva
            </span>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Teljes körű desszertasztal, akár az első ötlettől a tálalásig.
            </h2>
            <p className="text-base leading-relaxed text-primary-brown/80 sm:text-lg">
              Az esemény minden részletéhez igazítjuk a süteményeket: színek,
              textúrák, szezonális alapanyagok, ételérzékenységek. A Barátfüle
              csapata a csomagolástól a dekorációig gondoskodik róla, hogy a
              vendégek mosollyal távozzanak.
            </p>

            <ul className="space-y-4">
              {SERVICE_STEPS.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-[2.5rem] border border-primary-brown/15 bg-[#fff7ef] p-6 shadow-[0_28px_80px_-50px_rgba(89,51,30,0.45)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-primary-brown/20 bg-primary-brown/10 font-serif text-lg text-primary-brown/70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-primary-brown/75 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col justify-evenly">
            <div className="pointer-events-none absolute -right-8 top-12 hidden h-24 w-24 rotate-6 rounded-full border border-dashed border-primary-brown/20 lg:block" />
            <div className="relative overflow-hidden rounded-[3.2rem] border border-primary-brown/15 bg-[#fff7ef] shadow-[0_40px_110px_-55px_rgba(89,51,30,0.5)]">
              <div className="relative aspect-4/3">
                <Image
                  src={IMAGE_URLS.home.serviceCandy}
                  alt="Esküvői desszertasztal finom részletekkel"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 420px, (min-width: 768px) 360px, 320px"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[3.2rem] border border-primary-brown/15 bg-[#fff7ef] shadow-[0_40px_110px_-55px_rgba(89,51,30,0.5)]">
              <div className="relative aspect-4/3">
                <Image
                  src={IMAGE_URLS.home.serviceCandy_2}
                  alt="Esküvői desszertasztal finom részletekkel"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 420px, (min-width: 768px) 360px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8efe4] py-16 text-primary-brown lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(217,180,145,0.2),transparent_60%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent_60%)]" />
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 text-center lg:gap-12">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            Meghívnád a Barátfülét a következő eseményedre?
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-primary-brown/80 sm:text-lg">
            Írj néhány sort az alkalomról, küldj fotót az elképzeléseidről, és
            mi összeállítjuk a személyre szabott desszertasztalt.
          </p>

          <div className="flex flex-col items-center gap-4 text-sm uppercase tracking-[0.32em] text-primary-brown/70 sm:flex-row sm:gap-6">
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="rounded-full border border-primary-brown/20 bg-white/85 px-6 py-3 transition-transform hover:-translate-y-0.5 hover:shadow-[0_26px_60px_-40px_rgba(89,51,30,0.45)]"
              >
                {contactEmail}
              </a>
            )}
            {contactPhone && (
              <a
                href={`tel:${phoneHref}`}
                className="rounded-full border border-primary-brown/20 bg-primary-brown px-6 py-3 text-primary-beige transition-transform hover:-translate-y-0.5 hover:shadow-[0_26px_60px_-40px_rgba(89,51,30,0.55)]"
              >
                {contactPhone}
              </a>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em] text-primary-brown/55">
            <span className="rounded-full border border-primary-brown/15 px-5 py-2">
              Esküvői desszertasztal
            </span>
            <span className="rounded-full border border-primary-brown/15 px-5 py-2">
              Céges esemény
            </span>
            <span className="rounded-full border border-primary-brown/15 px-5 py-2">
              Ünnepi csomag
            </span>
            <Link
              href="/about-us"
              className="rounded-full border border-primary-brown/15 px-5 py-2 transition-colors hover:bg-primary-brown/10"
            >
              Ismerj meg minket
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
