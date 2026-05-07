import { routes } from "@/lib/routes";

export type ServiceCategory = {
  slug: string;
  /** Rótulo corto en mayúsculas (vitrina / migas). */
  badge: string;
  title: string;
  shortDescription: string;
  /** Párrafo principal en la página de detalle. */
  lead: string;
  /** Viñetas de valor para la página de departamento. */
  highlights: readonly string[];
};

export const serviceCategories: readonly ServiceCategory[] = [
  {
    slug: "uniformes-militares-y-policiales",
    badge: "Fuerzas del orden",
    title: "Uniformes militares y policiales",
    shortDescription:
      "Confección a medida institucional, acabados formales y piezas tácticas con control de calidad.",
    lead:
      "Formalidad en gala y precisión en operativo: escalamos protocolo institucional con tallas proyectadas, rigor en escudos y repetición controlada en lote.",
    highlights: [
      "Acabados formales y líneas tácticas con misma base de calidad.",
      "Insignias, galonería y presentación alineada a su manual.",
      "Muestreo piloto antes de escalar volumen nacional.",
    ],
  },
  {
    slug: "bomberos-y-rescate",
    badge: "Rescate",
    title: "Bomberos y rescate",
    shortDescription:
      "Prendas de trabajo robustas, alta visibilidad y equipamiento alineado a normas operativas.",
    lead:
      "Equipamiento pensado para exposición, maniobras y turnos largos: materiales resistentes, reflectivos y confección que acompaña el movimiento en campo.",
    highlights: [
      "Alta visibilidad y durabilidad para intervención y rescate.",
      "Capas y prendas de trabajo coordinadas en identidad institucional.",
      "Asesoría para homogeneizar dotación en varias estaciones o batallones.",
    ],
  },
  {
    slug: "gorras-e-insignias",
    badge: "Protocolo",
    title: "Gorras e insignias",
    shortDescription:
      "Bordados, galones, escudos y detalles metálicos con presentación ceremonial impecable.",
    lead:
      "Detalle visible que refuerza autoridad y tradición: bordados densos, metal con relieve y acabados listos para ceremonia o uso diario institucional.",
    highlights: [
      "Bordados y aplicaciones metálicas con control de color y relieve.",
      "Gorras y accesorios de cabeza con proporción y acabado uniforme.",
      "Series cortas o lotes amplios con trazabilidad por referencia.",
    ],
  },
  {
    slug: "ropa-institucional-e-industrial",
    badge: "Industria",
    title: "Ropa institucional e industrial",
    shortDescription:
      "Uniformes corporativos, trabajo y seguridad industrial con durabilidad y estética uniforme.",
    lead:
      "Branding corporativo y seguridad en planta: prendas que mantienen legibilidad de marca y confort en jornadas exigentes.",
    highlights: [
      "Uniformidad entre sedes con matrices de tallas y reposición ordenada.",
      "Tejidos y cortes pensados para trabajo e higiene industrial.",
      "Identidad visual coherente en chalecos, overoles y líneas administrativas.",
    ],
  },
] as const;

export function getServiceCategory(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return serviceCategories.map((c) => c.slug);
}

export function serviceHref(slug: string): string {
  return `${routes.servicios}/${slug}`;
}
