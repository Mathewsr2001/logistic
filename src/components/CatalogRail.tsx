import Link from "next/link";
import { site } from "@/content/site";

export function CatalogRail() {
  return (
    <section className="border-b border-neutral-200 bg-[#eaeff5] px-4 py-12 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-brand-mutedLight">
              LÍneas destacadas · estilo colección institucional
            </p>
            <p className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-[1.7rem]">
              Accesos rápidos a departamentos tácticos como en las vitrinas policiales internacionales, con
              servicio cercano desde {site.country}.
            </p>
          </div>
          <Link
            href="#contacto"
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-950 underline underline-offset-8 hover:text-brand-accentHover"
          >
            Coordinar proyecto →
          </Link>
        </div>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {site.catalogLines.map((line) => (
            <Link
              key={line.label}
              href="#servicios"
              className="group flex min-w-[240px] flex-col rounded-2xl border border-neutral-200 bg-brand-panel px-5 py-4 shadow-[0_35px_80px_-72px_rgba(4,38,93,0.75)] ring-1 ring-neutral-950/5 transition hover:-translate-y-1 hover:border-neutral-950/25"
            >
              <p className="text-base font-semibold text-neutral-950">{line.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-brand-mutedLight">{line.subtitle}</p>
              <span className="mt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-950/70">
                Ver detalle institucional
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
