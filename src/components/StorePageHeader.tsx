import Link from "next/link";
import { routes } from "@/lib/routes";

type StorePageHeaderProps = {
  kicker: string;
  title: string;
  lead?: string;
  /** Migas: Inicio / enlace / texto final (`kicker`). */
  parentCrumb?: { href: string; label: string };
};

export function StorePageHeader({ kicker, title, lead, parentCrumb }: StorePageHeaderProps) {
  return (
    <header className="border-b border-neutral-200 bg-white px-4 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <nav className="text-[11px] font-semibold uppercase tracking-caps text-neutral-500" aria-label="Migas">
          <Link href={routes.home} className="text-neutral-500 transition hover:text-brand-accent">
            Inicio
          </Link>
          <span className="mx-2.5 text-neutral-300" aria-hidden>
            /
          </span>
          {parentCrumb ? (
            <>
              <Link href={parentCrumb.href} className="text-neutral-500 transition hover:text-brand-accent">
                {parentCrumb.label}
              </Link>
              <span className="mx-2.5 text-neutral-300" aria-hidden>
                /
              </span>
            </>
          ) : null}
          <span className="text-neutral-900">{kicker}</span>
        </nav>
        <h1 className="mt-5 font-display text-page-title font-bold text-neutral-950">
          {title}
        </h1>
        {lead ? (
          <p className="mt-4 max-w-[42rem] text-lead text-brand-mutedLight">{lead}</p>
        ) : null}
      </div>
    </header>
  );
}
