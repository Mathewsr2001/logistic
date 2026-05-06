import Link from "next/link";
import { site } from "@/content/site";

export function CatalogRail() {
  return (
    <section className="relative border-b border-white/5 bg-brand-bg/85 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-accent">Catálogo vivo</p>
            <p className="mt-3 max-w-xl text-lg text-white">
              Uniformidad para cada misión. Inspiración en las mejores vitrinas institucionales del
              mundo, con producción y coordinación local en {site.country}.
            </p>
          </div>
          <Link
            href="#contacto"
            className="hidden text-sm font-semibold text-brand-accent underline-offset-4 hover:text-brand-accentHover hover:underline md:inline"
          >
            Agenda una muestra institucional →
          </Link>
        </div>
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {site.catalogLines.map((line) => (
            <Link
              key={line.label}
              href="#servicios"
              className="group min-w-[240px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent px-5 py-4 shadow-card transition hover:border-brand-accent/40 hover:shadow-lift"
            >
              <p className="text-base font-semibold text-white">{line.label}</p>
              <p className="mt-1 text-sm text-brand-muted">{line.subtitle}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent/80">
                Ver capacidades
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
