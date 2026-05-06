import Link from "next/link";
import { site } from "@/content/site";

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden border-b border-sky-400/25 bg-gradient-to-r from-[#051018] via-[#0b2744] to-[#071a2e] text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-50/95 shadow-[inset_0_1px_0_0_rgba(125,211,252,0.12)]">
      {/* Luces atmosféricas */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-36 w-[22rem] -translate-y-1/2 rounded-full bg-sky-500/30 blur-[56px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-28 w-56 rounded-full bg-blue-400/25 blur-[48px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/55 to-transparent"
      />

      <div className="relative mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-10">
        <p className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="inline-flex size-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-sky-300/35 shadow-[0_0_20px_-4px_rgba(56,189,248,0.45)]"
          >
            <svg viewBox="0 0 24 24" className="size-[18px] text-sky-100" fill="none">
              <path
                d="M4 16h13l4-9H10l-.7-4H5v13Z"
                stroke="currentColor"
                strokeWidth="1.35"
                strokeLinejoin="round"
              />
              <path d="M8 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-sky-50">{site.promoBar}</span>
        </p>
        <div className="flex items-center gap-4">
          <span className="hidden text-[10px] font-medium normal-case tracking-normal text-sky-200/75 sm:inline">
            Seguimos en redes · Cotiza con referencias institucionales
          </span>
          <div className="flex items-center gap-3 text-sky-50">
            <Link
              href={site.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-sky-300/25 bg-white/10 transition hover:border-sky-200/45 hover:bg-white/18 hover:text-white"
              aria-label={`Facebook · ${site.facebook.pageName}`}
            >
              <svg viewBox="0 0 24 24" className="size-4 fill-current">
                <path d="M14 13.5h2.6L17 11h-3V9c0-.8.29-1.36 1.37-1.36H17V5.5h-2c-2 0-3 1.2-3 2.93V11H9v2.5h3V19h3v-5.5Z" />
              </svg>
            </Link>
            <Link
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-sky-300/25 bg-white/10 transition hover:border-brand-accent/55 hover:bg-sky-500/25 hover:text-white"
              aria-label={`Instagram · ${site.instagram.handle}`}
            >
              <svg viewBox="0 0 24 24" className="size-4 stroke-current stroke-[1.6] fill-none" aria-hidden>
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3.75" />
                <circle cx="16.85" cy="7.55" r="0.98" fill="currentColor" stroke="none" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
