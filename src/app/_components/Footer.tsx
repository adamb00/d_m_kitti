import React from 'react';

export default function Footer() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '';
  const phoneHref = contactPhone.replace(/\s+/g, '');

  return (
    <footer className="order-last bg-primary-brown text-primary-beige">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-4 md:max-w-sm">
          <h2 className="text-lg font-semibold">Barátfüle házi sütemények</h2>
          <p className="text-sm leading-relaxed text-primary-beige/80">
            Kézműves süteményeinket hazai alapanyagokból. Személyre szabott
            kínálattal segítünk, hogy az esemény pontosan olyan legyen,
            amilyennek elképzelted.
          </p>
        </div>

        <div className="grid w-full max-w-md grid-cols-1 gap-6 text-sm md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary-beige/60">
              Kapcsolat
            </h3>
            {contactPhone && (
              <a
                href={`tel:${phoneHref}`}
                className="transition-colors hover:text-primary-beige"
              >
                {contactPhone}
              </a>
            )}
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="transition-colors hover:text-primary-beige"
              >
                {contactEmail}
              </a>
            )}
            <span className="text-primary-beige/70">
              Hódmezővásárhely · Magyarország
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary-beige/60">
              Kövess minket
            </h3>
            <a
              href="https://www.facebook.com/profile.php?id=100064197902848"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary-beige"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/baratfulehazisutik/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary-beige"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@bartfle.hzi.stemn?_r=1&_t=ZN-93aHN1I5K2p"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary-beige"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-beige/15 ">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-5 px-6 py-5 text-center text-[0.7rem] uppercase tracking-[0.25em] text-primary-beige/50 sm:text-xs md:flex-row md:gap-3 md:py-4 md:text-left">
          <span>
            © {new Date().getFullYear()} Barátfüle · Minden jog fenntartva
          </span>
          <a
            href="#"
            className="transition-colors hover:text-primary-beige md:text-right"
          >
            Adatkezelési tájékoztató
          </a>
        </div>
      </div>
    </footer>
  );
}
