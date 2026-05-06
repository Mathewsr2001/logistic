import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { galleryImages } from "@/content/gallery";

function gridSpan(idx: number) {
  if (idx === 0) return "lg:col-span-7 lg:row-span-2";
  if (idx === 1 || idx === 2) return "lg:col-span-5";
  return "lg:col-span-4";
}

export function GallerySection() {
  return (
    <section id="galeria" className="scroll-mt-32 bg-brand-bg pb-28 pt-24 sm:scroll-mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-brand-accent">Portafolio</p>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-[2.5rem]">
              Galerías editoriales tipo vitrina internacional · entregas Ecuador
            </h2>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-brand-muted">
              Fotografías reales de producción. La misma lógica de presentación aplicada por marcas como{" "}
              <a className="text-white underline-offset-4 hover:text-brand-accent hover:underline" href="https://www.blauer.com/" target="_blank" rel="noreferrer noopener">
                Blauer
              </a>
              {" · "}
              <a className="text-white underline-offset-4 hover:text-brand-accent hover:underline" href="https://flyingcross.com/collections/police-uniforms" target="_blank" rel="noreferrer noopener">
                Flying Cross
              </a>{" "}
              o tiendas institucionales como{" "}
              <a className="text-white underline-offset-4 hover:text-brand-accent hover:underline" href="https://policeuniform.com/" target="_blank" rel="noreferrer noopener">
                Police&nbsp;Uniform
              </a>
              , sólo adaptada para tu marca local.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={site.brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-brand-accent/50 hover:bg-white/10"
            >
              Descargar PDF
            </Link>
            <Link
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-accent px-6 py-2.5 text-sm font-semibold text-brand-ink shadow-glow transition hover:bg-brand-accentHover"
            >
              Instagram destacado
            </Link>
          </div>
        </div>

        <ul className="mt-16 grid auto-rows-fr grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12">
          {galleryImages.map((item, idx) => (
            <li
              key={item.src}
              className={`group relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-brand-surface shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-lift ${gridSpan(idx)}`}
            >
              <div
                className={
                  idx === 0
                    ? "relative min-h-[360px] h-full lg:min-h-[520px]"
                    : "relative aspect-square sm:aspect-[5/6] lg:aspect-auto lg:min-h-[280px]"
                }
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={
                    idx === 0
                      ? "(max-width: 1024px) 100vw, 58vw"
                      : "(max-width: 1024px) 100vw, 34vw"
                  }
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='1.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%230d0d12'/%3E%3C/svg%3E"
                  className="object-cover transition duration-[1.05s] group-hover:scale-[1.04]"
                  priority={idx === 0}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-brand-accent/90">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">{item.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
