import Link from "next/link";
import { site } from "@/content/site";

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-32 bg-neutral-50 px-4 py-24 sm:px-6 lg:scroll-mt-40 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <article className="overflow-hidden rounded-[2rem] border border-neutral-200/90 bg-white shadow-[0_40px_100px_-60px_rgba(15,52,110,0.35)] ring-1 ring-neutral-950/[0.04]">
          {/* Cabecera del panel unificado */}
          <div className="relative border-b border-neutral-100 bg-gradient-to-br from-sky-50 via-white to-neutral-50 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-accent/15 blur-[80px]"
            />
            <div className="relative max-w-[52rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-brand-accent">
                {site.servicesHeadingKicker}
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.65rem,3.2vw,2.35rem)] font-bold leading-tight tracking-tight text-neutral-950">
                {site.servicesHeadingTitle}
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-brand-mutedLight md:text-[1.125rem]">
                {site.servicesHeadingLead}
              </p>
            </div>
          </div>

          {/* Líneas de capacidad: lectura vertical única */}
          <ul className="divide-y divide-neutral-100">
            {site.services.map((svc, idx) => (
              <li
                key={svc.title}
                className="group transition-colors hover:bg-gradient-to-r hover:from-sky-50/60 hover:to-transparent"
              >
                <div className="flex flex-col gap-6 px-6 py-9 sm:flex-row sm:items-start sm:gap-10 sm:px-10 lg:px-14 lg:py-10">
                  <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                    <span className="inline-flex h-[3.25rem] min-w-[3.25rem] items-center justify-center rounded-2xl bg-gradient-to-br from-brand-navyDeep to-[#123a68] text-[13px] font-bold tabular-nums tracking-wider text-white shadow-[0_12px_28px_-12px_rgba(56,182,255,0.45)] ring-2 ring-white/90">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {idx === 0 ? (
                      <span className="hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-accent sm:inline">
                        Prioridad institucional
                      </span>
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[1.25rem] font-semibold leading-snug text-neutral-950 md:text-[1.35rem]">
                      {svc.title}
                    </h3>
                    <p className="mt-3 max-w-[52rem] text-[0.98rem] leading-relaxed text-brand-mutedLight md:text-[1.03rem]">
                      {svc.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Pie único */}
          <div className="flex flex-col items-start justify-between gap-6 border-t border-neutral-100 bg-neutral-50/90 px-6 py-8 sm:flex-row sm:items-center sm:px-10 lg:px-14">
            <p className="max-w-xl text-sm leading-relaxed text-neutral-600">
              Coordinamos muestra piloto, fichas técnicas y ventanas de entrega con un solo interlocutor ejecutivo.
            </p>
            <Link
              href="#contacto"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-neutral-900 px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-neutral-800 sm:w-auto"
            >
              Planificación técnica
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
