"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  homeHeroImageAlt,
  homeHeroImageSrc,
  homeHeroObjectPosition,
} from "@/content/site-assets";

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

export default function Hero() {
  return (
    <section
      id="uvod"
      className="relative flex min-h-[100dvh] w-full items-end overflow-hidden"
    >
      <Image
        src={homeHeroImageSrc}
        alt={homeHeroImageAlt}
        fill
        priority
        className="z-0 object-cover"
        style={{ objectPosition: homeHeroObjectPosition }}
        sizes="100vw"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[45%] bg-gradient-to-t from-[#00468E]/85 via-[#00468E]/35 to-transparent"
      />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full max-w-6xl px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-12"
      >
        <motion.h1
          variants={fadeUp}
          className="font-heading text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
        >
          Vzdělávání
          <br />
          <span className="text-white/90">bez hranic.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/90 md:text-lg"
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
