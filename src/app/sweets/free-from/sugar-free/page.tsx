import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Cukormentes sütemények',
  description:
    'Cukormentes sütemények és ízek, rendelhető házi desszertek cukormentes kínálatban.',
  path: '/sweets/free-from/sugar-free',
});

const SWEET_CRESCENTS = [
  'Almás',
  'Túrós',
  'Diós',
  'Mákos',
  'Meggyes',
  'Meggyes-túrós',
  'Túrós-erdei gyümölcsös',
];

const STRUDELS = [
  'Almás',
  'Túrós',
  'Meggyes',
  'Túrós-erdei gyümölcsös',
  'Diós',
  'Mákos',
];

const FLAVOR_SECTIONS = [
  { title: 'Édes kiskiflik', items: SWEET_CRESCENTS },
  { title: 'Rétesek', items: STRUDELS },
];

export default function CukormentesPage() {
  return (
    <>
      <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 pb-10 pt-16 text-center lg:pb-14 lg:pt-20">
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          Cukormentes
          <span className="mt-4 block text-base font-semibold uppercase tracking-[0.4em] text-primary-brown/70 sm:text-lg">
            süteményeink
          </span>
        </h1>

        <div className="flex flex-col items-center gap-3 rounded-[2.5rem] border border-primary-brown/15 bg-[#fff7ef] px-6 py-4 text-center shadow-[0_20px_60px_-45px_rgba(89,51,30,0.45)] sm:flex-row sm:gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-brown/60">
            Rendelhető
          </span>
          <span className="text-lg font-semibold uppercase tracking-[0.3em] text-primary-brown">
            5000 Ft/kg
          </span>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-16 lg:pb-20">
        <div>
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            {FLAVOR_SECTIONS.map((section) => (
              <div
                key={section.title}
                className="rounded-[2.75rem] border border-primary-brown/15 bg-[#fff7ef] p-7 shadow-[0_30px_80px_-55px_rgba(89,51,30,0.45)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-brown/60">
                  {section.title}
                </p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-primary-brown/70">
                  {section.items.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
