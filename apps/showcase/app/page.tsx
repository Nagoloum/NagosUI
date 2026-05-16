import { Hero } from "@/components/sections/hero";
import { ButtonShowcase } from "@/components/sections/button-showcase";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ButtonShowcase />
      <SiteFooter />
    </main>
  );
}
