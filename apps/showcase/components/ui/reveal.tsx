"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/motion";

/**
 * Enrobe n'importe quel contenu d'une apparition au scroll (une seule fois).
 * Brique de base du scrollytelling — réutilisable sur les futurs sites ciné.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}
