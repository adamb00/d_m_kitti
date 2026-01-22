import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Kapcsolat',
  description:
    'Kapcsolatfelvétel, rendelés és egyeztetés rendezvény desszertasztalhoz vagy egyedi megrendeléshez.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
