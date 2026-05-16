"use client";

import { Button, MagneticButton, type ButtonProps } from "@nagos/ui";
import { Reveal } from "@/components/ui/reveal";

type Variant = NonNullable<ButtonProps["variant"]>;
type Size = NonNullable<ButtonProps["size"]>;

const VARIANTS: { label: string; variant: Variant }[] = [
  { label: "primary", variant: "primary" },
  { label: "glass", variant: "glass" },
  { label: "gradient", variant: "gradient" },
  { label: "outline", variant: "outline" },
  { label: "ghost", variant: "ghost" },
];

const SIZES: Size[] = ["sm", "md", "lg", "xl"];

export function ButtonShowcase() {
  return (
    <section
      id="composants"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-32"
    >
      <Reveal>
        <p className="text-sm font-medium text-violet-300/80">@nagos/ui</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Boutons
        </h2>
        <p className="mt-4 max-w-xl text-white/55">
          Un seul système de variants (cva), customisable à l&apos;infini via{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-white/80">
            variant
          </code>
          ,{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-white/80">
            size
          </code>{" "}
          et{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-white/80">
            className
          </code>
          .
        </p>
      </Reveal>

      {/* Variants */}
      <Reveal delay={0.1} className="mt-14">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
          {VARIANTS.map(({ label, variant }) => (
            <div
              key={variant}
              className="flex flex-col items-center justify-center gap-5 bg-nagos-bg/40 p-12"
            >
              <Button variant={variant}>{label}</Button>
              <span className="text-xs tracking-wide text-white/40">
                variant=&quot;{label}&quot;
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Tailles + Magnétique */}
      <Reveal delay={0.15} className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10">
          <h3 className="text-sm font-medium text-white/70">Tailles</h3>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {SIZES.map((size) => (
              <Button key={size} variant="outline" size={size}>
                {size}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-10">
          <h3 className="text-sm font-medium text-white/70">
            Bouton magnétique
          </h3>
          <p className="mt-2 text-xs text-white/40">
            Suit le curseur — physique de ressort + glow.
          </p>
          <div className="mt-8 flex min-h-28 items-center justify-center">
            <MagneticButton variant="gradient" size="lg">
              Survole-moi
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
