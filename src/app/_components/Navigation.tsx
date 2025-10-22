'use client';

import { Phone } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import wolt_logo from '../../../public/wolt.png';

type SubMenuItem = {
  label: string;
  href: string;
  important?: boolean;
};

type MenuItem = {
  label: string;
  href?: string;
  children?: SubMenuItem[];
  important?: boolean;
};

const MENU_ITEMS: MenuItem[] = [
  { label: 'AKCIÓ', important: true, href: '/action' },
  { label: 'KEZDŐLAP', href: '/' },
  { label: 'BEMUTATKOZÁS', href: '/about-us' },
  {
    label: 'ESEMÉNYEK',
    children: [
      { label: 'Workshopok', href: '/events/workshopok' },
      { label: 'Kóstolók', href: '/events/kostolok' },
      { label: 'Lakossági események', href: '/events/lakossagi' },
    ],
  },
  {
    label: 'SÜTEMÉNYEK',
    children: [
      { label: 'Sós sütemények', href: '/sweets/sos' },
      { label: 'Édes sütemények', href: '/sweets/edes' },
    ],
  },
  {
    label: 'MENTES SÜTEMÉNYEK',
    children: [
      { label: 'Cukormentes', href: '/sweets/mentes/cukormentes' },
      { label: 'Tejmentes', href: '/sweets/mentes/tejmentes' },
    ],
  },
  { label: 'GALÉRIA', href: '/gallery' },
  { label: 'KAPCSOLAT', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '';
  const phoneHref = contactPhone.replace(/\s+/g, '');

  useEffect(() => {
    if (isOpen) {
      document.body.style.setProperty('overflow', 'hidden');
    } else {
      document.body.style.removeProperty('overflow');
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navStyle = useMemo<React.CSSProperties>(() => {
    if (isOpen) {
      return { height: '100dvh', minHeight: '100dvh' };
    }
    return { height: '3.5rem' };
  }, [isOpen]);

  const containerClasses = useMemo(() => {
    const base =
      'relative flex flex-col items-center justify-start overflow-hidden transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]';
    const closed = `sticky top-0 z-40 mx-auto w-full max-w-5xl py-1 px-4 ${
      isScrolled
        ? 'bg-background/95 shadow-[0_12px_32px_-18px_rgba(71,41,24,0.35)] backdrop-blur'
        : 'bg-transparent'
    }`;
    const open =
      'sticky inset-0 z-50 w-full max-w-none bg-background px-6 py-2';

    return `${base} ${isOpen ? open : closed}`;
  }, [isOpen, isScrolled]);

  const menuStateClasses = useMemo(
    () =>
      isOpen
        ? 'pointer-events-auto opacity-100 translate-y-0'
        : 'pointer-events-none opacity-0 -translate-y-4',
    [isOpen],
  );

  const itemStateClasses = useMemo(
    () => (isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'),
    [isOpen],
  );

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSubmenuToggle = (label: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  useEffect(() => {
    if (!isOpen) {
      setOpenSubmenus({});
    }
  }, [isOpen]);

  const MobileNavigation = (
    <nav className={`${containerClasses} lg:hidden`} style={navStyle}>
      {isOpen && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-background"
        ></div>
      )}
      <div className="flex w-full justify-center">
        <div className="flex items-center justify-center gap-8">
          {contactPhone && (
            <a
              href={`tel:${phoneHref}`}
              className="flex h-12 w-12 items-center justify-center rounded-full text-primary-brown transition-colors hover:bg-primary-brown/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-brown"
              aria-label="Telefon"
            >
              <Phone className="h-5 w-5" />
            </a>
          )}
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Navigáció bezárása' : 'Navigáció megnyitása'}
            className="flex h-12 w-12 items-center justify-center rounded-full text-primary-brown transition-colors hover:bg-primary-brown/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-brown"
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 h-0.5 w-full origin-center rounded-sm bg-primary-brown transition-transform duration-500 ${
                  isOpen
                    ? 'top-1/2 -translate-y-1/2 rotate-45'
                    : 'top-1/2 -translate-y-[0.6rem] rotate-0'
                }`}
              ></span>
              <span
                className={`absolute left-0 h-0.5 w-full origin-center rounded-sm bg-primary-brown transition-[opacity,transform] duration-300 ${
                  isOpen
                    ? 'top-1/2 -translate-y-1/2 opacity-0'
                    : 'top-1/2 -translate-y-1/2 opacity-100'
                }`}
              ></span>
              <span
                className={`absolute left-0 h-0.5 w-full origin-center rounded-sm bg-primary-brown transition-transform duration-500 ${
                  isOpen
                    ? 'top-1/2 -translate-y-1/2 -rotate-45'
                    : 'top-1/2 translate-y-2 rotate-0'
                }`}
              ></span>
            </span>
          </button>
          <a
            href="https://wolt.com/hu/hun/hodmezovasarhely/restaurant/baratfule-hazi-sutemenyek"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-primary-brown/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-brown"
            aria-label="Wolt rendelés"
          >
            <Image
              src={wolt_logo}
              alt="Wolt logo"
              className="w-12"
              sizes="48px"
              priority
            />
          </a>
        </div>
      </div>

      <ul
        className={`mt-12 flex w-full flex-1 flex-col items-start justify-start gap-6 overflow-y-auto px-8 pb-14 text-lg transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuStateClasses}`}
        aria-hidden={!isOpen}
      >
        {MENU_ITEMS.map((item, index) => {
          const baseDelay = index * 80;
          const hasChildren = Boolean(item.children?.length);
          const submenuOpen = hasChildren && openSubmenus[item.label];
          const submenuHeight =
            hasChildren && item.children
              ? `${(submenuOpen ? item.children.length : 0) * 2.4}rem`
              : '0rem';

          return (
            <li
              key={item.label}
              style={{ transitionDelay: `${baseDelay}ms` }}
              className={`flex w-full flex-col items-start gap-3 text-left uppercase transition-[opacity,transform] duration-300 ease-out ${itemStateClasses}`}
            >
              {hasChildren ? (
                <div className="flex w-full items-center gap-3">
                  <a
                    href={item.href ?? '#'}
                    className={`flex-1 text-left text-lg font-semibold uppercase tracking-[0.25em] transition-colors hover:text-primary-brown-dark ${
                      item.important ? 'text-red-500' : 'text-primary-brown'
                    }`}
                  >
                    {item.label}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleSubmenuToggle(item.label)}
                    aria-expanded={Boolean(submenuOpen)}
                    aria-label={`${item.label} almenü ${
                      submenuOpen ? 'bezárása' : 'megnyitása'
                    }`}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-primary-brown transition-colors hover:bg-primary-brown/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-brown"
                  >
                    <span
                      aria-hidden="true"
                      className={`transition-transform duration-300 ease-out ${
                        submenuOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-5 w-5"
                      >
                        <path
                          d="M5 8l5 5 5-5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              ) : (
                <a
                  href={item.href ?? '#'}
                  className={`text-left text-lg font-semibold uppercase tracking-[0.25em] transition-colors hover:text-primary-brown-dark ${
                    item.important ? 'text-red-500' : 'text-primary-brown'
                  }`}
                >
                  {item.label}
                </a>
              )}
              {item.children && (
                <ul
                  className={`flex w-full flex-col items-start gap-2 overflow-hidden text-left text-sm font-medium uppercase tracking-[0.2em] text-primary-brown/80 transition-[max-height,opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    submenuOpen
                      ? 'pointer-events-auto opacity-100 translate-y-0'
                      : 'pointer-events-none opacity-0 -translate-y-2'
                  }`}
                  style={{ maxHeight: submenuHeight }}
                >
                  {item.children.map((child, childIndex) => (
                    <li
                      key={child.label}
                      style={{
                        transitionDelay: `${
                          baseDelay + (childIndex + 1) * 60
                        }ms`,
                      }}
                      className={`w-full text-left transition-[opacity,transform] duration-300 ease-out ${
                        submenuOpen
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-2 opacity-0'
                      }`}
                    >
                      <a
                        href={child.href}
                        className="block text-primary-brown transition-colors hover:text-primary-brown-dark"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );

  const DesktopNavigation = (
    <nav className="sticky top-0 z-30 hidden w-full border-b border-primary-brown/15 bg-background/95 backdrop-blur lg:block">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-8 px-6 py-4 xl:max-w-6xl xl:px-8">
        <div className="flex items-center gap-6">
          {contactPhone && (
            <a
              href={`tel:${phoneHref}`}
              className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-primary-brown transition-all duration-200 hover:scale-110 hover:text-primary-brown-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-brown"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span className="truncate max-w-40">Hívj minket!</span>
            </a>
          )}
        </div>

        <ul className="flex flex-1 flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary-brown">
          {MENU_ITEMS.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const labelClasses = item.important
              ? 'text-red-500'
              : 'text-primary-brown';

            return (
              <li key={item.label} className="relative group">
                {hasChildren ? (
                  <a
                    href={item.href ?? '#'}
                    className={`inline-flex max-w-40 items-center gap-1 text-center uppercase transition-all duration-200 hover:scale-105 hover:text-primary-brown-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-brown ${labelClasses}`}
                  >
                    <span className="block whitespace-nowrap leading-tight">
                      {item.label}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-3 w-3 shrink-0 transition-transform duration-200 ease-out group-hover:rotate-180 group-focus-within:rotate-180"
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : (
                  <a
                    href={item.href ?? '#'}
                    className={`inline-flex max-w-40 items-center gap-1 text-center uppercase transition-all duration-200 hover:scale-105 hover:text-primary-brown-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-brown ${labelClasses}`}
                  >
                    <span className="block whitespace-nowrap leading-tight">
                      {item.label}
                    </span>
                  </a>
                )}

                {hasChildren && item.children && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-30 mt-1 -translate-x-1/2 opacity-0 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <div className="flex min-w-[18rem] flex-col gap-1 bg-background rounded-b-sm px-4 py-3 text-left text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary-brown backdrop-blur">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="px-3 py-2 text-center transition-colors hover:bg-primary-brown/10 hover:text-primary-brown-dark"
                        >
                          <span className="block whitespace-nowrap leading-tight">
                            {child.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <a
          href="https://wolt.com/hu/hun/hodmezovasarhely/restaurant/baratfule-hazi-sutemenyek"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary-brown px-4  text-xs font-semibold uppercase tracking-[0.3em] text-primary-brown transition-colors hover:bg-primary-brown hover:text-primary-beige focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-brown"
        >
          <Image
            src={wolt_logo}
            alt="Wolt"
            className="h-12 w-auto"
            sizes="48px"
            priority
          />
          <span className="truncate max-w-32">Rendelés</span>
        </a>
      </div>
    </nav>
  );

  return (
    <>
      {MobileNavigation}
      {DesktopNavigation}
    </>
  );
}
