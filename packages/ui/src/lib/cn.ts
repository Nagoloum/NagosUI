import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne des classes Tailwind sans conflit (clsx + tailwind-merge).
 * Utilitaire de base de tous les composants NagosUI.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
