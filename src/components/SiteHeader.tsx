import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { MobileNav } from "./MobileNav";
import { site } from "@/content/site";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-brand-bg/70 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 top-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          href="#inicio"
          className="group flex items-center gap-3 text-white transition hover:text-white"
        >
          <LogoMark className="size-11 shrink-0 text-white" aria-hidden />
          <div className="leading-tight">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-brand-subtle">
              Logistic
            </p>
            <p className="text-sm font-semibold sm:text-base">Fire &amp; Rescue</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-muted transition hover:text-white"
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
            className="hidden text-sm font-semibold text-brand-accent transition hover:text-brand-accentHover lg:inline"
          >
            {site.instagram.handle}
          </Link>
          <Link
            href="#contacto"
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-ink transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:inline-flex"
            style={{ outlineColor: "var(--ring)" }}
          >
            Cotizar
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
