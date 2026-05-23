import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";

export const metadata: Metadata = {
  title: "eTwinning spolupráce | ANOA Erasmus+",
  description:
    "eTwinning projekty ANOA — Young European Founders a videokonference.",
};

export default function EtwinningPage() {
  return (
    <>
      <PageHeader
        title="eTwinning spolupráce"
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Spolupráce", href: "/projekty" },
          { label: "eTwinning" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Prose>
          <p>
            eTwinning je platforma pro vyhledávání spolupráce mezi školami a
            slouží jako bezpečná forma komunikace. Každoročně zde navazujeme
            kontakty pro projekty v rámci předmětů Business English a
            Mezinárodní spolupráce.
          </p>
        </Prose>

        <ProseHeading>Young European Founders</ProseHeading>
        <Prose>
          <p>
            Třetí ročníky se v současném roce věnují projektu Young European
            Founders. Partnerské školy jsou z Německa, Portugalska, Itálie a
            Turecka.
          </p>
          <p>
            V projektu se věnujeme aktuálním ekonomickým problémům. Studenti
            nejdříve analyzovali stávající firmy a následně si vytvářeli vlastní
            — důraz na start-upy a Green deal.
          </p>
          <p>
            Logo, které v projektu vyhrálo, vytvořili naši studenti.
          </p>
        </Prose>

        <ProseHeading>Videokonference</ProseHeading>
        <Prose>
          <p>
            V rámci eTwinningových projektů studenti komunikují přes eTwinning
            chat nebo organizují videokonference. Studenti ze 3A se účastnili
            první videokonference, kde představili firmu vyrábějící sprchové
            hlavice šetřící vodu — své pozice ujali na výbornou.
          </p>
        </Prose>
      </article>
    </>
  );
}
