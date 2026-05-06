import Link from "next/link";
import { galleryImages } from "@/content/gallery";

export function CollectionToolbar() {
  const total = galleryImages.length;

  return (
    <div className="border-b border-neutral-200 bg-brand-panel px-4 py-8 sm:px-6 lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#servicios"
            className="inline-flex items-center gap-3 rounded border border-neutral-900 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ outlineColor: "var(--ring)" }}
          >
            <svg viewBox="0 0 22 18" className="size-[18px]" aria-hidden fill="none">
              <path d="M5 2h12M5 9h12M5 16h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="9" cy="2" r="2" fill="currentColor" stroke="none" />
              <circle cx="14" cy="9" r="2" fill="currentColor" stroke="none" />
              <circle cx="10.5" cy="16" r="2" fill="currentColor" stroke="none" />
            </svg>
            Mostrar líneas
          </Link>
          <p className="text-[0.9375rem] text-brand-mutedLight">
            <span className="font-semibold text-neutral-900">{total}</span> referencias activas en colección
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded border border-neutral-900 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-900">
          <span>Orden</span>
          <span className="text-[0.75rem] font-medium normal-case tracking-normal text-brand-mutedLight">
            · destacados
          </span>
        </div>
      </div>
    </div>
  );
}
