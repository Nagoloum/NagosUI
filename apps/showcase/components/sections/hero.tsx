"use client";

import { motion } from "motion/react";
import { MagneticButton } from "@nagos/ui";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6">
      {/* fond ambiant cinématique */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(120,119,198,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,6,10,0)_0%,rgba(5,6,10,0.92)_100%)]" />
      </div>

      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
        className="mb-5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-xl"
      >
        NagosUI · v0.0.0
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.05, ease: EASE_OUT_EXPO }}
        className="max-w-3xl text-balance text-center text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl"
      >
        Des interfaces qui
        <span className="bg-linear-to-r from-indigo-300 via-white to-violet-300 bg-clip-text text-transparent">
          {" "}
          donnent envie
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT_EXPO }}
        className="mt-6 max-w-xl text-center text-base text-white/55 sm:text-lg"
      >
        Composants premium animés, fluides et cinématiques. Survole le bouton —
        il suit ton curseur.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: EASE_OUT_EXPO }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <MagneticButton variant="gradient" size="lg">
          Explorer les composants
        </MagneticButton>
        <MagneticButton variant="outline" size="lg">
          Voir le code
        </MagneticButton>
      </motion.div>
    </section>
  );
}
