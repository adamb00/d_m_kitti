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

const SAVORY_ITEMS: MenuItem[] = [
  {
    name: 'Túrós lepény (sós)',
    allergens: [1, 3, 7],
    price: { value: 710, unit: 'Ft/db' },
    image: '/sweets/sweet/túrós_lepény.jpg',
  },
  {
    name: 'Pogácsa (tejfölös, sajtos, töpörtyűs)',
    allergens: [1, 3, 7],
    price: { value: 4000, unit: 'Ft/kg' },
    flavors: ['Tejfölös', 'Sajtos', 'Töpörtyűs'],
    image: '/sweets/savory/sajtos_pogácsa.jpg',
  },
  {
    name: 'Túrós-szezámos pogácsa',
    allergens: [1, 3, 7, 11],
    price: { value: 4500, unit: 'Ft/kg' },
    image: '/sweets/savory/sajtos_pogácsa.jpg',
  },
  {
    name: 'Sörkifli',
    allergens: [1, 3, 7, 11],
    price: { value: 4500, unit: 'Ft/kg' },
    image: '/sweets/savory/sörkifli.jpg',
  },
  {
    name: 'Stangli',
    allergens: [1, 3, 7],
    price: { value: 4200, unit: 'Ft/kg' },
    image: '/sweets/savory/stangli.jpg',
  },
  {
    name: 'Perec',
    allergens: [1, 3, 7],
    price: { value: 4200, unit: 'Ft/kg' },
    image: '/sweets/savory/perec.jpg',
  },
  {
    name: 'Pizzás csiga',
    allergens: [1, 3, 7, 12],
    price: { value: 4500, unit: 'Ft/kg' },
    image: '/sweets/savory/pizzás_csiga.jpg',
  },
  {
    name: 'Házi pizza szelet',
    allergens: [1, 3, 7],
    price: { value: 4500, unit: 'Ft/db' },
  },
  {
    name: 'Mini sajtroló',
    allergens: [1, 3, 7],
    price: { value: 6000, unit: 'Ft/kg' },
    image: '/sweets/savory/mini_sajtroló.jpg',
  },
  {
    name: 'Sonkás kifli (rétestésztából)',
    allergens: [1, 3, 7],
    price: { value: 4500, unit: 'Ft/kg' },
    image: '/sweets/savory/sonkás_kifli.jpg',
  },
  {
    name: 'Sonkás croissant',
    allergens: [1, 3, 7, 10],
    price: { value: 4500, unit: 'Ft/kg' },
  },
  {
    name: 'Sodort perec',
    allergens: [1, 3],
    price: { value: 6000, unit: 'Ft/kg' },
  },
  {
    name: 'Virslis kifli',
    allergens: [1, 3, 10, 11],
    price: { value: 4500, unit: 'Ft/kg' },
    image: '/sweets/savory/virslis_falatka.jpg',
  },
  {
    name: 'Sajtkémes kifli',
    allergens: [1, 3, 7, 11],
    price: { value: 4500, unit: 'Ft/kg' },
    image: '/sweets/savory/sajtkrémes_kifli.jpg',
  },
  {
    name: 'Sós csavart szál / pirosaranyos',
    allergens: [1, 3, 12],
    price: { value: 5200, unit: 'Ft/kg' },
  },
  {
    name: 'Sós aprósütemény (békebeli)',
    allergens: [1, 3, 7, 11],
    price: { value: 5000, unit: 'Ft/kg' },
    image: '/sweets/savory/békebeli.jpg',
  },
];

const formatPrice = (price: Price) => `${price.value} ${price.unit}`;

const formatAllergens = (allergens: Array<number | string>) =>
  allergens.length > 0 ? allergens.map(String).join(',') : 'nincs megadva';

const PLACEHOLDER_IMAGE = '/menu-placeholder.png';

export default function SavoryPage() {
  return (
    <main className="text-primary-brown">
      <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-6 pb-10 pt-16 text-center lg:pb-14 lg:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-brown/60">
          Sós kínálat
        </p>
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          Sós sütemények
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-primary-brown/75 sm:text-lg">
          Kézzel készült, frissen sült sós finomságok rendezvényekre, irodai
          reggelikhez vagy egy gyors falathoz. Az árlista a tételeknél
          található.
        </p>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-16 lg:pb-20">
        <div className="rounded-[3rem] border border-primary-brown/15 bg-[#fff7ef] p-8 shadow-[0_35px_90px_-55px_rgba(89,51,30,0.45)]">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h2 className="font-serif text-2xl">Árlista</h2>
            <p className="text-sm leading-relaxed text-primary-brown/75">
              A sósválogatás klasszikus kedvenceit találod itt egy helyen.
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {SAVORY_ITEMS.map((item) => {
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
                      <span className="text-lg font-semibold text-primary-brown">
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
      </section>

      <AllergenGuide />
    </main>
  );
}
