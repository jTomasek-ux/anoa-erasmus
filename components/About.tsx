"use client";

import AnimatedInView from "@/components/AnimatedInView";
import SectionLabel from "@/components/SectionLabel";

export default function About() {
  return (
    <section
      id="o-programu"
      className="scroll-mt-24 bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionLabel>O programu</SectionLabel>

        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <AnimatedInView delay={0.05}>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-tight text-black">
              Vzdělávání
              <br />
              <span className="text-primary">v pohybu.</span>
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-black/60">
              Erasmus+ je vzdělávací program pod záštitou Evropské unie, jehož
              cílem je podpora spolupráce a mobilit ve všech sférách
              vzdělávání.
            </p>
          </AnimatedInView>

          <AnimatedInView delay={0.15} className="space-y-5">
            <p className="font-sans text-base leading-relaxed text-black/80">
              Cílem Erasmu je zvýšení kvality a přiměřenosti kvalifikací a
              dovedností. Na naší škole věříme, že stejně důležité jako studium
              je i praktické použití naučených znalostí.
            </p>
            <p className="font-sans text-base leading-relaxed text-black/60">
              Různé druhy projektů s partnerskými školami ze zahraničí jsou
              jednou z cest, které k této praxi napomáhají. Nedílnou součástí je
              pak pro studenty i možnost využití cizích jazyků a vyzkoušení si
              svých jazykových kompetencí.
            </p>
          </AnimatedInView>
        </div>

        <AnimatedInView delay={0.3}>
          <div className="mt-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-primary/15" />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary/40">
              EU Program od 1987
            </span>
            <div className="h-px flex-1 bg-primary/15" />
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}
