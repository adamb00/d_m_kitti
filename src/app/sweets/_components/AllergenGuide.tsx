import Link from 'next/link';
import { ALLERGENS } from '@/app/sweets/_data/allergens';

export default function AllergenGuide() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pb-16 lg:pb-20">
      <div className="rounded-[2.5rem] border border-primary-brown/15 bg-white/70 p-6 shadow-[0_35px_90px_-55px_rgba(89,51,30,0.4)] sm:p-8">
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-brown/60">
            Allergén útmutató
          </p>
          <p className="text-sm leading-relaxed text-primary-brown/75">
            Az alábbi 1-14-es számozás az EU kötelezően jelölt allergénjeit
            mutatja, a 1169/2011 EU rendelet II. melléklete szerint.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
          {ALLERGENS.map((allergen) => (
            <Link
              key={allergen.id}
              href={`/sweets/allergens#allergen-${allergen.id}`}
              className="flex flex-row items-center gap-2 rounded-2xl border border-primary-brown/10 bg-[#fff7ef] px-3 py-3 text-center transition hover:border-primary-brown/40 hover:bg-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary-brown/50"
              aria-label={`${allergen.id}. allergén: ${allergen.label} - részletes lista`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-brown/20 bg-white text-sm font-semibold text-primary-brown">
                {allergen.id}
              </span>
              <span className="text-xs font-medium leading-snug text-primary-brown/75">
                {allergen.label}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-5 text-center text-xs text-primary-brown/60 sm:text-left">
          Kattints bármelyik allergén számra a részletes leíráshoz.
        </div>
      </div>
    </section>
  );
}
