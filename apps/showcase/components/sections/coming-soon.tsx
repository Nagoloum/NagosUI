"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Hammer } from "lucide-react";
import { buttonVariants } from "@nagos/ui";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { useI18n } from "@/components/providers/language-provider";

export function ComingSoon({ titleKey }: { titleKey: string }) {
  const { t } = useI18n();

  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-glass"
      >
        <Hammer className="size-3.5 text-accent" />
        {titleKey} · {t.comingSoon.badge}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.05, ease: EASE_OUT_EXPO }}
        className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-fg sm:text-6xl"
      >
        {t.comingSoon.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: EASE_OUT_EXPO }}
        className="mt-5 max-w-md text-base text-muted"
      >
        {t.comingSoon.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: EASE_OUT_EXPO }}
        className="mt-10"
      >
        <Link
          href="/"
          className={buttonVariants({ variant: "gradient", size: "lg" })}
        >
          <ArrowLeft className="size-4" />
          {t.comingSoon.back}
        </Link>
      </motion.div>
    </section>
  );
}
