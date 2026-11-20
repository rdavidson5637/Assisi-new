import { Suspense } from "react";
import type { Metadata } from "next";
import AdoptBrowser from "@/components/AdoptBrowser";
import InnerHero from "@/components/editorial/InnerHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Adopt a Pet",
  "Meet the dogs, cats, rabbits, guinea pigs and other small animals waiting for a home at Assisi Animal Sanctuary in Conlig, Northern Ireland.",
  "/adopt",
);

/**
 * List page shell only. AdoptBrowser / AnimalCard / adopt/[id] are owned by open PR #2 — left untouched.
 */
export default function AdoptPage() {
  return (
    <div className="bg-cream">
      <InnerHero
        title="Adopt a Pet"
        subtitle="Dogs, cats, rabbits and guinea pigs waiting for a home."
        photo={{
          src: "/images/animals/rocky.jpg",
          alt: "Rocky, a dog waiting for a home at Assisi Animal Sanctuary",
        }}
        focus="50% 25%"
        tone="paper"
      />
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-4 py-8 text-ink/70 sm:px-6 lg:px-8">Loading animals...</div>
        }
      >
        <AdoptBrowser />
      </Suspense>
    </div>
  );
}
