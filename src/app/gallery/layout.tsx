import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Galéria',
  description:
    'Desszertasztalok és süteményválogatások fotói, esküvői és családi rendezvények pillanatai.',
  path: '/gallery',
});

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children;
}
