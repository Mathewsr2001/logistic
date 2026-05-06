import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { galleryImages } from "@/content/gallery";

export function GallerySection() {
  return (
    <section id="galeria" className="scroll-mt-36 border-neutral-100 bg-transparent px-4 pb-20 pt-14 sm:px-6 lg:scroll-mt-40 lg:px-12 lg:pb-28 lg:pt-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[46rem]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-brand-mutedLight">
            Catálogo curado · inspiración institucional
          </p>
          <p className="mt-6 text-xl font-semibold text-neutral-900 md:text-[1.42rem]">
            Presentación fotográfica con el mismo nivel de claridad utilizado por referencias contemporáneas
            tipo{" "}
            <Link
              className="text-neutral-950 underline underline-offset-4 hover:text-brand-accentHover"
              href="https://flyingcross.com/collections/police-uniforms"
              target="_blank"
              rel="noreferrer noopener"
            >
              Flying&nbsp;Cross
            </Link>
            {" · "}
            <Link
              className="text-neutral-950 underline underline-offset-4 hover:text-brand-accentHover"
              href="https://www.blauer.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Blauer
            </Link>{" "}
            o distribuidores similares, adaptadas a tus lotes Ecuador.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-neutral-900 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-neutral-800"
            >
              Instagram operativo
            </Link>
            <Link
              href={site.brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-900 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
            >
              Descargar ficha institucional
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {galleryImages.map((item, idx) => (
            <article
              key={item.src}
              className="group flex flex-col border border-neutral-200 bg-brand-panel pb-7 shadow-[0_35px_80px_-62px_rgba(15,25,52,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_50px_100px_-60px_rgba(15,72,138,0.45)]"
            >
              <div className="relative aspect-[10/13] bg-[#eaecef]">
                <span
                  aria-hidden
                  className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-amber-200/75 bg-white/95 px-3 py-[0.375rem] text-[11px] font-semibold text-amber-700 shadow-[0_8px_20px_-10px_rgba(12,74,110,0.35)] ring-1 ring-black/10"
                >
                  <span aria-hidden className="text-base leading-none text-amber-500">
                    ★
                  </span>
                  5.0
                </span>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 45vw, 24vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='1.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23eaecef'/%3E%3C/svg%3E"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  priority={idx === 0}
                />
              </div>
              <div className="flex flex-col gap-3 px-6 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-mutedLight">
                  Ref · {(idx + 1).toString().padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-[1.0625rem] font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 line-clamp-3 text-[0.9rem] leading-relaxed text-brand-mutedLight">{item.alt}</p>
                </div>
                <Link
                  href="#contacto"
                  className="inline-flex justify-center rounded border border-neutral-900 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: "var(--ring)" }}
                >
                  Solicitar ficha técnica
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
