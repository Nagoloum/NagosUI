"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { Moon, SunMedium } from "lucide-react";

/**
 * Bouton de bascule clair / sombre. Animé (icône qui pivote + fond).
 * Garde anti-hydratation : placeholder tant que non monté.
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Changer de thème"
      onClick={() => setTheme(isDark ? "light" : "dark")}
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
