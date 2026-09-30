import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-wide text-yellow-600 mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          This page has gone walkies
        </h1>
        <p className="text-gray-600 mb-8">
          It might have been rehomed, or the link is out of date. The animals are still here —
          and so is the rest of the site.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary text-center">
            Back to home
          </Link>
          <Link href="/adopt" className="btn-outline text-center">
            See animals looking for homes
          </Link>
        </div>
      </div>
    </div>
  );
}
