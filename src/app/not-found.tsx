import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-cream flex items-center justify-center px-4 py-16">
      <div className="max-w-lg">
        <p className="text-sm font-semibold text-teal mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
          This page has gone walkies
        </h1>
        <p className="text-ink/70 mb-8">
          It might have been rehomed, or the link is out of date. The animals are still here,
          and so is the rest of the site.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Link href="/" className="btn-primary text-center">
            Back to home
          </Link>
          <Link href="/adopt" className="btn-secondary">
            See animals looking for homes
          </Link>
        </div>
      </div>
    </div>
  );
}
