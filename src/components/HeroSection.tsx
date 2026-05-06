import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] md:min-h-[min(900px,calc(100svh))]"
      aria-labelledby="coleccion-titulo"
    >
      <Image
        src={site.heroBannerSrc}
        alt={site.heroBannerAlt}
        fill
        priority
        placeholder="blur"
        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='1.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23040b17'/%3E%3C/svg%3E"
        sizes="100vw"
        className="object-cover"
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-neutral-950/78 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navyHero via-brand-navyDeep/93 to-transparent" />
      </div>

      <div className="relative flex min-h-[inherit] flex-col justify-end pb-14 md:pb-24">
        <div className="pointer-events-none flex-1 md:min-h-[6rem]" aria-hidden />

        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
          <nav aria-label="Migas de pan" className="animate-fade-up text-[13px] text-white/70">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <li>
                <Link href="#inicio" className="inline-flex items-center gap-2 transition hover:text-white">
                  <svg viewBox="0 0 20 18" aria-hidden className="size-[15px]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor">
                    <path d="M10 17V9.57M14 17v-8M6 17V9M3 17h14" />
                    <path d="m2 10 8-8 8 8" />
                  </svg>
                  Inicio
                </Link>
              </li>
              <li aria-hidden className="text-white/35">
                /
              </li>
              <li>
                <Link href="#coleccion-sheet" className="transition hover:text-white">
                  Colección
                </Link>
              </li>
              <li aria-hidden className="text-white/35">
                /
              </li>
              <li className="font-semibold text-white/95">{site.catalogHeroHeading}</li>
            </ol>
          </nav>

          <div className="mt-12 max-w-[72rem]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.48em] text-brand-gold/90">
              {site.motto} · {site.country}
            </p>
            <h1
              id="coleccion-titulo"
              className="mt-8 font-display text-[clamp(2.45rem,4.85vw,3.95rem)] font-extrabold uppercase leading-none tracking-[0.12em] text-white text-pretty md:tracking-[0.18em]"
            >
              {site.catalogHeroHeading}
            </h1>
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-white/85 md:text-[1.12rem]">
              {site.heroHeadline}{" "}
              <Link href="#galeria" className="font-semibold text-brand-accent underline-offset-[8px] hover:text-white hover:underline">
                Ver referencias en catálogo →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
