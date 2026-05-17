"use client";

import { motion } from "motion/react";
import {
  Code2,
  Gauge,
  MoonStar,
  Palette,
  Sparkles,
  Wind,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { useI18n } from "@/components/providers/language-provider";

/** Icônes dans l'ordre de t.features.items (texte via i18n). */
const ICONS = [Sparkles, MoonStar, Code2, Palette, Wind, Gauge] as const;

export function Features() {
  const { t } = useI18n();

  return (
    <section
      id="features"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-32"
    >
      <Reveal>
        <p className="text-sm font-medium text-accent">
          {t.features.eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          {t.features.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((f, i) => {
          const Icon = ICONS[i] ?? Sparkles;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: EASE_OUT_EXPO,
              }}
              whileHover={{ y: -4 }}
              className="group rounded-card border border-line bg-surface p-7 backdrop-blur-glass transition-colors hover:bg-surface-hover"
            >
              <div className="grid size-11 place-items-center rounded-2xl border border-line bg-surface text-accent transition-colors group-hover:border-line-strong">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-fg">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
