export const site = {
  name: "Logistic Fire & Rescue",
  legalName: "Logistic Fire & Rescue",
  username: "@logistic_ec",
  heroHeadline: "Equipamiento ceremonial y operativo, confeccionado con precisión institucional.",
  tagline:
    "Empresa de confección de uniformes, gorras e insignias para instituciones y fuerzas del orden.",
  motto: "Seriedad y cumplimiento",
  country: "Ecuador",
  shipping: "Envíos a todo el país",

  /** Líneas de catálogo (estilo storefront internacional adaptado al mercado institucional). */
  catalogLines: [
    { label: "Policía nacional", subtitle: "Formal, operativo e insignias" },
    { label: "Militares y ceremonial", subtitle: "Galantería y protocolo" },
    { label: "Bomberos y rescate", subtitle: "Trabajo, FR y alta visibilidad" },
    { label: "Tránsito y seguridad privada", subtitle: "Alto impacto visual" },
    { label: "Industrial y trabajo", subtitle: "Resistencia y uniformidad de marca" },
  ] as const,

  trustHighlights: [
    {
      title: "Confección institucional",
      body: "Tallas proyectadas, muestreo y control de repetición antes de escalar volumen.",
    },
    {
      title: "Bordados y metal",
      body: "Escudos con relieve, hilos metálicos y ornamentación ceremonial impecable.",
    },
    {
      title: "Logística nacional",
      body: "Coordinamos entrega con empaques listos para operaciones distribuidas en el país.",
    },
    {
      title: "Acompañamiento serio",
      body: "Comunicación clara, plazos acordados y entregas con trazabilidad de lote.",
    },
  ] as const,

  instagram: {
    handle: "logistic_ec",
    url: "https://instagram.com/logistic_ec",
  },
  facebook: {
    pageName: "Logistic Fire & Rescue",
    url: "https://www.facebook.com/LOGISTIC-fire-rescue-161094947272414",
  },

  phones: [
    { label: "Línea 1", tel: "+5932341933", display: "2341-933" },
    { label: "Línea 2", tel: "+5932071594", display: "2071-594" },
  ],

  services: [
    {
      title: "Uniformes militares y policiales",
      description:
        "Confección a medida institucional, acabados formales y piezas tácticas con control de calidad.",
    },
    {
      title: "Bomberos y rescate",
      description:
        "Prendas de trabajo robustas, alta visibilidad y equipamiento alineado a normas operativas.",
    },
    {
      title: "Gorras e insignias",
      description:
        "Bordados, galones, escudos y detalles metálicos con presentación ceremonial impecable.",
    },
    {
      title: "Ropa institucional e industrial",
      description:
        "Uniformes corporativos, trabajo y seguridad industrial con durabilidad y estética uniforme.",
    },
  ],

  brochurePdf: "/docs/logistic-catalogo.pdf",
} as const;
