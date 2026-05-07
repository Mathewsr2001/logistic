"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
import { site } from "@/content/site";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function processInstagramEmbeds() {
  window.instgrm?.Embeds.process();
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function InstagramPreviewCard() {
  const { instagram, motto } = site;
  const permalink = instagram.embedPermalink?.trim();

  useEffect(() => {
    if (permalink) processInstagramEmbeds();
  }, [permalink]);

  if (permalink) {
    return (
      <div className="mt-12">
        <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" onLoad={processInstagramEmbeds} />
        <div className="overflow-hidden rounded-[1.4rem] border border-white/15 bg-black/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={permalink}
            data-instgrm-version="14"
            style={{
              margin: 0,
              maxWidth: "540px",
              width: "100%",
              minWidth: "240px",
              background: "transparent",
              border: "none",
            }}
          />
        </div>
        <p className="mt-3 text-center text-[11px] text-brand-subtle">
          Contenido público en Instagram · puede tardar unos segundos en cargar.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 overflow-hidden rounded-[1.4rem] border border-white/15 bg-gradient-to-b from-white/[0.07] to-black/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] ring-1 ring-white/5">
      <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#833ab4]/30 via-[#fd1d1d]/18 to-[#fcb045]/22 px-4 py-2.5">
        <span className="text-[11px] font-semibold uppercase tracking-caps-sm text-white/95">Instagram oficial</span>
        <IconInstagram className="size-5 text-white/85" />
      </div>

      <div className="flex items-start gap-4 px-5 pt-5">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl ring-2 ring-white/20">
          <Image src={site.logoSrc} alt="" width={56} height={56} className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-white">@{instagram.handle}</p>
          <p className="mt-1 text-sm leading-snug text-brand-muted">{motto}</p>
          <p className="mt-2 text-[11px] text-brand-subtle">Operación en {site.country}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-1.5 px-5" aria-hidden>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-md bg-gradient-to-br from-neutral-700/85 to-neutral-900 ring-1 ring-white/10"
          />
        ))}
      </div>

      <Link
        href={instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 block border-t border-white/10 bg-white/[0.06] px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/12"
      >
        Abrir perfil · mensajes directos
      </Link>
    </div>
  );
}
