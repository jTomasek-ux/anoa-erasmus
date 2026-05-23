import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import PhotoGrid from "@/components/ui/PhotoGrid";
import { practicePhotos } from "@/content/pages";

export const metadata: Metadata = {
  title: "Akreditace | ANOA Erasmus+",
  description:
    "Akreditace Erasmus+ 2021-1-CZ01-KA121-VET-000006611 — mobilita studentů a zaměstnanců ANOA.",
};

export default function AkreditacePage() {
  return (
    <>
      <PageHeader
        title="Akreditace"
        description="2021-1-CZ01-KA121-VET-000006611"
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Akreditace" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Prose>
          <p>
            Akreditace Erasmus je určena pro všechny, kdo se chtějí účastnit a
            zapojit do mezinárodních projektů mobilit. Jsme moc rádi, že se nám
            v roce 2021 podařilo akreditaci získat. Nejen, že nám to ulehčuje
            následné žádosti o grant, ale máme také zaručenou minimální výši
            grantu.
          </p>
          <p>
            Díky němu jsme schopni vysílat naše studenty a zaměstnance školy do
            zahraničí. Studenti se díky mobilitám seznámí s různými zeměmi z
            pohledu zaměstnance, nasbírají cenné zkušenosti a prakticky využijí
            cizí jazyky.
          </p>
          <p>
            Preferované firmy, které studentům můžeme nabídnout, jsou podniky s
            ekologickou výrobou nebo se věnující dobrovolnictví. Pokud studenta
            pošleme do běžné firmy, jedním z úkolů je zmapovat postoje podniku
            ke Green dealu.
          </p>
          <p>
            Kolegům a nepedagogickým zaměstnancům pomáháme najít partnerské
            školy pro stínování nebo kurzy, které prohloubí jejich znalosti.
          </p>
        </Prose>

        <ProseHeading>Zkušenosti s praxí v zahraničí</ProseHeading>
        <Prose>
          <p>
            <strong>Profesní rozvoj:</strong> Praxe v zahraničí umožňuje získat
            praktické dovednosti oceňované zaměstnavateli. Mezinárodní zkušenost
            zvyšuje atraktivitu na trhu práce.
          </p>
          <p>
            <strong>Jazykové dovednosti:</strong> Pobyt v cizí zemi je
            jedinečná příležitost zlepšit jazyk v profesním i osobním životě.
          </p>
          <p>
            <strong>Kultura a networking:</strong> Seznámíte se s novou kulturou
            a navážete mezinárodní kontakty užitečné v kariéře.
          </p>
          <p>
            <strong>Osobní růst:</strong> Život v zahraničí učí samostatnosti,
            adaptabilitě a otevřenosti novým zkušenostem.
          </p>
        </Prose>

        <ProseHeading as="h3">Financování a podpora</ProseHeading>
        <Prose>
          <p>
            Program Erasmus+ nabízí finanční podporu ve formě stipendia podle
            cílové země a délky pobytu. Kromě finanční podpory získáte
            administrativní a akademickou podporu domovské i hostitelské
            instituce.
          </p>
          <p>
            Pokud máte zájem o mezinárodní zkušenosti a jste otevřeni novým
            výzvám, neváhejte se do programu přihlásit.
          </p>
        </Prose>

        <ProseHeading as="h3">Fotografie z proběhlých praxí</ProseHeading>
        <p className="mb-6 font-sans text-sm text-black/50">
          Níže je přehled destinací, kam naši studenti v rámci praxí vyjížděli.
          Fotografie doplníme z archivu školy.
        </p>
        <PhotoGrid items={practicePhotos} />
      </article>
    </>
  );
}
