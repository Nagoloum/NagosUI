"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { useMagnetic } from "../../hooks/use-magnetic";
import { cn } from "../../lib/cn";
import { buttonVariants, type ButtonVariants } from "./button.variants";

export type MagneticButtonProps = Omit<
  HTMLMotionProps<"button">,
  "ref" | "children"
> &
  ButtonVariants & {
    children?: React.ReactNode;
    /** Distance max (px) dont le bouton est attiré vers le curseur. */
    strength?: number;
    /** Rayon (px) autour du bouton où l'effet magnétique s'active. */
    radius?: number;
  };

/**
 * Bouton magnétique : suit le curseur (physique de ressort) + glassmorphism
 * et glow au hover. Réutilise le système de variants `Button`.
 */
export const MagneticButton = React.forwardRef<
  HTMLButtonElement,
  MagneticButtonProps
>(function MagneticButton(
  { strength, radius, variant, size, fullWidth, className, children, ...props },
  forwardedRef,
) {
  const { ref, x, y, handlers } = useMagnetic<HTMLButtonElement>({
    strength,
    radius,
  });
  React.useImperativeHandle(
    forwardedRef,
    () => ref.current as HTMLButtonElement,
  );

  return (
    <motion.button
      ref={ref}
      type="button"
      {...props}
      {...handlers}
      style={{ x, y }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        buttonVariants({ variant, size, fullWidth }),
        "group relative overflow-hidden",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-fg/25 via-transparent to-fg/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px -z-10 rounded-pill bg-[radial-gradient(140px_circle_at_50%_120%,color-mix(in_oklab,var(--color-accent)_55%,transparent),transparent)] opacity-50 blur-md transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
});
