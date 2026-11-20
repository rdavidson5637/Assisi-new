import { Suspense } from 'react';
import type { Metadata } from 'next';
import AdoptBrowser from '@/components/AdoptBrowser';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Adopt a Pet',
  'Meet the dogs, cats, rabbits, guinea pigs and other small animals waiting for a home at Assisi Animal Sanctuary in Conlig, Northern Ireland.',
  '/adopt'
);

export default function AdoptPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-cream border-b border-line py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-3">Adopt a Pet</h1>
          <p className="text-lg text-ink/80">
            Dogs, cats, rabbits and guinea pigs waiting for a home.
          </p>
        </div>
      </section>
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-ink/70">
            Loading animals...
          </div>
        }
      >
        <AdoptBrowser />
      </Suspense>
    </div>
  );
}
