import Link from "next/link";
import { site } from "@/content/site";

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-32 border-y border-white/5 bg-brand-surface py-24 sm:py-28 lg:scroll-mt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-brand-accent">
            Departamentos especializados
          </p>
          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-[2.4rem] lg:text-[2.85rem]">
            La misma seriedad visible en tus referencias líder de uniformidad policial
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-brand-muted">
            Coordinamos colecciones al estilo storefront internacional pero con soporte cercano desde
            Ecuador · {site.country}. Producción muestra piloto antes de lanzar tus mayores tirajes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <article className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-brand-accent/35 via-brand-elevated to-brand-bg p-10 shadow-card lg:col-span-8">
            <div className="absolute inset-x-12 top-[-30%] h-40 rounded-full bg-brand-accent blur-[140px]" />
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-accent/90">
              Core collection
            </span>
            <h3 className="mt-4 max-w-xl font-display text-3xl font-bold text-white text-balance">
              {site.services[0]!.title}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-muted">
              {site.services[0]!.description}
            </p>
            <Link
              href="#contacto"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand-ink transition hover:bg-slate-100"
            >
              Planifica una reunión tácnica
            </Link>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-elevated/80 p-8 shadow-card lg:col-span-4">
            <div className="absolute -right-6 top-[-20%] h-40 w-40 rounded-full bg-brand-gold/30 blur-[100px]" />
            <span className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-gold">Rescate urbano</span>
            <h3 className="mt-6 text-2xl font-semibold text-white">{site.services[1]!.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">{site.services[1]!.description}</p>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-elevated/80 p-8 shadow-card lg:col-span-6">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/18 to-transparent opacity-60"
              aria-hidden
            />
            <h3 className="text-2xl font-semibold text-white">{site.services[2]!.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">{site.services[2]!.description}</p>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-elevated/80 p-8 shadow-card lg:col-span-6">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-accent/15 to-transparent opacity-65"
              aria-hidden
            />
            <h3 className="text-2xl font-semibold text-white">{site.services[3]!.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">{site.services[3]!.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
