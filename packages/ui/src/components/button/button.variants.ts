import { cva, type VariantProps } from "class-variance-authority";

/**
 * Source unique des styles de bouton (partagée par `Button` et
 * `MagneticButton`). 100 % basée sur les tokens du Foundation Layer
 * (theme.css) — aucune valeur brute. Ajoute un variant/size ici → dispo
 * partout.
 */
export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill",
    "font-medium select-none cursor-pointer outline-none",
    "transition-[color,background-color,box-shadow,transform,border-color] duration-300 ease-out-expo",
    "focus-visible:ring-2 focus-visible:ring-accent/50",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-fg text-bg hover:opacity-90 active:scale-[0.98] shadow-bright",
        glass:
          "border border-line bg-surface text-fg backdrop-blur-glass hover:bg-surface-hover shadow-elevated",
        gradient:
          "text-fg bg-linear-to-r from-accent-from via-accent-via to-accent-to hover:brightness-110 shadow-glow",
        outline:
          "border border-line text-fg hover:bg-surface hover:border-line-strong",
        ghost: "text-muted hover:text-fg hover:bg-surface",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "size-11 p-0",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "glass",
      size: "md",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
