import { cva, type VariantProps } from "class-variance-authority";

/**
 * Source unique des styles de bouton (partagée par `Button` et
 * `MagneticButton`). Ajoute un variant/size ici → dispo partout.
 */
export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full",
    "font-medium select-none outline-none cursor-pointer",
    "transition-[color,background-color,box-shadow,transform,border-color] duration-300",
    "focus-visible:ring-2 focus-visible:ring-white/40",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black hover:bg-white/90 active:scale-[0.98] shadow-[0_8px_30px_-8px_rgba(255,255,255,0.35)]",
        glass:
          "border border-white/15 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)]",
        gradient:
          "text-white bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 hover:brightness-110 shadow-[0_8px_30px_-10px_rgba(124,58,237,0.7)]",
        outline:
          "border border-white/20 text-white hover:bg-white/5 hover:border-white/35",
        ghost: "text-white/70 hover:text-white hover:bg-white/5",
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
