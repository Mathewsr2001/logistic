import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StorePageHeader } from "@/components/StorePageHeader";
import { getServiceCategory, serviceCategories } from "@/content/serviceCategories";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getServiceCategory(slug);
  if (!cat) return { title: "Departamento" };
  return {
    title: cat.title,
    description: cat.shortDescription,
  };
}

export default async function DepartamentoPage({ params }: Props) {
  const { slug } = await params;
  const cat = getServiceCategory(slug);
  if (!cat) notFound();

  return (
    <div className="bg-[#f2f6fa] pt-[9rem] md:pt-[9.5rem]">
      <StorePageHeader
        parentCrumb={{ href: routes.servicios, label: "Departamentos" }}
        kicker={cat.badge}
        title={cat.title}
        lead={cat.lead}
      />

      <section className="border-b border-neutral-200/80 px-4 py-14 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-[820px]">
          <div className="rounded-[2rem] border border-neutral-200/90 bg-white p-8 shadow-[0_32px_80px_-60px_rgba(8,62,138,0.28)] sm:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-caps-lg text-brand-accent">Alcance del departamento</p>
            <ul className="mt-8 space-y-5">
              {cat.highlights.map((item) => (
                <li key={item} className="flex gap-4 text-lead text-neutral-700">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block size-2 shrink-0 rounded-full bg-brand-accent shadow-[0_0_12px_rgba(56,182,255,0.65)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-center text-sm leading-relaxed text-neutral-500">
            Operación integral en {site.country}. Cotización formal, muestras piloto y ventanas de entrega coordinadas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={routes.contacto}
              className="inline-flex rounded-full bg-neutral-950 px-10 py-3.5 text-[11px] font-semibold uppercase tracking-caps-sm text-white shadow-[0_16px_40px_-18px_rgba(15,23,42,0.45)] transition hover:bg-neutral-800"
            >
              Coordinar cotización
            </Link>
            <Link
              href={routes.servicios}
              className="inline-flex rounded-full border border-neutral-300 bg-white px-10 py-3.5 text-[11px] font-semibold uppercase tracking-caps-sm text-neutral-900 transition hover:border-neutral-950 hover:bg-neutral-50"
            >
              Todos los departamentos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
