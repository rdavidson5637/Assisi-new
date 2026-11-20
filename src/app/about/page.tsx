import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EdSection from "@/components/editorial/EdSection";
import InnerHero from "@/components/editorial/InnerHero";
import QualityMobileStyles from "@/components/QualityMobileStyles";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "About Us",
  "Founded in 1997, Assisi Animal Sanctuary is an independent no-kill animal welfare charity in Conlig, Northern Ireland. Read about our vision, mission and animal rights.",
  "/about",
);

const rights = [
  "A suitable, comfortable and happy environment",
  "A suitable and appropriate diet, exercise and socialisation regime",
  "Be able to exhibit normal behaviour patterns",
  "The need to be housed with or apart from other animals",
  "Be protected from pain, suffering and disease",
] as const;

const h2 =
  "font-[family-name:var(--font-display)] text-[clamp(1.5rem,1.35rem+0.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-balance";
const lead = "text-[clamp(1.125rem,1.05rem+0.35vw,1.25rem)] leading-relaxed text-pretty";

export default function AboutPage() {
  return (
    <div className="qm-page bg-cream">
      <QualityMobileStyles />
      <InnerHero
        title="About Assisi Animal Sanctuary"
        subtitle="Founded in 1997, Assisi Animal Sanctuary is a local independent animal welfare charity in Northern Ireland."
        photo={{
          src: "/images/animals/wee-max.jpg",
          alt: "Wee Max, a Border Collie at Assisi Animal Sanctuary",
        }}
        focus="50% 30%"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 text-ink/90 lg:col-span-7">
            <p>
              We are committed to providing shelter, care, food, veterinary treatment, safety, companionship
              and ultimately finding new loving homes for all the animals that come into our Sanctuary.
            </p>
            <p>
              <strong>
                Our No-Kill policy means every animal is given the time, care and opportunity to find the
                loving home they deserve.
              </strong>
            </p>
            <p>Animal Welfare is paramount to everything we do.</p>
            <p>
              For every animal rescued, we ensure they are neutered, vaccinated, wormed, defleaed (and all
              dogs and cats are micro-chipped). Regardless of their circumstance, age or state of health, we
              provide all animals with an excellent quality of life, something many of them have never
              experienced before.
            </p>
            <p>
              Our aim is to find each and every animal that comes in to our care, the loving forever home
              that is right for them.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-4 lg:col-start-9">
            <Image
              src="/images/animals/pablo.jpg"
              alt="Pablo, a Pug at Assisi Animal Sanctuary"
              fill
              sizes="(min-width: 1024px) 320px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <EdSection id="vision" title="Our Vision">
        <p className={`${lead} text-ink`}>
          A future where Assisi Animal Sanctuary is Northern Ireland&apos;s leading Animal Welfare Charity
          bringing about the day when every companion animal has a happy home for life.
        </p>
      </EdSection>

      <section aria-labelledby="mission-heading" className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="grid gap-8 border-t border-cream/20 pt-8 lg:grid-cols-12">
            <h2 id="mission-heading" className={`${h2} text-cream lg:col-span-4`}>
              Our Mission
            </h2>
            <div className="space-y-5 text-cream/90 lg:col-span-8">
              <p>
                To keep as many animals in their homes as possible by providing support and advice to
                owners; to rescue and rehome needy animals by providing modern facilities with well trained
                staff and volunteers; to provide animal welfare education and leadership to all touchpoints
                within Northern Ireland.
              </p>
              <p>
                Animal Welfare is at the core of everything we do at Assisi. We strive to reduce and
                ultimately stop the current destruction of companion animals in Northern Ireland.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EdSection id="rights" title="Animal Rights" intro={<p>Assisi believes that every animal has a right to:</p>}>
        <ol className="list-none space-y-0 border-b border-line p-0 text-ink/90">
          {rights.map((right, index) => (
            <li key={right} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-4">
              <span
                aria-hidden="true"
                className="font-[family-name:var(--font-display)] text-xl tabular-nums leading-snug text-ink"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{right}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 max-w-prose space-y-5 text-ink/90">
          <p>
            We believe that, for most animals, these freedoms are best delivered in suitable, loving homes.
            Some of the animals we care for have, or develop, chronic medical conditions. Where we can, we
            aim to place our animals in private foster homes, provide emotional support for the foster family
            and practical veterinary care for the animal, in order that we sustain and optimise the quality
            of life for all.
          </p>
          <p>
            If we cannot get a home for a particular animal, we will continue to provide sanctuary for their
            lifetime and continue to deliver the best quality care to the best of our ability for as long as
            they are with us.
          </p>
        </div>
      </EdSection>

      <section aria-labelledby="donate-heading" className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-7">
            <h2 id="donate-heading" className={`${h2} text-ink`}>
              Make a Donation
            </h2>
            <p className="mt-4 text-ink/80">
              Your donation pays for food, veterinary treatment, warmth and safety for the animals in our
              care. Any amount helps.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link href="/donate" className="btn-primary min-h-11">
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
