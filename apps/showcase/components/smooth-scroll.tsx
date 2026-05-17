"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Active le smooth scroll Lenis (inertie premium type Awwwards/Apple)
 * et corrige la page blanche au retour navigateur.
 *
 * Cause du bug : la nav fait des navigations pleine page (<a href>). Au
 * retour navigateur la page est restaurée depuis le bfcache — React ne
 * re-monte PAS — et reste scrollée là où on l'avait laissée (souvent en
 * bas → seul le footer est visible), Lenis l'y bloquant. On force donc
 * un retour en haut + resize sur pageshow/popstate et à chaque route.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    function toTop() {
      lenis.start();
      lenis.resize();
      lenis.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
    }

    // Restauration bfcache (retour navigateur après nav pleine page) :
    // le double rAF attend que le layout restauré soit recalculé.
    function onPageShow(e: PageTransitionEvent) {
      if (e.persisted) {
        requestAnimationFrame(() => requestAnimationFrame(toTop));
      }
    }
    function onPopState() {
      requestAnimationFrame(() => requestAnimationFrame(toTop));
    }

    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("popstate", onPopState);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("popstate", onPopState);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Navigation SPA (router.push / Link) : remonter + recalculer.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    const id = requestAnimationFrame(() => {
      lenis.resize();
      lenis.scrollTo(0, { immediate: true, force: true });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
}
