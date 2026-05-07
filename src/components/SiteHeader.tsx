import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { MainNavLinks } from "./MainNavLinks";
import { MobileNav } from "./MobileNav";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";

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
      className={`border-b border-white/[0.09] backdrop-blur-xl transition-[background-color,box-shadow] duration-500 ease-in-out ${
        elevated
          ? "bg-brand-navyDeep/[0.945] shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.045)]"
          : "bg-brand-navyDeep/[0.905]"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:h-[76px] lg:px-10">
        <Link
          href={routes.home}
          className="group/brand flex min-w-0 items-center gap-3 sm:gap-3.5 lg:gap-4"
        >
          <BrandLogo size="md" priority />
          <span
            className="hidden h-14 w-px shrink-0 bg-gradient-to-b from-white/0 via-white/35 to-white/0 md:block"
            aria-hidden
          />
          <span className="hidden min-w-0 flex-col items-start gap-0.5 md:flex">
            <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-gold/95 [text-shadow:0_0_24px_rgba(212,184,122,0.35)] transition-[color,text-shadow] duration-300 group-hover/brand:text-brand-gold group-hover/brand:[text-shadow:0_0_28px_rgba(212,184,122,0.45)]">
              Logistic
            </span>
            <span className="flex flex-wrap items-baseline gap-x-1 font-display text-[0.92rem] font-semibold leading-none tracking-[0.06em] text-white sm:text-[0.98rem] lg:text-[1.06rem]">
              <span className="[text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">Fire</span>
              <span className="font-normal text-white/45">&amp;</span>
              <span className="[text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">Rescue</span>
            </span>
            <span className="mt-0.5 h-px w-8 max-w-full bg-gradient-to-r from-brand-accent/80 to-transparent opacity-80 transition-all duration-300 group-hover/brand:w-12 group-hover/brand:from-brand-accent" />
          </span>
          <span className="flex min-w-0 flex-col items-start gap-0.5 md:hidden">
            <span className="font-display text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-gold/95 [text-shadow:0_0_16px_rgba(212,184,122,0.3)]">
              Logistic
            </span>
            <span className="font-display text-[0.8rem] font-semibold leading-tight tracking-[0.04em] text-white">
              <span className="[text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">Fire</span>{" "}
              <span className="text-white/40">&amp;</span>{" "}
              <span className="[text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">Rescue</span>
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-nav text-white lg:flex xl:gap-9"
          aria-label="Navegación principal"
        >
          <MainNavLinks />
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <Link
            href={routes.contacto}
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
            href={routes.contacto}
            className="hidden rounded-full border border-white/18 bg-white/[0.04] px-5 py-2 text-[11px] font-semibold uppercase tracking-nav text-white shadow-[0_0_0_1px_rgba(56,182,255,0.12)] transition hover:border-brand-accent/45 hover:bg-brand-accent/10 hover:text-brand-accent lg:inline-flex"
          >
            Agendar muestra
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
