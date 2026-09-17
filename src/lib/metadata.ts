import type { Metadata } from 'next';

export const siteUrl = 'https://www.assisi-ni.org';

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Assisi Animal Sanctuary`,
      description,
    },
  };
}
