import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { SiteFooter } from "@/components/sections/site-footer";
import { IntroOverlay } from "@/components/ui/intro-overlay";

export default function Home() {
  return (
    <>
      <IntroOverlay />
      <SiteHeader />
      <main>
        <Hero />
        <Features />
      </main>
      <SiteFooter />
    </>
  );
}
