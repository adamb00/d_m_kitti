'use client';

import {
  ArrowLeft,
  Images,
  MapPin,
  MessageCircleHeart,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

const HIGHLIGHTS = [
  'Sütve szeretettel',
  'Hazai alapanyagokból',
  'Egyedi igényeidre szabva',
];

const QUICK_LINKS = [
  {
    href: '/gallery',
    label: 'Galéria megtekintése',
    icon: Images,
  },
  {
    href: '/about-us',
    label: 'Ismerd meg a történetünket',
    icon: MessageCircleHeart,
  },
  {
    href: '/contact',
    label: 'Kapcsolatfelvétel',
    icon: MapPin,
  },
];

export default function NotFound() {
  return (
    <main className="bg-background text-primary-brown">
      <section className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-center gap-10 px-6 py-16 text-center lg:gap-14 lg:py-20">
        <div className="flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-brown/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary-brown/60">
            <Sparkles className="h-4 w-4" />
            Nem találtuk az oldalt
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3rem]">
            Úgy tűnik, ez a sütemény elfogyott
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-primary-brown/75 sm:text-lg">
            A keresett oldal jelenleg nem elérhető. Nézz körül a Barátfüle
            kínálatában, vagy térj vissza a főoldalra, és válassz valami igazán
            finomat!
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-brown/70">
          {HIGHLIGHTS.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary-brown/20 px-6 py-3"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid w-full gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-3 rounded-3xl border border-primary-brown/20 bg-primary-brown/5 px-5 py-4 uppercase tracking-[0.25em] text-primary-brown transition-transform hover:-translate-y-1 hover:bg-primary-brown/10"
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="text-sm">{label}</span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-primary-brown px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary-brown transition-transform hover:-translate-y-1 hover:bg-primary-brown hover:text-primary-beige"
        >
          <ArrowLeft className="h-4 w-4" />
          vissza a főoldalra
        </Link>
      </section>
    </main>
  );
}
