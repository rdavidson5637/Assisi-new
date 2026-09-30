import Link from 'next/link';
import { EmailLink, PhoneLink } from '@/components/ContactLinks';

export default function LegacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-cream border-b border-line py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ink">Leave a Legacy</h1>
          <p className="text-xl text-ink/80 mt-2">A gift that lasts long after you&apos;re gone</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-8">
          <p>
            A gift left in your Will is a great way to ensure that your love of animals and interest
            in their well-being is continued into the future. Legacy gifts, of any size, make a real
            and lasting difference — helping us be there for the next animal in need, long after
            today.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <div className="border-b border-line pb-8">
            <h2 className="text-xl font-bold text-ink mb-3">Types of Gift</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="panel p-4">
                <h3 className="font-semibold text-ink mb-1">Residuary Gift</h3>
                <p className="text-sm text-ink/70">
                  A share, or all, of what&apos;s left of your estate after other gifts and expenses
                  have been paid.
                </p>
              </div>
              <div className="panel p-4">
                <h3 className="font-semibold text-ink mb-1">Pecuniary Gift</h3>
                <p className="text-sm text-ink/70">
                  A fixed sum of money, which can be updated over time to keep pace with inflation.
                </p>
              </div>
              <div className="panel p-4">
                <h3 className="font-semibold text-ink mb-1">Specific Gift</h3>
                <p className="text-sm text-ink/70">
                  A particular item, such as property, shares, or other assets of value.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-line pb-8">
            <h2 className="text-xl font-bold text-ink mb-3">Why It Matters</h2>
            <p className="text-ink/70">
              As an independent charity, Assisi receives no government funding — we rely entirely on
              the generosity of our community. Legacy gifts help fund the day-to-day running of the
              Sanctuary as well as bigger projects, like our current appeal to build a dedicated Cat
              Intake Unit, ensuring animals in Northern Ireland have somewhere to turn for years to
              come.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-3">How to Get Started</h2>
            <p className="text-ink/70">
              We&apos;d always recommend speaking with a solicitor when writing or updating your Will.
              If you&apos;re considering leaving a gift to Assisi, or have already included us, we&apos;d
              love to hear from you so we can say thank you — get in touch with our team in complete
              confidence.
            </p>
          </div>
        </div>

        <div className="panel p-6 text-center">
          <h2 className="text-xl font-bold text-ink mb-3">Talk to Us in Confidence</h2>
          <p className="text-ink/70 mb-4">
            Contact us at{' '}
            <EmailLink className="underline" />
            {' '}or call{' '}
            <PhoneLink className="underline" /> to discuss leaving a
            legacy gift.
          </p>
          <Link href="/about" className="btn-secondary">
            Learn More About Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
