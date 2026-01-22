import type { Metadata } from 'next';
import '@/app/_style/globals.css';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
} from '@/lib/seo';
import Footer from './_components/Footer';
import Navigation from './_components/Navigation';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_SHORT_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Domján-Molnár Kitti' }],
  creator: 'Domján-Molnár Kitti',
  publisher: SITE_NAME,
  keywords: [
    'házi sütemény',
    'Barátfüle',
    'Hódmezővásárhely',
    'desszertasztal',
    'rendezvény',
    'cukrászat',
    'sós sütemény',
    'édes sütemény',
    'cukormentes',
    'tejmentes',
    'tojásmentes',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: 'Barátfüle Házi Sütemények',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#f8efe4',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <meta name="apple-mobile-web-app-title" content="Barátfüle" />
      </head>
      <body className="antialiased flex min-h-screen w-full flex-col bg-background">
        <Navigation />

        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
