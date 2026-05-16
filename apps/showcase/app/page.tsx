import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { ButtonShowcase } from "@/components/sections/button-showcase";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <ButtonShowcase />
      </main>
      <SiteFooter />
    </>
  );
}
