import type { Metadata } from 'next';

const normalizeSiteUrl = (rawUrl?: string) => {
  if (!rawUrl) {
    return 'http://localhost:3000';
  }

  const normalized = rawUrl.replace(/\/+$/, '');

  if (normalized.startsWith('http://') || normalized.startsWith('https://')) {
    return normalized;
  }

  return `https://${normalized}`;
};

export const SITE_NAME = 'Barátfüle Házi Sütemények';
export const SITE_SHORT_NAME = 'Barátfüle';
export const SITE_LOCALE = 'hu_HU';
export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const DEFAULT_OG_IMAGE = '/image.png';
export const DEFAULT_DESCRIPTION =
  'Házi sütemények Hódmezővásárhelyen: klasszikus és egyedi desszertek, rendezvényekre desszertasztal, sós és édes kínálat, egyedi megrendelések.';

type PageMetadataOptions = {
  title: Metadata['title'];
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

export const createPageMetadata = ({
  title,
  description,
  path,
  image,
  keywords,
}: PageMetadataOptions): Metadata => {
  const images = [image ?? DEFAULT_OG_IMAGE];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  };
};
