import { SiteHeader } from "@/components/sections/site-header";
import { ButtonShowcase } from "@/components/sections/button-showcase";
import { SiteFooter } from "@/components/sections/site-footer";

export default function ComposantsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <ButtonShowcase />
      </main>
      <SiteFooter />
    </>
  );
}
