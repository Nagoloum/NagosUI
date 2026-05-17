import { SiteHeader } from "@/components/sections/site-header";
import { ComingSoon } from "@/components/sections/coming-soon";
import { SiteFooter } from "@/components/sections/site-footer";

export default function IconsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ComingSoon titleKey="Icons" />
      </main>
      <SiteFooter />
    </>
  );
}
