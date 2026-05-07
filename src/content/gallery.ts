/**
 * Referencias visuales para vitrina / PLP.
 * Imágenes: Pexels (licencia Pexels · uso libre). Solo fines de presentación en catálogo.
 * Parámetros de URL optimizados para Next/Image (ancho ~1400).
 */
const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;

export type GalleryImage = {
  src: string;
  title: string;
  alt: string;
};

export const galleryImages = [
  {
    src: px(7714867),
    title: "Uniforme táctico · referencia urbana",
    alt: "Referencia visual profesional: uniformes institucionales tipo fuerzas del orden (imagen ilustrativa de catálogo).",
  },
  {
    src: px(7715102),
    title: "Patrulla · presencia operativa",
    alt: "Escena referencial de patrulla y dotación coordinada para presentaciones institucionales (stock profesional).",
  },
  {
    src: px(4827720),
    title: "Protocolo calle · orden público",
    alt: "Imagen de referencia para uniformidad en operación diaria y protocolo exterior (ilustrativa).",
  },
  {
    src: px(5949768),
    title: "Conjunto formal · línea institucional",
    alt: "Conjunto presentado como referencia de estética corporativa e institucional (catálogo ilustrativo).",
  },
  {
    src: px(6754149),
    title: "Respuesta institucional · coordinación en campo",
    alt: "Personal de respuesta y equipamiento junto a unidad de emergencia; referencia profesional para catálogo institucional (imagen ilustrativa).",
  },
  {
    src: px(5638736),
    title: "Ceremonial · gala y gala táctica",
    alt: "Referencia de presentación formal y galas institucionales (stock para vitrina de catálogo).",
  },
  {
    src: px(4549414),
    title: "Campo · operación prolongada",
    alt: "Escena referencial de trabajo en campo y equipamiento resistente (ilustrativa para catálogo).",
  },
  {
    src: px(5673488),
    title: "Detalle · acabado y homogeneidad",
    alt: "Detalle referencial de uniformidad y acabado para fichas técnicas de presentación (stock profesional).",
  },
] as const satisfies readonly GalleryImage[];
