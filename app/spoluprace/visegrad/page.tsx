import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import VisegradSlovenskoContent from "@/components/spoluprace/VisegradSlovenskoContent";

export const metadata: Metadata = {
  title: "Visegrad Project - Slovensko | ANOA Erasmus+",
  description:
    "Ekologické cestování, EKORAY a módní přehlídka z recyklovaných oděvů na Slovensku.",
};

export default function VisegradPage() {
  return (
    <>
      <PageHeader
        title="Visegrad Project - Slovensko"
        description="Ekologické cestování, recyklace a spolupráce s polskými a slovenskými studenty."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Spolupráce", href: "/projekty" },
          { label: "Visegrad - Slovensko" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Prose>
          <p>
            Jedná se o pokračování projektu ekologického cestování, využití již
            použitých věcí a celkově podpora ekologického myšlení studentů v
            rámci obnovy zdrojů. Studenti ANOA v ranních čtvrtečních hodinách
            cestovali vlakem do Rožumberka a dále na základní školu v Oravské
            Jasenici.
          </p>
          <p>
            První den byla prohlídka školy a seznámení studentů s celkovým
            programem. Studentům byly ukázány modely, které vznikly z již
            nepoužívaných oděvů a které si studenti mohli dále doupravit, popřípadě
            z dalšího nenošeného oblečení vytvořit novou kolekci. Všichni
            studenti z Polska i České republiky byli ubytováni v rodinách, kde
            měli možnost poznat zvyky a atmosféru jiného prostředí.
          </p>
        </Prose>

        <ProseHeading>Pátek - exkurze EKORAY</ProseHeading>
        <Prose>
          <p>
            V pátek byla naplánována exkurze do společnosti EKORAY, která se
            zabývá sběrem a zpracováním odpadu. Prohlídka společnosti byla velmi
            zajímavá - společnost má různé typy odpadů jako elektroodpad,
            bioodpad i dřevo v podobě palet a cívek. Odpolední program ve škole
            byl zaměřen na přípravu nové kolekce oděvů ze starého a již
            nenošeného oblečení s následnou přehlídkou v kulturním středisku.
            Závěrečná diskotéka a radost z přehlídky byly odměnou pro všechny
            organizátory.
          </p>
        </Prose>

        <ProseHeading>Sobota - Štrbské pleso a Bešeňová</ProseHeading>
        <Prose>
          <p>
            Celodenní výlet: nejprve Štrbské pleso, pak Tatras tower s výhledem
            na Tatry, tobogán a termální lázně Bešeňová. Večer návrat do Oravské
            Jasenice a ubytování v rodinách.
          </p>
        </Prose>

        <ProseHeading>Neděle - film SODOMA</ProseHeading>
        <Prose>
          <p>
            Ekologický film SODOMA o skládkách elektroodpadu v Africe - působivě
            ukazuje, kam vede blahobyt a že planetu a životní prostředí máme jen
            jedno. Celkový pobyt na Slovensku byl velmi nabitý a pro studenty
            ANOA přínosný jazykově i v uvědomění si důležitosti recyklace.
          </p>
        </Prose>

        <div className="mt-14 md:mt-16">
          <ProseHeading as="h3">Fotogalerie</ProseHeading>
          <VisegradSlovenskoContent />
        </div>
      </article>
    </>
  );
}
