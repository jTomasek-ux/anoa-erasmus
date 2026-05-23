import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import { contactEmail } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | ANOA Erasmus+",
  description:
    "Informace o zpracování osobních údajů na informačním webu programu Erasmus+ školy ANOA.",
};

export default function OchranaOsobnichUdajuPage() {
  return (
    <>
      <PageHeader
        title="Ochrana osobních údajů"
        description="Jak nakládáme s údaji na tomto informačním webu."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Ochrana osobních údajů" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Prose>
          <p>
            Tento web slouží k informování o programu Erasmus+ a mezinárodní
            spolupráci školy ANOA. Níže uvádíme základní informace podle
            nařízení GDPR. Finální znění by mělo schválit vedení školy nebo
            pověřenec pro ochranu osobních údajů.
          </p>
        </Prose>

        <ProseHeading>Správce údajů</ProseHeading>
        <Prose>
          <p>
            Správcem osobních údajů je provozovatel webu — škola ANOA (doplňte
            oficiální název, sídlo a IČO podle údajů školy). Věcné dotazy k
            ochraně údajů směřujte na{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-primary hover:underline"
            >
              {contactEmail}
            </a>
            .
          </p>
        </Prose>

        <ProseHeading>Jaké údaje zpracováváme</ProseHeading>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Obsah stránek — jména studentů nebo pedagogů uveřejněná se
              souhlasem (např. názory studentů, tým koordinátorů).
            </li>
            <li>
              Technické údaje — IP adresa, typ prohlížeče a logy hostingu při
              návštěvě webu (bezpečnost a provoz služby).
            </li>
            <li>
              E-mail — pokud nás kontaktujete přes odkaz{" "}
              <code className="text-sm">mailto:</code>; obsah zprávy zpracujeme
              jen za účelem odpovědi.
            </li>
          </ul>
          <p>
            Web v současné podobě nepoužívá registrační formuláře ani
            marketingové cookies. Přihlášky do projektů probíhají mimo tento web
            (např. v EDUspace).
          </p>
        </Prose>

        <ProseHeading>Účel a právní základ</ProseHeading>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Informování veřejnosti o programu Erasmus+ — oprávněný zájem
              správce (čl. 6 odst. 1 písm. f) GDPR).
            </li>
            <li>
              Zveřejnění citací a jmen — souhlas dotčené osoby nebo oprávněný
              zájem školy při dokumentaci programu (dle interních pravidel
              školy).
            </li>
            <li>Provoz a zabezpečení webu — oprávněný zájem správce.</li>
          </ul>
        </Prose>

        <ProseHeading>Doba uchování</ProseHeading>
        <Prose>
          <p>
            Obsah webu uchováváme po dobu provozu stránek nebo do odvolání
            souhlasu u citací studentů. Technické logy uchovává poskytovatel
            hostingu po dobu stanovenou smlouvou, obvykle nejdéle několik
            měsíců.
          </p>
        </Prose>

        <ProseHeading>Příjemci údajů</ProseHeading>
        <Prose>
          <p>
            Údaje mohou zpracovávat smluvní zpracovatelé (hosting, případně
            správce domény). Údaje nepředáváme mimo EU/EHP, pokud hosting nebude
            nastaven jinak — v takovém případě zajistíme odpovídající záruky.
          </p>
        </Prose>

        <ProseHeading>Vaše práva</ProseHeading>
        <Prose>
          <p>
            Máte právo na přístup, opravu, výmaz, omezení zpracování, námitku a
            přenositelnost (je-li použitelná), jakož i právo podat stížnost u
            Úřadu pro ochranu osobních údajů (
            <a
              href="https://www.uoou.cz"
              className="font-medium text-primary hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              uoou.cz
            </a>
            ).
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
