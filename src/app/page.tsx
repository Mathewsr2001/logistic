import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { TrustStrip } from "@/components/TrustStrip";
import { CatalogRail } from "@/components/CatalogRail";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-bg">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TrustStrip />
        <CatalogRail />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
