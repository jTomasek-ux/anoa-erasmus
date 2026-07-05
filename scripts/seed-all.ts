/**
 * Imports all existing website content into Sanity.
 * Run: npm run seed:cms
 */
import { createClient } from "@sanity/client";
import {
  contactEmail,
  externalLinks,
  footerNav,
  legalNav,
  mainNav,
} from "../content/navigation";
import { studentQuotes } from "../content/pages";
import {
  partnerGalleries,
  partnerLogoCards,
  partnerTextCards,
} from "../content/partnerske-skoly-photos";
import { erasmusDaysImportance } from "../content/erasmus-days";
import { seedPages } from "../lib/cms/seed-pages";
import {
  benefits,
  galleryIntro,
  headingProse,
  importance,
  placements,
  prose,
  relatedLinks,
} from "../lib/cms/section-builders";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

const exploreCards = [
  { title: "Projekty", description: "Projektové Erasmus+ spolupráce, videokonference a výjezdy do partnerských škol.", href: "/projekty", tag: "Program" },
  { title: "Akreditace", description: "Akreditace 2021-1-CZ01-KA121-VET-000006611 - mobilita studentů i zaměstnanců.", href: "/akreditace", tag: "Mobilita" },
  { title: "Erasmus Days", description: "Každoroční oslava programu Erasmus+ - workshopy, setkání a aktivity ve škole.", href: "/erasmus-days", tag: "Událost" },
  { title: "Informace pro uchazeče", description: "Přihláška přes EDUspace, Erasmus+ projekt nebo praxe.", href: "/informace-pro-uchazece", tag: "Studenti" },
  { title: "Názory studentů", description: "Zpětná vazba z mezinárodních setkání a mobilit.", href: "/nazory-studentu", tag: "Zkušenosti" },
  { title: "eTwinning", description: "Young European Founders a videokonference s partnery.", href: "/spoluprace/etwinning", tag: "Spolupráce" },
  { title: "Visegrad Project", description: "Ekologické cestování — setkání studentů v Polsku v rámci Visegradských fondů.", href: "/spoluprace/visegrad-project", tag: "Spolupráce" },
  { title: "Visegrad — Slovensko", description: "EKORAY, recyklace a módní přehlídka z recyklovaných oděvů.", href: "/spoluprace/visegrad", tag: "Spolupráce" },
  { title: "Ostatní spolupráce", description: "Program „Variety makes us stronger“ s polskými partnery.", href: "/spoluprace/ostatni", tag: "Spolupráce" },
  { title: "Partnerské školy", description: "Síť škol v Portugalsku, Francii, Španělsku, Turecku, Polsku a dalších.", href: "/partnerske-skoly", tag: "Síť" },
  { title: "Tým mezinárodní spolupráce", description: "Koordinátoři, kteří otevírají dveře do Evropy.", href: "/tym", tag: "Lidé" },
];

