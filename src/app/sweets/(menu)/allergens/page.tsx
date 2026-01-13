import { ALLERGENS } from '@/app/sweets/_data/allergens';

export default function AllergenPage() {
  return (
    <main className="text-primary-brown">
      <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-6 pb-10 pt-16 text-center lg:pb-14 lg:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-brown/60">
          Allergének
        </p>
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          Allergének részletes listája
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-primary-brown/75 sm:text-lg">
          A 1169/2011 EU rendelet II. melléklete alapján felsorolva, a kivételek
          megjelölésével.
        </p>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-16 lg:pb-20">
        <div className="rounded-[3rem] border border-primary-brown/15 bg-[#fff7ef] p-8 shadow-[0_35px_90px_-55px_rgba(89,51,30,0.45)]">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h2 className="font-serif text-2xl">
              1-14. kötelezően jelölt allergének
            </h2>
            <p className="text-sm leading-relaxed text-primary-brown/75">
              A részletek a vonatkozó rendeletben meghatározott kivételekkel
              szerepelnek.
            </p>
          </div>

          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {ALLERGENS.map((allergen) => (
              <li
                key={allergen.id}
                id={`allergen-${allergen.id}`}
                className="scroll-mt-24 rounded-2xl border border-primary-brown/10 bg-white/80 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-brown/20 bg-white text-xs font-semibold text-primary-brown">
                    {allergen.id}
                  </span>
                  <span className="text-sm font-semibold text-primary-brown">
                    {allergen.label}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-primary-brown/75">
                  {allergen.description}
                </p>
                {allergen.exceptions && allergen.exceptions.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[11px] leading-relaxed text-primary-brown/70">
                    {allergen.exceptions.map((exception) => (
                      <li key={exception}>{exception}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
