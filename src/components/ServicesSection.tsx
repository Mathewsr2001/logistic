import Link from "next/link";
import { site } from "@/content/site";

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-32 border-neutral-100 bg-neutral-50 px-4 py-24 sm:px-6 lg:scroll-mt-40 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[44rem]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-brand-mutedLight">
            Departamentos y capacidades tácticas
          </p>
          <h2 className="mt-8 text-[2.2rem] font-bold leading-snug tracking-tight text-neutral-950 md:text-[2.85rem]">
            Operamos como tus socios industriales cuando el proyecto exige nivel protocolario y precisión táctica
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-brand-mutedLight">
            Estructuras similares a los PLP de colecciones instituciones globales pero con coordinación ejecutiva desde
            Ecuador para que cada muestra llegue ordenada donde la jerarquía lo exige.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          <article className="relative overflow-hidden rounded-[2.2rem] border border-neutral-200 bg-gradient-to-br from-brand-panel via-neutral-50 to-neutral-100 p-11 shadow-[0_42px_90px_-60px_rgba(7,54,136,0.55)] lg:col-span-7">
            <div className="absolute inset-x-24 top-[-30%] h-48 rounded-full bg-brand-accent/25 blur-[150px]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              Departamento institucional
            </span>
            <h3 className="mt-6 font-display text-3xl font-bold text-neutral-950 md:text-[2rem]">{site.services[0]!.title}</h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-mutedLight">{site.services[0]!.description}</p>
            <Link
              href="#contacto"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-neutral-900 px-9 py-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-neutral-800"
            >
              Planificación técnica
            </Link>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-brand-panel p-10 shadow-[0_32px_80px_-60px_rgba(8,62,138,0.45)] lg:col-span-5">
            <div className="absolute -right-4 top-[-18%] h-40 w-40 rounded-full bg-brand-gold/30 blur-[150px]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-600">Rescate</span>
            <h3 className="mt-6 text-[1.6rem] font-semibold text-neutral-950">{site.services[1]!.title}</h3>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-brand-mutedLight">{site.services[1]!.description}</p>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-brand-panel p-10 shadow-[0_30px_80px_-60px_rgba(8,62,138,0.35)] lg:col-span-6">
            <h3 className="text-[1.45rem] font-semibold text-neutral-950">{site.services[2]!.title}</h3>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-brand-mutedLight">{site.services[2]!.description}</p>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-brand-panel p-10 shadow-[0_30px_80px_-60px_rgba(8,62,138,0.35)] lg:col-span-6">
            <h3 className="text-[1.45rem] font-semibold text-neutral-950">{site.services[3]!.title}</h3>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-brand-mutedLight">{site.services[3]!.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
