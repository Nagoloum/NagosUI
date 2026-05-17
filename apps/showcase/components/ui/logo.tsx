import Image from "next/image";
import { cn } from "@nagos/ui";

/**
 * Logo NagosUI theme-aware (sans JS, SSR-safe, zéro flash) :
 * - thème sombre → logo clair (logo.png)
 * - thème clair  → logo sombre (logo-dark.png)
 */
export function Logo({
  size = 28,
  className,
  priority,
  id,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
  id?: string;
}) {
  const dims = { width: size, height: size };
  return (
    <span
      id={id}
      className={cn(
        "relative inline-block shrink-0 overflow-hidden",
        className,
      )}
      style={dims}
    >
      <Image
        src="/logo.png"
        alt="NagosUI"
        {...dims}
        priority={priority}
        className="hidden size-full object-contain dark:block"
      />
      <Image
        src="/logo-dark.png"
        alt="NagosUI"
        {...dims}
        priority={priority}
        className="block size-full object-contain dark:hidden"
      />
    </span>
  );
}
