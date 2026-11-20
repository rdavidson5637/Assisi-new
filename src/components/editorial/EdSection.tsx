import type { ReactNode } from "react";

interface EdSectionProps {
  id: string;
  title: string;
  intro?: ReactNode;
  layout?: "split" | "stack";
  className?: string;
  children: ReactNode;
}

/** Editorial section row. No CSS import — site-integrity loads page modules via loadTsModule. */
export default function EdSection({
  id,
  title,
  intro,
  layout = "split",
  className = "",
  children,
}: EdSectionProps) {
  const split = layout === "split";
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={className}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className={`border-t border-line pt-8 ${split ? "grid gap-8 lg:grid-cols-12" : ""}`}>
          <div className={split ? "lg:col-span-4" : "mb-8 max-w-prose"}>
            <h2
              id={`${id}-heading`}
              className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,1.35rem+0.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-balance text-ink"
            >
              {title}
            </h2>
            {intro ? <div className="mt-4 text-ink/80">{intro}</div> : null}
          </div>
          <div className={split ? "min-w-0 lg:col-span-8" : ""}>{children}</div>
        </div>
      </div>
    </section>
  );
}
