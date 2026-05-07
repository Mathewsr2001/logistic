import Link from "next/link";
import { galleryImages } from "@/content/gallery";
import { routes } from "@/lib/routes";

function IconDepartments() {
  return (
    <svg viewBox="0 0 20 20" className="size-4 shrink-0 text-neutral-500 transition-colors group-hover:text-brand-accentHover" aria-hidden fill="none">
      <path
        d="M3.5 16.5V8.25h4.25v8.25M12.25 16.5V4h4.25v12.5M1 16.5h18"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSort() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5 shrink-0 opacity-90" aria-hidden fill="none">
      <path
        d="m4 10 4 4 4-4M4 6l4-4 4 4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CollectionToolbar() {
  const total = galleryImages.length;

  return (
    <div className="relative overflow-hidden border-b border-sky-200/30 bg-[#f2f6fa] px-4 py-6 sm:px-6 lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_70%_at_50%_-40%,rgba(56,182,255,0.07),transparent_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-50/50 via-transparent to-sky-100/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"
      />

      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Link
            href={routes.servicios}
            className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-sky-300/45 bg-sky-100/40 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-caps-sm text-neutral-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] ring-1 ring-sky-200/40 backdrop-blur-[2px] transition hover:border-brand-accent/45 hover:bg-sky-50/70 hover:text-neutral-950 hover:shadow-[0_10px_28px_-14px_rgba(56,130,200,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ outlineColor: "var(--ring)" }}
          >
            <IconDepartments />
            Ver departamentos
          </Link>

          <div className="flex items-center gap-4 sm:border-l sm:border-sky-200/50 sm:pl-6">
            <div className="flex items-end gap-2">
              <span className="font-display text-3xl font-semibold leading-none tabular-nums tracking-tight text-neutral-900">
                {total}
              </span>
              <span className="pb-0.5 text-[11px] font-semibold uppercase tracking-caps text-neutral-500">refs.</span>
            </div>
            <p className="max-w-[200px] text-sm leading-snug text-neutral-600 sm:max-w-none">
              Piezas publicadas en esta colección institucional.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:justify-end">
          <span className="text-[10px] font-semibold uppercase tracking-caps text-neutral-500">Vista tienda</span>
          <div className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-navyDeep to-[#152d52] px-4 py-2.5 text-white shadow-[0_12px_36px_-14px_rgba(56,130,200,0.38)] ring-1 ring-white/15">
            <IconSort />
            <span className="text-[11px] font-semibold uppercase tracking-caps-sm">Destacados</span>
            <span aria-hidden className="hidden sm:inline text-[10px] font-normal uppercase tracking-caps text-white/55">
              recomendado
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
