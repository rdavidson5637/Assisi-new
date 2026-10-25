import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { pageMetadata } from '@/lib/metadata';
import { shops } from '@/data/shops';

export const metadata: Metadata = pageMetadata(
  'Our Shops',
  'Assisi charity shops in Bangor, Holywood and Newtownards raise vital funds for animals in our care. Opening hours, donations and how to volunteer.'
);

export default function ShopsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        title="Our charity shops"
        subtitle="Every purchase and every donated jumper goes back to the animals. Three shops, full of furniture, clothes, books and homeware, and always glad of another pair of hands."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {shops.map((shop) => (
            <article key={shop.id} className="panel p-6 flex flex-col">
              <h2 className="text-xl font-bold text-ink mb-3">{shop.name}</h2>
              <p className="text-ink/70">
                {shop.address}<br />
                {shop.postcode}
              </p>
              <p className="mt-4">
                <a
                  href={`tel:${shop.phone.replace(/\s/g, '')}`}
                  className="btn-secondary"
                >
                  {shop.phone}
                </a>
              </p>
              <div className="mt-4 text-sm text-ink/70 space-y-3 flex-1">
                <p>
                  <span className="font-medium text-ink">Open:</span> {shop.hours}
                </p>
                <p>
                  <span className="font-medium text-ink">Donations:</span> {shop.donations}
                </p>
                {shop.notes ? <p>{shop.notes}</p> : null}
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${shop.address} ${shop.postcode}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6"
              >
                Get directions →
              </a>
            </article>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="panel p-6">
            <h2 className="text-xl font-bold text-ink mb-3">Donate goods</h2>
            <p className="text-ink/70 mb-4">
              Pre-loved clothes and furniture raise real money for vet bills and feed. For larger
              items, phone the shop and they&apos;ll help arrange collection.
            </p>
            <p className="text-sm text-ink/60">
              Gift Aid on donated goods adds extra 25p in every £1 from the sale if you&apos;re a UK
              taxpayer. Ask in store how to sign up.
            </p>
          </div>
          <div className="panel p-6">
            <h2 className="text-xl font-bold text-ink mb-3">Volunteer in a shop</h2>
            <p className="text-ink/70 mb-4">
              Volunteers 16+ are welcome on the shop floor. It&apos;s retail experience, a friendly
              team, and a direct line to keeping the sanctuary running.
            </p>
            <Link href="/volunteer" className="btn-secondary inline-block">
              Volunteer with us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
