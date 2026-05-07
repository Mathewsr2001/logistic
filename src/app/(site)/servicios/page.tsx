import type { Metadata } from "next";
import { ServicesSection } from "@/components/ServicesSection";
import { StorePageHeader } from "@/components/StorePageHeader";
import { TrustStrip } from "@/components/TrustStrip";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Departamentos",
  description: site.servicesHeadingLead,
};

export default function ServiciosPage() {
  return (
    <div className="bg-[#f2f6fa] pt-[9rem] md:pt-[9.5rem]">
      <StorePageHeader kicker="Departamentos" title={site.servicesHeadingTitle} lead={site.servicesHeadingLead} />
      <ServicesSection />
      <TrustStrip />
    </div>
  );
}
