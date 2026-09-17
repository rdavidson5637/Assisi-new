import Link from 'next/link';
import Image from 'next/image';
import AnimalCard from '@/components/AnimalCard';
import HappyTailsSlideshow from '@/components/HappyTailsSlideshow';
import NewsletterSignup from '@/components/NewsletterSignup';
import SocialLinks from '@/components/SocialLinks';
import { animals } from '@/data/animals';
import { sanctuary, shops } from '@/data/shops';

const waysToHelp = [
  {
    href: '/donate',
    title: 'Donate',
    body: 'Every donation is a lifeline — food, vet care, warmth and a safe place to recover.',
    cta: 'Ways to donate',
  },
  {
    href: '/sponsor',
    title: 'Sponsorship',
    body: 'From 20p a day you help shelter, feed and treat animals until they find a home.',
    cta: 'Become a sponsor',
  },
  {
    href: '/volunteer',
    title: 'Volunteer',
    body: 'A few hours a week walking dogs, settling cats, or helping in a shop changes lives.',
    cta: 'Get involved',
  },
  {
    href: '/legacy',
    title: 'Legacy',
    body: 'A gift in your Will keeps Assisi here for the next animal who has nowhere else to turn.',
    cta: 'Leave a gift',
  },
  {
    href: '/membership',
    title: 'Membership',
    body: 'Join from £15 a year, get Paw Prints through the door, and have a say at our AGM.',
    cta: 'Join us',
  },
  {
    href: '/outreach',
    title: 'Outreach',
    body: 'We help families in hardship keep the pets they love, instead of giving them up.',
    cta: 'Find out more',
  },
];

export default function Home() {
  const featuredAnimals = animals.filter((a) => !a.reserved).slice(0, 4);
  const waiting = animals.filter((a) => !a.reserved).length;

  return (
    <div>
      <section className="relative min-h-[78vh] flex items-end overflow-hidden bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&h=1280&fit=crop"
          alt="Two dogs running through grass, the kind of second chance Assisi works for every day"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/65 to-gray-900/25" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="text-yellow-400 font-semibold tracking-wide uppercase text-sm mb-4">
            Help for the helpless · Northern Ireland · Est. 1997
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-6">
            Every animal deserves a second chance
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
            Assisi is a local, independent, no-kill sanctuary. We rescue, treat and rehome dogs,
            cats, rabbits and small animals — and we stay with them for as long as it takes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/adopt" className="btn-secondary text-center">
              Meet the animals
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center"
            >
              Donate today
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
            <div>
              <div className="text-3xl font-bold text-yellow-400">{waiting}</div>
              <div className="text-sm text-gray-300 mt-1">Animals looking for a home right now</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">No-kill</div>
              <div className="text-sm text-gray-300 mt-1">Every animal gets the time they need</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">1997</div>
              <div className="text-sm text-gray-300 mt-1">Independent charity, serving NI ever since</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">{shops.length} shops</div>
              <div className="text-sm text-gray-300 mt-1">Raising funds in Bangor, Holywood &amp; Newtownards</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Adopt a pet</h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                Every rescue has a story, and every adoption creates a happy ending. Meet dogs, cats,
                rabbits and guinea pigs waiting for a forever home.
              </p>
            </div>
            <Link href="/adopt" className="btn-outline whitespace-nowrap self-start">
              View all animals
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wide mb-2">
                Urgent appeal
              </p>
              <h2 className="text-2xl font-bold mb-2">Help us build a dedicated Cat Intake Unit</h2>
              <p className="text-gray-300">
                Incoming cats need a calm assessment and treatment space of their own. Your gift
                helps us isolate, treat and settle them properly before they join the rest of the sanctuary.
              </p>
            </div>
            <Link
              href="/donate"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap text-center"
            >
              Donate now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Happy Tails</h2>
            <p className="text-gray-600 text-lg">
              Every one of these animals waited for the right home to come along. Here&apos;s what
              happened after they found it.
            </p>
          </div>
          <HappyTailsSlideshow />
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Ways you can help</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Assisi receives no government funding. Everything we do is possible because people
              like you give time, money, or a home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waysToHelp.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-hover group bg-white rounded-2xl p-6 shadow-sm block"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.body}</p>
                <span className="text-gray-900 font-semibold group-hover:underline">
                  {item.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-100 p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our charity shops</h2>
            <p className="text-gray-600 mb-6">
              Three shops, every purchase and donated jumper going straight back to the animals.
              Pop in for a browse, drop off pre-loved goods, or volunteer a shift.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              {shops.map((shop) => (
                <li key={shop.id} className="font-medium">
                  {shop.name} · {shop.address}
                </li>
              ))}
            </ul>
            <Link href="/shops" className="btn-outline">
              Shop details &amp; hours
            </Link>
          </div>
          <div className="rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Amazon WishList</h2>
            <p className="text-gray-600 mb-6">
              Food, bedding, toys and bits we always need. If you&apos;d rather send something
              practical than a donation, the animals will notice.
            </p>
            <a
              href="https://www.amazon.co.uk/hz/wishlist/ls/example"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              View wishlist
            </a>
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Paw Prints magazine</h3>
              <p className="text-gray-600">
                The Autumn/Winter 2025 edition is in our shops now — pick up a copy, or ask us about
                a digital version.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Visit the sanctuary</h3>
              <p className="text-gray-800">
                {sanctuary.address}<br />
                {sanctuary.town}<br />
                {sanctuary.postcode}
              </p>
              <p className="text-gray-800 mt-3">
                {sanctuary.hours}<br />
                {sanctuary.sunday}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Get in touch</h3>
              <p className="text-gray-800">
                <a href={`mailto:${sanctuary.email}`} className="hover:underline">{sanctuary.email}</a>
                <br />
                <a href={`tel:${sanctuary.phone.replace(/\s/g, '')}`} className="hover:underline">
                  {sanctuary.phone}
                </a>
              </p>
              <Link href="/contact" className="inline-block mt-3 font-semibold text-gray-900 hover:underline">
                Send a message →
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Follow along</h3>
              <p className="text-gray-800 mb-4">
                Photos, urgent appeals and the animals who need a look this week.
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">News from the sanctuary</h2>
          <p className="text-gray-600 mb-6">
            Occasional updates — new arrivals, events, and when a long-stay animal finally goes home.
            No spam.
          </p>
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
