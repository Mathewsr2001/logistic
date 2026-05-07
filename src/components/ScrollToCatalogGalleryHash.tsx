"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToCatalogGaleria } from "@/lib/scrollCatalogGaleria";

/**
 * Next/App Router no siempre lleva el scroll al # de la URL al llegar desde un <Link>.
 * Asegura que #galeria en /catalogo muestre la vitrina Portafolio.
 */
export function ScrollToCatalogGalleryHash() {
  const pathname = usePathname();
  const path = pathname?.split("?")[0]?.replace(/\/$/, "") ?? "";

  useEffect(() => {
    if (path !== "/catalogo") return;

    const run = () => {
      const id = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
      if (id !== "galeria") return;
      window.requestAnimationFrame(() => scrollToCatalogGaleria());
    };

    const t = window.setTimeout(run, 80);
    window.addEventListener("hashchange", run);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", run);
    };
  }, [path]);

  return null;
}
