import { CoreNav } from "@/components/CoreNav";
import { SiteFooter } from "@/components/SiteFooter";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f2f6fa] text-neutral-900">
      <CoreNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
