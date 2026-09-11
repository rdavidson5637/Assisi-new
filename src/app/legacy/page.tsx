import Link from 'next/link';

export default function LegacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-yellow-400 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Leave a Legacy</h1>
          <p className="text-xl text-gray-800 mt-2">A gift that lasts long after you&apos;re gone</p>
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
          <div className="border-b pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Types of Gift</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Residuary Gift</h3>
                <p className="text-sm text-gray-600">
                  A share, or all, of what&apos;s left of your estate after other gifts and expenses
                  have been paid.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Pecuniary Gift</h3>
                <p className="text-sm text-gray-600">
                  A fixed sum of money, which can be updated over time to keep pace with inflation.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Specific Gift</h3>
                <p className="text-sm text-gray-600">
                  A particular item, such as property, shares, or other assets of value.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Why It Matters</h2>
            <p className="text-gray-600">
              As an independent charity, Assisi receives no government funding — we rely entirely on
              the generosity of our community. Legacy gifts help fund the day-to-day running of the
              Sanctuary as well as bigger projects, like our current appeal to build a dedicated Cat
              Intake Unit, ensuring animals in Northern Ireland have somewhere to turn for years to
              come.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How to Get Started</h2>
            <p className="text-gray-600">
              We&apos;d always recommend speaking with a solicitor when writing or updating your Will.
              If you&apos;re considering leaving a gift to Assisi, or have already included us, we&apos;d
              love to hear from you so we can say thank you — get in touch with our team in complete
              confidence.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Talk to Us in Confidence</h2>
          <p className="text-gray-600 mb-4">
            Contact us at{' '}
            <a href="mailto:info@assisi-ni.org" className="underline">info@assisi-ni.org</a>
            {' '}or call{' '}
            <a href="tel:02891812622" className="underline">028 9181 2622</a> to discuss leaving a
            legacy gift.
          </p>
          <Link href="/about" className="btn-outline">
            Learn More About Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
