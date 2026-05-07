import Image from "next/image";
import { site } from "@/content/site";

/** Alto visual por contexto; el PNG es rectangular → solo altura fija, ancho automático. */
const heightClass = {
  sm: "h-10",
  /** Cabecera / drawer: un poco más alto para leer “LOGISTIC” en el icono. */
  md: "h-14",
  lg: "h-16",
} as const;

/** Dimensiones intrínsecas del PNG en `public/logo/logistic-logoicon.png` (generado desde logistic-LOGOICON). */
const LOGO_INTRINSIC = { width: 619, height: 519 } as const;

type BrandLogoSize = keyof typeof heightClass;

type BrandLogoProps = {
  size?: BrandLogoSize;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ size = "md", className = "", priority = false }: BrandLogoProps) {
  return (
    <Image
      src={site.logoSrc}
      alt={site.logoAlt}
      width={LOGO_INTRINSIC.width}
      height={LOGO_INTRINSIC.height}
      priority={priority}
      sizes="(max-width: 768px) 160px, 200px"
      className={`${heightClass[size]} w-auto max-w-[min(240px,58vw)] shrink-0 object-contain object-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] ${className}`}
    />
  );
}
