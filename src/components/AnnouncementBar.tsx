import Link from "next/link";
import { site } from "@/content/site";

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden border-b border-sky-400/25 bg-gradient-to-r from-[#051018] via-[#0b2744] to-[#071a2e] text-[11px] font-semibold uppercase tracking-caps-sm text-sky-50/95 shadow-[inset_0_1px_0_0_rgba(125,211,252,0.12)]">
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

      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-3 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 lg:px-10">
        <p className="flex min-w-0 flex-1 items-start gap-2.5 sm:items-center">
          <span
            aria-hidden
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-sky-300/35 shadow-[0_0_20px_-4px_rgba(56,189,248,0.45)]"
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
          <span className="min-w-0 flex-1 text-pretty text-sky-50">{site.promoBar}</span>
        </p>
        <div className="flex w-full shrink-0 flex-col items-end gap-2 sm:ml-4 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-5">
          <div className="hidden w-full max-w-[min(100%,26rem)] flex-col items-end gap-1 text-right sm:flex sm:w-auto sm:max-w-[20rem] lg:max-w-[24rem]">
            <span className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-sky-400/20 bg-white/[0.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-caps-sm text-sky-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <span aria-hidden className="inline-block size-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
              Canales institucionales
            </span>
            <span className="max-w-full text-[10px] leading-snug text-sky-100/75 sm:text-[11px]">
              Cotización formal con fichas de referencia y trazabilidad de lote.
            </span>
          </div>
          <div className="flex shrink-0 items-center justify-end gap-3 text-sky-50">
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
