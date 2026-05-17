import { SiteHeader } from "@/components/sections/site-header";
import { ComingSoon } from "@/components/sections/coming-soon";
import { SiteFooter } from "@/components/sections/site-footer";

export default function TemplatesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ComingSoon titleKey="Templates" />
      </main>
      <SiteFooter />
    </>
  );
}
