import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Tejmentes sütemények',
  description:
    'Tejmentes sütemények sós és édes kínálata, rendezvényekre és egyedi megrendelésre is.',
  path: '/sweets/free-from/dairy-free',
});

const STRUDEL_FLAVORS = [
  'Almás',
  'Túrós',
  'Meggyes',
  'Túrós-erdei gyümölcsös',
  'Diós',
  'Mákos',
];

const SWEET_CRESCENTS = [
  'Almás',
  'Túrós',
  'Diós',
  'Mákos',
  'Meggeys',
  'Meggyes-túrós',
  'Túrós-erdei gyümölcsös',
];

const SAVORY_ITEMS = [
  {
    name: 'Pogácsa',
    price: '4500 Ft/kg',
    details: 'Töpörtyűs, tejfölös',
  },
  { name: 'Perec', price: '4500 Ft/kg' },
  { name: 'Sodort perec', price: '6000 Ft/kg' },
  {
    name: 'Sonkás kiskifli',
    price: '4500 Ft/kg',
    details: '(rétestésztából)',
  },
  {
    name: 'Pizzás szál',
    price: '4500 Ft/kg',
    details: '(rétestésztából)',
  },
];

const SWEET_ITEMS = [
  {
    name: 'Édes kiskiflik rétestésztából',
    price: '4500 Ft/kg',
    details: 'Almás, szilvalekváros, mákos, diós-rumos, meggyes',
  },
  {
    name: 'Rétes',
    price: '4500 Ft/kg',
    details: 'Almás, meggyes, mákos, diós-rumos',
  },
  { name: 'Hólabda', price: '600 Ft/db' },
  { name: 'Linzer', price: '4500 Ft/kg' },
  { name: 'Barátfüle', price: '5000 Ft/kg' },
  { name: 'Zserbó', price: '5000 Ft/kg' },
  { name: 'Méteres kalács', price: '6000 Ft/kg' },
  { name: 'Lajcsi szelet', price: '6000 Ft/kg' },
  { name: 'Hatlapos karamellás', price: '6000 Ft/kg' },
  { name: 'Grízes zserbó', price: '6000 Ft/kg' },
  { name: 'Bejgli', price: '5500 Ft/kg', details: 'Mákos, diós' },
];

const FLAVOR_SECTIONS = [
  { title: 'Rétesek', items: STRUDEL_FLAVORS, price: '5000 Ft/kg' },
  { title: 'Édes kiskiflik', items: SWEET_CRESCENTS, price: '5000 Ft/kg' },
];

const MENU_SECTIONS = [
  { title: 'Sós', items: SAVORY_ITEMS },
  { title: 'Édes', items: SWEET_ITEMS },
];

export default function TejmentesPage() {
  return (
    <>
      <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 pb-10 pt-16 text-center lg:pb-14 lg:pt-20">
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          Tejmentes
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
        <div className="flex flex-col gap-10">
          {/* <div>
            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              {FLAVOR_SECTIONS.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[2.75rem] border border-primary-brown/15 bg-[#fff7ef] p-7 shadow-[0_30px_80px_-55px_rgba(89,51,30,0.45)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-brown/60">
                      {section.title}
                    </p>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-brown/60">
                      {section.price}
                    </span>
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-primary-brown/70">
                    {section.items.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          <div>
            <div className="mt-4 grid gap-6 lg:grid-cols-2 lg:gap-8">
              {MENU_SECTIONS.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[2.75rem] border border-primary-brown/15 bg-[#fff7ef] p-7 shadow-[0_30px_80px_-55px_rgba(89,51,30,0.45)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-brown/60">
                    {section.title}
                  </p>
                  <div className="mt-6 grid gap-4">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-4xl border border-primary-brown/15 bg-white/70 px-5 py-4"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-brown">
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
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
