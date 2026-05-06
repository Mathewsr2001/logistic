import { site } from "@/content/site";

export function TrustStrip() {
  return (
    <section className="border-y border-neutral-200 bg-brand-panel px-4 py-12 sm:px-6 lg:px-12" aria-label="Ventajas operativas">
      <div className="mx-auto grid max-w-[1400px] gap-10 text-brand-mutedLight md:grid-cols-2 lg:grid-cols-4">
        {site.trustHighlights.map((item) => (
          <div key={item.title} className="space-y-3">
            <p className="text-[1.0625rem] font-semibold text-neutral-950">{item.title}</p>
            <p className="text-[0.95rem] leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
