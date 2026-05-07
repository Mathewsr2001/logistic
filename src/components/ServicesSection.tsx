import Link from "next/link";
import { serviceCategories, serviceHref } from "@/content/serviceCategories";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";

function cellSpan(idx: number): string {
  switch (idx) {
    case 0:
      return "lg:col-span-7";
    case 1:
      return "lg:col-span-5 lg:min-h-[300px]";
    case 2:
      return "lg:col-span-6";
    case 3:
      return "lg:col-span-6";
    default:
      return "lg:col-span-6";
  }
}

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-32 bg-neutral-50 px-4 py-24 sm:px-6 lg:scroll-mt-40 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <article className="overflow-hidden rounded-[2rem] border border-neutral-200/90 bg-white shadow-[0_40px_100px_-60px_rgba(15,52,110,0.35)] ring-1 ring-neutral-950/[0.04]">
          <div className="relative border-b border-neutral-100 bg-gradient-to-br from-sky-50/90 via-white to-neutral-50 px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-accent/18 blur-[72px]"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div className="max-w-[28rem] space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/25 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-caps-md text-brand-accent shadow-sm ring-1 ring-sky-100/80">
                  <span aria-hidden className="size-1.5 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(56,182,255,0.65)]" />
                  {site.servicesHeadingKicker}
                </div>
                <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.15] tracking-tight text-neutral-950">
                  {site.servicesHeadingTitle}
                </h2>
                <p className="max-w-[26rem] text-[0.98rem] leading-relaxed text-neutral-600">
                  {site.servicesHeadingLead}
                </p>
              </div>

              <dl className="grid shrink-0 grid-cols-3 gap-2 sm:gap-3 lg:border-l lg:border-neutral-200/90 lg:pl-10">
                <div className="rounded-xl border border-neutral-200/90 bg-white/90 px-3 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-4 sm:py-3">
                  <dt className="text-[9px] font-semibold uppercase tracking-caps text-neutral-400">Líneas</dt>
                  <dd className="mt-1 font-display text-xl font-semibold tabular-nums text-neutral-950 sm:text-2xl">
                    {serviceCategories.length}
                  </dd>
                </div>
                <div className="rounded-xl border border-neutral-200/90 bg-white/90 px-3 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-4 sm:py-3">
                  <dt className="text-[9px] font-semibold uppercase tracking-caps text-neutral-400">Canal</dt>
                  <dd className="mt-1 text-[11px] font-semibold leading-snug text-neutral-800 sm:text-xs">
                    Un solo contacto
                  </dd>
                </div>
                <div className="rounded-xl border border-neutral-200/90 bg-white/90 px-3 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-4 sm:py-3">
                  <dt className="text-[9px] font-semibold uppercase tracking-caps text-neutral-400">Cobertura</dt>
                  <dd className="mt-1 text-[11px] font-semibold leading-snug text-neutral-800 sm:text-xs">
                    {site.country}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="px-5 pb-10 pt-10 sm:px-8 lg:px-12 lg:pb-14 lg:pt-12">
            <div className="mt-2 grid gap-5 lg:grid-cols-12">
              {serviceCategories.map((cat, idx) => (
                <Link
                  key={cat.slug}
                  href={serviceHref(cat.slug)}
                  className={`group relative block outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 ${cellSpan(idx)}`}
                  style={{ outlineColor: "var(--ring)" }}
                >
                  <article
                    className={`relative flex h-full min-h-[168px] flex-col overflow-hidden rounded-[2rem] border border-neutral-200 bg-brand-panel p-8 shadow-[0_30px_80px_-60px_rgba(8,62,138,0.35)] ring-1 ring-neutral-950/[0.03] transition duration-300 group-hover:-translate-y-1 group-hover:border-sky-200/90 group-hover:shadow-[0_40px_90px_-55px_rgba(56,130,200,0.42)] sm:p-10 ${
                      idx === 1
                        ? "bg-gradient-to-br from-white via-white to-sky-50/80 shadow-[0_32px_80px_-60px_rgba(8,62,138,0.45)]"
                        : ""
                    }`}
                  >
                    {idx === 1 ? (
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-brand-accent/18 blur-3xl transition duration-500 group-hover:bg-brand-accent/25"
                      />
                    ) : null}

                    <span className="relative text-[10px] font-semibold uppercase tracking-caps-lg text-brand-accent">
                      {cat.badge}
                    </span>
                    <h3 className="relative mt-4 font-display text-xl font-semibold leading-snug text-neutral-950 md:text-[1.35rem]">
                      {cat.title}
                    </h3>
                    <p className="relative mt-3 flex-1 text-[0.98rem] leading-relaxed text-brand-mutedLight md:text-[1.03rem]">
                      {cat.shortDescription}
                    </p>
                    <span className="relative mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-caps-prominent text-neutral-950/75 transition group-hover:text-brand-accentHover">
                      Ver departamento
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-t border-neutral-100 bg-neutral-50/90 px-6 py-8 sm:flex-row sm:items-center sm:px-10 lg:px-14">
            <p className="max-w-xl text-sm leading-relaxed text-neutral-600">
              Coordinamos muestra piloto, fichas técnicas y ventanas de entrega con un solo interlocutor ejecutivo.
            </p>
            <Link
              href={routes.contacto}
              className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-neutral-900 px-10 py-3.5 text-[11px] font-semibold uppercase tracking-caps-sm text-white transition hover:bg-neutral-800 sm:w-auto"
            >
              Planificación técnica
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
