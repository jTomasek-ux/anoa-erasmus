import type { Metadata } from "next";
import CmsPageView from "@/components/cms/CmsPageView";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";

export const metadata: Metadata = {
  title: "Projekty | ANOA Erasmus+",
  description:
    "Projektové Erasmus+ - spolupráce mezi institucemi, videokonference a výjezdy studentů.",
};

export default function ProjektyPage() {
  return (
    <CmsPageView
      slug="projekty"
      fallback={
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
            </Prose>
            <ProseHeading as="h3">Související stránky</ProseHeading>
          </article>
        </>
      }
    />
  );
}
