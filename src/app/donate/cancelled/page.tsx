import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payment cancelled',
  robots: { index: false, follow: false },
};

export default function DonateCancelledPage() {
  return (
    <div className="min-h-[60vh] bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">No payment was taken</h1>
        <p className="text-lg text-ink/80">
          You left the card page before it finished. You can try again, or give by phone or email.
        </p>
        <p className="mt-8">
          <Link href="/donate" className="btn-primary">
            Return to donate
          </Link>
        </p>
      </div>
    </div>
  );
}
