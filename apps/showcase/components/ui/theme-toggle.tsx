"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { Moon, SunMedium } from "lucide-react";

type VTDocument = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

/**
 * Bascule clair / sombre. Le nouveau thème se révèle via un cercle qui
 * s'étend du bouton vers les 4 coins (View Transitions API). Repli :
 * changement direct si l'API ou le mouvement réduit l'empêchent.
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  function applyThemeClass(next: "light" | "dark") {
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    root.classList.toggle("light", next === "light");
  }

  function toggleTheme() {
    const next = isDark ? "light" : "dark";
    const doc = document as VTDocument;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!doc.startViewTransition || reduce || !btnRef.current) {
      setTheme(next);
      return;
    }

    const rect = btnRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const end = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = doc.startViewTransition(() => {
      // Applique le thème de façon synchrone pour que le snapshot
      // "new" capture déjà le nouveau thème, puis on persiste.
      applyThemeClass(next);
      setTheme(next);
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${end}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 600,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {
        /* transition annulée : rien à faire */
      });
  }

  return (
    <button
      ref={btnRef}
      type="button"
      aria-label="Changer de thème"
      onClick={toggleTheme}
      className="relative grid size-9 place-items-center rounded-pill border border-line bg-surface text-fg outline-none transition-colors duration-300 hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inline-flex"
          >
            {isDark ? (
              <Moon className="size-4.5" />
            ) : (
              <SunMedium className="size-4.5" />
            )}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
