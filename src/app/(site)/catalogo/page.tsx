import type { Metadata } from "next";
import { CatalogRail } from "@/components/CatalogRail";
import { CollectionToolbar } from "@/components/CollectionToolbar";
import { GallerySection } from "@/components/GallerySection";
import { ScrollToCatalogGalleryHash } from "@/components/ScrollToCatalogGalleryHash";
import { StorePageHeader } from "@/components/StorePageHeader";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Catálogo de producción",
  description: site.galleryHeadingLead,
};

export default function CatalogoPage() {
  return (
    <div className="pt-[9rem] md:pt-[9.5rem]">
      <ScrollToCatalogGalleryHash />
      <StorePageHeader kicker={site.galleryHeadingKicker} title={site.galleryHeadingTitle} lead={site.galleryHeadingLead} />

      <div id="coleccion-sheet" className="border-t border-neutral-200/80 bg-[#f2f6fa]">
        <CollectionToolbar />
        <CatalogRail />
        <GallerySection />
      </div>
    </div>
  );
}
