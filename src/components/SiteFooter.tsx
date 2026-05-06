import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-surface pb-10 pt-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <div className="flex items-start gap-3">
            <LogoMark className="size-14 shrink-0 text-white" />
            <div>
              <p className="text-sm font-semibold text-white">{site.legalName}</p>
              <p className="mt-3 text-sm text-brand-muted">{site.tagline}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 text-sm sm:grid-cols-2 lg:justify-items-end">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-brand-muted">
              Coordinación telefónica
            </p>
            <ul className="mt-4 space-y-2 font-medium text-white">
              {site.phones.map((p) => (
                <li key={p.tel}>
                  <Link href={`tel:${p.tel}`} className="hover:text-brand-accent">
                    {p.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-brand-muted">Sociales</p>
            <ul className="mt-4 space-y-2 font-medium">
              <li>
                <Link
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-accent hover:text-brand-accentHover"
                >
                  Instagram ({site.instagram.handle})
                </Link>
              </li>
              <li>
                <Link
                  href={site.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-accent"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-10 px-6 text-center text-[0.6875rem] text-brand-muted/80 md:text-[0.7rem]">
        © {year} {site.legalName}. {site.country}. {site.motto}.
      </p>
    </footer>
  );
}
