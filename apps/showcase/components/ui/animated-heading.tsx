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
    </h1>
  );
}
