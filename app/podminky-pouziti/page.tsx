import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";

export const metadata: Metadata = {
  title: "Podmínky použití | ANOA Erasmus+",
  description:
    "Podmínky používání informačního webu programu Erasmus+ školy ANOA.",
};

export default function PodminkyPouzitiPage() {
  return (
    <>
      <PageHeader
        title="Podmínky použití"
        description="Pravidla pro návštěvníky tohoto informačního webu."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Podmínky použití" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Prose>
          <p>
            Používáním tohoto webu potvrzujete, že jste se seznámili s těmito
            podmínkami. Web je určen výhradně k informování o programu Erasmus+
            a mezinárodní spolupráci školy ANOA.
          </p>
        </Prose>

        <ProseHeading>Informační charakter</ProseHeading>
        <Prose>
          <p>
            Obsah má informativní povahu. Podrobná pravidla programu Erasmus+,
            výše podpor a aktuální výzvy najdete na oficiálních stránkách EU a
            Dům zahraniční spolupráce. Termíny a podmínky mobility se řídí
            platnou dokumentací školy a projektů.
          </p>
        </Prose>

        <ProseHeading>Autorská práva</ProseHeading>
        <Prose>
          <p>
            Texty, fotografie a grafika na tomto webu jsou chráněny autorským
            právem, pokud není uvedeno jinak. Bez souhlasu správce je zakázáno
            je kopírovat nebo šířit za účelem komerce. Citace pro nekomerční
            vzdělávací účely s uvedením zdroje jsou vítány.
          </p>
        </Prose>

        <ProseHeading>Externí odkazy</ProseHeading>
        <Prose>
          <p>
            Odkazy na weby třetích stran (např. Erasmus+ EU) slouží jako
            doporučené zdroje. Za jejich obsah neneseme odpovědnost.
          </p>
        </Prose>

        <ProseHeading>Omezení odpovědnosti</ProseHeading>
        <Prose>
          <p>
            Snažíme se udržovat informace aktuální, ale nezaručujeme úplnost ani
            nepřetržitou dostupnost webu. Za rozhodnutí učiněná na základě
            informací z webu nese odpovědnost návštěvník; závazné jsou vždy
            oficiální pokyny školy a koordinátorů programu.
          </p>
        </Prose>

        <ProseHeading>Změny</ProseHeading>
        <Prose>
          <p>
            Podmínky můžeme upravit. Aktuální znění je vždy na této stránce.
            Zpracování osobních údajů popisuje{" "}
            <Link
              href="/ochrana-osobnich-udaju"
              className="font-medium text-primary hover:underline"
            >
              ochrana osobních údajů
            </Link>
            .
          </p>
        </Prose>

        <ProseHeading as="h3">Poslední aktualizace</ProseHeading>
        <Prose>
          <p>Květen 2026</p>
        </Prose>
      </article>
    </>
  );
}
