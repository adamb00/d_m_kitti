'use client';

import { RenderImage, RenderWrapper, RowsPhotoAlbum } from 'react-photo-album';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { IMAGE_URLS } from '@/lib/image-urls';

type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const PHOTOS: GalleryPhoto[] = [
  {
    src: IMAGE_URLS.gallery[0],
    width: 4000,
    height: 3000,
    alt: 'Esküvői desszertasztal vintage hangulatban',
  },
  // {
  //   src: IMAGE_URLS.gallery[1],
  //   width: 3525,
  //   height: 3000,
  //   alt: 'Friss gyümölcsös tarte válogatás',
  // },
  {
    src: IMAGE_URLS.gallery[2],
    width: 4000,
    height: 3000,
    alt: 'Csokoládés szeletek karamell öntettel',
  },
  {
    src: IMAGE_URLS.gallery[3],
    width: 4000,
    height: 3000,
    alt: 'Esküvői torta vadvirág díszekkel',
  },
  {
    src: IMAGE_URLS.gallery[4],
    width: 3000,
    height: 4000,
    alt: 'Desszertasztal arany részletekkel',
  },
  {
    src: IMAGE_URLS.gallery[5],
    width: 4000,
    height: 3000,
    alt: 'Sós aprósütemények ünnepi tálalásban',
  },
  {
    src: IMAGE_URLS.gallery[6],
    width: 3000,
    height: 3128,
    alt: 'Kávé mellé kínált süteményválogatás',
  },
  {
    src: IMAGE_URLS.gallery[7],
    width: 4000,
    height: 3000,
    alt: 'Candy bar rózsaszín részletekkel',
  },
  {
    src: IMAGE_URLS.gallery[8],
    width: 3000,
    height: 4000,
    alt: 'Barátfüle sütemények fa tálon',
  },
];

const renderImage: RenderImage<GalleryPhoto> = (
  { alt = '', title, sizes, className, style, loading: _loading, ...props },
  { photo },
) => (
  <Image
    {...props}
    loading="eager"
    decoding="async"
    priority
    src={photo.src}
    alt={alt || photo.alt}
    title={title}
    width={photo.width}
    height={photo.height}
    sizes={sizes ?? '(min-width: 1024px) 45vw, 90vw'}
    className={`w-full h-auto object-cover rounded-2xl ${className ?? ''}`}
    style={{ ...style }}
  />
);

const renderWrapper: RenderWrapper<GalleryPhoto> = (
  { style, className, children, ...rest },
  { photo },
) => (
  <div
    {...rest}
    style={{ ...style, position: 'relative', overflow: 'hidden' }}
    className={`group rounded-[2.5rem] border border-primary-brown/10 bg-primary-brown/5 shadow-[0_30px_45px_-35px_rgba(89,51,30,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_35px_60px_-40px_rgba(89,51,30,0.5)] ${className ?? ''}`}
    aria-label={photo.alt}
  >
    {children}
    <span className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-transparent transition duration-300 group-hover:border-primary-brown/25" />
  </div>
);

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<GalleryPhoto | null>(null);
  const [layoutVariant, setLayoutVariant] = useState<'rows' | 'grid'>('grid');

  useEffect(() => {
    if (!activeImage) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia('(min-width: 1280px)');
    const updateLayout = () => {
      const supportsResizeObserver = 'ResizeObserver' in window;
      setLayoutVariant(
        supportsResizeObserver && mediaQuery.matches ? 'rows' : 'grid',
      );
    };

    updateLayout();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateLayout);
    } else {
      mediaQuery.addListener(updateLayout);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', updateLayout);
      } else {
        mediaQuery.removeListener(updateLayout);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const preloaders = PHOTOS.map((photo) => {
      const img = new window.Image();
      img.decoding = 'async';
      img.loading = 'eager';
      img.src = photo.src;
      return img;
    });

    return () => {
      preloaders.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  const photos = useMemo(() => PHOTOS, []);
  const isRowsLayout = layoutVariant === 'rows';

  return (
    <main className="bg-background text-primary-brown">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-12 text-center lg:gap-12 lg:py-16">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-brown/55 sm:text-sm">
            Galéria
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.5rem]">
            Sütemény-montázs, ahol az ízek életre kelnek
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-primary-brown/80 sm:text-lg">
            A Barátfüle desszertválogatásának hangulatát mutatjuk meg: családi
            rendezvények, esküvők és különleges alkalmak legédesebb pillanatait
            gyűjtöttük össze ebben a montázsban.
          </p>
        </div>

        {isRowsLayout ? (
          <RowsPhotoAlbum
            photos={photos}
            render={{ image: renderImage, wrapper: renderWrapper }}
            onClick={({ photo }) => setActiveImage(photo as GalleryPhoto)}
            spacing={20}
            targetRowHeight={320}
            defaultContainerWidth={1024}
            sizes={{
              size: '1168px',
              sizes: [
                {
                  viewport: '(max-width: 1200px)',
                  size: 'calc(100vw - 32px)',
                },
              ],
            }}
          />
        ) : (
          <div className="grid w-full gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {photos.map((photo) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveImage(photo)}
                aria-label={`${photo.alt} megnyitása`}
                className="group block w-full transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-brown"
              >
                <div
                  className="relative w-full overflow-hidden rounded-[2.5rem] border border-primary-brown/10 bg-primary-brown/5 shadow-[0_30px_45px_-35px_rgba(89,51,30,0.45)] group-hover:shadow-[0_35px_60px_-40px_rgba(89,51,30,0.5)]"
                  style={{ aspectRatio: `${photo.width}/${photo.height}` }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                    sizes="(min-width: 640px) 50vw, 92vw"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-transparent transition duration-300 group-hover:border-primary-brown/25" />
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-80 flex items-center justify-center bg-primary-brown/60 backdrop-blur-sm px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-zoom-out"
            aria-label="Bezárás"
            onClick={() => setActiveImage(null)}
          />
          <div className="relative z-81 max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[3.5rem] border border-primary-beige/20 bg-primary-beige/10 shadow-[0_35px_95px_-45px_rgba(71,41,24,0.6)]">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              className="h-full w-full object-contain"
              sizes="(min-width: 1536px) 90vw, (min-width: 1280px) 88vw, (min-width: 1024px) 92vw, (min-width: 768px) 96vw, 96vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
