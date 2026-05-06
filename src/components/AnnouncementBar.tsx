import Link from "next/link";
import { site } from "@/content/site";

export function AnnouncementBar() {
  return (
    <div className="relative border-b border-white/10 bg-black text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/85 to-transparent"
      />
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-10">
        <p className="flex items-center gap-2">
          <span aria-hidden className="inline-flex size-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15">
            <svg viewBox="0 0 24 24" className="size-[18px]" fill="none">
              <path
                d="M4 16h13l4-9H10l-.7-4H5v13Z"
                stroke="currentColor"
                strokeWidth="1.35"
                strokeLinejoin="round"
              />
              <path d="M8 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-white">{site.promoBar}</span>
        </p>
        <div className="flex items-center gap-4">
          <span className="hidden text-[10px] text-white/50 sm:inline">
            Seguimos en redes · Cotiza con referencias institucionales
          </span>
          <div className="flex items-center gap-3 text-white">
            <Link
              href={site.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-brand-gold/40 hover:bg-white/10 hover:text-brand-gold"
              aria-label={`Facebook · ${site.facebook.pageName}`}
            >
              <svg viewBox="0 0 24 24" className="size-4 fill-current"><path d="M14 13.5h2.6L17 11h-3V9c0-.8.29-1.36 1.37-1.36H17V5.5h-2c-2 0-3 1.2-3 2.93V11H9v2.5h3V19h3v-5.5Z" /></svg>
            </Link>
            <Link
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-brand-accent/40 hover:bg-white/10 hover:text-brand-accent"
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
