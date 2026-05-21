"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const stagger: Variants = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80&auto=format&fit=crop";

export default function Hero() {
  return (
    <section
      id="uvod"
      className="relative flex min-h-[100dvh] w-full items-end overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
        role="img"
        aria-label="Evropské město — symbol mezinárodního vzdělávání"
      />

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#00468E]/75 via-[#00468E]/35 to-[#00468E]/10" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#00468E]/30 to-transparent" />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full max-w-6xl px-6 pb-20 pt-32 md:px-10 md:pb-28"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.25em] text-white/60"
        >
          ANOA — Erasmus+
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-heading text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.05] tracking-tight text-white"
        >
          Vzdělávání
          <br />
          <span className="text-white/90">bez hranic.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/80 md:text-lg"
        >
          Erasmus+ je vzdělávací program pod záštitou Evropské unie, jehož
          cílem je podpora spolupráce a mobilit ve všech sférách vzdělávání.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <motion.a
            href="/informace-pro-uchazece"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="inline-flex items-center rounded-full bg-white px-7 py-3.5 font-sans text-sm font-semibold text-primary"
          >
            Zjistit více
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
