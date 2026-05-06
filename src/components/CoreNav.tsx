import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader";

export function CoreNav() {
  return (
    <div className="fixed inset-x-0 top-0 z-[80] backdrop-blur-sm">
      <AnnouncementBar />
      <SiteHeader />
    </div>
  );
}
