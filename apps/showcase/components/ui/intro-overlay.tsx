"use client";

import { useEffect, useState } from "react";
import { useAnimate } from "motion/react";
import { Logo } from "@/components/ui/logo";

const SEEN_KEY = "nagos-intro";
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Intro de la landing : logo plein écran (reveal masque + scale + blur +
 * glow) puis vol/réduction jusqu'à l'emplacement du logo dans la nav.
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
      const logo = root?.querySelector(
        "[data-intro-logo]",
      ) as HTMLElement | null;
      if (!root || !logo) return;

      // 1. Reveal : balayage (masque) + scale + flou qui se lève
      await animate(
        logo,
        {
          opacity: [0, 1],
          scale: [0.82, 1],
          filter: ["blur(16px)", "blur(0px)"],
          clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
        },
        { duration: 0.95, ease: EASE },
      );
      if (cancelled) return;
      await new Promise((r) => setTimeout(r, 320));
      if (cancelled) return;

      // 2. Vol + réduction jusqu'au logo de la nav
      const navLogo = document.getElementById("nav-logo");
      if (navLogo) {
        const from = logo.getBoundingClientRect();
        const to = navLogo.getBoundingClientRect();
        const dx = to.left + to.width / 2 - (from.left + from.width / 2);
        const dy = to.top + to.height / 2 - (from.top + from.height / 2);
        const s = to.width / from.width;
        await animate(
          logo,
          { x: dx, y: dy, scale: s },
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
      className="fixed inset-0 z-[200] grid place-items-center bg-bg"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute size-[60vh] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-accent)_40%,transparent),transparent_60%)] blur-3xl"
      />
      <div data-intro-logo className="will-change-transform">
        <Logo size={160} priority className="rounded-2xl" />
      </div>
    </div>
  );
}
