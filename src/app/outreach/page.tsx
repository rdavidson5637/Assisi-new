import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink, PhoneLink } from "@/components/ContactLinks";
import EdSection from "@/components/editorial/EdSection";
import InnerHero from "@/components/editorial/InnerHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Outreach Scheme",
  "Our Outreach Scheme supports local families struggling to afford pet food and care, helping keep pets and families together in Northern Ireland.",
  "/outreach",
);

const helpItems = [
  "Emergency pet food parcels for families facing financial hardship",
  "Support accessing low-cost or subsidised veterinary treatment",
  "Advice on neutering, microchipping, and responsible pet ownership",
  "Short-term guidance for owners struggling with a specific behavioural issue",
  "A listening ear and signposting to other local support services where needed",
] as const;

const h2 =
  "font-[family-name:var(--font-display)] text-[clamp(1.5rem,1.35rem+0.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-balance";
const lead = "text-[clamp(1.125rem,1.05rem+0.35vw,1.25rem)] leading-relaxed text-pretty";

export default function OutreachPage() {
  return (
    <div className="bg-cream">
      <InnerHero
        title="Outreach Scheme"
        subtitle="Keeping pets and families together"
        photo={{
          src: "/images/animals/sakura.jpg",
          alt: "Sakura, a cat at Assisi Animal Sanctuary",
        }}
        focus="50% 35%"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <p className={`${lead} max-w-[65ch] text-ink lg:max-w-[42rem]`}>
          Our Outreach Scheme supports individuals and families within our community who struggle to make
          ends meet and provide food for themselves, their families and pets. We believe that, wherever
          possible, animals are best off staying with the family who loves them, so we step in with
          practical support rather than removing a pet from a good home over hardship alone.
        </p>
      </div>

      <EdSection id="how-we-help" title="How We Help">
        <ul className="divide-y divide-line border-y border-line text-ink/90">
          {helpItems.map((item) => (
            <li key={item} className="py-4">
              {item}
            </li>
          ))}
        </ul>
      </EdSection>

      <EdSection id="who" title="Who It&apos;s For">
        <p className="max-w-prose text-ink/90">
          If you&apos;re struggling to afford food or basic care for your pet and are worried you might
          have to give them up, please reach out. Our Outreach team will listen without judgement and work
          with you to find a way to keep your family, pets included, together wherever we possibly can.
        </p>
      </EdSection>

      <section aria-labelledby="support-outreach" className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="grid gap-8 border-t border-cream/20 pt-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 id="support-outreach" className={`${h2} text-cream`}>
                Support Our Outreach Work
              </h2>
              <p className="mt-4 text-cream/90">
                Outreach is funded entirely by donations. Every contribution helps us say yes to another
                family in need, and keep another pet out of the shelter system and in a loving home.
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link href="/donate" className="btn-primary min-h-11">
                Support Outreach
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="outreach-contact" className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <h2 id="outreach-contact" className={`${h2} text-ink lg:col-span-4`}>
              Need Help, or Want to Help?
            </h2>
            <div className="lg:col-span-8">
              <p className="text-ink/90">
                Contact our Outreach team at <EmailLink className="link" /> or call{" "}
                <PhoneLink className="link" />. All enquiries are handled sensitively and in confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
