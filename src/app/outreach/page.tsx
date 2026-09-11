import Link from 'next/link';

export default function OutreachPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-yellow-400 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Outreach Scheme</h1>
          <p className="text-xl text-gray-800 mt-2">Keeping pets and families together</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-8">
          <p>
            Our Outreach Scheme supports individuals and families within our community who struggle to
            make ends meet and provide food for themselves, their families and pets. We believe that,
            wherever possible, animals are best off staying with the family who loves them — so we step
            in with practical support rather than removing a pet from a good home over hardship alone.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <div className="border-b pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">How We Help</h2>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li>Emergency pet food parcels for families facing financial hardship</li>
              <li>Support accessing low-cost or subsidised veterinary treatment</li>
              <li>Advice on neutering, microchipping, and responsible pet ownership</li>
              <li>Short-term guidance for owners struggling with a specific behavioural issue</li>
              <li>A listening ear and signposting to other local support services where needed</li>
            </ul>
          </div>

          <div className="border-b pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Who It&apos;s For</h2>
            <p className="text-gray-600">
              If you&apos;re struggling to afford food or basic care for your pet and are worried you
              might have to give them up, please reach out. Our Outreach team will listen without
              judgement and work with you to find a way to keep your family — pets included — together
              wherever we possibly can.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Support Our Outreach Work</h2>
            <p className="text-gray-600">
              Outreach is funded entirely by donations. Every contribution helps us say yes to another
              family in need, and keep another pet out of the shelter system and in a loving home.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Need Help, or Want to Help?</h2>
          <p className="text-gray-600 mb-4">
            Contact our Outreach team at{' '}
            <a href="mailto:info@assisi-ni.org" className="underline">info@assisi-ni.org</a>
            {' '}or call{' '}
            <a href="tel:02891812622" className="underline">028 9181 2622</a>. All enquiries are
            handled sensitively and in confidence.
          </p>
          <Link href="/donate" className="btn-outline">
            Support Outreach
          </Link>
        </div>
      </div>
    </div>
  );
}
