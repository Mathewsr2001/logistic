import { site } from "@/content/site";

export function GallerySection() {
  return (
    <section id="galeria" className="scroll-mt-28 bg-gradient-to-b from-brand-bg to-brand-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
              Portafolio
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
              Detalle en cada insignia y entrega ordenada como en campo
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Mostramos un adelanto de líneas ceremonial, alta visibilidad, botas tácticas y
              desarrollos a medida. Sustituí estos bloques por fotografías propias dentro de{" "}
              <code className="rounded-md bg-brand-border/60 px-1.5 py-0.5 text-xs">
                public/galeria
              </code>{" "}
              usando el mismo patrón de nombres.
            </p>
          </div>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-max shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-surface px-5 py-2 text-sm font-semibold text-brand-accent hover:border-brand-accent/60 hover:bg-brand-accent/10"
          >
            Ampliar en Instagram
          </a>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Galería de trabajo">
          {site.galleryCategories.map((label, idx) => (
            <li
              key={label}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-brand-border bg-[radial-gradient(circle_at_20%_-10%,rgba(41,151,255,0.42),transparent_62%),linear-gradient(to_bottom_right,#18181f,#09090c)] shadow-[0_32px_80px_-50px_rgba(15,118,246,0.75)] transition-transform hover:-translate-y-1 hover:border-brand-accent/60"
            >
              <div className="absolute inset-10 rounded-[26px] border border-dashed border-white/12 bg-brand-bg/30" />
              <div className="absolute inset-x-10 bottom-8 flex items-end justify-between text-xs uppercase tracking-[0.24em] text-brand-muted/80">
                <span>00{idx + 1}</span>
                <span className="text-brand-accent/80">Instagram ready</span>
              </div>
              <div className="relative flex h-full flex-col justify-end p-7">
                <div className="mb-16 text-xs font-semibold uppercase tracking-[0.32em] text-brand-accent">
                  Fotografía destacada pendiente
                </div>
                <p className="text-lg font-semibold text-white">{label}</p>
                <p className="mt-2 text-sm text-brand-muted">
                  Reemplace este bloque con imagen JPG/WebP usando `next/image` para mejorar LCP en
                  Vercel.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
