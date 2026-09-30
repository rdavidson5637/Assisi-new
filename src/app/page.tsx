import Link from 'next/link';
import Image from 'next/image';
import AnimalCard from '@/components/AnimalCard';
import { animals } from '@/data/animals';
import { site } from '@/data/site';

const waysToHelp = [
  {
    title: 'Donate',
    text: 'One-off and monthly gifts for food, housing and veterinary care.',
    href: '/donate',
    link: 'Donate',
  },
  {
    title: 'Sponsorship',
    text: 'From 20p a day for shelter, food and medical care.',
    href: '/sponsor',
    link: 'Become a sponsor',
  },
  {
    title: 'Volunteer',
    text: '3-4 hours a week at the sanctuary or in the shops.',
    href: '/volunteer',
    link: 'Volunteer',
  },
  {
    title: 'Legacy',
    text: 'Leave a gift in your will.',
    href: '/legacy',
    link: 'Leave a gift',
  },
  {
    title: 'Membership',
    text: 'Annual membership helps with food, veterinary treatment and treats.',
    href: '/membership',
    link: 'Become a member',
  },
  {
    title: 'Outreach',
    text: 'Pet food for local people who are struggling to provide it.',
    href: '/outreach',
    link: 'Outreach scheme',
  },
] as const;

const shops = [
  { name: 'Bangor', address: '59 Main Street, Bangor, BT20 5AF' },
  { name: 'Holywood', address: '60 High Street, Holywood, BT18 9AE' },
  { name: 'Newtownards', address: '63 High Street, Newtownards, BT23 7HS' },
] as const;

const shopHoursUrl = 'https://www.assisi-ni.org/our-shops/';

export default function Home() {
  const featuredAnimals = animals.filter((animal) => !animal.reserved).slice(0, 4);

  return (
    <div>
      <section className="relative isolate overflow-hidden bg-ink text-cream min-h-[32rem]">
        <Image
          src="/images/animals/wee-max.jpg"
          alt="Wee Max, a collie at Assisi Animal Sanctuary, lying in the grass"
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-8">
              Every animal deserves a second chance
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/adopt" className="btn-primary">
                Adopt a pet
              </Link>
              <Link href="/donate" className="btn-secondary text-cream">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Help us build a dedicated Cat Intake Unit.
          </h2>
          <Link
            href="/donate"
            className="btn-primary"
            style={{ background: 'var(--ink)', color: 'var(--cream)' }}
          >
            Donate
          </Link>
        </div>
      </section>

      {/* restore only with real, consented stories from Assisi */}

      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">Adopt a pet</h2>
            <p className="text-ink/70 text-lg">
              Dogs, cats, rabbits and guinea pigs waiting for a home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} large />
            ))}
          </div>

          <div className="mt-8">
            <Link href="/adopt" className="btn-secondary">
              View all animals
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">Ways you can help</h2>
          <ul className="divide-y divide-line border-t border-line">
            {waysToHelp.map((way) => (
              <li key={way.href} className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
                <h3 className="text-lg font-bold text-ink">{way.title}</h3>
                <div>
                  <p className="text-ink/80">{way.text}</p>
                  <p>
                    <Link href={way.href} className="btn-secondary">
                      {way.link}
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 bg-cream border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">Shops</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shops.map((shop) => (
              <li key={shop.name}>
                <h3 className="font-bold text-ink">{shop.name}</h3>
                <p className="text-ink/80 text-sm mt-1">{shop.address}</p>
                <p className="mt-1">
                  <a
                    href={shopHoursUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    Hours
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10 bg-cream border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-ink mb-2">Amazon WishList</h2>
              <p className="text-ink/70">
                We always look forward to our Amazon deliveries. Many supporters buy things from the
                list that they know the animals will like.
              </p>
            </div>
            <a
              href={site.wishlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap"
            >
              View wishlist
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-8">
            <a
              href={site.magazine.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block shrink-0 mb-6 md:mb-0"
            >
              <Image
                src={site.magazine.cover}
                alt={`${site.magazine.title}, ${site.magazine.edition}`}
                width={180}
                height={254}
                className="rounded-[12px] border border-line"
                style={{ width: '9rem', height: 'auto' }}
              />
            </a>
            <div>
              <h2 className="text-xl font-bold text-ink mb-2">Assisi Magazine</h2>
              <p className="text-ink/70 mb-4">
                The latest ({site.magazine.edition}) edition of our {site.magazine.title} magazine is now available.
                Call into your local Assisi shop to pick one up, or read the digital copy online.
              </p>
              <a
                href={site.magazine.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Read the digital edition →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
