"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

const navLinks = [
  { href: "#coleccion-sheet", label: "Colección" },
  { href: "#servicios", label: "Departamentos" },
  { href: "#galeria", label: "Portafolio" },
  { href: "#contacto", label: "Cotizaciones" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{ outlineColor: "var(--ring)" }}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden fill="none">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-[200] flex flex-col bg-brand-ink/97 px-5 pb-10 pt-24 backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
        >
          <div className="mb-10 flex items-center gap-3 border-b border-white/10 pb-8">
            <BrandLogo size="md" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-subtle">Logistic</p>
              <p className="text-lg font-semibold text-white">Fire &amp; Rescue</p>
            </div>
          </div>
          <nav className="flex flex-1 flex-col gap-6 text-2xl font-semibold text-white">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 pb-4 text-brand-muted transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-base font-semibold text-brand-ink shadow-glow"
          >
            Cotizar ahora
          </Link>
        </div>
      ) : null}
    </div>
  );
}
