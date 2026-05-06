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
          bg: "#0a0a0b",
          surface: "#121214",
          border: "#27272f",
          muted: "#94a3b8",
          accent: "#2997ff",
          accentHover: "#1d7edc",
          gold: "#c9a962",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(41,151,255,0.28), transparent 55%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' stitchTiles='stitch' numOctaves='3'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='0.09'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
