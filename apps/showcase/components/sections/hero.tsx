"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@nagos/ui";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { useI18n } from "@/components/providers/language-provider";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative flex min-h-75 flex-col items-center justify-center overflow-hidden px-6 pt-16"
    >
      {/* fond ambiant cinématique (theme-aware) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 size-[55vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-accent)_38%,transparent),transparent_62%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--color-bg)_92%,transparent))]" />
      </div>

      <motion.a
        href="#composants"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
        className="mb-6 inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-glass transition-colors hover:text-fg"
      >
        <Sparkles className="size-3.5 text-accent" />
        {t.hero.badge}
      </motion.a>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.05, ease: EASE_OUT_EXPO }}
        className="max-w-4xl text-center text-5xl font-semibold leading-[1.04] tracking-tight text-fg sm:text-7xl"
      >
        {t.hero.titleLead}
        <span className="bg-linear-to-r from-accent-from via-accent-via to-accent-to bg-clip-text text-transparent">
          {" "}
          {t.hero.titleAccent}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT_EXPO }}
        className="mt-6 max-w-xl text-center text-base text-muted sm:text-lg"
      >
        {t.hero.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: EASE_OUT_EXPO }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <MagneticButton variant="gradient" size="lg">
          {t.hero.ctaPrimary}
          <ArrowRight className="size-4" />
        </MagneticButton>
        <MagneticButton variant="outline" size="lg">
          {t.hero.ctaSecondary}
        </MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE_OUT_EXPO }}
        className="mt-16 flex items-center gap-8 sm:gap-12"
      >
        {t.hero.stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl font-semibold text-fg">{s.value}</div>
            <div className="text-xs tracking-wide text-muted">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
