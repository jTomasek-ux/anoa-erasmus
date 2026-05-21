"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedInView from "@/components/AnimatedInView";
import SectionLabel from "@/components/SectionLabel";
import { EASE } from "@/components/lib/motion";

const details = [
  "Každý program má své téma a výstupy jsou vždy jiné — záleží na domluvě mezi zúčastněnými organizacemi.",
  "Obecně se snažíme vybírat projekty, které prohlubují ekonomické, ekologické a dobrovolnické dovednosti spojené s jazykovou vybaveností.",
  "Studenti se účastní videokonferencí, plní tematické úkoly a v různě velkých skupinách mají možnost vycestovat do partnerských škol.",
];

const stats = [
  { value: "EU", label: "Program" },
  { value: "27+", label: "Zemí zapojeno" },
  { value: "∞", label: "Zkušeností" },
];

export default function Projects() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section id="projekty" className="scroll-mt-24 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionLabel>Projekty</SectionLabel>

        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <AnimatedInView delay={0.05}>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-tight text-black">
              Erasmus
              <br />
              <span className="text-primary">projekty.</span>
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-black/60">
              Projektové Erasmy jsou zacílené na spolupráci mezi jednotlivými
              institucemi. Výhodou těchto projektů je jejich rozmanitost náplně.
            </p>
          </AnimatedInView>

          <AnimatedInView delay={0.15} className="space-y-5">
            {details.map((text, i) => (
              <p
                key={i}
                className="font-sans text-base leading-relaxed"
                style={{ color: i === 0 ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.55)" }}
              >
                {text}
              </p>
            ))}
          </AnimatedInView>
        </div>

        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-3 gap-8 border-t border-primary/15 pt-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: EASE,
              }}
              className="text-center md:text-left"
            >
              <div className="font-heading text-4xl text-primary md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
