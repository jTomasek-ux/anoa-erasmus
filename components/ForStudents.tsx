"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Backpack, Globe, MessageSquare } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import { EASE } from "@/components/lib/motion";

const values = [
  {
    Icon: Globe,
    title: "Mezinárodní spolupráce",
    description:
      "Projektové Erasmy propojují instituce napříč Evropou. Každý projekt přináší nové perspektivy a zkušenosti, které nelze získat doma.",
  },
  {
    Icon: MessageSquare,
    title: "Jazykové dovednosti",
    description:
      "Reálná komunikace v cizím jazyce je nenahraditelná. Erasmus+ dává studentům příležitost ověřit si jazykové kompetence v autentickém prostředí.",
  },
  {
    Icon: Backpack,
    title: "Praktické zkušenosti",
    description:
      "Výjezdy do partnerských škol, tematické úkoly a videokonference — zkušenosti, které žádná učebnice nenaučí.",
  },
];

export default function ForStudents() {
  return (
    <section
      id="pro-studenty"
      className="scroll-mt-24 bg-[#E8F0FA] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionLabel>Pro studenty</SectionLabel>

        <div className="mb-14 max-w-2xl">
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-tight text-black">
            Co z programu
            <span className="text-primary"> získáš</span>
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-black/60">
            Mobilita, jazyky a praktické projekty — Erasmus+ propojuje teorii
            ve třídě se zkušenostmi v Evropě.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <ValueCard key={v.title} {...v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  Icon,
  title,
  description,
  index,
}: {
  Icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: EASE,
      }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 25 } }}
      className="group rounded-2xl border border-primary/10 bg-white p-8"
    >
      <div className="mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/8 transition-colors group-hover:bg-primary/15">
          <Icon
            size={18}
            className="text-primary/70 transition-colors group-hover:text-primary"
          />
        </div>
      </div>
      <h3 className="font-heading text-xl leading-tight text-black">{title}</h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-black/60">
        {description}
      </p>
    </motion.div>
  );
}
