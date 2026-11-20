import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink, PhoneLink } from "@/components/ContactLinks";
import EdSection from "@/components/editorial/EdSection";
import InnerHero from "@/components/editorial/InnerHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Leave a Legacy",
  "Leave a gift in your will to Assisi Animal Sanctuary in Northern Ireland. Learn about residuary, pecuniary and specific gifts and how to get in touch.",
  "/legacy",
);

const giftTypes = [
  {
    title: "Residuary Gift",
    detail: "A share, or all, of what's left of your estate after other gifts and expenses have been paid.",
  },
  {
    title: "Pecuniary Gift",
    detail: "A fixed sum of money, which can be updated over time to keep pace with inflation.",
  },
  {
    title: "Specific Gift",
    detail: "A particular item, such as property, shares, or other assets of value.",
  },
] as const;

const h2 =
  "font-[family-name:var(--font-display)] text-[clamp(1.5rem,1.35rem+0.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-balance";
const lead = "text-[clamp(1.125rem,1.05rem+0.35vw,1.25rem)] leading-relaxed text-pretty";

export default function LegacyPage() {
  return (
    <div className="bg-cream">
      <InnerHero
        title="Leave a Legacy"
        subtitle="A gift that lasts long after you're gone"
        photo={{
          src: "/images/stories/francesca.jpg",
          alt: "Francesca, a Turkish Van who found a forever foster home through Assisi",
        }}
        focus="50% 30%"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <p className={`${lead} max-w-[65ch] text-ink lg:max-w-[42rem]`}>
          A gift left in your Will is a great way to ensure that your love of animals and interest in their
          well-being is continued into the future. Legacy gifts, of any size, make a real and lasting
          difference, helping us be there for the next animal in need, long after today.
        </p>
      </div>

      <EdSection id="types" title="Types of Gift">
        <dl className="divide-y divide-line border-y border-line">
          {giftTypes.map((gift) => (
            <div
              key={gift.title}
              className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6"
            >
              <dt className="text-xl font-bold text-ink sm:col-span-4">{gift.title}</dt>
              <dd className="text-ink/80 sm:col-span-8">{gift.detail}</dd>
            </div>
          ))}
        </dl>
      </EdSection>

      <section aria-labelledby="why-matters" className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="grid gap-8 border-t border-cream/20 pt-8 lg:grid-cols-12">
            <h2 id="why-matters" className={`${h2} text-cream lg:col-span-4`}>
              Why It Matters
            </h2>
            <p className="text-cream/90 lg:col-span-8">
              As an independent charity, Assisi receives no government funding. We rely entirely on the
              generosity of our community. Legacy gifts help fund the day-to-day running of the Sanctuary as
              well as bigger projects, like our current appeal to build a dedicated Cat Intake Unit, ensuring
              animals in Northern Ireland have somewhere to turn for years to come.
            </p>
          </div>
        </div>
      </section>

      <EdSection id="get-started" title="How to Get Started">
        <p className="max-w-prose text-ink/90">
          We&apos;d always recommend speaking with a solicitor when writing or updating your Will. If
          you&apos;re considering leaving a gift to Assisi, or have already included us, we&apos;d love to
          hear from you so we can say thank you. Get in touch with our team in complete confidence.
        </p>
      </EdSection>

      <section aria-labelledby="legacy-contact" className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 id="legacy-contact" className={`${h2} text-ink`}>
                Talk to Us in Confidence
              </h2>
              <p className="mt-4 text-ink/90">
                Contact us at <EmailLink className="link" /> or call <PhoneLink className="link" /> to
                discuss leaving a legacy gift.
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link href="/about" className="btn-secondary inline-flex min-h-11 items-center">
                Learn More About Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
