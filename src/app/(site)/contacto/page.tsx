import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { StorePageHeader } from "@/components/StorePageHeader";

export const metadata: Metadata = {
  title: "Cotizaciones",
  description:
    "Coordinación directa con Logistic Fire & Rescue: teléfonos, redes y canal formal para cotizaciones institucionales.",
};

export default function ContactoPage() {
  return (
    <div className="pt-[9rem] md:pt-[9.5rem]">
      <div className="border-b border-neutral-200 bg-white">
        <StorePageHeader
          kicker="Ventas"
          title="Cotizaciones y coordinación"
          lead="Un solo interlocutor para muestras, fichas técnicas y ventanas de entrega."
        />
      </div>
      <ContactSection />
    </div>
  );
}
