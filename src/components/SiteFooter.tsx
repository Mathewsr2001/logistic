import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  const legalLinks = [
    { href: site.brochurePdf, label: "Catalogo institucional" },
    { href: site.instagram.url, label: "Instagram oficial" },
    { href: site.facebook.url, label: "Facebook" },
    { href: "#contacto", label: "Ventas ejecutivas" },
  ];

  return (
    <footer className="border-t border-white/10 bg-brand-ink py-14">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto_auto] lg:gap-16 lg:px-10">
        <div className="max-w-md">
          <div className="flex items-start gap-4">
            <LogoMark className="size-16 shrink-0 text-white" />
            <div>
              <p className="font-display text-xl font-semibold text-white">{site.legalName}</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">{site.tagline}</p>
            </div>
          </div>
          <Link
            href="#contacto"
            className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-slate-100"
          >
            Conversar proyecto
          </Link>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-subtle">Enlaces</p>
          <ul className="mt-6 space-y-4 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  target={link.href.startsWith("#") ? undefined : "_blank"}
                  rel={link.href.startsWith("#") ? undefined : "noreferrer noopener"}
                  className="text-brand-muted transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-subtle">Central telefónica</p>
          <ul className="mt-6 space-y-3 text-lg font-semibold text-white">
            {site.phones.map((p) => (
              <li key={p.tel}>
                <Link href={`tel:${p.tel}`} className="transition hover:text-brand-accent">
                  {p.display}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-2 text-[0.76rem] text-brand-subtle uppercase tracking-[0.24em]">
            <p>{site.country}</p>
            <p>{site.shipping}</p>
          </div>
        </div>
      </div>
      <p className="mt-16 border-t border-white/10 px-6 pt-10 text-center text-[0.71rem] text-brand-subtle md:text-[0.74rem]">
        © {year} {site.legalName}. {site.country}. Diseñado como vitrina ejecutiva institucional.
      </p>
    </footer>
  );
}
