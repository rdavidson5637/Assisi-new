interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-paper border-b border-line py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">
          Assisi Animal Sanctuary
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900">{title}</h1>
        {subtitle ? (
          <p className="text-lg md:text-xl text-gray-700 mt-3 max-w-3xl">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
