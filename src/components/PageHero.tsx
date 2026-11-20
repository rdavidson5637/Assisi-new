interface PageHeroProps {
  title: string;
  subtitle?: string;
}

/** Title band for inner pages: display heading left, subtitle beside it (ruled) on wide screens. */
export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-paper border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 md:pt-20 md:pb-14 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-7">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-ink/80 mb-5">Assisi Animal Sanctuary</p>
          <h1 className="text-ink text-[clamp(2.5rem,1.6rem+3.6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-balance">
            {title}
          </h1>
        </div>
        {subtitle ? (
          <p className="text-[1.25rem] md:text-[1.375rem] leading-[1.5] text-ink/80 max-w-prose text-pretty lg:col-span-5 lg:border-l lg:border-line lg:pl-8">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
