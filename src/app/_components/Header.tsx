import Image from 'next/image';
import Link from 'next/link';
import baratfuleSign from '../../../public/image-6.jpg';
import cozyTeaTime from '../../../public/lauren-gray-Zqh5l1JWs5M-unsplash.jpg';
import piteImage from '../../../public/pite.png';
import lepeny from '../../../public/turoslepeny.jpg';
import Logo from './Logo';

const highlightTags = [
  '2007 óta családi műhely',
  'Nagymama receptjei',
  'Hazai alapanyagok',
];

export default function Header() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '';
  const phoneHref = contactPhone.replace(/\s+/g, '');

  return (
    <header className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#f6e1c9,#f1d2b0,#eac49c,#d9b491)] text-primary-brown">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(120,78,49,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-20 top-10 hidden h-64 w-64 rounded-full border border-dashed border-primary-brown/20 lg:block" />
      <div className="pointer-events-none absolute -right-24 -bottom-12 hidden h-72 w-72 rotate-12 rounded-full border border-primary-brown/15 lg:block" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-14 lg:flex-row lg:items-center lg:gap-20 lg:py-20">
        <div className="relative flex flex-2 flex-col gap-8">
          <div className="flex flex-wrap items-center gap-3 text-[0.7rem] uppercase tracking-[0.35em] text-primary-brown/60">
            {highlightTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary-brown/25 bg-white/70 px-5 py-2 shadow-[0_18px_40px_-32px_rgba(89,51,30,0.55)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-4 lg:items-start">
              <div className="w-60 sm:w-72 lg:w-96">
                <Logo className="w-full" />
              </div>
            </div>
            <h1 className="font-serif text-3xl font-semibold leading-tight text-primary-brown sm:text-4xl lg:text-[2.8rem]">
              Régi családi receptek, illatos sütemények és figyelmes vendéglátás
              Hódmezővásárhely szívében.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-primary-brown/80 sm:text-lg">
              A Barátfüle desszertjei minden falatban a nagymama konyháját
              idézik. Esküvőre, ballagásra, születésnapra vagy egy meghitt
              családi délutánra készülünk? Gondoskodunk róla, hogy az asztalon a
              legfinomabb otthon íze fogadja vendégeidet.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full border border-primary-brown/20 bg-primary-brown px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-beige shadow-[0_18px_36px_-24px_rgba(89,51,30,0.65)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_30px_48px_-30px_rgba(89,51,30,0.6)]"
            >
              Rendelj desszertasztalt
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-primary-brown/25 bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-brown shadow-[0_18px_36px_-28px_rgba(89,51,30,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-white"
            >
              Galéria
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-primary-brown/60 sm:flex-row sm:items-center sm:gap-4">
            <span>Sütve szeretettel</span>
            <span>Őstermelői alapanyagok</span>
            <span>Kicsiktől a nagy rendezvényekig</span>
          </div>

          {contactPhone && (
            <a
              href={`tel:${phoneHref}`}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-brown/20 bg-white/80 px-5 py-2 text-xs uppercase tracking-[0.3em] text-primary-brown/70 shadow-[0_18px_40px_-30px_rgba(89,51,30,0.45)] transition-colors hover:text-primary-brown"
            >
              Hívj minket: {contactPhone}
            </a>
          )}
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className="pointer-events-none absolute -top-8 left-8 hidden h-28 w-28 rounded-full bg-white/40 blur-xl lg:block" />
          <div className="pointer-events-none absolute -bottom-6 right-10 hidden h-32 w-32 rounded-full bg-primary-brown/15 blur-2xl lg:block" />

          <div className="grid w-full max-w-md gap-6">
            <div className="relative overflow-hidden rounded-[3rem] border border-primary-brown/15 bg-white shadow-[0_35px_90px_-45px_rgba(89,51,30,0.6)]">
              <div className="relative aspect-4/3">
                <Image
                  src={baratfuleSign}
                  alt="Barátfüle üzlet táblája"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 420px, (min-width: 1024px) 360px, (min-width: 768px) 320px, 280px"
                  priority
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative -rotate-2 overflow-hidden rounded-[2.5rem] border border-primary-brown/15 bg-white shadow-[0_30px_80px_-45px_rgba(89,51,30,0.55)]">
                <div className="relative aspect-square">
                  <Image
                    src={lepeny}
                    alt="Frissen sült sütemények pulton"
                    fill
                    className="object-contain bg-primary-brown/80"
                    sizes="(min-width: 1024px) 180px, (min-width: 768px) 160px, 140px"
                    priority
                  />
                </div>
              </div>

              <div className="relative rotate-3 -top-3 overflow-hidden rounded-[2.5rem] border border-primary-brown/15 bg-white shadow-[0_30px_80px_-45px_rgba(89,51,30,0.55)] sm:translate-y-6">
                <div className="relative aspect-square">
                  <Image
                    src={cozyTeaTime}
                    alt="Családias teázás süteményekkel"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 220px, (min-width: 768px) 200px, 180px"
                    priority
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2.5rem] border border-primary-brown/15 bg-white shadow-[0_30px_80px_-45px_rgba(89,51,30,0.55)] sm:col-span-2">
                <div className="relative aspect-[5/3]">
                  <Image
                    src={piteImage}
                    alt="Baráti kávézás süteményekkel"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 420px, (min-width: 1024px) 360px, (min-width: 768px) 320px, 280px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
