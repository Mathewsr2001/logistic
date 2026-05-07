import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/content/gallery";
import { routes } from "@/lib/routes";

const tiles = [
  {
    href: routes.catalogo,
    eyebrow: "Nueva temporada",
    title: "Catálogo visual",
    description: "Referencias de producción, fichas y vitrina estilo uniforme profesional.",
    image: galleryImages[0],
    cta: "Explorar colección",
  },
  {
    href: routes.servicios,
    eyebrow: "Capacidad interna",
    title: "Departamentos",
    description: "Líneas tácticas, ceremonial y logística con un solo canal ejecutivo.",
    image: galleryImages[4],
    cta: "Ver capacidades",
  },
  {
    href: routes.contacto,
    eyebrow: "Ventas ejecutivas",
    title: "Cotizaciones",
    description: "Coordinación directa, muestras piloto y plazos acordes a tu institución.",
    image: galleryImages[6],
    cta: "Agendar conversación",
  },
] as const;

export function HomeExplore() {
  return (
    <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-12 lg:pb-24 lg:pt-10" aria-labelledby="explorar-titulo">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-caps-lg text-brand-accent">Tienda institucional</p>
          <h2 id="explorar-titulo" className="mt-4 font-display text-explore font-bold text-neutral-950">
            Recorrido por sección
          </h2>
          <p className="mt-4 text-lead text-brand-mutedLight">
            Cada área tiene su propia página: navegue como en una tienda de uniformes profesional y acceda al detalle
            completo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className="group relative flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-[0_40px_100px_-60px_rgba(15,52,110,0.45)] ring-1 ring-neutral-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_50px_100px_-55px_rgba(56,130,200,0.45)]"
            >
              <Image
                src={tile.image.src}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                placeholder={tile.image.src.startsWith("https://") ? "empty" : "blur"}
                className="object-cover opacity-85 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-95"
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/55 to-neutral-950/10" />

              <div className="relative mt-auto flex flex-col p-7">
                <p className="text-[10px] font-semibold uppercase tracking-caps-wider text-white/75">{tile.eyebrow}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-white md:text-[1.35rem] md:leading-snug">
                  {tile.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/82">{tile.description}</p>
                <span className="mt-8 inline-flex w-fit items-center text-[11px] font-semibold uppercase tracking-caps-mid text-brand-accent transition group-hover:text-white">
                  {tile.cta}
                  <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
