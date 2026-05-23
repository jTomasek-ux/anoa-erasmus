import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import { contactEmail } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Praxe pro zahraniční studenty | ANOA Erasmus+",
  description:
    "ANOA přijímá studenty ze zahraničních partnerských škol na praxi v Praze.",
};

const placements = [
  {
    period: "Únor 2020",
    school: "Lycée Depoorter – Hazebrouck, Francie",
    detail: "Praxe v kanadské školce v Praze.",
    link: "http://www.lycee-depoorter.com/",
  },
  {
    period: "Březen 2020",
    school: "Lycée Depoorter – Hazebrouck, Francie",
    detail:
      "Praxe v Dobrovolnickém centru ve Vojenské nemocnici v Praze.",
    link: "http://www.lycee-depoorter.com/",
  },
  {
    period: "Březen – květen 2022",
    school: "Colegio Nossa Senhora da Graça, Portugalsko",
    detail:
      "Absolventky absolvovaly praxi ve společnosti zabývající se zemědělskými produkty.",
    link: "https://www.colegionsgraca.com.pt/new/",
  },
];

export default function PraxeZahranicniPage() {
  return (
    <>
      <PageHeader
        title="Praxe pro zahraniční studenty"
        description="Spolupráci se u nás meze nekladou."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Praxe pro zahraniční studenty" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Prose>
          <p>
            Nejen, že se snažíme pro naše studenty nalézt nejlepší praxe v
            zahraničí, ale také je naší snahou vyhovět žádostem partnerských škol
            a nalézt praxe pro studenty ze zahraničí.
          </p>
          <p>
            Pokud byste měli příležitost přijmout tyto studenty, budeme rádi o
            zaslání jakékoliv nabídky na{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-primary hover:underline"
            >
              {contactEmail}
            </a>
            . Předem děkujeme.
          </p>
        </Prose>

        <ProseHeading>Proběhlé spolupráce</ProseHeading>
        <div className="space-y-6">
          {placements.map((p) => (
            <div
              key={`${p.period}-${p.school}`}
              className="rounded-2xl border border-primary/10 bg-[#E8F0FA] p-6 md:p-8"
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                {p.period}
              </p>
              <h3 className="mt-2 font-heading text-xl text-black">{p.school}</h3>
              <p className="mt-2 font-sans text-base text-black/65">{p.detail}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block font-sans text-sm text-primary hover:underline"
                >
                  Web školy →
                </a>
              )}
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
