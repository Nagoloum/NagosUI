"use client";

import * as React from "react";
import { cn } from "../../lib/cn";
import { buttonVariants, type ButtonVariants } from "./button.variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

/**
 * Bouton de base customisable (variant / size / fullWidth via cva).
 * Le bloc de construction de tous les boutons NagosUI.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant, size, fullWidth, type = "button", ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          className,
        )}
        {...props}
      />
    );
  },
);
