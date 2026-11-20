import type { Metadata } from 'next';
import Link from 'next/link';
import ChristmasEventsList from '@/components/ChristmasEventsList';
import { AddressLines, EmailLink, PhoneLink } from '@/components/ContactLinks';
import {
  christmasEvents,
  christmasFundraisingIdeas,
  christmasLinks,
  resolveChristmasHref,
} from '@/data/christmas';
import { mailtoHref, site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';
import { plainDashes } from '@/lib/text';

export const metadata: Metadata = pageMetadata(
  'Christmas Appeal & Events',
  'Support Assisi Animal Sanctuary this Christmas. Donate, give sponsorship or membership as a gift, visit our charity shops, fundraise for the animals, and check upcoming Christmas events.',
  '/christmas'
);

export default function ChristmasPage() {
  const appealLink = resolveChristmasHref(christmasLinks.appealUrl, '/donate');
  const giftShopLink = resolveChristmasHref(christmasLinks.giftShopUrl, '/shops');
  const fundraisingPackLink = resolveChristmasHref(
    christmasLinks.fundraisingPackUrl,
    '/contact'
  );
  const showWishlist = !site.wishlistUrl.toLowerCase().includes('example');

  const sponsorGiftMailto = mailtoHref(
    'Christmas Gift Sponsorship Enquiry',
    'Hello,\n\nI would like to arrange an Assisi sponsorship as a Christmas gift. Please let me know how to set this up.\n\nName:\nPhone:\n'
  );

  const membershipGiftMailto = mailtoHref(
    'Christmas Gift Membership Enquiry',
    'Hello,\n\nI would like to arrange an Assisi annual membership as a Christmas gift. Please let me know how to set this up.\n\nName:\nPhone:\n'
  );

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-cream border-b border-line py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-ink/80 mb-2">
            Christmas at Assisi
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-ink">
            Support the animals this Christmas
          </h1>
          <p className="text-lg md:text-xl text-ink/80 mt-3 max-w-3xl">
            Every winter gift helps pay for warm bedding, daily food and veterinary care for the
            dogs, cats, rabbits and guinea pigs waiting for a home at our sanctuary in Conlig.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
            {appealLink.isExternal ? (
              <a
                href={appealLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Give to our Christmas appeal
              </a>
            ) : (
              <Link href={appealLink.href} className="btn-primary">
                Give to our Christmas appeal
              </Link>
            )}
            <Link href="/contact" className="btn-secondary">
              Contact the sanctuary
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        <section aria-labelledby="christmas-appeal-heading">
          <h2 id="christmas-appeal-heading" className="text-2xl font-bold text-ink mb-4">
            Our Christmas appeal
          </h2>
          <div className="space-y-4 text-ink/80">
            <p>
              As an independent animal welfare charity, Assisi receives no government funding. Our
              team cares for rescued animals every single day of the year, including throughout the
              winter months and over Christmas.
            </p>
            <p>
              Whether you give a one-off donation, choose a gift for an animal lover, browse our
              charity shops or organise a festive fundraiser, your support goes straight towards
              shelter, food and veterinary treatment.
            </p>
          </div>
          {appealLink.isFallback ? (
            <p className="text-sm text-ink/70 mt-4">
              We cannot take card payments directly on this website yet. Visit our{' '}
              <Link href="/donate" className="link">
                donate page
              </Link>{' '}
              or <Link href="/contact" className="link">contact us</Link> to arrange a Christmas
              gift by phone or email.
            </p>
          ) : null}
        </section>

        <section aria-labelledby="ways-to-give-heading" className="pt-10 border-t border-line">
          <h2 id="ways-to-give-heading" className="text-2xl font-bold text-ink mb-3">
            Ways to give at Christmas
          </h2>
          <p className="text-ink/70 mb-6">
            Choose a gift that helps animals at the sanctuary and families in our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="panel p-6 flex flex-col">
              <h3 className="text-lg font-bold text-ink mb-2">Make a Christmas donation</h3>
              <p className="text-ink/70 mb-4 flex-1">
                Give a one-off or monthly gift towards warm shelter, food and veterinary treatment
                for the animals in our care.
              </p>
              <div>
                <Link href="/donate" className="btn-secondary">
                  Donate to Assisi →
                </Link>
              </div>
            </article>

            <article className="panel p-6 flex flex-col">
              <h3 className="text-lg font-bold text-ink mb-2">Sponsor an animal as a gift</h3>
              <p className="text-ink/70 mb-4 flex-1">
                From 20p a day, sponsorship helps provide food, warm bedding and medical care for
                unwanted and homeless animals. Ask our team about arranging sponsorship as a
                Christmas gift.
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <Link href="/sponsor" className="btn-secondary">
                  View sponsorship →
                </Link>
                <a href={sponsorGiftMailto} className="btn-secondary text-sm">
                  Email about gift sponsorship
                </a>
              </div>
            </article>

            <article className="panel p-6 flex flex-col">
              <h3 className="text-lg font-bold text-ink mb-2">Gift an annual membership</h3>
              <p className="text-ink/70 mb-4 flex-1">
                Annual membership (£15 a year) backs the sanctuary year-round and includes our Paw
                Prints magazine posted twice a year. Get in touch to arrange a membership for a
                friend or family member.
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <Link href="/membership" className="btn-secondary">
                  Membership details →
                </Link>
                <a href={membershipGiftMailto} className="btn-secondary text-sm">
                  Email about gift membership
                </a>
              </div>
            </article>

            <article className="panel p-6 flex flex-col">
              <h3 className="text-lg font-bold text-ink mb-2">Shop at our charity shops</h3>
              <p className="text-ink/70 mb-4 flex-1">
                Pick up pre-loved gifts, winter jumpers, books and homeware, or donate items you no
                longer need at our shops in Bangor, Holywood and Newtownards.
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <Link href="/shops" className="btn-secondary">
                  Find our shops and hours →
                </Link>
                {giftShopLink.isExternal ? (
                  <a
                    href={giftShopLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    Christmas gift shop →
                  </a>
                ) : null}
              </div>
            </article>

            <article className="panel p-6 flex flex-col">
              <h3 className="text-lg font-bold text-ink mb-2">Gift ideas for the animals</h3>
              <p className="text-ink/70 mb-4 flex-1">
                Send toys, treats and practical supplies directly to the sanctuary from our Amazon
                WishList, or pick up a copy of our {site.magazine.title} magazine in our shops or
                online.
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {showWishlist ? (
                  <a
                    href={site.wishlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    View Amazon WishList →
                  </a>
                ) : null}
                <a
                  href={site.magazine.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  Read {site.magazine.title} →
                </a>
              </div>
            </article>

            <article className="panel p-6 flex flex-col">
              <h3 className="text-lg font-bold text-ink mb-2">Help local families this winter</h3>
              <p className="text-ink/70 mb-4 flex-1">
                Our Outreach Scheme provides emergency pet food and practical support so local
                families facing hardship can keep their pets at home.
              </p>
              <div>
                <Link href="/outreach" className="btn-secondary">
                  About our Outreach Scheme →
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section aria-labelledby="christmas-events-heading" className="pt-10 border-t border-line">
          <h2 id="christmas-events-heading" className="text-2xl font-bold text-ink mb-3">
            Christmas events
          </h2>
          <p className="text-ink/70 mb-6">
            {christmasEvents.length > 0
              ? 'Join us at upcoming festive events and collections across Northern Ireland.'
              : 'Festive events and collections will be listed here once they are confirmed.'}
          </p>
          <ChristmasEventsList events={christmasEvents} />
        </section>

        <section aria-labelledby="fundraise-heading" className="pt-10 border-t border-line">
          <h2 id="fundraise-heading" className="text-2xl font-bold text-ink mb-3">
            Fundraise for us this Christmas
          </h2>
          <p className="text-ink/70 mb-6">
            Community fundraising keeps the sanctuary running through the winter. Here are a few
            simple ways you, your workplace or your community group can raise funds for Assisi.
          </p>

          <ul className="divide-y divide-line border-y border-line mb-8">
            {christmasFundraisingIdeas.map((idea) => (
              <li
                key={idea.title}
                className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-2 md:gap-6 py-5"
              >
                <h3 className="text-base font-bold text-ink">{idea.title}</h3>
                <p className="text-ink/80">{idea.description}</p>
              </li>
            ))}
          </ul>

          <div className="panel p-6">
            <h3 className="text-lg font-bold text-ink mb-2">Planning a festive fundraiser?</h3>
            <p className="text-ink/80 mb-4">
              Tell us what you have in mind and we can share collection tins, guidance and
              fundraising materials. Contact our Fundraising Manager, {site.fundraising.name}, by
              email at{' '}
              <a href={site.fundraising.emailHref} className="link">
                {site.fundraising.email}
              </a>{' '}
              or by phone/text on{' '}
              <a href={site.fundraising.phoneHref} className="link">
                {site.fundraising.phoneDisplay}
              </a>
              .
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {fundraisingPackLink.isExternal ? (
                <a
                  href={fundraisingPackLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get fundraising materials
                </a>
              ) : (
                <Link href={fundraisingPackLink.href} className="btn-primary">
                  Contact us to fundraise
                </Link>
              )}
              <Link href="/volunteer" className="btn-secondary">
                Volunteer at fundraising events (18+) →
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="christmas-contact-heading" className="pt-10 border-t border-line">
          <div className="panel p-6">
            <h2 id="christmas-contact-heading" className="text-xl font-bold text-ink mb-3">
              Visiting or getting in touch over Christmas
            </h2>
            <p className="text-ink/80 mb-4">
              Usual sanctuary hours are{' '}
              {site.openingHours.map((line, index) => (
                <span key={line}>
                  {index > 0 ? '; ' : null}
                  {plainDashes(line)}
                </span>
              ))}
              . Please check with us before travelling over the festive period, as Christmas opening
              hours will be confirmed closer to the time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-ink/80">
              <div>
                <h3 className="font-bold text-ink mb-1">Sanctuary address</h3>
                <AddressLines />
              </div>
              <div>
                <h3 className="font-bold text-ink mb-1">Phone and email</h3>
                <p>
                  <PhoneLink className="link" />
                </p>
                <p className="mt-1">
                  <EmailLink className="link" />
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
