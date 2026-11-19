import type { Metadata } from 'next';

export const siteUrl = 'https://www.assisi-ni.org';
export const siteName = 'Assisi Animal Sanctuary';

export const defaultOgImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Assisi Animal Sanctuary - Help for the Helpless',
} as const;

export function pageMetadata(title: string, description: string, path?: string): Metadata {
  return {
    title,
    description,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      siteName,
      locale: 'en_GB',
      type: 'website',
      ...(path ? { url: path } : {}),
      images: [defaultOgImage],
    },
  };
}
