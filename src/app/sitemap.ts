import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const ROUTES = [
  { path: '/', priority: 1, changeFrequency: 'monthly' as const },
  { path: '/about-us', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
  { path: '/gallery', priority: 0.6, changeFrequency: 'yearly' as const },
  { path: '/sweets/sweet', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/sweets/savory', priority: 0.9, changeFrequency: 'monthly' as const },
  {
    path: '/sweets/allergens',
    priority: 0.5,
    changeFrequency: 'yearly' as const,
  },
  {
    path: '/sweets/free-from/sugar-free',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/sweets/free-from/dairy-free',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/sweets/free-from/egg-free',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
