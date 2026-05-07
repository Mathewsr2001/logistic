import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";

function splitHeroTitle(heading: string) {
  const parts = heading.trim().split(/\s+/);
  if (parts.length < 2) {
    return { first: heading, rest: "" as string | null };
  }
  return { first: parts[0]!, rest: parts.slice(1).join(" ") };
}

export function HeroSection() {
  const { first: titleFirst, rest: titleRest } = splitHeroTitle(site.catalogHeroHeading);

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] md:min-h-[min(900px,calc(100svh))]"
      aria-labelledby="hero-titulo"
    >
      <Image
        src={site.heroBannerSrc}
        alt={site.heroBannerAlt}
        fill
        priority
        placeholder="blur"
        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='1.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23040b17'/%3E%3C/svg%3E"
        sizes="100vw"
        className="object-cover"
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-mesh-hero opacity-90" />
        <div className="absolute inset-0 bg-noise opacity-[0.14] mix-blend-overlay [background-size:220px_220px]" />
        <div className="absolute inset-x-0 top-0 h-[52%] bg-gradient-to-b from-neutral-950/85 via-neutral-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navyHero via-brand-navyDeep/[0.92] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div
          className="absolute -bottom-32 left-1/2 h-[min(85vh,720px)] w-[min(140vw,1200px)] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(56,182,255,0.22) 0%, rgba(10,22,44,0.05) 52%, transparent 68%)",
          }}
        />
      </div>

      <div className="relative flex min-h-[inherit] flex-col justify-end pb-14 md:pb-24">
        <div className="relative mx-auto w-full max-w-[1600px] px-4 pt-12 sm:px-6 md:pt-16 lg:px-10">
          <div className="pointer-events-none absolute right-4 top-8 z-10 sm:right-6 sm:top-10 lg:right-10 lg:top-12">
            <span
              className="inline-flex select-none items-center justify-center rounded-lg border border-white/50 bg-neutral-950/75 px-1.5 py-0.5 font-sans text-[8px] font-bold uppercase tracking-[0.12em] text-white/95 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.6)] ring-1 ring-white/12 backdrop-blur-md sm:text-[9px]"
              aria-label="Ecuador"
              title="Ecuador"
            >
              EC
            </span>
          </div>

          <div className="max-w-[min(46rem,100%)] animate-fade-up">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/15 bg-gradient-to-br from-black/55 via-black/40 to-black/30 p-7 shadow-card ring-1 ring-white/[0.06] backdrop-blur-xl sm:rounded-[1.65rem] sm:p-9 md:p-10">
              <div
                className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full opacity-50 blur-3xl"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(56,182,255,0.35), transparent 65%)",
                }}
              />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-caps-lg text-brand-accent/95">
                  {site.name}
                </p>

                <div className="mt-5 inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                  <span
                    aria-hidden
                    className="inline-flex h-2 w-2 shrink-0 rounded-full bg-brand-accent shadow-[0_0_14px_rgba(56,182,255,0.85)]"
                  />
                  <span className="text-[10px] font-semibold uppercase tracking-caps-lg text-white/95">
                    {site.motto}
                  </span>
                </div>

                <h1
                  id="hero-titulo"
                  className="mt-7 text-balance text-pretty text-white md:mt-8"
                >
                  {titleRest ? (
                    <>
                      <span className="mb-2 block sm:mb-2.5">
                        <span className="relative inline-block font-sans text-[clamp(0.7rem,1.15vw,0.82rem)] font-semibold uppercase tracking-[0.44em] text-brand-gold [text-shadow:0_0_28px_rgba(212,184,122,0.38)] sm:tracking-[0.48em]">
                          <span className="relative inline-block pb-2.5 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:rounded-full after:opacity-[0.96] after:[background-image:linear-gradient(90deg,rgba(212,184,122,0.2)_0%,rgba(212,184,122,1)_22%,rgba(56,182,255,0.55)_52%,rgba(212,184,122,1)_78%,rgba(212,184,122,0.15)_100%)] after:[background-size:220%_100%] after:animate-hero-underline-flow motion-reduce:after:animate-none">
                            {titleFirst}
                          </span>
                        </span>
                      </span>
                      <span className="block font-display text-[clamp(2.5rem,6.15vw,4rem)] font-bold leading-[0.98] tracking-[-0.032em] [text-shadow:0_4px_36px_rgba(0,0,0,0.58),0_0_72px_rgba(56,182,255,0.14),0_1px_0_rgba(255,255,255,0.08)]">
                        {titleRest}
                      </span>
                    </>
                  ) : (
                    <span className="block font-display text-[clamp(2.5rem,6.15vw,4rem)] font-bold leading-[0.98] tracking-[-0.032em] [text-shadow:0_4px_36px_rgba(0,0,0,0.58),0_0_72px_rgba(56,182,255,0.14),0_1px_0_rgba(255,255,255,0.08)]">
                      {titleFirst}
                    </span>
                  )}
                </h1>

                <p className="mt-6 max-w-xl border-l-[3px] border-brand-accent/85 pl-5 text-[1.05rem] leading-relaxed text-white/[0.92] md:text-[1.125rem] md:leading-[1.7]">
                  {site.heroHeadline}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    href={routes.contacto}
                    className="inline-flex min-h-[3rem] min-w-[11.5rem] items-center justify-center rounded-full bg-white px-8 text-[13px] font-semibold uppercase tracking-caps-tight text-brand-navyDeep shadow-[0_12px_40px_-8px_rgba(56,182,255,0.35),0_16px_48px_-12px_rgba(0,0,0,0.55)] transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ outlineColor: "var(--ring)" }}
                  >
                    Coordinar proyecto
                  </Link>
                  <Link
                    href={`${routes.catalogo}#galeria`}
                    className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-white/30 bg-white/[0.08] px-8 text-[13px] font-semibold uppercase tracking-caps-tight text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition hover:border-brand-accent/55 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ outlineColor: "var(--ring)" }}
                  >
                    Ver catálogo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
