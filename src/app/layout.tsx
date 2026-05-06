import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
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
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
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
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>{children}</body>
    </html>
  );
}
