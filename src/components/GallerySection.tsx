import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { galleryImages } from "@/content/gallery";
import { routes } from "@/lib/routes";

export function GallerySection() {
  return (
    <section id="galeria" className="scroll-mt-36 border-neutral-100 bg-transparent px-4 pb-20 pt-14 sm:px-6 lg:scroll-mt-40 lg:px-12 lg:pb-28 lg:pt-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="max-w-[42rem] rounded-r-2xl border-l-[4px] border-brand-accent bg-gradient-to-r from-sky-50/80 via-white/40 to-transparent py-3 pl-6 pr-4 md:py-4 md:pl-8 md:pr-6">
          <p className="text-[11px] font-semibold uppercase tracking-caps-lg text-brand-accent">
            {site.galleryHeadingKicker}
          </p>
          <h2 className="mt-3 font-display text-gallery font-bold tracking-tight text-neutral-950">
            {site.galleryHeadingTitle}
          </h2>
          <p className="mt-4 max-w-[34rem] text-[0.9375rem] leading-relaxed text-neutral-600">
            {site.galleryHeadingLead}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-neutral-900 px-8 py-3 text-[11px] font-semibold uppercase tracking-caps-sm text-white transition hover:bg-neutral-800"
            >
              Instagram operativo
            </Link>
            <Link
              href={site.brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-900 px-8 py-3 text-[11px] font-semibold uppercase tracking-caps-sm text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
            >
              Descargar ficha institucional
            </Link>
          </div>
        </header>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 sm:gap-9 xl:grid-cols-4 xl:gap-8">
          {galleryImages.map((item, idx) => (
            <article
              key={`${item.title}-${idx}`}
              className="group/card relative flex flex-col overflow-hidden rounded-[1.35rem] border border-neutral-200/90 bg-gradient-to-b from-white via-white to-neutral-50/90 shadow-[0_12px_48px_-28px_rgba(15,25,52,0.35),inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-neutral-950/[0.035] transition duration-500 ease-out hover:-translate-y-1.5 hover:border-sky-200/80 hover:shadow-[0_28px_70px_-36px_rgba(56,130,200,0.38),0_0_0_1px_rgba(56,182,255,0.08)]"
            >
              {/* Marco vitrina + imagen */}
              <div className="relative px-3 pb-0 pt-3 sm:px-3.5 sm:pt-3.5">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-100 via-[#e8edf2] to-neutral-200/90 p-[3px] shadow-[inset_0_2px_6px_rgba(255,255,255,0.85)] ring-1 ring-neutral-900/[0.07]">
                  <div className="relative aspect-[10/13] overflow-hidden rounded-[10px] bg-[#e4e9ee] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 45vw, 24vw"
                      placeholder={item.src.startsWith("https://") ? "empty" : "blur"}
                      blurDataURL={
                        item.src.startsWith("https://")
                          ? undefined
                          : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='1.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23eaecef'/%3E%3C/svg%3E"
                      }
                      className="object-cover transition duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.045]"
                      priority={idx === 0}
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-[10px] ring-1 ring-inset ring-neutral-950/[0.08]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/[0.18] via-transparent to-transparent opacity-70 transition duration-500 group-hover/card:opacity-100"
                    />
                  </div>
                </div>
                <span className="absolute right-6 top-6 z-[1] inline-flex items-center rounded-md border border-white/15 bg-neutral-950/78 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-caps-md text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md">
                  Ref. {(idx + 1).toString().padStart(2, "0")}
                </span>
              </div>

              {/* Texto */}
              <div className="flex flex-col gap-4 border-t border-neutral-100/90 bg-white/80 px-6 pb-7 pt-5 backdrop-blur-[2px]">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-9 w-1 shrink-0 rounded-full bg-gradient-to-b from-brand-accent to-sky-600 shadow-[0_0_12px_rgba(56,182,255,0.35)]"
                  />
                  <div className="min-w-0 flex-1 space-y-2">
                    <p className="text-[10px] font-semibold uppercase tracking-caps-wider text-neutral-400">
                      Pieza de colección
                    </p>
                    <h3 className="font-display text-[1.07rem] font-semibold leading-snug tracking-tight text-neutral-950 md:text-[1.125rem]">
                      {item.title}
                    </h3>
                    <p className="line-clamp-3 text-[0.9rem] leading-relaxed text-neutral-600">{item.alt}</p>
                  </div>
                </div>

                <Link
                  href={routes.contacto}
                  className="group/btn relative mt-1 inline-flex min-h-[2.45rem] w-full items-center justify-center overflow-hidden rounded-lg border border-sky-300/90 bg-gradient-to-b from-sky-100 via-sky-50 to-white px-4 py-2.5 text-[10px] font-semibold uppercase tracking-caps-prominent text-[#0a162c] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_6px_16px_-10px_rgba(56,182,255,0.55)] ring-1 ring-sky-200/70 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:border-brand-accent hover:bg-gradient-to-br hover:from-brand-accent hover:via-sky-400 hover:to-brand-accentHover hover:text-white hover:shadow-[0_14px_36px_-12px_rgba(56,182,255,0.65)] hover:ring-brand-accent/50 active:translate-y-0 active:scale-[0.99] active:duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
                  style={{ outlineColor: "var(--ring)" }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition duration-700 ease-out group-hover/btn:translate-x-full group-hover/btn:opacity-100 motion-reduce:hidden"
                  />
                  <span className="relative">Solicitar ficha técnica</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
