import { cn } from "@nagos/ui";
import { Logo } from "@/components/ui/logo";

/**
 * Lockup de marque NagosUI (logo « N » + « agosUI »).
 * Composant partagé header ↔ intro : structure identique => le vol
 * de l'intro vers la nav se cale au pixel près.
 */
export function Brand({
  logoId,
  className,
}: {
  logoId?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex items-center text-base font-semibold tracking-tight text-fg",
        className,
      )}
    >
      <Logo id={logoId} size={34} priority className="rounded-lg" />
      <span className="flex gap-0.5 text-3xl leading-none">
        agos<span className="text-accent">UI</span>
      </span>
    </span>
  );
}
