import { CatalogRail } from "@/components/CatalogRail";
import { CollectionToolbar } from "@/components/CollectionToolbar";
import { ContactSection } from "@/components/ContactSection";
import { CoreNav } from "@/components/CoreNav";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustStrip } from "@/components/TrustStrip";

export default function Home() {
  return (
    <div className="bg-brand-sheet text-neutral-900">
      <CoreNav />

      <main className="flex-1">
        <HeroSection />

        <div
          id="coleccion-sheet"
          className="relative z-10 -mt-14 overflow-hidden rounded-t-[1.75rem] border border-neutral-200/65 bg-brand-sheet shadow-[0_-28px_80px_-50px_rgba(5,46,96,0.35)] md:-mt-[4.65rem] md:rounded-t-[2.65rem]"
        >
          <CollectionToolbar />
          <CatalogRail />
          <GallerySection />
          <ServicesSection />
          <TrustStrip />
        </div>

        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
