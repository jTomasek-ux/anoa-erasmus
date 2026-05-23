"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import { EASE } from "@/components/lib/motion";

const steps = [
  {
    number: "01",
    title: "Výběr projektu",
    description:
      "Škola vybere tematický projekt Erasmus+ a domluví spolupráci s partnerskou institucí v zahraničí.",
  },
  {
    number: "02",
    title: "Partnerství",
    description:
      "Učitelé a studenti se seznámí s partnery prostřednictvím videokonferencí a společných úkolů.",
  },
  {
    number: "03",
    title: "Příprava",
    description:
      "Studenti pracují na tematických úkolech, rozvíjejí jazykové dovednosti a připravují se na mobilitu.",
  },
  {
    number: "04",
    title: "Mobilita",
    description:
      "Výjezd do partnerské školy - praktické zkušenosti, které nelze nahradit výukou ve třídě.",
  },
  {
    number: "05",
    title: "Reflexe",
    description:
      "Po návratu studenti sdílejí poznatky, vyhodnocují výstupy projektu a upevňují nové kompetence.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="jak-to-probiha"
      className="scroll-mt-24 bg-[#E8F0FA] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionLabel>Jak to probíhá</SectionLabel>

        <div className="mb-14 max-w-2xl">
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-tight text-black">
            Od nápadu
            <span className="text-primary"> k mobilitě</span>
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
            Každý projekt má svůj rytmus, ale obecný postup zůstává stejný - od domluvy po praktické zkušenosti v Evropě.
          </p>
        </div>

        <div className="relative space-y-6">
          <div
            className="absolute bottom-4 left-5 top-4 w-px bg-primary/20"
            aria-hidden
          />
          {steps.map((step, i) => (
            <TimelineStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
      className="relative flex gap-6 pl-2"
    >
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white font-sans text-xs font-bold text-primary">
        {step.number}
      </div>
      <div className="flex-1 rounded-2xl border border-primary/10 bg-white p-6 md:p-8">
        <h3 className="font-heading text-xl text-black">{step.title}</h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-black/60">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
