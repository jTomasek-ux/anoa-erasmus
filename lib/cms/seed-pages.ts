import type { ContentSection } from "@/lib/cms/fetch";
import {
  benefits,
  callout,
  galleryIntro,
  importance,
  placements,
  prose,
  qaBlock,
  relatedLinks,
  stats,
} from "@/lib/cms/section-builders";

export type SeedPage = {
  slug: string;
  title: string;
  description: string;
  headerTitle: string;
  headerDescription?: string;
  breadcrumb: string[];
  eyebrow?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  sections: ContentSection[];
};

export const seedPages: SeedPage[] = [
  {
    slug: "home",
    title: "Erasmus+",
    description:
      "Erasmus+ je vzdělávací program Evropské unie podporující spolupráci, mobilitu a praktické vzdělávání studentů napříč Evropou.",
    headerTitle: "Úvodní stránka",
    headerDescription: "Text úvodní stránky lze upravit také v Nastavení webu.",
    breadcrumb: ["Úvod"],
    sections: [
      prose(
        "Erasmus+ je vzdělávací program pod záštitou Evropské unie, jehož cílem je podpora spolupráce a mobilit ve všech sférách vzdělávání. Cílem Erasmu je zvýšení kvality a přiměřenosti kvalifikací a dovedností.",
        "Na naší škole věříme, že stejně důležité jako studium je i praktické použití naučených znalostí. Různé druhy projektů s partnerskými školami ze zahraničí jsou jednou z cest, které k této praxi napomáhají. Nedílnou součástí je pro studenty možnost využití cizích jazyků a vyzkoušení si jazykových kompetencí.",
      ),
    ],
  },
  {
    slug: "projekty",
    title: "Projekty | ANOA Erasmus+",
    description:
      "Projektové Erasmus+ - spolupráce mezi institucemi, videokonference a výjezdy studentů.",
    headerTitle: "Erasmus+ projekty",
    headerDescription:
      "Projektové Erasmus+ jsou zacílené na spolupráci mezi jednotlivými institucemi.",
    breadcrumb: ["Úvod", "Projekty"],
    sections: [
      prose(
        "Výhodou těchto projektů je jejich rozmanitost náplně. Každý program má své téma a výstupy jsou vždy jiné - vždy záleží na domluvě mezi organizacemi.",
        "Obecně se snažíme vybírat a navrhovat takové projekty, které prohlubují ekonomické, ekologické a dobrovolnické dovednosti spojené s jazykovou vybaveností.",
        "Během těchto projektů se studenti účastní videokonferencí, plní tematické úkoly a v různě velkých skupinách mají možnost vycestovat do partnerských škol.",
      ),
      stats(
        { value: "EU", label: "Program" },
        { value: "27+", label: "Zemí zapojeno" },
        { value: "∞", label: "Možností" },
      ),
      relatedLinks("Související stránky", [
        { label: "Akreditace a praxe v zahraničí", href: "/akreditace" },
        { label: "Erasmus Days", href: "/erasmus-days" },
        { label: "eTwinning spolupráce", href: "/spoluprace/etwinning" },
        { label: "Visegrad Project", href: "/spoluprace/visegrad-project" },
        { label: "Visegrad — Slovensko", href: "/spoluprace/visegrad" },
        { label: "Partnerské školy", href: "/partnerske-skoly" },
      ]),
    ],
  },
  {
    slug: "akreditace",
    title: "Akreditace | ANOA Erasmus+",
    description:
      "Akreditace Erasmus+ 2021-1-CZ01-KA121-VET-000006611 - mobilita studentů a zaměstnanců ANOA.",
    headerTitle: "Akreditace",
    headerDescription: "2021-1-CZ01-KA121-VET-000006611",
    breadcrumb: ["Úvod", "Akreditace"],
    sections: [
      prose(
        "Akreditace Erasmus je určena pro všechny, kdo se chtějí účastnit a zapojit do mezinárodních projektů mobilit. Jsme moc rádi, že se nám v roce 2021 podařilo akreditaci získat. Nejen, že nám to ulehčuje následné žádosti o grant, ale máme také zaručenou minimální výši grantu.",
        "Díky němu jsme schopni vysílat naše studenty a zaměstnance školy do zahraničí. Studenti se díky mobilitám seznámí s různými zeměmi z pohledu zaměstnance, nasbírají cenné zkušenosti a prakticky využijí cizí jazyky.",
        "Preferované firmy, které studentům můžeme nabídnout, jsou podniky s ekologickou výrobou nebo se věnující dobrovolnictví. Pokud studenta pošleme do běžné firmy, jedním z úkolů je zmapovat postoje podniku ke Green dealu.",
        "Kolegům a nepedagogickým zaměstnancům pomáháme najít partnerské školy pro stínování nebo kurzy, které prohloubí jejich znalosti.",
      ),
      benefits("Zkušenosti s praxí v zahraničí", [
        {
          label: "Profesní rozvoj",
          text: "Praxe v zahraničí umožňuje získat praktické dovednosti oceňované zaměstnavateli. Mezinárodní zkušenost zvyšuje atraktivitu na trhu práce.",
        },
        {
          label: "Jazykové dovednosti",
          text: "Pobyt v cizí zemi je jedinečná příležitost zlepšit jazyk v profesním i osobním životě.",
        },
        {
          label: "Kultura a networking",
          text: "Seznámíte se s novou kulturou a navážete mezinárodní kontakty užitečné v kariéře.",
        },
        {
          label: "Osobní růst",
          text: "Život v zahraničí učí samostatnosti, adaptabilitě a otevřenosti novým zkušenostem.",
        },
      ]),
      prose(
        "Program Erasmus+ nabízí finanční podporu ve formě stipendia podle cílové země a délky pobytu. Kromě finanční podpory získáte administrativní a akademickou podporu domovské i hostitelské instituce.",
        "Pokud máte zájem o mezinárodní zkušenosti a jste otevřeni novým výzvám, neváhejte se do programu přihlásit.",
      ),
      galleryIntro(
        "Fotografie z proběhlých praxí",
        "Pár fotek z již proběhlých praxí - kliknutím obrázek zvětšíte. Fotografie zatím zůstávají na webu; nové můžete nahrát v této sekci později.",
      ),
    ],
  },
  {
    slug: "nazory-studentu",
    title: "Názory studentů | ANOA Erasmus+",
    description:
      "Zpětná vazba studentů z mezinárodních projektů Erasmus+ - Rumunsko a další.",
    headerTitle: "Názory studentů",
    headerDescription: "Děkujeme za zpětnou vazbu - pomáhá nám i dalším uchazečům.",
    breadcrumb: ["Úvod", "Názory studentů"],
    sections: [
      prose(
        "Jsme rádi, když díky vyhraným projektům můžeme poslat studenty do zahraničí. Ještě více si užíváme váš zájem o tyto projekty. Vaše názory pomáhají koordinátorům lépe plánovat výjezdy i dalším zájemcům, kteří s účastí váhají. Děkujeme!",
      ),
    ],
  },
  {
    slug: "tym",
    title: "Tým mezinárodní spolupráce | ANOA Erasmus+",
    description:
      "Tým ANOA Erasmus+ - koordinátoři mezinárodní spolupráce a mobility.",
    headerTitle: "Tým mezinárodní spolupráce",
    headerDescription:
      "Kdo jsme? Skupina nadšenců, pro které vzdělání nekončí u školních bran.",
    breadcrumb: ["Úvod", "Tým"],
    sections: [
      prose(
        "Jsme skupina nadšenců, kteří věří, že vzdělání nezačíná a nekončí u školních bran, ale je součástí našich každodenních životů. Stačí jen chtít!",
        "Na naší škole se věnujeme mezinárodní spolupráci a společně čelíme nenadálým okolnostem. Otevřete dveře k nám do kabinetů a my uděláme vše pro to, abychom vám otevřeli dveře do celé Evropy.",
      ),
      callout("Neseďte, vstaňte, cestujte, žijte!"),
      qaBlock(
        {
          question: "Děláte Vaši práci ráda? A proč?",
          answer:
            "Ano - kdyby mě nebavila, už bych dělala něco jiného. Moc mě baví kontakt s mladší generací, sledovat, jak během čtyř let rostou a připravují se na budoucí život.",
        },
        {
          question:
            "Proč jste se stala součástí týmu ANOA - Mezinárodní spolupráce?",
          answer:
            "Mezinárodní spolupráci se na škole věnuji před čtyřmi lety. Ve firmě jsem byla denně v kontaktu se zahraničím - teorii o mezinárodní spolupráci nestačí vysvětlovat, člověk si to musí zažít.",
        },
        {
          question: "Který pobyt v zahraničí Vás profesně nejvíce formoval?",
          answer:
            "V mládí jsem procestovala půlku světa. Největší vliv měla práce pro švýcarskou pobočku - kombinace švýcarského prostředí s nadřízenou z Hong Kongu mě naučila nový přístup k práci.",
        },
        {
          question: "Z čeho míváte největší radost?",
          answer:
            "Ve škole, když se studentům něco povede - certifikáty, Erasmus+, úspěch na videokonferencích. V soukromém životě rodina a čas s ní.",
        },
        {
          question: "Na čem právě pracujete?",
          answer: "Na další mezinárodní spolupráci a na svém profesním rozvoji.",
        },
        {
          question: "Co Vás v životě nejvíce formuje?",
          answer: "Prostředí a lidé kolem mě.",
        },
      ),
    ],
  },
];
