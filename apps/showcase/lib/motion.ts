import type { Variants } from "motion/react";

/** Easing signature NagosUI (out-expo) — feeling premium / Apple-like. */
export const EASE_OUT_EXPO: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

/** Apparition fade + translation vers le haut. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};
