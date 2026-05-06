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
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
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
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        shimmer: "shimmer 7s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
