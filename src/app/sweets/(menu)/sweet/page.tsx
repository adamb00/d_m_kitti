import Image from 'next/image';
import AllergenGuide from '@/app/sweets/_components/AllergenGuide';

type Price = {
  value: number;
  unit: string;
};

type MenuItem = {
  name: string;
  allergens: Array<number | string>;
  price: Price;
  image?: string;
  flavors?: string[];
};

type Section = {
  title: string;
  description: string;
  items: MenuItem[];
};

const SWEET_SECTIONS: Section[] = [
  {
    title: 'Édes házi sütemények és klasszikusok',
    description:
      'Régi kedvencek és klasszikus szeletek, rendezvényekre és családi alkalmakra.',
    items: [
      {
        name: 'Raffaello szelet',
        allergens: [1, 3, 7],
        price: { value: 5200, unit: 'Ft/kg' },
      },
      {
        name: 'Shrek szelet',
        allergens: [1, 3, 7],
        price: { value: 5200, unit: 'Ft/kg' },
        image: '/sweets/sweet/shrek_szelet.jpg',
      },
      {
        name: 'Mini bejgli',
        allergens: [1, 3, 7],
        price: { value: 6000, unit: 'Ft/kg' },
      },

      {
        name: 'Mézes zserbó',
        allergens: [1, 3, 7],
        price: { value: 5200, unit: 'Ft/kg' },
        image: '/sweets/sweet/mézes_zserbó.jpg',
      },
      {
        name: 'Lajcsi szelet',
        allergens: [1, 3, 7],
        price: { value: 5200, unit: 'Ft/kg' },
        image: '/sweets/sweet/lajcsi_szelet.jpg',
      },
      {
        name: 'Gesztenyés piskótatekercs',
        allergens: [1, 3, 7],
        price: { value: 5200, unit: 'Ft/kg' },
      },
      {
        name: 'Zserbó golyó',
        allergens: [1, 3, 7, 8],
        price: { value: 5200, unit: 'Ft/kg' },
      },
      {
        name: 'Hatlapos (karamellás)',
        allergens: [1, 3, 7],
        price: { value: 5200, unit: 'Ft/kg' },
      },

      {
        name: 'Narancsos puszedli',
        allergens: [1, 3],
        price: { value: 5200, unit: 'Ft/kg' },
      },
      {
        name: 'Macskaszem',
        allergens: [1, 3, 7, 8],
        price: { value: 5200, unit: 'Ft/kg' },
        image: '/sweets/sweet/macskaszem.jpg',
      },
      {
        name: 'Mézeskalács',
        allergens: [1, 3],
        price: { value: 5200, unit: 'Ft/kg' },
      },
      {
        name: 'Méteres kalács',
        allergens: [1, 3, 7],
        price: { value: 5200, unit: 'Ft/kg' },
        image: '/sweets/sweet/méteres_kalács.jpg',
      },
      {
        name: 'Flódni',
        allergens: [1, 3, 7, 8],
        price: { value: 4500, unit: 'Ft/kg' },
      },

      {
        name: 'Túrós lepény (édes)',
        allergens: [1, 3, 7],
        price: { value: 710, unit: 'Ft/db' },
        image: '/sweets/sweet/túrós_lepény.jpg',
      },
      {
        name: 'Barátfüle',
        allergens: [1, 3, 7],
        price: { value: 4500, unit: 'Ft/kg' },
        image: '/sweets/sweet/barátfüle.jpg',
      },
      {
        name: 'Zserbó',
        allergens: [1, 3, 7, 8],
        price: { value: 4500, unit: 'Ft/kg' },
        image: '/sweets/sweet/zserbó.jpg',
      },
      {
        name: 'Linzer',
        allergens: [1, 3, 12],
        price: { value: 4500, unit: 'Ft/kg' },
        image: '/sweets/sweet/linzer.jpg',
      },
      {
        name: 'Keksztekercs',
        allergens: [1, 3, 7],
        price: { value: 4500, unit: 'Ft/kg' },
        image: '/sweets/sweet/keksztekercs.jpg',
      },
      {
        name: 'Rétes',
        allergens: [1, 3],
        price: { value: 4500, unit: 'Ft/kg' },
        flavors: ['Almás', 'Túrós', 'Mákos', 'Meggyes', 'stb...'],
        image: '/sweets/sweet/túrós-áfonyás_rétes.jpg',
      },

      {
        name: 'Töltött kiskifli',
        allergens: [1, 3],
        price: { value: 4500, unit: 'Ft/kg' },
        flavors: ['Lekváros', 'Almás', 'Túrós', 'stb...'],
        image: '/sweets/sweet/édes_töltött_kiskifli.jpg',
      },
      {
        name: 'Lagzis őszibarack',
        allergens: [1, 3, 7],
        price: { value: 550, unit: 'Ft/db' },
        image: '/sweets/sweet/lagzis_barack.jpg',
      },
      {
        name: 'Diós kosárka',
        allergens: [1, 3, 8],
        price: { value: 550, unit: 'Ft/db' },
        image: '/sweets/sweet/diós_kosár.jpg',
      },
      {
        name: 'Hólabda',
        allergens: [1, 3, 7],
        price: { value: 550, unit: 'Ft/db' },
        image: '/sweets/sweet/hólabda.jpg',
      },
      {
        name: 'Bejgli',
        allergens: [1, 3, 7, 8, 12],
        price: { value: 5000, unit: 'Ft/kg' },
      },
      {
        name: 'Mini isler',
        allergens: [1, 3, 12],
        price: { value: 4500, unit: 'Ft/kg' },
      },
      {
        name: 'Kakaós / fahéjas csiga',
        allergens: [1, 3, 7],
        price: { value: 4500, unit: 'Ft/kg' },
        image: '/sweets/sweet/kakaós_csiga.jpg',
      },
      {
        name: 'Hókifli',
        allergens: [1, 3, 7, 12],
        price: { value: 4500, unit: 'Ft/kg' },
        image: '/sweets/sweet/hókifli.jpg',
      },
      {
        name: 'Kókuszkocka',
        allergens: [1, 3, 7],
        price: { value: 5200, unit: 'Ft/kg' },
        image: '/sweets/sweet/kókuszkocka.jpg',
      },
      {
        name: 'Almás / meggyes kocka',
        allergens: [1, 3, 7],
        price: { value: 4500, unit: 'Ft/kg' },
        image: '/sweets/sweet/almás_kocka.jpg',
      },
      {
        name: 'Aranygaluska',
        allergens: [1, 3, 7, 8],
        price: { value: 5200, unit: 'Ft/kg' },
      },
      {
        name: 'Lekváros levél',
        allergens: [1, 3, 12],
        price: { value: 4500, unit: 'Ft/kg' },
      },
      {
        name: 'Piskóta tekercs',
        allergens: [1, 3, 7, 12],
        price: { value: 5200, unit: 'Ft/kg' },
      },
      {
        name: 'Kürtőskalács kifli',
        allergens: [1, 3, 7],
        price: { value: 4500, unit: 'Ft/kg' },
      },
      {
        name: 'Reszelt túrós',
        allergens: [1, 3, 7],
        price: { value: 4500, unit: 'Ft/kg' },
        image: '/sweets/sweet/reszelt_túrós.jpg',
      },
      {
        name: 'Erzsi kocka',
        allergens: [1, 3, 7],
        price: { value: 4500, unit: 'Ft/kg' },
        image: '/sweets/sweet/erzsi_kocka.jpg',
      },
      {
        name: 'Puncs szelet',
        allergens: [1, 3, 7],
        price: { value: 5200, unit: 'Ft/kg' },
        image: '/sweets/sweet/puncs_szelet.jpg',
      },
      {
        name: 'Túrós bukta',
        allergens: [1, 3, 7],
        price: { value: 4500, unit: 'Ft/kg' },
        image: '/sweets/sweet/túrós_bukta.jpg',
      },
      {
        name: 'Bukta',
        allergens: [1, 3, 7, 12],
        price: { value: 4500, unit: 'Ft/kg' },
        flavors: ['Nutellás', 'Lekváros', 'stb...'],
        image: '/sweets/sweet/túrós_bukta.jpg',
      },
      {
        name: 'Diós rácsos',
        allergens: [1, 3, 7, 8],
        price: { value: 5200, unit: 'Ft/kg' },
        image: '/sweets/sweet/diós_rácsos.jpg',
      },
      {
        name: 'Mákos rácsos',
        allergens: [1, 3, 7],
        price: { value: 5200, unit: 'Ft/kg' },
      },
    ],
  },
];

