import type { Metadata } from "next";
import Link from "next/link";
import ChristmasEventsList from "@/components/ChristmasEventsList";
import { AddressLines, EmailLink, PhoneLink } from "@/components/ContactLinks";
import EdSection from "@/components/editorial/EdSection";
import InnerHero from "@/components/editorial/InnerHero";
import {
  christmasEvents,
  christmasFundraisingIdeas,
  christmasLinks,
  resolveChristmasHref,
} from "@/data/christmas";
import { mailtoHref, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { plainDashes } from "@/lib/text";
import "@/styles/remaining-mobile.css";

export const metadata: Metadata = pageMetadata(
  "Christmas Appeal & Events",
  "Support Assisi Animal Sanctuary this Christmas. Donate, give sponsorship or membership as a gift, visit our charity shops, fundraise for the animals, and check upcoming Christmas events.",
  "/christmas",
);

const tap = "as-rm-tap btn-secondary";
const tapPrimary = "as-rm-tap-block btn-primary";

export default function ChristmasPage() {
  const appealLink = resolveChristmasHref(christmasLinks.appealUrl, "/donate");
  const giftShopLink = resolveChristmasHref(christmasLinks.giftShopUrl, "/shops");
  const fundraisingPackLink = resolveChristmasHref(
    christmasLinks.fundraisingPackUrl,
    "/contact",
  );
  const showWishlist = !site.wishlistUrl.toLowerCase().includes("example");

  const sponsorGiftMailto = mailtoHref(
    "Christmas Gift Sponsorship Enquiry",
    "Hello,\n\nI would like to arrange an Assisi sponsorship as a Christmas gift. Please let me know how to set this up.\n\nName:\nPhone:\n",
  );

  const membershipGiftMailto = mailtoHref(
    "Christmas Gift Membership Enquiry",
    "Hello,\n\nI would like to arrange an Assisi annual membership as a Christmas gift. Please let me know how to set this up.\n\nName:\nPhone:\n",
  );

  const ways = [
    {
      title: "Make a Christmas donation",
      body: "Give a one-off or monthly gift towards warm shelter, food and veterinary treatment for the animals in our care.",
      actions: (
        <Link href="/donate" className={tap}>
          Donate to Assisi
        </Link>
      ),
    },
    {
      title: "Sponsor an animal as a gift",
      body: "From 20p a day, sponsorship helps provide food, warm bedding and medical care for unwanted and homeless animals. Ask our team about arranging sponsorship as a Christmas gift.",
      actions: (
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <Link href="/sponsor" className={tap}>
            View sponsorship
          </Link>
          <a href={sponsorGiftMailto} className={tap}>
            Email about gift sponsorship
          </a>
        </div>
      ),
    },
    {
      title: "Gift an annual membership",
      body: "Annual membership (£15 a year) backs the sanctuary year-round and includes our Paw Prints magazine posted twice a year. Get in touch to arrange a membership for a friend or family member.",
      actions: (
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <Link href="/membership" className={tap}>
            Membership details
          </Link>
          <a href={membershipGiftMailto} className={tap}>
            Email about gift membership
          </a>
        </div>
      ),
    },
    {
      title: "Shop at our charity shops",
      body: "Pick up pre-loved gifts, winter jumpers, books and homeware, or donate items you no longer need at our shops in Bangor, Holywood and Newtownards.",
      actions: (
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <Link href="/shops" className={tap}>
            Find our shops and hours
          </Link>
          {giftShopLink.isExternal ? (
            <a
              href={giftShopLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className={tap}
            >
              Christmas gift shop
            </a>
          ) : null}
        </div>
      ),
    },
    {
      title: "Gift ideas for the animals",
      body: `Send toys, treats and practical supplies directly to the sanctuary from our Amazon WishList, or pick up a copy of our ${site.magazine.title} magazine in our shops or online.`,
      actions: (
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {showWishlist ? (
            <a
              href={site.wishlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={tap}
            >
              View Amazon WishList
            </a>
          ) : null}
          <a
            href={site.magazine.url}
            target="_blank"
            rel="noopener noreferrer"
            className={tap}
          >
            Read {site.magazine.title}
          </a>
        </div>
      ),
    },
    {
      title: "Help local families this winter",
      body: "Our Outreach Scheme provides emergency pet food and practical support so local families facing hardship can keep their pets at home.",
      actions: (
        <Link href="/outreach" className={tap}>
          About our Outreach Scheme
        </Link>
      ),
    },
  ] as const;

  return (
    <div className="as-rm bg-cream">
      <InnerHero
        title="Support the animals this Christmas"
        subtitle="Every winter gift helps pay for warm bedding, daily food and veterinary care for the dogs, cats, rabbits and guinea pigs waiting for a home at our sanctuary in Conlig."
        photo={{
          src: "/images/animals/biscuit.jpg",
          alt: "Biscuit, a dog at Assisi Animal Sanctuary",
        }}
        focus="50% 30%"
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="as-rm-cta-row flex flex-wrap items-center gap-x-6 gap-y-3">
          {appealLink.isExternal ? (
            <a
              href={appealLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className={tapPrimary}
            >
              Give to our Christmas appeal
            </a>
          ) : (
            <Link href={appealLink.href} className={tapPrimary}>
              Give to our Christmas appeal
            </Link>
          )}
          <Link href="/contact" className={tap}>
            Contact the sanctuary
          </Link>
        </div>
      </div>

      <EdSection id="christmas-appeal" title="Our Christmas appeal">
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
          {appealLink.isFallback ? (
            <p className="text-sm text-ink/70">
              We cannot take card payments directly on this website yet. Visit our{" "}
              <Link href="/donate" className="link">
                donate page
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="link">
                contact us
              </Link>{" "}
              to arrange a Christmas gift by phone or email.
            </p>
          ) : null}
        </div>
      </EdSection>

      <EdSection
        id="ways-to-give"
        title="Ways to give at Christmas"
        intro="Choose a gift that helps animals at the sanctuary and families in our community."
        layout="stack"
      >
        <div>
          {ways.map((way) => (
            <article key={way.title} className="as-rm-row">
              <h3 className="as-rm-row-title">{way.title}</h3>
              <p className="as-rm-row-body">{way.body}</p>
              <div className="as-rm-row-action">{way.actions}</div>
            </article>
          ))}
        </div>
      </EdSection>

      <EdSection
        id="christmas-events"
        title="Christmas events"
        intro={
          christmasEvents.length > 0
            ? "Join us at upcoming festive events and collections across Northern Ireland."
            : "Festive events and collections will be listed here once they are confirmed."
        }
      >
        <ChristmasEventsList events={christmasEvents} />
      </EdSection>

      <EdSection
        id="fundraise"
        title="Fundraise for us this Christmas"
        intro="Community fundraising keeps the sanctuary running through the winter. Here are a few simple ways you, your workplace or your community group can raise funds for Assisi."
        layout="stack"
      >
        <ul className="mb-10 list-none p-0">
          {christmasFundraisingIdeas.map((idea) => (
            <li key={idea.title} className="as-rm-row">
              <h3 className="as-rm-row-title">{idea.title}</h3>
              <p className="as-rm-row-body md:col-span-2">{idea.description}</p>
            </li>
          ))}
        </ul>

        <div className="panel p-6 sm:p-8">
          <h3 className="text-lg font-bold text-ink mb-2">Planning a festive fundraiser?</h3>
          <p className="text-ink/80 mb-4">
            Tell us what you have in mind and we can share collection tins, guidance and fundraising
            materials. Contact our Fundraising Manager, {site.fundraising.name}, by email at{" "}
            <a href={site.fundraising.emailHref} className="link">
              {site.fundraising.email}
            </a>{" "}
            or by phone/text on{" "}
            <a href={site.fundraising.phoneHref} className="link">
              {site.fundraising.phoneDisplay}
            </a>
            .
          </p>
          <div className="as-rm-cta-row flex flex-wrap items-center gap-x-6 gap-y-3">
            {fundraisingPackLink.isExternal ? (
              <a
                href={fundraisingPackLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className={tapPrimary}
              >
                Get fundraising materials
              </a>
            ) : (
              <Link href={fundraisingPackLink.href} className={tapPrimary}>
                Contact us to fundraise
              </Link>
            )}
            <Link href="/volunteer" className={tap}>
              Volunteer at fundraising events (18+)
            </Link>
          </div>
        </div>
      </EdSection>

      <section
        aria-labelledby="christmas-contact-heading"
        className="border-t border-line bg-ink text-cream"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2
                id="christmas-contact-heading"
                className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,1.35rem+0.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-balance text-cream"
              >
                Visiting or getting in touch over Christmas
              </h2>
            </div>
            <div className="space-y-6 text-cream/90 lg:col-span-7">
              <p>
                Usual sanctuary hours are{" "}
                {site.openingHours.map((line, index) => (
                  <span key={line}>
                    {index > 0 ? "; " : null}
                    {plainDashes(line)}
                  </span>
                ))}
                . Please check with us before travelling over the festive period, as Christmas
                opening hours will be confirmed closer to the time.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-bold text-cream mb-2">Sanctuary address</h3>
                  <AddressLines className="text-cream/85" />
                </div>
                <div>
                  <h3 className="font-bold text-cream mb-2">Phone and email</h3>
                  <p>
                    <PhoneLink className="inline-flex min-h-11 items-center text-cream underline underline-offset-[0.2em] hover:decoration-2" />
                  </p>
                  <p className="mt-1">
                    <EmailLink className="inline-flex min-h-11 items-center text-cream underline underline-offset-[0.2em] hover:decoration-2" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
