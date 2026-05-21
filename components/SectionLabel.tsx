"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionLabel({ children }: { children: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-12 inline-block font-sans text-xs font-medium uppercase tracking-[0.25em] text-primary"
    >
      {children}
    </motion.span>
  );
}
