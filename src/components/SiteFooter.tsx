import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";

export function SiteFooter() {
  const year = new Date().getFullYear();

  const footerLinks = [
    { href: routes.catalogo, label: "Catálogo visual", external: false as const },
    { href: routes.servicios, label: "Departamentos", external: false as const },
    { href: routes.contacto, label: "Cotizaciones", external: false as const },
    { href: site.brochurePdf, label: "Catálogo institucional (PDF)", external: true as const },
    { href: site.instagram.url, label: "Instagram oficial", external: true as const },
    { href: site.facebook.url, label: "Facebook", external: true as const },
  ];

  return (
    <footer className="border-t border-white/10 bg-brand-ink py-14">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto_auto] lg:gap-16 lg:px-10">
        <div className="max-w-md">
          <div className="flex items-start gap-4">
            <BrandLogo size="lg" />
            <div>
              <p className="font-display text-xl font-semibold leading-snug text-white">{site.legalName}</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">{site.tagline}</p>
            </div>
          </div>
          <Link
            href={routes.contacto}
            className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-slate-100"
          >
            Conversar proyecto
          </Link>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-caps-md text-brand-subtle">Enlaces</p>
          <ul className="mt-6 space-y-4 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer noopener" : undefined}
                  className="text-brand-muted transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-caps-md text-brand-subtle">Central telefónica</p>
          <ul className="mt-6 space-y-3 text-lg font-semibold text-white">
            {site.phones.map((p) => (
              <li key={p.tel}>
                <Link href={`tel:${p.tel}`} className="transition hover:text-brand-accent">
                  {p.display}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-2 text-[0.76rem] text-brand-subtle uppercase tracking-caps-sm">
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
