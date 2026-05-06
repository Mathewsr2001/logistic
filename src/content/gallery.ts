export type GalleryImage = {
  src: `/galeria/${string}`;
  title: string;
  alt: string;
};

/** Archivos optimizados en `public/galeria` (JPEG exportado desde WhatsApp). */
export const galleryImages = [
  {
    src: "/galeria/logistic-01.jpeg",
    title: "Gorras y placa frontal",
    alt: "Primera vista de trabajo de confección de gorras y detalles de placa frontal.",
  },
  {
    src: "/galeria/logistic-02.jpeg",
    title: "Bordados y protocolo",
    alt: "Primera muestra alterna de trabajo de gorras ceremonial con bordado fino.",
  },
  {
    src: "/galeria/logistic-03.jpeg",
    title: "Ceremonial destacado",
    alt: "Muestra de gorra ceremonial para uso institucional.",
  },
  {
    src: "/galeria/logistic-04.jpeg",
    title: "Ceremonial en detalle",
    alt: "Otra vista de modelo ceremonial producido por Logistic Fire & Rescue.",
  },
  {
    src: "/galeria/logistic-05.jpeg",
    title: "Uniformidad y presentación",
    alt: "Imagen de uniformidad o presentación de pedido para fuerzas del orden.",
  },
  {
    src: "/galeria/logistic-06.jpeg",
    title: "Entrega y logística",
    alt: "Trabajo de confección o entrega de uniformes y accesorios.",
  },
  {
    src: "/galeria/logistic-07.jpeg",
    title: "Operativo y campo",
    alt: "Equipo o uniforme para operaciones de campo o rescate.",
  },
  {
    src: "/galeria/logistic-08.jpeg",
    title: "Calidad de acabado",
    alt: "Detalle de acabado de confección y presentación institucional.",
  },
] as const satisfies readonly GalleryImage[];
