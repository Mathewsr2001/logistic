import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

/** UI y cuerpo: legible, uso institucional y largos bloques de texto. */
const ibmSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

/** Titulares y marca editorial (serif técnico IBM Plex). */
const ibmSerif = IBM_Plex_Serif({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `${site.name} · Uniformes institucionales Ecuador`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  icons: {
    icon: [{ url: site.logoSrc, type: "image/png" }],
    apple: [{ url: site.logoSrc, type: "image/png" }],
    shortcut: [{ url: site.logoSrc, type: "image/png" }],
  },
  keywords: [
    "uniformes militares Ecuador",
    "uniformes policía Ecuador",
    "gorras protocolarias Ecuador",
    "insignias institucionales",
    site.name.toLowerCase(),
  ],
  openGraph: {
    title: `${site.name} · ${site.motto}`,
    description: site.tagline,
    locale: "es_EC",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05050a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${ibmSans.variable} ${ibmSerif.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
