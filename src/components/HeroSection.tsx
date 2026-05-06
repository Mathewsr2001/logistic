import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { site } from "@/content/site";
import { galleryImages } from "@/content/gallery";

const heroVisual = galleryImages[0];

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-mesh-hero" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fade bg-grid-size opacity-40"
        style={{ backgroundPosition: "center top" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-25 mix-blend-overlay" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="animate-fade-up">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              {site.country}
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-muted">
              {site.shipping.toUpperCase()}
            </span>
            <span className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-gold">
              {site.motto}
            </span>
          </div>

          <h1 className="mt-8 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.45rem]">
            {site.heroHeadline}
          </h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-brand-muted">
            Fabricamos colecciones ceremonial y operativo con estándares de laboratorio táctico.
            Diseñamos lotes institucionales con continuidad cromática, tallas normalizadas y
            ornamentación ceremonial que se ve impecable bajo cualquier foco institucional.
          </p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-subtle">
                Operación distribuida
              </dt>
              <dd className="mt-3 text-xl font-semibold text-white">{site.country} · Coordinación nacional</dd>
            </div>
            <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-subtle">
                Coordinación rápida
              </dt>
              <dd className="mt-3 text-xl font-semibold text-white">
                Cotiza por llamada · Redes institucionales
              </dd>
            </div>
          </dl>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="#contacto"
              className="inline-flex flex-1 min-w-[200px] items-center justify-center rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-brand-ink shadow-glow transition hover:bg-brand-accentHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:flex-none sm:py-3.5"
              style={{ outlineColor: "var(--ring)" }}
            >
              Solicitar muestra institucional
            </Link>
            <Link
              href="#galeria"
              className="inline-flex flex-1 min-w-[180px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-brand-accent/55 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:flex-none sm:py-3.5"
              style={{ outlineColor: "var(--ring)" }}
            >
              Ver colección destacada
            </Link>
            <Link
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-brand-accent underline-offset-[6px] hover:text-brand-accentHover hover:underline"
            >
              {site.instagram.handle}
            </Link>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute -left-24 top-24 hidden h-[420px] w-[420px] rounded-full bg-brand-accentSoft blur-[170px] lg:block" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-brand-surface/80 shadow-card backdrop-blur-2xl">
            <div className="relative aspect-[4/5]">
              <Image
                src={heroVisual.src}
                alt={heroVisual.alt}
                fill
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='1.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%230d0d12'/%3E%3C/svg%3E"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent" />
              <div className="pointer-events-none absolute inset-8 rounded-[1.85rem] border border-white/10" />
              <div className="absolute left-8 top-8 flex items-center gap-3 rounded-full border border-white/15 bg-brand-bg/40 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur">
                Producción destacada
              </div>
            </div>
            <div className="grid gap-8 border-t border-white/10 p-10 sm:grid-cols-[minmax(0,auto)_1fr] sm:items-center">
              <LogoMark className="size-[4.85rem] text-white max-sm:hidden" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-brand-subtle">Firma institucional</p>
                <p className="mt-4 text-2xl font-display font-bold text-white">Logistic Fire &amp; Rescue</p>
                <p className="mt-3 max-w-[22rem] text-sm leading-relaxed text-brand-muted">
                  {heroVisual.title} · {site.tagline}
                </p>
                <Link
                  href={site.brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex text-sm font-semibold text-brand-accent underline-offset-[6px] hover:text-brand-accentHover hover:underline"
                >
                  Descargar brochure institucional
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
