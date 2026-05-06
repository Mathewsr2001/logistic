import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { site } from "@/content/site";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-border bg-brand-bg/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          className="group flex items-center gap-3 text-white transition-colors hover:text-white"
        >
          <LogoMark className="size-11 shrink-0 text-white" aria-hidden />
          <div className="leading-tight">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
              Logistic
            </p>
            <p className="text-sm font-semibold sm:text-base">Fire &amp; Rescue</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-brand-muted transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-brand-accent transition-colors hover:text-brand-accentHover sm:inline"
          >
            {site.instagram.handle}
          </Link>
          <Link
            href="#contacto"
            className="rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-bg shadow-lg shadow-brand-accent/25 transition-colors hover:bg-brand-accentHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            Cotizar
          </Link>
        </div>
      </div>
    </header>
  );
}
