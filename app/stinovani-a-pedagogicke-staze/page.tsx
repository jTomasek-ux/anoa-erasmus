import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";

export const metadata: Metadata = {
  title: "Stínování a pedagogické stáže | ANOA Erasmus+",
  description:
    "Stínování zahraničních kolegů a přijímání studentů pedagogických fakult na ANOA.",
};

const visits = [
  {
    period: "Březen 2022",
    names: "Alicia a Chemi",
    origin: "Valencia, Španělsko",
    link: "https://www.maristasalgemesi.com/",
  },
  {
    period: "Červen 2022",
    names: "Učitelé ze střední ekonomické školy HUNFALVY",
    origin: "Budapešť, Maďarsko",
    link: "https://www.hunfalvy-szki.hu/en/",
  },
];

export default function StinovaniPage() {
  return (
    <>
      <PageHeader
        title="Stínování a pedagogické stáže"
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Stínování a pedagogické stáže" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <ProseHeading>Stínování</ProseHeading>
        <Prose>
          <p>
            „Žádný učený z nebe nespadl.“ Spolupráce se zahraničními kolegy —
            nebo „víc hlav, víc ví.“ Informace z univerzit i z praxe dává smysl
            sladit v diskuzi s kolegy, jak se to dělá jinde.
          </p>
          <p className="font-heading text-lg text-primary">
            Nové tváře, kultury, diskuse v cizím jazyce — proč ne?!
          </p>
        </Prose>

        <ProseHeading>Pedagogické stáže</ProseHeading>
        <Prose>
          <p>
            Nějak se začít musí — a proč ne v cizí zemi, nebo právě u nás?
          </p>
          <p>
            Jsme otevření přijímání studentů pedagogických fakult ze zahraničí.
            Studenti si připravují ve spolupráci s pedagogy plán výuky a pod
            jejich dohledem vyučují. Komunikačním jazykem může být angličtina
            nebo němčina.
          </p>
        </Prose>

        <ProseHeading as="h3">Proběhlé návštěvy</ProseHeading>
        <div className="space-y-4">
          {visits.map((v) => (
            <div
              key={v.period}
              className="rounded-2xl border border-primary/10 bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {v.period}
              </p>
              <h3 className="mt-2 font-heading text-lg text-black">{v.names}</h3>
              <p className="font-sans text-sm text-black/55">{v.origin}</p>
              <a
                href={v.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-primary hover:underline"
              >
                Web partnera →
              </a>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
