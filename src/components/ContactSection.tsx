import Link from "next/link";
import { InstagramPreviewCard } from "@/components/InstagramPreviewCard";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-32 border-t border-white/5 bg-gradient-to-b from-brand-bg via-brand-bg to-brand-ink pb-28 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.06fr_minmax(0,0.94fr)] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-caps-lg text-brand-accent">
              Coordinación directa
            </p>
            <h2 className="mt-6 font-display text-page-title font-bold leading-[1.15] text-white text-pretty">
              Estamos preparados para levantamientos de colección serios
            </h2>
            <p className="mt-6 text-lead text-brand-muted">
              Comparte manuales, tallas esperadas y plazos institucionales. Canalizamos la respuesta desde
              canales públicos con el mismo nivel de formalidad esperado por tu cadena jerárquica.
            </p>

            <ul className="mt-12 divide-y divide-white/10 rounded-[1.85rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              {site.phones.map((phone) => (
                <li key={phone.tel} className="flex flex-wrap items-center justify-between gap-3 py-5 first:pt-0 last:pb-0">
                  <span className="text-[11px] font-semibold uppercase tracking-caps-md text-brand-subtle">
                    {phone.label}
                  </span>
                  <a
                    href={`tel:${phone.tel}`}
                    className="text-2xl font-semibold tracking-tight text-white transition-colors hover:text-brand-accent"
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
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-brand-accent/55 hover:bg-white/10"
              >
                Facebook · oficial
              </Link>
              <Link
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-brand-ink shadow-glow hover:bg-brand-accentHover"
              >
                Mensajes Instagram
              </Link>
              <Link
                href={site.brochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold text-brand-accent underline-offset-4 hover:text-brand-accentHover hover:underline"
              >
                Brochure descargable
              </Link>
            </div>
          </div>

          <aside className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-brand-accent/35 via-brand-elevated to-brand-bg p-[1px] shadow-lift">
            <div className="h-full rounded-[2.1rem] bg-brand-bg/90 p-10 backdrop-blur-2xl sm:p-12">
              <h3 className="font-display text-xl font-semibold text-white">Checklist de cotización ejecutiva</h3>
              <ol className="mt-8 space-y-5 text-body-sm text-brand-muted marker:text-brand-accent [&>li]:list-decimal [&>li]:pl-5">
                <li>Manual de insignias y normativa actualizada.</li>
                <li>Matriz tallas / género / composición institucional.</li>
                <li>Materiales requeridos o restricciones de color institucional.</li>
                <li>Fecha objetivo y puntos logísticos de entrega dentro del país.</li>
              </ol>
              <InstagramPreviewCard />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
