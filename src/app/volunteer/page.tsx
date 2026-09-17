import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import VolunteerForm from '@/components/VolunteerForm';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Volunteer',
  'Volunteer at Assisi Animal Sanctuary — walk dogs, settle cats, help in our shops, foster, fundraise or join a corporate team. 16+ for shops, 18+ for animals.'
);

const roles: {
  id: string;
  title: string;
  body: string;
  extra?: ReactNode;
}[] = [
  {
    id: 'sanctuary',
    title: 'At the sanctuary',
    body: 'Walk dogs, clean kennels, spend time with cats, or feed small animals. Prefer indoors? Reception, meet-and-greet and admin always need people. Handy? Help keep the site in good nick.',
  },
  {
    id: 'drivers',
    title: 'Transport drivers',
    body: 'Drive animals to the vet, or support the rehoming team on the road. Driving volunteers must be 21+; conditions apply.',
  },
  {
    id: 'shops',
    title: 'In our shops',
    body: 'Bangor, Holywood and Newtownards need people to serve customers, sort stock and make deliveries. A few hours a week in a shop is a huge contribution to the animals.',
  },
  {
    id: 'foster',
    title: 'Fostering',
    body: 'Can’t commit to a weekly shift? Foster a golden oldie, a mum with babies, or an animal recovering from surgery. We cover vet care; you give them a home while they wait.',
  },
  {
    id: 'fundraising',
    title: 'Fundraising & events',
    body: 'Street collections, bag packs, sponsored walks, collection cans and support groups. Money raised goes straight to food, vet bills and care.',
    extra: (
      <p className="text-gray-600 mt-3">
        Contact Fundraising Manager Grace at{' '}
        <a href="mailto:grace@assisi-ni.org" className="underline">grace@assisi-ni.org</a>
        {' '}or 07598 050096.
      </p>
    ),
  },
  {
    id: 'corporate',
    title: 'Corporate teams',
    body: 'Nominate Assisi as your charity of the year, or bring a staff team to the sanctuary. We’ll provide the support and materials you need.',
  },
  {
    id: 'placement',
    title: 'Placement / work experience',
    body: 'Studying for a career with animals? Apply for a placement and get real experience in animal welfare.',
  },
];

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Become a volunteer"
        subtitle="A few hours a week. New people, useful skills, and a genuine difference to animals who need you."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mb-10 text-gray-700 space-y-4">
          <p>
            Without volunteers we could not do this work. There is something to suit most people —
            with animals, in a shop, behind a desk, or from home as a fosterer.
          </p>
          <p className="text-sm text-gray-500">
            Volunteers and placements must be 18+ to help with animals, in reception or at
            fundraising events. Shop volunteers must be 16+.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {roles.map((role) => (
              <article key={role.id} id={role.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h2>
                <p className="text-gray-600 text-sm">{role.body}</p>
                {role.extra}
              </article>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Tell us you’d like to help</h2>
            <p className="text-gray-600 text-sm mb-4">
              We can’t always offer your first-choice day. We’ll be honest about what’s free and
              find a fit.
            </p>
            <VolunteerForm />
            <p className="text-sm text-gray-500 mt-4">
              Or email{' '}
              <a href="mailto:info@assisi-ni.org" className="underline">info@assisi-ni.org</a>
              {' '}or call{' '}
              <a href="tel:02891812622" className="underline">028 9181 2622</a>.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 rounded-2xl p-6 md:flex md:items-center md:justify-between gap-4">
          <p className="text-gray-800 font-medium">
            Prefer to help from home, or give financially instead?
          </p>
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <Link href="/donate" className="btn-outline">
              Donate
            </Link>
            <Link href="/sponsor" className="btn-secondary">
              Sponsor monthly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
