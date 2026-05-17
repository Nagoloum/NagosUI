"use client";

import { useEffect, useState } from "react";
import { useAnimate } from "motion/react";
import { Brand } from "@/components/ui/brand";

const SEEN_KEY = "nagos-intro";
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Intro de la landing : marque NagosUI plein écran (reveal masque +
 * scale + flou + glow) puis vol/réduction jusqu'au lockup de la nav.
 * Le composant <Brand> est partagé => le morph se cale au pixel près.
 * Joué une fois par session ; respecte prefers-reduced-motion.
 */
export function IntroOverlay() {
  const [scope, animate] = useAnimate();
  const [phase, setPhase] = useState<"hidden" | "playing">("hidden");

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || sessionStorage.getItem(SEEN_KEY) === "1") return;
    setPhase("playing");
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    let cancelled = false;

    (async () => {
      const root = scope.current as HTMLElement | null;
      const brand = root?.querySelector(
        "[data-intro-brand]",
      ) as HTMLElement | null;
      if (!root || !brand) return;

      // Taille naturelle (identique à la marque de la nav)
      const from = brand.getBoundingClientRect();
      const desired = Math.min(window.innerWidth * 0.62, 460);
      const big = from.width ? desired / from.width : 5;

      // 1. Reveal : balayage (masque) + scale + flou qui se lève
      await animate(
        brand,
        {
          opacity: [0, 1],
          scale: [big * 0.82, big],
          filter: ["blur(16px)", "blur(0px)"],
          clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
        },
        { duration: 0.95, ease: EASE },
      );
      if (cancelled) return;
      await new Promise((r) => setTimeout(r, 320));
      if (cancelled) return;

      // 2. Vol + réduction jusqu'au lockup de la nav
      const navEl = document.getElementById("nav-brand");
      if (navEl) {
        const to = navEl.getBoundingClientRect();
        const dx = to.left + to.width / 2 - (from.left + from.width / 2);
        const dy = to.top + to.height / 2 - (from.top + from.height / 2);
        const target = from.width ? to.width / from.width : 1;
        await animate(
          brand,
          { x: dx, y: dy, scale: target },
          { duration: 0.85, ease: EASE },
        );
      }
      if (cancelled) return;

      // 3. Fondu de l'overlay → la nav prend le relais
      await animate(root, { opacity: 0 }, { duration: 0.4, ease: "easeInOut" });
      sessionStorage.setItem(SEEN_KEY, "1");
      if (!cancelled) setPhase("hidden");
    })();

    return () => {
      cancelled = true;
    };
  }, [phase, animate, scope]);

  if (phase === "hidden") return null;

  return (
    <div
      ref={scope}
      className="fixed inset-0 z-200 grid place-items-center bg-bg"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute size-[60vh] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-accent)_38%,transparent),transparent_60%)] blur-3xl"
      />
      <div
        data-intro-brand
        className="origin-center opacity-0 will-change-transform"
      >
        <Brand />
      </div>
    </div>
  );
}
