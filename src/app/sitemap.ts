import type { MetadataRoute } from 'next';
import { animals } from '@/data/animals';
import { siteUrl } from '@/lib/metadata';

const staticRoutes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/adopt', changeFrequency: 'daily', priority: 0.9 },
  { path: '/donate', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/sponsor', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/volunteer', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/membership', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/legacy', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/outreach', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/shops', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const animalEntries: MetadataRoute.Sitemap = animals.map((animal) => ({
    url: `${siteUrl}/adopt/${animal.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticEntries, ...animalEntries];
}
