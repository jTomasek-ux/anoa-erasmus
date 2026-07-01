import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";

export const metadata: Metadata = {
  title: "Projekty | ANOA Erasmus+",
  description:
    "Projektové Erasmus+ - spolupráce mezi institucemi, videokonference a výjezdy studentů.",
};

export default function ProjektyPage() {
  return (
    <>
      <PageHeader
        title="Erasmus+ projekty"
        description="Projektové Erasmus+ jsou zacílené na spolupráci mezi jednotlivými institucemi."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Projekty" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Prose>
          <p>
            Výhodou těchto projektů je jejich rozmanitost náplně. Každý program
            má své téma a výstupy jsou vždy jiné - vždy záleží na domluvě mezi
            organizacemi.
          </p>
          <p>
            Obecně se snažíme vybírat a navrhovat takové projekty, které
            prohlubují ekonomické, ekologické a dobrovolnické dovednosti spojené
            s jazykovou vybaveností.
          </p>
          <p>
            Během těchto projektů se studenti účastní videokonferencí, plní
            tematické úkoly a v různě velkých skupinách mají možnost vycestovat
            do partnerských škol.
          </p>
        </Prose>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { value: "EU", label: "Program" },
            { value: "27+", label: "Zemí zapojeno" },
            { value: "∞", label: "Možností" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-primary/10 bg-[#E8F0FA] p-8 text-center"
            >
              <div className="font-heading text-4xl text-primary">{s.value}</div>
              <div className="mt-1 font-sans text-xs font-medium uppercase tracking-wider text-black/45">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <ProseHeading as="h3">Související stránky</ProseHeading>
        <ul className="mt-4 space-y-2 font-sans text-sm">
          <li>
            <a href="/akreditace" className="text-primary hover:underline">
              Akreditace a praxe v zahraničí
            </a>
          </li>
          <li>
            <a href="/erasmus-days" className="text-primary hover:underline">
              Erasmus Days
            </a>
          </li>
          <li>
            <a href="/spoluprace/etwinning" className="text-primary hover:underline">
              eTwinning spolupráce
            </a>
          </li>
          <li>
            <a
              href="/spoluprace/visegrad-project"
              className="text-primary hover:underline"
            >
              Visegrad Project
            </a>
          </li>
          <li>
            <a href="/spoluprace/visegrad" className="text-primary hover:underline">
              Visegrad — Slovensko
            </a>
          </li>
          <li>
            <a href="/partnerske-skoly" className="text-primary hover:underline">
              Partnerské školy
            </a>
          </li>
        </ul>
      </article>
    </>
  );
}
