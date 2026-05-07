/** Scroll a la vitrina `#galeria` en la página catálogo. */
export function scrollToCatalogGaleria() {
  const el = document.getElementById("galeria");
  if (!el) return;
  const reduceMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}
