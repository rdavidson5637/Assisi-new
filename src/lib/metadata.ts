import type { Metadata } from 'next';

/** Public URL of the concept demo; used when no Vercel env vars are present (local builds, tests). */
export const conceptFallbackUrl = 'https://assisi-new.vercel.app';

/**
 * Origin of the deployment serving this build. Metadata (metadataBase, canonical,
 * og:url, og:image), sitemap and robots all resolve against it, so share images
 * load from the deploy that actually has the /opengraph-image route, and the concept
 * never points search engines or social cards at pages that do not exist on the
 * charity's live site.
 *
 * Production uses VERCEL_PROJECT_PRODUCTION_URL, previews use VERCEL_URL, and anything
 * else falls back to the concept demo URL.
 */
export function resolveSiteUrl(env: Record<string, string | undefined> = process.env): string {
  const host =
    env.VERCEL_ENV === 'production'
      ? env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL
      : env.VERCEL_URL;
  if (!host || !host.trim()) return conceptFallbackUrl;
  const trimmed = host.trim().replace(/\/+$/, '');
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export const siteUrl = resolveSiteUrl();
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
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: [defaultOgImage],
    },
  };
}
