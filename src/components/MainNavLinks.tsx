"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import { scrollToCatalogGaleria } from "@/lib/scrollCatalogGaleria";

/** Hash sincronizado con cambios de ruta (# no dispara siempre hashchange tras replaceState). */
function useSyncedHash(pathname: string) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(typeof window !== "undefined" ? window.location.hash : "");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    setHash(typeof window !== "undefined" ? window.location.hash : "");
  }, [pathname]);

  return { hash, syncHash: () => setHash(typeof window !== "undefined" ? window.location.hash : "") };
}

const items = [
  { href: routes.home, label: "INICIO", active: (p: string, h: string) => (void h, p === "/") },
  {
    href: routes.catalogo,
    label: "COLECCIÓN",
    active: (p: string, h: string) => p.startsWith(routes.catalogo) && h !== "#galeria",
  },
  {
    href: routes.servicios,
    label: "DEPARTAMENTOS",
    active: (p: string, h: string) => (void h, p.startsWith(routes.servicios)),
  },
  {
    href: `${routes.catalogo}#galeria`,
    label: "PORTAFOLIO",
    active: (p: string, h: string) => p.startsWith(routes.catalogo) && h === "#galeria",
  },
  {
    href: routes.contacto,
    label: "COTIZACIONES",
    active: (p: string, h: string) => (void h, p.startsWith(routes.contacto)),
  },
] as const;

export function MainNavLinks() {
  const pathname = usePathname() ?? "/";
  const { hash, syncHash } = useSyncedHash(pathname);

  return (
    <>
      {items.map((item) => {
        const isActive = item.active(pathname, hash);
        const portfolio = item.label === "PORTAFOLIO";
        const onCatalog =
          pathname === routes.catalogo || pathname.startsWith(`${routes.catalogo}/`);

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            {...(portfolio
              ? {
                  onClick: (e: MouseEvent<HTMLAnchorElement>) => {
                    if (!onCatalog) return;
                    e.preventDefault();
                    const next = `${routes.catalogo}#galeria`;
                    if (typeof window.history.replaceState === "function") {
                      window.history.replaceState(null, "", next);
                      syncHash();
                    }
                    window.requestAnimationFrame(() => scrollToCatalogGaleria());
                  },
                }
              : {})}
            className={`relative py-2 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-brand-accent after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100 ${
              isActive ? "text-white after:scale-x-100" : "text-white/72 after:scale-x-0"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
