import { site } from "@/content/site";

export function TrustStrip() {
  return (
    <section
      className="relative border-y border-white/5 bg-gradient-to-r from-brand-surface via-brand-elevated to-brand-surface py-8"
      aria-label="Propuestas de valor"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/35 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-wrap items-stretch justify-between gap-8 px-4 sm:px-6 lg:gap-6 lg:px-8">
        {site.trustHighlights.map((item) => (
          <div key={item.title} className="min-w-[220px] flex-1">
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
