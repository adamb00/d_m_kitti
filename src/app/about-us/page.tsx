import Image from 'next/image';
import { IMAGE_URLS } from '@/lib/image-urls';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Bemutatkozás',
  description:
    'Ismerd meg Domján-Molnár Kittit és a Barátfüle történetét, a családi recepteket és a kézműves sütés hagyományát.',
  path: '/about-us',
  image: IMAGE_URLS.about.baratfuleSign,
});

const paragraphs = [
  'Domján-Molnár Kitti vagyok a Barátfüle Házi Sütemények Üzletének vezetője.',
  'Hogy honnan is kapta a nevét?',
  'Tősgyökeres vásárhelyiként gyermekkorom kedvenc süteményéről neveztem el a büfét. Sokszor nagymamám (Molnárné Horváth Franciska) sütötte nekünk a vasárnapi ebédhez fő fogásként. Így sok recept tőle származik illetve a sütemény sütés fortélyait és titkait édesanyámtól (Molnárné Baki Mária) tanultam és lestem el.',
  '2007-ben együtt kezdtünk el házi süteményeket sütni, árulni itt a belvárosban az Andrássy utcán, a lépcső alatt ,Hódmezővásárhelyen. (akkor még FAPUMA ) Pár évet kihagyva, a pedagógiai pályámat befejezve , 2022-ben átvettem édesanyámtól az üzletet. Így maradt neki a piaci üzlete, a Kiskonyha Házi Sütemények Boltja, ahol ugyanezek a sütemények találhatóak meg.',
  'Mindeközben a sütemények kínálatát kibővítettem, a nyitva tartási időt meghosszabbítottam és közben elvégeztem a cukrász és rendezvényszervezői iskolát is.',
  'Férjemmel, Domján Attilával 2023 decemberében megnyitottuk a szintén Hódmezővásárhelyen, a Teleki utcán a második sütis üzletünket is, ami szintén a Barátfüle nevet kapta.',
  'A süteményeink elkészítéséhez szükséges alapanyagokat őstermelőktől próbálom beszerezni és úgy készíteni, ahogy otthon a családomnak is: színezék, tartósítószer és adalékanyag nélkül.',
  'Célom, hogy süteményeimet ne csak Vásárhelyen ismerjék meg, hanem vidéken is.',
  'Házi sütemények készítését vállaljuk esküvőre, ballagásra, ünnepekre, céges összejövetelekre és nagyobb rendezvényekre is egyaránt.',
];

export default function AboutUs() {
  return (
    <main className="relative isolate bg-[radial-gradient(circle_at_top,#f7e2c9,transparent_60%),linear-gradient(180deg,#f8efe4,#f2dcc7)] text-primary-brown">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,#ffffff80,transparent_65%)]"
        aria-hidden
      />

      <section className="relative w-full overflow-hidden bg-[#ead4bf]">
        <Image
          src={IMAGE_URLS.about.baratfuleSign}
          alt="Barátfüle üzlet táblája"
          width={10632}
          height={3543}
          priority
          sizes="100vw"
          quality={90}
          className="h-auto w-full object-contain"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-brown/35 via-primary-brown/15 to-transparent"
          aria-hidden
        />
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <article className="relative rounded-[3rem] border border-primary-brown/15 bg-[#fff9f1]/95 p-8 text-base leading-relaxed shadow-[0_35px_90px_-45px_rgba(89,51,30,0.45)] backdrop-blur sm:p-10 sm:text-lg">
            <div className="pointer-events-none absolute -left-8 top-10 hidden h-20 w-20 rounded-full border border-dashed border-primary-brown/20 lg:block" />
            <div className="pointer-events-none absolute -right-10 bottom-8 hidden h-24 w-24 rounded-full bg-primary-brown/10 lg:block" />

            {paragraphs.map((paragraph, index) => {
              const baseClass =
                'text-primary-brown/90 [&:not(:first-child)]:mt-5 sm:[&:not(:first-child)]:mt-6';
              const emphasisClass =
                index === 0
                  ? 'text-lg font-semibold text-primary-brown sm:text-xl'
                  : index === 1
                    ? 'rounded-[1.5rem] border-l-4 border-primary-brown/25 bg-primary-brown/5 px-5 py-4 font-serif italic text-primary-brown/80'
                    : '';

              return (
                <p
                  key={`about-paragraph-${index}`}
                  className={`${baseClass} ${emphasisClass}`}
                >
                  {paragraph}
                </p>
              );
            })}
          </article>

          <aside className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="relative overflow-hidden rounded-[2.75rem] border border-primary-brown/15 bg-[#fff7ef] shadow-[0_30px_80px_-45px_rgba(89,51,30,0.5)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={IMAGE_URLS.about.kittiPortrait}
                  alt="Domján-Molnár Kitti portréja"
                  fill
                  sizes="(min-width: 1280px) 480px, (min-width: 1024px) 420px, (min-width: 768px) 360px, 90vw"
                  quality={90}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-primary-brown/15 bg-[#fff7ef] shadow-[0_25px_70px_-45px_rgba(89,51,30,0.4)]">
              <div className="relative aspect-[5/4]">
                <Image
                  src={IMAGE_URLS.about.pite}
                  alt="Házi pite"
                  fill
                  sizes="(min-width: 1280px) 480px, (min-width: 1024px) 420px, (min-width: 768px) 360px, 90vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-primary-brown/15 bg-[#fff7ef] shadow-[0_25px_70px_-45px_rgba(89,51,30,0.4)] sm:col-span-2 lg:col-span-1">
              <div className="relative aspect-[5/4]">
                <Image
                  src={IMAGE_URLS.about.workshopImage}
                  alt="Családi pillanat a Barátfüle konyhájában"
                  fill
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 460px, (min-width: 768px) 420px, 90vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
