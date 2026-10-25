import type { Metadata } from 'next';
import Link from 'next/link';
import { readPaidSession } from '@/lib/stripe';

export const metadata: Metadata = {
  title: 'Thank you',
  robots: { index: false, follow: false },
};

export default async function DonateThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const paid = sessionId ? await readPaidSession(sessionId) : null;
  const pounds = paid ? paid.amountPounds.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) : null;

  return (
    <div className="min-h-[60vh] bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {paid && pounds ? (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">Thank you</h1>
            <p className="text-lg text-ink/80">
              Your {paid.monthly ? 'monthly ' : ''}gift of £{pounds}
              {paid.monthly ? ' a month' : ''} has been received.
              {paid.email ? ` A receipt will go to ${paid.email}.` : ''}
            </p>
            {paid.giftAid ? (
              <p className="text-ink/80 mt-4">
                You made a Gift Aid declaration with this payment. Assisi can claim the extra from
                HMRC using the name and address you entered.
              </p>
            ) : null}
          </>
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">We couldn&apos;t confirm a payment</h1>
            <p className="text-lg text-ink/80">
              If you finished paying and still see this, call the sanctuary and they can check it
              with you. If you closed the payment page, no money was taken.
            </p>
          </>
        )}
        <p className="mt-8">
          <Link href="/" className="btn-secondary">
            Back to the homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
