import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimalCard from '@/components/AnimalCard';
import { animals } from '@/data/animals';
import { shops } from '@/data/shops';
import { site } from '@/data/site';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const waysToHelp = [
  {
    title: 'Christmas appeal',
    text: 'Festive gifts, charity shops, fundraising ideas and upcoming Christmas events.',
    href: '/christmas',
    link: 'Christmas at Assisi',
  },
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

// Type scale for this page (DESIGN-PRO). Shared tokens belong in globals.css, which draft PR #2 owns,
// so the steps live here for now: display 40-72px fluid, section 36px, lead 20-22px.
const display = 'font-heading text-[clamp(2.5rem,1.6rem+3.6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-balance';
const sectionHeading = 'text-[2rem] md:text-[2.25rem] leading-[1.1] tracking-[-0.015em] text-balance';
const lead = 'text-[1.25rem] md:text-[1.375rem] leading-[1.5] text-pretty';
const eyebrow = 'text-sm font-bold uppercase tracking-[0.08em]';
const textLink = 'inline-flex! min-h-11 items-center btn-secondary';

export default function Home() {
  const featuredAnimals = animals.filter((animal) => !animal.reserved).slice(0, 4);

  return (
    <div>
      <section className="bg-ink text-cream [&_:focus-visible]:outline-cream!">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 lg:items-stretch">
          <div className="px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:col-span-6 lg:self-center lg:py-24">
            <p className={`${eyebrow} text-cream/80 mb-6`}>{site.name}</p>
            <h1 className={`${display} mb-10`}>Every animal deserves a second chance</h1>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link href="/adopt" className="btn-primary min-h-11">
                Adopt a pet
              </Link>
              <Link href="/donate" className={`${textLink} text-cream`}>
                Donate
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:col-span-6 lg:aspect-auto lg:min-h-[36rem]">
            <Image
              src="/images/animals/wee-max.jpg"
              alt="Wee Max, a collie at Assisi Animal Sanctuary, lying in the grass"
              fill
              priority
              sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_30%]"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream text-ink border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="relative aspect-[16/9] overflow-hidden lg:col-span-7">
            {/* TODO(Ryan): confirm this photo (public/images/cat-unit.jpg) is the right one for the Cat Intake Unit appeal. */}
            <Image
              src="/images/cat-unit.jpg"
              alt="A row of empty outdoor pens with mesh fronts behind metal railings."
              fill
              sizes="(min-width: 1280px) 700px, (min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5">
            <h2 className={`${sectionHeading} mb-8`}>Help us build a dedicated Cat Intake Unit.</h2>
            <Link href="/donate" className="btn-primary min-h-11">
              Donate
            </Link>
          </div>
        </div>
      </section>

      {/* restore only with real, consented stories from Assisi */}

      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-4 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h2 className={`${sectionHeading} text-ink mb-3`}>Adopt a pet</h2>
              <p className={`${lead} text-ink/80`}>Dogs, cats, rabbits and guinea pigs waiting for a home.</p>
            </div>
            <p className="md:col-span-4 md:text-right">
              <Link href="/adopt" className={textLink}>
                View all animals
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} large />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-ink text-cream [&_:focus-visible]:outline-cream!">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <h2 className={`${sectionHeading} lg:col-span-4`}>Ways you can help</h2>
          <ol className="lg:col-span-8 border-t border-cream/30">
            {waysToHelp.map((way, index) => (
              <li key={way.href} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-cream/30 py-6 md:grid-cols-[3rem_14rem_1fr]">
                <span aria-hidden className="font-heading text-xl leading-7 text-cream/70 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold">{way.title}</h3>
                <div className="col-start-2 md:col-start-3">
                  <p className="text-cream/85">{way.text}</p>
                  <p>
                    <Link href={way.href} className={`${textLink} text-cream`}>
                      {way.link}
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <h2 className={`${sectionHeading} text-ink lg:col-span-4`}>Shops</h2>
          <ul className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 border-t-2 border-ink">
            {shops.map((shop) => (
              <li key={shop.id} className="border-b border-line py-5 md:border-b-0 md:pr-6">
                <h3 className="text-lg font-bold text-ink">{shop.name}</h3>
                <p className="text-ink/80 mt-1">
                  {shop.address}, {shop.postcode}
                </p>
                <p className="mt-1">
                  <Link href={`/shops#${shop.id}`} className={textLink}>
                    Hours
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12">
          <div className="py-14 md:py-16 lg:col-span-7 lg:pr-12 lg:border-r lg:border-line">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <a
                href={site.magazine.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block shrink-0"
              >
                <Image
                  src={site.magazine.cover}
                  alt={`${site.magazine.title}, ${site.magazine.edition}`}
                  width={180}
                  height={254}
                  className="border border-line"
                  style={{ width: '11rem', height: 'auto' }}
                />
              </a>
              <div>
                <h2 className={`${sectionHeading} text-ink mb-4`}>Assisi Magazine</h2>
                <p className="text-ink/80 mb-4 text-pretty">
                  The latest ({site.magazine.edition}) edition of our {site.magazine.title} magazine is now available.
                  Call into your local Assisi shop to pick one up, or read the digital copy online.
                </p>
                <a
                  href={site.magazine.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLink}
                >
                  Read the digital edition →
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-line py-14 md:py-16 lg:col-span-5 lg:border-t-0 lg:pl-12">
            <h2 className={`${sectionHeading} text-ink mb-4`}>Amazon WishList</h2>
            <p className="text-ink/80 mb-6 text-pretty">
              We always look forward to our Amazon deliveries. Many supporters buy things from the
              list that they know the animals will like.
            </p>
            <a
              href={site.wishlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={textLink}
            >
              View wishlist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
