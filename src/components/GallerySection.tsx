import Image from "next/image";
import { site } from "@/content/site";
import { galleryImages } from "@/content/gallery";

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
              Fotografías reales del taller al Instagram de referencia ({site.instagram.handle}). Para
              añadir nuevas piezas súbelas a{" "}
              <code className="rounded-md bg-brand-border/60 px-1.5 py-0.5 text-xs">
                public/galeria
              </code>
              {" — "}
              <a
                href={site.brochurePdf}
                className="font-medium text-brand-accent underline-offset-4 hover:text-brand-accentHover hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                brochure en PDF (resumen imprimible)
              </a>
              .
            </p>
          </div>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-max shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-surface px-5 py-2 text-sm font-semibold text-brand-accent hover:border-brand-accent/60 hover:bg-brand-accent/10"
          >
            Ver más en Instagram
          </a>
        </div>

        <ul
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Galería de trabajos"
        >
          {galleryImages.map((item, idx) => (
            <li
              key={item.src}
              className="group relative overflow-hidden rounded-2xl border border-brand-border bg-brand-bg shadow-[0_32px_80px_-50px_rgba(15,118,246,0.65)] transition-transform hover:-translate-y-1 hover:border-brand-accent/60"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  priority={idx < 3}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='1.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23121214'/%3E%3C/svg%3E"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent opacity-90"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-brand-accent/95">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug text-white">{item.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
