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
  promoBar:
    "Equipamiento institucional ceremonial y operativo · Ecuador · Muestreo técnico y lotes con trazabilidad",
  /** Título cinematográfico de colección — estilo PLP premium (uppercase recomendado en UI). */
  catalogHeroHeading: "Uniformes institucionales",

  /** Banner principal a pantalla (`next/image` fill). Sustituye el archivo en `public/banner/` si quieres otra foto. */
  heroBannerSrc: "/banner/hero-banner.jpg",
  heroBannerAlt:
    "Uniformidad institucional y equipamiento para fuerzas del orden — banner Logistic Fire & Rescue Ecuador.",

  /** Logo cabecera · PNG con alpha (`public/logo/logistic-logoicon.png`). Generar con `node scripts/process-logo.mjs` desde `public/galeria/logistic-LOGOICON.jpeg`. */
  logoSrc: "/logo/logistic-logoicon.png",
  logoAlt: "Logistic Fire & Rescue — logotipo",

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
    /**
     * Opcional: URL pública de un post o reel para incrustar la vista previa oficial de Instagram.
     * Ejemplo: https://www.instagram.com/reel/XXXXXXXXXXX/
     * Si no se define, se muestra una tarjeta tipo perfil con enlace al canal.
     */
    embedPermalink: "",
  },
  facebook: {
    pageName: "Logistic Fire & Rescue",
    url: "https://www.facebook.com/LOGISTIC-fire-rescue-161094947272414",
  },

  phones: [
    { label: "Línea 1", tel: "+5932341933", display: "2341-933" },
    { label: "Línea 2", tel: "+5932071594", display: "2071-594" },
  ],

  /** Cabecera · #servicios (breve; el detalle está en cada departamento). */
  servicesHeadingKicker: "Departamentos",
  servicesHeadingTitle: "Ceremonial, táctico e industrial",
  servicesHeadingLead:
    "Un solo canal ejecutivo para muestras, escalado de lote y entrega en Ecuador.",

  /** Bloque de cabecera · sección catálogo / galería (#galeria). */
  galleryHeadingKicker: "Referencias de taller",
  galleryHeadingTitle: "Catálogo fotográfico de producción",
  galleryHeadingLead:
    "Vistas de lote real para homologación visual y cotización institucional.",

  brochurePdf: "/docs/logistic-catalogo.pdf",
} as const;
