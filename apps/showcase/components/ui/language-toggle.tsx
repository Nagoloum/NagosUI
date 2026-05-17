"use client";

import { motion } from "motion/react";
import { cn } from "@nagos/ui";
import { LANGS } from "@/lib/i18n";
import { useI18n } from "@/components/providers/language-provider";

/** Sélecteur de langue FR / EN — pastille glissante (Motion layout). */
export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center rounded-pill border border-line bg-surface p-0.5 text-xs font-medium">
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={cn(
              "relative z-10 rounded-pill px-2.5 py-1 uppercase outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent/50",
              active ? "text-bg" : "text-muted hover:text-fg",
            )}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
                className="absolute inset-0 -z-10 rounded-pill bg-fg"
              />
            )}
            {l}
          </button>
        );
      })}
    </div>
  );
}