const formatPrice = (price: Price) => `${price.value} ${price.unit}`;

const formatAllergens = (allergens: Array<number | string>) =>
  allergens.length > 0 ? allergens.map(String).join(',') : 'nincs megadva';

const PLACEHOLDER_IMAGE = '/menu-placeholder.png';

export default function SweetPage() {
  return (
    <main className="text-primary-brown">
      <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-6 pb-10 pt-16 text-center lg:pb-14 lg:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-brown/60">
          Édes kínálat
        </p>
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          Édes sütemények
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-primary-brown/75 sm:text-lg">
          Klasszikus szeletek, állandó kedvencek és változó finomságok egyetlen
          áttekinthető árlistában. Az allergénjelölések a tételeknél találhatók.
        </p>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-16 lg:pb-20">
        <div className="flex flex-col gap-8">
          {SWEET_SECTIONS.map((section) => (
            <div
              key={section.title}
              className="rounded-[3rem] border border-primary-brown/15 bg-[#fff7ef] p-8 shadow-[0_35px_90px_-55px_rgba(89,51,30,0.45)]"
            >
              <div className="flex flex-col gap-3 text-center sm:text-left">
                <h2 className="font-serif text-2xl">{section.title}</h2>
                <p className="text-sm leading-relaxed text-primary-brown/75">
                  {section.description}
                </p>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {section.items.map((item) => {
                  const imageSrc = item.image ?? PLACEHOLDER_IMAGE;

                  return (
                    <div
                      key={item.name}
                      className="grid gap-4 rounded-4xl border border-primary-brown/15 bg-white/70 p-5 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)] sm:items-center lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)]"
                    >
                      <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-primary-brown/10 bg-white/80">
                        <Image
                          src={imageSrc}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 240px, (min-width: 640px) 200px, 100vw"
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap flex-col items-start gap-1.5">
                          <span className="text-2xl font-semibold text-primary-brown">
                            {item.name}
                          </span>
                          <p className="text-xs italic  text-primary-brown/70">
                            {item.flavors && `${item.flavors.join(', ')}`}
                          </p>
                          <p className="text-xs italic font-semibold uppercase tracking-[0.2em] text-primary-brown/60">
                            Allergének: {formatAllergens(item.allergens)}
                          </p>

                          <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary-brown/60">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <AllergenGuide />
    </main>
  );
}