const extraPages = [
  {
    slug: "erasmus-days",
    title: "Erasmus Days | ANOA Erasmus+",
    description: "Erasmus Days - mezinárodní oslava programu Erasmus+ a aktivit Anglo-německé obchodní akademie.",
    headerTitle: "Erasmus Days",
    headerDescription: "Každoroční oslava programu Erasmus+ a mezinárodní spolupráce na ANOA.",
    breadcrumb: ["Úvod", "Erasmus Days"],
    sections: [
      headingProse(
        "Co jsou Erasmus Days?",
        "Erasmus Days je každoroční mezinárodní akce, která slaví úspěchy a dopady programu Erasmus+ na vzdělávání a kulturu po celé Evropě a ve světě. Tyto dny poskytují platformu pro sdílení zkušeností, úspěchů a příběhů studentů, učitelů a institucí zapojených do programu. Během těchto dnů se konají různé akce, jako jsou workshopy, konference, výstavy a setkání, které pomáhají šířit povědomí o programu a jeho přínosech.",
      ),
      importance(...erasmusDaysImportance.map((c) => ({ title: c.title, body: c.body }))),
      prose(
        "Erasmus Days jsou významnou událostí, která podporuje rozvoj vzdělávání, kultury a mezinárodní spolupráce. Pomáhají zvyšovat povědomí o programu Erasmus+ a jeho přínosech, inspirují další generace k účasti a přispívají k budování otevřenější a propojenější Evropy.",
      ),
      galleryIntro(
        "Fotografie z Erasmus Days",
        "Aktivity a setkání naší školy během Erasmus Days - kliknutím fotografii zvětšíte.",
      ),
    ],
  },
  {
    slug: "informace-pro-uchazece",
    title: "Informace pro uchazeče | ANOA Erasmus+",
    description: "Přihláška do Erasmus+ projektu nebo praxe přes EDUspace.",
    headerTitle: "Informace pro uchazeče",
    breadcrumb: ["Úvod", "Informace pro uchazeče"],
    sections: [
      prose(
        "Přihláškový formulář naleznete na EDUspace v kolonce ZAHRANIČNÍ AKTIVITY. Máte na výběr ze dvou možností:",
      ),
      benefits("Možnosti přihlášky", [
        { label: "Erasmus+ projekt", text: "Mezinárodní setkání, videokonference a týmové projekty s partnery." },
        { label: "Erasmus+ praxe", text: "Odborná praxe v zahraničí v rámci akreditace školy." },
      ]),
      prose(
        "Zaskočte za námi do kabinetů, nebo napište e-mail na m.najmanova@anoa.cz.",
      ),
      relatedLinks("Další informace", [
        { label: "Názory studentů", href: "/nazory-studentu" },
        { label: "Akreditace a praxe", href: "/akreditace" },
      ]),
    ],
  },
  {
    slug: "praxe-pro-zahranicni-studenty",
    title: "Praxe pro zahraniční studenty | ANOA Erasmus+",
    description: "ANOA přijímá studenty ze zahraničních partnerských škol na praxi v Praze.",
    headerTitle: "Praxe pro zahraniční studenty",
    headerDescription: "Spolupráci se u nás meze nekladou.",
    eyebrow: "Praxe v Praze",
    headlineLine1: "Spolupráci se u nás",
    headlineLine2: "meze nekladou.",
    breadcrumb: ["Úvod", "Praxe pro zahraniční studenty"],
    sections: [
      prose(
        "Nejen, že se snažíme pro naše studenty nalézt nejlepší praxe v zahraničí, ale také je naší snahou vyhovět žádostem partnerských škol a nalézt praxe pro studenty ze zahraničí.",
        "Pokud byste měli příležitost přijmout tyto studenty, budeme rádi o zaslání jakékoliv nabídky na m.najmanova@anoa.cz. Předem děkujeme.",
      ),
      placements(
        { period: "Únor 2020", school: "Studentky z Lycee Depoorter - Hazebrouck, Francie", country: "Francie", detail: "Praxe v kanadské školce v Praze.", link: "http://www.lycee-depoorter.com/" },
        { period: "Březen 2020", school: "Studentky z Lycee Depoorter - Hazebrouck, Francie", country: "Francie", detail: "Praxe v Dobrovolnickém centru ve Vojenské nemocnici v Praze.", link: "http://www.lycee-depoorter.com/" },
        { period: "Březen – květen 2022", school: "Absolventky z Colegio Nossa Senhora da Graça, Portugalsko", country: "Portugalsko", detail: "Absolventky absolvovaly praxi ve společnosti zabývající se zemědělskými produkty.", link: "https://www.colegionsgraca.com.pt/new/" },
      ),
    ],
  },
  {
    slug: "partnerske-skoly",
    title: "Partnerské školy | Erasmus+",
    description: "Síť partnerských škol Erasmus+ v Evropě.",
    headerTitle: "Partnerské školy",
    headerDescription: "Spolupracujeme napříč Evropou.",
    breadcrumb: ["Úvod", "Partnerské školy"],
    sections: [
      prose(
        "Dlouhodobě spolupracujeme se školami v několika evropských zemích. Níže najdete přehled partnerů — podrobnosti a fotografie spravujte v sekci Partnerské školy v menu vlevo.",
      ),
    ],
  },
];

function toPageDoc(page: (typeof seedPages)[number] | (typeof extraPages)[number]) {
  return {
    _id: `page-${page.slug}`,
    _type: "page",
    title: page.title,
    slug: { _type: "slug", current: page.slug },
    description: page.description,
    headerTitle: page.headerTitle,
    headerDescription: "headerDescription" in page ? page.headerDescription : undefined,
    breadcrumb: page.breadcrumb,
    eyebrow: "eyebrow" in page ? page.eyebrow : undefined,
    headlineLine1: "headlineLine1" in page ? page.headlineLine1 : undefined,
    headlineLine2: "headlineLine2" in page ? page.headlineLine2 : undefined,
    sections: page.sections,
  };
}

