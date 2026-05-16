"use client";

import * as React from "react";
import { useMotionValue, useSpring, type MotionValue } from "motion/react";
import { SPRING } from "../tokens/motion";

export interface UseMagneticOptions {
  /** Distance max (px) dont l'élément est attiré vers le curseur. */
  strength?: number;
  /** Rayon (px) autour de l'élément où l'effet s'active. */
  radius?: number;
}

export interface UseMagneticReturn<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  handlers: {
    onPointerMove: React.PointerEventHandler<T>;
    onPointerLeave: React.PointerEventHandler<T>;
    onBlur: React.FocusEventHandler<T>;
  };
}

/**
 * Logique d'attraction magnétique réutilisable (curseur → élément) avec
 * physique de ressort. À brancher sur n'importe quel élément Motion.
 */
export function useMagnetic<T extends HTMLElement>(
  options: UseMagneticOptions = {},
): UseMagneticReturn<T> {
  const { strength = 22, radius = 130 } = options;

  const ref = React.useRef<T | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING.snappy);
  const springY = useSpring(y, SPRING.snappy);

  const reset = React.useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const onPointerMove = React.useCallback<React.PointerEventHandler<T>>(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy);
      if (dist > radius) {
        reset();
        return;
      }
      const pull = 1 - dist / radius;
      x.set((dx / radius) * strength * pull * 2);
      y.set((dy / radius) * strength * pull * 2);
    },
    [radius, strength, x, y, reset],
  );

  return {
    ref,
    x: springX,
    y: springY,
    handlers: { onPointerMove, onPointerLeave: reset, onBlur: reset },
  };
}
