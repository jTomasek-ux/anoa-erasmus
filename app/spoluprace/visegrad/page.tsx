import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import PhotoGrid from "@/components/ui/PhotoGrid";

export const metadata: Metadata = {
  title: "Visegrad Project — Slovensko | ANOA Erasmus+",
  description:
    "Ekologické cestování, EKORAY a módní přehlídka z recyklovaných oděvů na Slovensku.",
};

const visegradPhotos = [
  { caption: "Výběr modelů na módní přehlídku", location: "Oravská Jasenice" },
  { caption: "Příprava na únikovou hru" },
  { caption: "Návštěva EKORAY", location: "Sběr a zpracování odpadů" },
  { caption: "Zpracování bio odpadu a palet" },
  { caption: "Příprava oděvů z nenošeného oblečení" },
  { caption: "Modely na módní přehlídce" },
  { caption: "Štrbské pleso" },
  { caption: "Tatras tower" },
  { caption: "Ekologický film SODOMA" },
  { caption: "Předávání certifikátů" },
];

export default function VisegradPage() {
  return (
    <>
      <PageHeader
        title="Visegrad Project — Slovensko"
        description="Ekologické cestování, recyklace a spolupráce s polskými a slovenskými studenty."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Spolupráce", href: "/projekty" },
          { label: "Visegrad" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Prose>
          <p>
            Pokračování projektu ekologického cestování, využití již použitých
            věcí a podpora ekologického myšlení studentů. Studenti ANOA cestovali
            vlakem do Rožumberka a na základní školu v Oravské Jasenici.
          </p>
          <p>
            První den — prohlídka školy a seznámení s programem. Studenti
            pracovali s modely z nepoužívaných oděvů a tvořili nové kolekce.
            Všichni studenti z Polska i České republiky byli ubytováni v rodinách.
          </p>
        </Prose>

        <ProseHeading>Pátek — exkurze EKORAY</ProseHeading>
        <Prose>
          <p>
            Exkurze do společnosti EKORAY — sběr a zpracování odpadu včetně
            elektroodpadu, bioodpadu a dřeva. Odpoledne příprava módní přehlídky
            v kulturním středisku z recyklovaných oděvů. Závěrečná diskotéka a
            radost z přehlídky byly odměnou pro organizátory.
          </p>
        </Prose>

        <ProseHeading>Sobota — Štrbské pleso a Bešeňová</ProseHeading>
        <Prose>
          <p>
            Celodenní výlet: Štrbské pleso, Tatras tower, tobogán a termální
            lázně Bešeňová. Večer návrat do Oravské Jasenice a ubytování v
            rodinách.
          </p>
        </Prose>

        <ProseHeading>Neděle — film SODOMA</ProseHeading>
        <Prose>
          <p>
            Ekologický film o skládkách elektroodpadu v Africe — působivě ukazuje,
            kam vede blahobyt a proč máme jen jednu planetu. Pobyt byl jazykově i
            lidsky přínosný a posílil uvědomění důležitosti recyklace.
          </p>
        </Prose>

        <ProseHeading as="h3">Galerie aktivit</ProseHeading>
        <PhotoGrid items={visegradPhotos} />
      </article>
    </>
  );
}
