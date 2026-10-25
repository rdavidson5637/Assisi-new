interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-cream border-b border-line py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-ink">{title}</h1>
        {subtitle ? (
          <p className="text-lg text-ink/80 mt-3 max-w-3xl">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