async function main() {
  const siteSettings = {
    _id: "siteSettings",
    _type: "siteSettings",
    siteTitle: "Erasmus+",
    siteDescription:
      "Erasmus+ je vzdělávací program Evropské unie podporující spolupráci, mobilitu a praktické vzdělávání studentů napříč Evropou.",
    contactEmail,
    footerTagline:
      "Program Erasmus+ — mezinárodní spolupráce, mobilita studentů a pedagogů na ANOA.",
    heroHeadlineLine1: "Vzdělávání",
    heroHeadlineLine2: "bez hranic.",
    heroSubtitle:
      "Erasmus+ je vzdělávací program pod záštitou Evropské unie, jehož cílem je podpora spolupráce a mobilit ve všech sférách vzdělávání.",
    heroCtaLabel: "Zjistit více",
    heroCtaHref: "/informace-pro-uchazece",
    homeIntroHeading: "Erasmus+ na ANOA",
    homeIntroParagraphs: [
      "Erasmus+ je vzdělávací program pod záštitou Evropské unie, jehož cílem je podpora spolupráce a mobilit ve všech sférách vzdělávání. Cílem Erasmu je zvýšení kvality a přiměřenosti kvalifikací a dovedností.",
      "Na naší škole věříme, že stejně důležité jako studium je i praktické použití naučených znalostí. Různé druhy projektů s partnerskými školami ze zahraničí jsou jednou z cest, které k této praxi napomáhají. Nedílnou součástí je pro studenty možnost využití cizích jazyků a vyzkoušení si jazykových kompetencí.",
    ],
    exploreSectionLabel: "Prozkoumejte program",
    exploreSectionSubtitle: "Přehled všech sekcí programu Erasmus+ na naší škole.",
    exploreCards,
    mainNav,
    footerNav,
    externalLinks,
    legalNav,
  };

  await client.createOrReplace(siteSettings);
  console.log("✓ Nastavení webu");

  const allPages = [...seedPages, ...extraPages];
  for (const page of allPages) {
    await client.createOrReplace(toPageDoc(page));
    console.log(`✓ Stránka: ${page.headerTitle}`);
  }

  for (const [index, quote] of studentQuotes.entries()) {
    await client.createOrReplace({
      _id: `studentQuote-${quote.id}`,
      _type: "studentQuote",
      name: quote.name,
      slug: { _type: "slug", current: quote.id },
      sections: quote.sections.map((s) => ({
        title: s.title,
        content: s.content,
      })),
      order: index,
    });
    console.log(`✓ Názor studenta: ${quote.name}`);
  }

  await client.createOrReplace({
    _id: "teamMember-milena",
    _type: "teamMember",
    name: "Milena Najmanová",
    bioParagraphs: [
      "Patnáct let jsem pracovala v mezinárodní firmě, do školství jsem měla hodně daleko. Shodou okolností jsem se dostala k doučování angličtiny a zjistila, že mě to baví - proto jsem si dodělala vzdělání a kompletně vyměnila obor.",
      "Znalost teorie je základem, nikoli cílem. Žijeme v době, kdy teoretické informace shání každý za pár minut - důležitá je připravenost je aplikovat v praxi.",
    ],
    tagline: "Neseďte, vstaňte, cestujte, žijte!",
    order: 0,
  });
  console.log("✓ Člen týmu: Milena Najmanová");

  let partnerOrder = 0;
  for (const p of partnerGalleries) {
    await client.createOrReplace({
      _id: `partnerSchool-${p.id}`,
      _type: "partnerSchool",
      title: p.title,
      country: p.country,
      description: p.description,
      href: p.href,
      displayType: "gallery",
      order: partnerOrder++,
    });
  }
  for (const p of partnerLogoCards) {
    await client.createOrReplace({
      _id: `partnerSchool-${p.id}`,
      _type: "partnerSchool",
      title: p.title,
      country: p.country,
      description: p.description,
      href: p.href,
      displayType: "logoCard",
      order: partnerOrder++,
    });
  }
  for (const p of partnerTextCards) {
    await client.createOrReplace({
      _id: `partnerSchool-${p.id}`,
      _type: "partnerSchool",
      title: p.title,
      country: p.country,
      description: p.description,
      href: p.href,
      displayType: "textCard",
      order: partnerOrder++,
    });
  }
  console.log(`✓ Partnerské školy: ${partnerOrder} záznamů`);

  console.log("\nHotovo! Otevřete /admin — stránky by měly být předvyplněné.");
  console.log("Fotografie zatím zůstávají na webu; v adminu je můžete postupně nahrát.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
