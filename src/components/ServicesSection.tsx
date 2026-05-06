import { site } from "@/content/site";

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-28 border-y border-brand-border bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Capacidades
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
            Confianza institucional, confección a escala responsable
          </h2>
          <p className="mt-4 text-brand-muted leading-relaxed">
            Acompañamos a organismos públicos y privados desde el desarrollo muestra hasta grandes
            tandas, garantizando coherencia cromática, tallaje y ornamentación ceremonial.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {site.services.map((svc) => (
            <li
              key={svc.title}
              className="group relative overflow-hidden rounded-2xl border border-brand-border bg-brand-surface p-7 transition-colors hover:border-brand-accent/55"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -bottom-14 h-40 w-40 rounded-full bg-brand-accent/10 blur-[60px]"
              />
              <h3 className="text-xl font-semibold text-white">{svc.title}</h3>
              <p className="mt-4 text-brand-muted leading-relaxed">{svc.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
