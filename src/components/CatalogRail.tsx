import Link from "next/link";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";

export function CatalogRail() {
  return (
    <section className="relative overflow-hidden border-b border-sky-200/35 bg-[#f5f9fc] px-4 py-14 sm:px-6 lg:px-12">
      {/* Azul “invisible”: velos muy suaves; sin competir con el contenido */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_65%_at_50%_-25%,rgba(56,182,255,0.11),transparent_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_50%,rgba(30,100,180,0.05),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50/45 via-transparent to-sky-100/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/40 to-transparent"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-caps-wider text-brand-accent/90">
              Líneas destacadas · colección institucional
            </p>
            <p className="font-display text-2xl font-semibold tracking-tight text-neutral-950 md:text-[1.7rem] md:leading-snug">
              Accesos rápidos a departamentos tácticos como en las vitrinas policiales internacionales, con
              servicio cercano desde {site.country}.
            </p>
          </div>
          <Link
            href={routes.contacto}
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-sky-200/80 bg-white/60 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-caps-sm text-neutral-900 shadow-[0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm ring-1 ring-sky-100/60 transition hover:border-brand-accent/40 hover:bg-white/90 hover:text-brand-accentHover hover:shadow-[0_12px_40px_-20px_rgba(56,130,200,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:self-auto"
            style={{ outlineColor: "var(--ring)" }}
          >
            Coordinar proyecto
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </Link>
        </div>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-3 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {site.catalogLines.map((line) => (
            <Link
              key={line.label}
              href={routes.servicios}
              className="group flex min-w-[260px] max-w-[280px] flex-col rounded-2xl border border-white/90 bg-white/55 px-5 py-5 shadow-[0_24px_60px_-38px_rgba(15,52,110,0.35)] ring-1 ring-sky-100/70 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-sky-200/90 hover:bg-white/80 hover:shadow-[0_32px_70px_-40px_rgba(56,130,200,0.4)]"
            >
              <p className="font-display text-base font-semibold text-neutral-950">{line.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{line.subtitle}</p>
              <span className="mt-6 text-[10px] font-semibold uppercase tracking-caps-prominent text-brand-accent/90 transition group-hover:text-brand-accentHover">
                Ver detalle institucional →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
