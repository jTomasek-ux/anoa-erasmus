"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type StudentQuote = {
  id: string;
  name: string;
  sections: { title: string; content: string }[];
};

export default function StudentQuotes({ students }: { students: StudentQuote[] }) {
  const [active, setActive] = useState(students[0]?.id ?? "");

  const current = students.find((s) => s.id === active);

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
      <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {students.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(s.id)}
            className={`shrink-0 rounded-xl px-4 py-3 text-left font-sans text-sm font-medium transition-colors ${
              active === s.id
                ? "bg-primary text-white"
                : "bg-white text-black/70 hover:bg-[#E8F0FA]"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-primary/10 bg-white p-6 md:p-10"
          >
            <h2 className="font-heading text-2xl capitalize text-black">
              {current.name}
            </h2>
            <div className="mt-8 space-y-8">
              {current.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-heading text-lg text-primary">
                    {section.title}
                  </h3>
                  <p className="mt-2 whitespace-pre-line font-sans text-base leading-relaxed text-black/70">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
