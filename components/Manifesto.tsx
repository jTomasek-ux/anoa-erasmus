"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/components/lib/motion";

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=60&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-sans text-base leading-relaxed text-white/50 md:text-lg"
        >
          Tradiční výuka se zaměřuje na:{" "}
          <span className="text-white/75">teorii ve třídách.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="mt-6"
        >
          <p className="font-sans text-base text-white/60 md:text-lg">
            My se zaměřujeme na:
          </p>
          <p className="mt-2 font-heading text-[clamp(2rem,5vw,3.75rem)] leading-tight text-white">
            skutečné zkušenosti{" "}
            <span className="text-white/70">v Evropě.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 h-px bg-white/15"
        />
      </div>
    </section>
  );
}
