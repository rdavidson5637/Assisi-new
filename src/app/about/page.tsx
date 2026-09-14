import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'About us',
  'Assisi Animal Sanctuary is a no-kill, independent animal welfare charity in Northern Ireland, founded in 1997. Shelter, vet care, and a home for life if needed.'
);

const rights = [
  'A suitable, comfortable and happy environment',
  'A suitable diet, exercise and socialisation',
  'The chance to show normal behaviour',
  'To be housed with, or apart from, other animals as they need',
  'Protection from pain, suffering and disease',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="About Assisi"
        subtitle="A local, independent sanctuary. No-kill. No government funding. Every animal gets the time they need."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-2xl font-bold text-gray-900">1997</div>
            <p className="text-sm text-gray-600 mt-1">Founded as a local charity for companion animals in Northern Ireland.</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-6">
            <div className="text-2xl font-bold text-gray-900">No-kill</div>
            <p className="text-sm text-gray-600 mt-1">If we cannot find a home, we keep providing sanctuary for life.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-2xl font-bold text-gray-900">NIC100079</div>
            <p className="text-sm text-gray-600 mt-1">Registered charity. Independent. Accountable to our community.</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            We provide shelter, care, food, veterinary treatment, safety and companionship — and we
            work to find a loving home for every animal that comes through our gates.
          </p>
          <p>
            For every animal rescued we arrange neutering, vaccinations, worming, flea treatment,
            and microchipping for dogs and cats. Age and health are not a reason to give up on them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our vision</h2>
            <p className="text-gray-600">
              A Northern Ireland where every companion animal has a happy home for life — and Assisi
              is here to help make that ordinary, not exceptional.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our mission</h2>
            <p className="text-gray-600">
              Keep animals in their homes wherever we can, with advice and outreach. Rescue and
              rehome those who need us, with trained staff and volunteers. Educate, and reduce the
              destruction of companion animals in Northern Ireland.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What every animal has a right to</h2>
        <ol className="space-y-3">
          {rights.map((right, index) => (
            <li key={right} className="flex gap-3 text-gray-700">
              <span className="font-bold text-yellow-600">{index + 1}.</span>
              {right}
            </li>
          ))}
        </ol>
        <p className="text-gray-600 mt-6">
          For most animals those freedoms are best met in a loving home. Some have chronic medical
          needs; we place them in foster homes where we can, with vet care behind them. If a home
          never comes, they stay with us.
        </p>

        <div className="mt-12 bg-gray-900 text-white rounded-2xl p-8 md:flex md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Stand with them</h2>
            <p className="text-gray-300 max-w-xl">
              Meals, treatment, warmth, rehabilitation. Whatever you can give helps an animal on
              the way to a better life.
            </p>
          </div>
          <Link href="/donate" className="btn-secondary mt-6 md:mt-0 inline-block whitespace-nowrap">
            Donate now
          </Link>
        </div>
      </div>
    </div>
  );
}
