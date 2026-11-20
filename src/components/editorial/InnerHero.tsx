import Image from "next/image";

interface InnerHeroProps {
  title: string;
  subtitle?: string;
  photo?: { src: string; alt: string };
  focus?: string;
  /** Dark band (default) or light paper band. */
  tone?: "band" | "paper";
}

/**
 * Inner-page title for DESIGN-PRO-2 pages. Kept separate from PageHero.tsx (owned by PR #10).
 * Styles use Assisi Tailwind tokens only (no CSS import — site-integrity loads these modules).
 */
export default function InnerHero({
  title,
  subtitle,
  photo,
  focus = "50% 50%",
  tone = "band",
}: InnerHeroProps) {
  const band = tone === "band";
  const shell = band ? "bg-ink text-cream" : "bg-cream text-ink border-b border-line";
  const muted = band ? "text-cream/80" : "text-ink/70";
  const ink = band ? "text-cream" : "text-ink";
  const rule = band ? "bg-cream/70" : "bg-ink/40";

  const eyebrow = (
    <p className={`mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.08em] ${muted}`}>
      <span aria-hidden="true" className={`inline-block h-px w-8 ${rule}`} />
      Assisi Animal Sanctuary
    </p>
  );

  if (!photo) {
    return (
      <section className={shell}>
        <div className="mx-auto grid max-w-7xl gap-6 px-4 pt-12 pb-10 sm:px-6 md:pt-20 md:pb-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:px-8">
          <div className="lg:col-span-7">
            {eyebrow}
            <h1 className={`font-[family-name:var(--font-display)] text-[clamp(2.5rem,1.6rem+3.6vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance ${ink}`}>
              {title}
            </h1>
          </div>
          {subtitle ? (
            <p
              className={`max-w-prose text-[clamp(1.125rem,1.05rem+0.35vw,1.25rem)] leading-relaxed text-pretty ${ink} lg:col-span-5 lg:border-l lg:border-current/30 lg:pl-8`}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className={shell}>
      <div className="mx-auto grid max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="px-4 pt-12 pb-10 sm:px-6 md:pt-20 lg:col-span-7 lg:flex lg:flex-col lg:justify-end lg:px-0 lg:pb-16">
          {eyebrow}
          <h1 className={`font-[family-name:var(--font-display)] text-[clamp(2.5rem,1.6rem+3.6vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance ${ink}`}>
            {title}
          </h1>
          {subtitle ? (
            <p className={`mt-6 max-w-[36ch] text-[clamp(1.125rem,1.05rem+0.35vw,1.25rem)] leading-relaxed text-pretty ${ink}`}>
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="relative aspect-[16/10] sm:aspect-[2/1] lg:col-span-5 lg:mt-12 lg:aspect-auto lg:min-h-[24rem]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            sizes="(min-width: 1280px) 500px, (min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            style={{ objectPosition: focus }}
          />
        </div>
      </div>
    </section>
  );
}
