import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Tojásmentes sütemények',
  description:
    'Tojásmentes sütemények előrendelésre, házi desszertek tojásmentes kínálatban.',
  path: '/sweets/free-from/egg-free',
});

const EGG_FREE_ITEMS = [
  {
    name: 'Rétes',
    price: '4500 Ft/kg',
    details: 'Almás, meggyes, mákos, diós-rumos',
  },
  {
    name: 'Édes/sós kiskiflik rétestésztából',
    price: '4500 Ft/kg',
    details: 'Almás, meggyes, mákos, diós-rumos',
  },
  { name: 'Pizzás szál', price: '4500 Ft/kg' },
  { name: 'Sonkás kifli', price: '4500 Ft/kg' },
];

export default function TojasmentesPage() {
  return (
    <>
      <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 pb-10 pt-16 text-center lg:pb-14 lg:pt-20">
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          Tojásmentes
          <span className="mt-4 block text-base font-semibold uppercase tracking-[0.4em] text-primary-brown/70 sm:text-lg">
            süteményeink
          </span>
        </h1>

        <div className="flex flex-col items-center gap-3 rounded-[2.5rem] border border-primary-brown/15 bg-[#fff7ef] px-6 py-4 text-center shadow-[0_20px_60px_-45px_rgba(89,51,30,0.45)] sm:flex-row sm:gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-brown/60">
            Érdeklődj az elérhetőségekről!
          </span>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-16 lg:pb-20">
        <div className="rounded-[3rem] border border-primary-brown/15 bg-[#fff7ef] p-8 shadow-[0_35px_90px_-55px_rgba(89,51,30,0.45)]">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-brown/60">
              Tojásmentes süteményeink
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
              <h2 className="font-serif text-2xl">
                Csak előrendelésre kapható!
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {EGG_FREE_ITEMS.map((item) => (
              <div
                key={item.name}
                className="rounded-4xl border border-primary-brown/15 bg-white/70 px-5 py-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-primary-brown">
                    {item.name}
                  </span>
                  {item.price && (
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-brown/60">
                      {item.price}
                    </span>
                  )}
                </div>
                {item.details && (
                  <p className="mt-2 text-sm text-primary-brown/75">
                    {item.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
