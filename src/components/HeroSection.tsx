import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { site } from "@/content/site";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[1.08fr_minmax(0,0.92fr)] lg:gap-14 lg:px-8 lg:pt-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            {site.motto.toUpperCase()}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
            Uniformes institucionales con estándares de alta exigencia
          </h1>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-brand-muted">
            {site.tagline} Trabajo serio desde el taller hasta la entrega, con especial atención a
            bordados, insignias y acabados formales para uniformidad impecable.
          </p>
          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-border bg-brand-surface/80 p-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-brand-muted">{site.country}</dt>
              <dd className="mt-2 text-lg font-semibold text-white">{site.shipping}</dd>
            </div>
            <div className="rounded-2xl border border-brand-border bg-brand-surface/80 p-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-brand-muted">
                Coordinación rápida
              </dt>
              <dd className="mt-2 text-lg font-semibold text-white">
                Atención directa por teléfono y redes
              </dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand-bg transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Solicitar información
            </Link>
            <Link
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-brand-border bg-brand-surface px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-accent/60 hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            >
              Ver trabajos en Instagram
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[2rem] border border-brand-border bg-gradient-to-br from-brand-surface to-brand-bg p-10 shadow-[0_45px_120px_-65px_rgba(41,151,255,0.75)] sm:p-12">
            <div className="mx-auto grid max-w-xs place-items-center gap-8 text-center">
              <LogoMark className="mx-auto size-28 text-white sm:size-36" aria-hidden />
              <div>
                <p className="font-display text-2xl font-semibold uppercase tracking-[0.12em] text-white">
                  Logistic
                </p>
                <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-brand-gold">
                  Fire &amp; Rescue
                </p>
              </div>
              <dl className="w-full divide-y divide-white/10 rounded-2xl border border-white/10 bg-brand-bg/40 text-left">
                <div className="grid grid-cols-[8rem_minmax(0,1fr)] gap-4 px-4 py-4 text-sm">
                  <dt className="font-medium uppercase tracking-[0.16em] text-brand-muted">
                    Alcance
                  </dt>
                  <dd>{site.country} · Todo el país</dd>
                </div>
                <div className="grid grid-cols-[8rem_minmax(0,1fr)] gap-4 px-4 py-4 text-sm">
                  <dt className="font-medium uppercase tracking-[0.16em] text-brand-muted">
                    Especialidades
                  </dt>
                  <dd>Uniformes corporativos · Gorras protocolarias · Escudos metalizados</dd>
                </div>
              </dl>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
                  Calidad terminada en taller
                </span>
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-100 ring-1 ring-amber-400/30">
                  Cumplimiento de entrega
                </span>
              </div>
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-28 h-64 w-64 rounded-full bg-brand-accent/20 blur-[100px]"
          />
        </div>
      </div>
    </section>
  );
}
