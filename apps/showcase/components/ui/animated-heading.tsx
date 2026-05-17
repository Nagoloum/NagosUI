"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { cn } from "@nagos/ui";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const STEP = 0.028; // décalage par lettre (effet gauche → droite)

/**
 * Titre animé : chaque lettre arrive en « rolling » (translation + rotateX)
 * avec un flou qui se lève, en cascade gauche→droite, suivi d'un balayage
 * shimmer. `lead` en couleur texte, `accent` en couleur d'accent.
 */
export function AnimatedHeading({
  lead,
  accent,
  className,
}: {
  lead: string;
  accent: string;
  className?: string;
}) {
  let i = 0;

  const renderWord = (word: string, color: string, key: string) => (
    <span key={key} className="inline-block whitespace-nowrap">
      {Array.from(word).map((ch, c) => {
        const delay = i++ * STEP;
        return (
          <motion.span
            key={c}
            className={cn("inline-block", color)}
            style={{ transformPerspective: 500 }}
            initial={{ opacity: 0, y: "0.5em", rotateX: -55, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
            transition={{ delay, duration: 0.6, ease: EASE }}
          >
            {ch}
          </motion.span>
        );
      })}
    </span>
  );

  const leadWords = lead.split(" ");
  const accentWords = accent.split(" ");

  return (
    <h1 className={cn("relative", className)}>
      {leadWords.map((w, w2) => (
        <Fragment key={`l${w2}`}>
          {renderWord(w, "text-fg", `lw${w2}`)}{" "}
        </Fragment>
      ))}
      {accentWords.map((w, w2) => (
        <Fragment key={`a${w2}`}>
          {renderWord(w, "text-accent", `aw${w2}`)}
          {w2 < accentWords.length - 1 ? " " : null}
        </Fragment>
      ))}

      {/* balayage shimmer après l'arrivée des lettres */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_42%,color-mix(in_oklab,var(--color-fg)_32%,transparent)_50%,transparent_58%)]"
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: "120%", opacity: [0, 1, 1, 0] }}
        transition={{ delay: i * STEP + 0.2, duration: 1.15, ease: "easeInOut" }}
      />
    </h1>
  );
}
