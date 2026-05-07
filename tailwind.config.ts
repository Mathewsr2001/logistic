import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sheet: "#f2f6fa",
          panel: "#ffffff",
          mutedLight: "#5c6778",
          navyDeep: "#0a162c",
          navyHero: "#040b17",
          ink: "#030308",
          bg: "#05050a",
          surface: "#0d0d12",
          elevated: "#13131b",
          border: "rgba(255,255,255,0.08)",
          line: "rgba(255,255,255,0.12)",
          muted: "#9aa4b2",
          subtle: "#64748b",
          accent: "#38b6ff",
          accentSoft: "rgba(56,182,255,0.18)",
          accentHover: "#1fa2f0",
          gold: "#d4b87a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "Segoe UI", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
      },
      fontSize: {
        /** Hero principal (landing). */
        hero: ["clamp(2.15rem,5vw,3.35rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        /** Secciones tipo vitrina / PLP. */
        section: ["clamp(1.65rem,3.2vw,2.35rem)", { lineHeight: "1.18", letterSpacing: "-0.02em" }],
        /** Galería y bloques medios. */
        gallery: ["clamp(1.85rem,4vw,2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        /** Cabeceras de página interior. */
        "page-title": ["clamp(1.75rem,3.5vw,2.65rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        /** Tarjetas exploración inicio. */
        explore: ["clamp(1.65rem,3vw,2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        /** Párrafos destacados (cuerpo). */
        lead: ["1.0625rem", { lineHeight: "1.65" }],
        /** Texto secundario cómodo. */
        "body-sm": ["0.95rem", { lineHeight: "1.62" }],
      },
      letterSpacing: {
        /** Navegación superior estilo boutique. */
        nav: "0.2em",
        /** Microcopy en mayúsculas (CTA, etiquetas). */
        "caps-tight": "0.14em",
        "caps-sm": "0.22em",
        caps: "0.28em",
        "caps-md": "0.32em",
        "caps-lg": "0.38em",
        "caps-xl": "0.42em",
        /** Líneas de catálogo / referencias. */
        "caps-wider": "0.34em",
        /** Tarjetas y pies compactos. */
        "caps-prominent": "0.3em",
        /** Kicker intermedio (drawer, etiquetas). */
        "caps-mid": "0.26em",
        /** Micro-marca móvil. */
        "caps-logo": "0.4em",
        /** Logotipo tipográfico “LOGISTIC”. */
        brand: "0.52em",
      },
      boxShadow: {
        glow: "0 0 120px -20px rgba(56,182,255,0.55)",
        card: "0 24px 80px -40px rgba(0,0,0,0.85)",
        lift: "0 18px 60px -35px rgba(56,182,255,0.35)",
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(1200px 600px at 10% -10%, rgba(56,182,255,0.22), transparent 55%), radial-gradient(900px 500px at 85% 10%, rgba(212,184,122,0.08), transparent 50%), radial-gradient(600px 400px at 50% 120%, rgba(56,182,255,0.12), transparent 45%)",
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,5,10,0.2), rgba(5,5,10,0.95)), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' stitchTiles='stitch' numOctaves='3'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        /** Subrayado hero “UNIFORMES”: brillo que recorre de izquierda a derecha. */
        "hero-underline-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        shimmer: "shimmer 7s linear infinite",
        "hero-underline-flow": "hero-underline-flow 3.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
