import { HeroSection } from "@/components/HeroSection";
import { HomeExplore } from "@/components/HomeExplore";
import { TrustStrip } from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div
        id="coleccion-sheet"
        className="relative z-10 -mt-14 overflow-hidden rounded-t-[1.75rem] border border-neutral-200/65 bg-[#f2f6fa] shadow-[0_-28px_80px_-50px_rgba(5,46,96,0.35)] md:-mt-[4.65rem] md:rounded-t-[2.65rem]"
      >
        <HomeExplore />
        <TrustStrip />
      </div>
    </>
  );
}
