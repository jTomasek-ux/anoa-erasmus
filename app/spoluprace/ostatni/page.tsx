import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import PhotoGrid from "@/components/ui/PhotoGrid";

export const metadata: Metadata = {
  title: "Ostatní spolupráce | ANOA Erasmus+",
  description:
    "Spolupráce s Polskem — program Variety makes us stronger.",
};

const polandPhotos = [
  { caption: "Setkání v Praze", location: "Podzim 2021" },
  { caption: "Komiks — mobilní výstava", location: "Polsko" },
  { caption: "Setkání v Praze", location: "Jaro 2022" },
  { caption: "Dobrovolnická akce — papírové květiny", location: "ÚVN Praha" },
];

export default function OstatniSpolupracePage() {
  return (
    <>
      <PageHeader
        title="Ostatní spolupráce"
        description='Program „Variety makes us stronger“ s polskými partnery.'
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Spolupráce", href: "/projekty" },
          { label: "Ostatní spolupráce" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <ProseHeading>Spolupráce s Polskem</ProseHeading>
        <Prose>
          <p>
            Na podzim 2021 a na jaře 2022 jsme hostili studenty a pedagogy z
            Polska. Studenti se věnovali rozdílům ve společnosti a chování k
            lidem s handicapem.
          </p>
          <p>
            Z podzimního setkání vznikl komiks, který v Polsku funguje jako
            mobilní výstava. Při druhém setkání se studenti věnovali kulturním a
            jazykovým rozdílům a zapojili se do dobrovolnické akce — výroby
            papírových květin pro oddělení Ústřední vojenské nemocnice.
          </p>
          <p>
            I když to byla naše první spolupráce, vyšla na výbornou.
          </p>
        </Prose>

        <ProseHeading as="h3">Výsledky spolupráce</ProseHeading>
        <PhotoGrid items={polandPhotos} />
      </article>
    </>
  );
}
