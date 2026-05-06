import Link from "next/link";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-28 bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
              Coordinación directa
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
              Hablemos de su próximo lote o prototipo ceremonial
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Comparte referencias institucionales, tallas proyectadas y plazos. Respondemos desde
              canales públicos corporativos y confirmamos muestras antes de producir grandes
              volúmenes.
            </p>
            <ul className="mt-10 divide-y divide-white/10 rounded-3xl border border-brand-border bg-brand-surface px-8 py-6">
              {site.phones.map((phone) => (
                <li key={phone.tel} className="flex flex-wrap items-center justify-between gap-3 py-4 first:pt-0 last:pb-0">
                  <span className="text-sm uppercase tracking-[0.18em] text-brand-muted">
                    {phone.label}
                  </span>
                  <a
                    href={`tel:${phone.tel}`}
                    className="text-xl font-semibold text-white transition-colors hover:text-brand-accent"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={site.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-brand-border bg-brand-surface px-5 py-2.5 text-sm font-semibold text-white hover:border-brand-accent/60 hover:text-brand-accent"
              >
                Facebook — {site.facebook.pageName}
              </Link>
              <Link
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-bg shadow-lg shadow-brand-accent/35 hover:bg-brand-accentHover"
              >
                Mensaje Instagram
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-brand-border bg-gradient-to-br from-brand-surface to-brand-bg p-9 shadow-[0_40px_120px_-72px_rgba(41,151,255,0.9)] lg:p-10">
            <h3 className="text-xl font-semibold text-white">
              Lista de chequeo rápido para cotizar mejor
            </h3>
            <ol className="mt-6 space-y-4 text-sm leading-relaxed text-brand-muted marker:text-brand-accent [&>li]:pl-6 [&>li]:list-decimal">
              <li>Institución y manual de insignias vigente.</li>
              <li>Cantidades aproximadas por talla / género.</li>
              <li>Materiales deseados (mezclas, género institucional, etc.).</li>
              <li>Fecha objetivo de entrega y ubicación en el país.</li>
            </ol>
            <p className="mt-8 rounded-2xl bg-brand-accent/15 px-4 py-4 text-xs text-brand-accent ring-1 ring-brand-accent/40">
              {site.username} · {site.motto} · Producción enfocada en detalle ceremonial y trabajo
              de campo para equipos de respuesta en {site.country}.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
