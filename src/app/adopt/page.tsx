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
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <AdoptBrowser />
    </Suspense>
  );
}
