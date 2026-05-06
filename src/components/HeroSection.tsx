import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] md:min-h-[min(900px,calc(100svh))]"
      aria-labelledby="hero-titulo"
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

      <div className="relative flex min-h-[inherit] flex-col justify-end">
        <div className="mx-auto w-full max-w-[1600px] px-4 pb-16 pt-10 sm:px-6 md:pb-28 lg:px-10 lg:pb-32">
          <div className="max-w-[46rem] animate-fade-up">
            <div className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-full border border-white/12 bg-black/25 px-5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
              <span
                aria-hidden
                className="inline-flex h-2 w-2 shrink-0 rounded-full bg-brand-accent shadow-[0_0_14px_rgba(56,182,255,0.85)]"
              />
              <span className="text-[10px] font-semibold uppercase tracking-[0.38em] text-white/95">
                {site.motto}
              </span>
              <span className="hidden h-4 w-px bg-white/25 sm:block" aria-hidden />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold/95">
                {site.country}
              </span>
            </div>

            <h1
              id="hero-titulo"
              className="mt-9 font-display text-[clamp(2.15rem,5vw,3.35rem)] font-extrabold leading-[1.08] tracking-tight text-white text-pretty md:mt-11 md:tracking-tight"
            >
              {site.catalogHeroHeading}
            </h1>

            <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.65] text-white/88 md:text-[1.125rem]">
              {site.heroHeadline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#contacto"
                className="inline-flex min-h-[3rem] min-w-[11.5rem] items-center justify-center rounded-full bg-white px-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-navyDeep shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)] transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ outlineColor: "var(--ring)" }}
              >
                Coordinar proyecto
              </Link>
              <Link
                href="#galeria"
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition hover:border-brand-accent/50 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ outlineColor: "var(--ring)" }}
              >
                Ver catálogo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
