/**
 * NagosUI — Foundation Layer (tokens de motion, côté JS).
 * Pour Motion / GSAP : courbes, ressorts et durées signature.
 * Source unique : `useMagnetic`, les apps et les futurs sites ciné
 * doivent piocher ici plutôt que d'hardcoder des valeurs.
 */

type Bezier = [number, number, number, number];

/** Courbes de Bézier (transitions Motion/GSAP). */
export const EASE: Record<"outExpo" | "inOut" | "outBack", Bezier> = {
  outExpo: [0.16, 1, 0.3, 1], // premium / Apple-like
  inOut: [0.65, 0, 0.35, 1],
  outBack: [0.34, 1.56, 0.64, 1], // léger overshoot
};

export interface SpringConfig {
  stiffness: number;
  damping: number;
  mass: number;
}

/** Presets de ressort (Motion `useSpring` / `transition.type: "spring"`). */
export const SPRING = {
  snappy: { stiffness: 220, damping: 18, mass: 0.6 },
  soft: { stiffness: 120, damping: 20, mass: 1 },
  bouncy: { stiffness: 300, damping: 12, mass: 0.5 },
} satisfies Record<string, SpringConfig>;

/** Durées de référence (secondes). */
export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
} satisfies Record<string, number>;
