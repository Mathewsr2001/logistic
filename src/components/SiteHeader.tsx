import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { MobileNav } from "./MobileNav";
import { site } from "@/content/site";

const navLinks = [
  { href: "#inicio", label: "INICIO" },
  { href: "#coleccion-sheet", label: "COLECCIÓN" },
  { href: "#servicios", label: "DEPARTAMENTOS" },
  { href: "#galeria", label: "PORTAFOLIO" },
  { href: "#contacto", label: "COTIZACIONES" },
] as const;

function IconConsult() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden fill="none" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="10.65" cy="10.65" r="6.95" stroke="currentColor" />
      <path d="M16.95 17.25 21 21.3" stroke="currentColor" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.55">
      <path d="M8 11V9a4 4 0 1 1 8 0v2" strokeLinecap="round" />
      <rect x="5" y="10" width="14" height="11" rx="2" ry="2" strokeLinejoin="round" />
    </svg>
  );
}

type SiteHeaderProps = {
  elevated?: boolean;
};

export function SiteHeader({ elevated = false }: SiteHeaderProps) {
  return (
    <header
      className={`border-b border-white/10 backdrop-blur-xl transition-[background-color,backdrop-filter] duration-300 ease-out ${
        elevated
          ? "bg-brand-navyDeep/[0.97] shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-brand-navyDeep/88"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:h-[76px] lg:px-10">
        <Link href="#inicio" className="group flex items-center gap-3">
          <BrandLogo size="md" priority />
          <span className="hidden flex-col uppercase leading-snug md:flex">
            <span className="text-[0.72rem] font-semibold tracking-[0.52em] text-brand-gold/90 transition-colors group-hover:text-brand-gold">
              logistic
            </span>
            <span className="text-[15px] font-semibold tracking-[0.42em] text-white">Fire &amp; Rescue</span>
          </span>
          <span className="flex flex-col md:hidden">
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-brand-gold/90">logistic</span>
            <span className="text-sm font-semibold text-white">Fire &amp; Rescue</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[11px] font-semibold tracking-[0.2em] text-white lg:flex xl:gap-9" aria-label="Navegación principal">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-white/72 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand-accent after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <Link
            href="#contacto"
            className="hidden items-center rounded-full border border-transparent p-2.5 text-white/72 transition hover:bg-white/5 hover:text-white lg:inline-flex"
            aria-label="Consultar proyecto"
          >
            <IconConsult />
          </Link>
          <Link
            href={site.brochurePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-full border border-transparent p-2.5 text-white/72 transition hover:bg-white/5 hover:text-white lg:inline-flex"
            aria-label="Descargar brochure PDF"
          >
            <IconBriefcase />
          </Link>
          <Link
            href="#contacto"
            className="hidden rounded-full border border-white/18 bg-white/[0.04] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_0_0_1px_rgba(56,182,255,0.12)] transition hover:border-brand-accent/45 hover:bg-brand-accent/10 hover:text-brand-accent lg:inline-flex"
          >
            Agendar muestra
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
