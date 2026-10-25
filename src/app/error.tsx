'use client';

import { useEffect } from 'react';
import { PhoneLink } from '@/components/ContactLinks';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] bg-cream flex items-center">
      <div className="max-w-xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-ink mb-4">Something went wrong</h1>
        <p className="text-ink/80 mb-8">
          The page didn&apos;t load. You can try again, or call <PhoneLink className="btn-secondary" /> if it keeps happening.
        </p>
        <button type="button" onClick={reset} className="btn-primary">
          Try again
        </button>
      </div>
    </div>
  );
}
