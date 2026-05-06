import Image from "next/image";
import { site } from "@/content/site";

const sizePx = { sm: 40, md: 48, lg: 64 } as const;

type BrandLogoSize = keyof typeof sizePx;

type BrandLogoProps = {
  size?: BrandLogoSize;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ size = "md", className = "", priority = false }: BrandLogoProps) {
  const dim = sizePx[size];

  return (
    <Image
      src={site.logoSrc}
      alt={site.logoAlt}
      width={dim}
      height={dim}
      priority={priority}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
