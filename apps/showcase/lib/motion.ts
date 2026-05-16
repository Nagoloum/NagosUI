import type { Variants } from "motion/react";
import { EASE } from "@nagos/ui";

/** Easing signature NagosUI — vient du Foundation Layer (@nagos/ui). */
export const EASE_OUT_EXPO = EASE.outExpo;

/** Apparition fade + translation vers le haut. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};
