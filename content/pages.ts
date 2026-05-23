import type { PhotoItem } from "@/components/ui/PhotoGrid";
import type { StudentQuote } from "@/components/ui/StudentQuotes";
import { nazoryStudentuPhotos } from "@/content/nazory-studentu-photos";

export const practicePhotos: PhotoItem[] = [
  { caption: "Praxe Villa Nova de Milfontes", location: "Portugalsko 2024" },
  { caption: "Praxe Memmingen", location: "Německo 2023" },
  { caption: "Praxe L´Alcudia", location: "Španělsko 2023" },
  { caption: "Praxe Alicante", location: "Španělsko 2023" },
  { caption: "Praxe Dobrich", location: "Bulharsko 2023" },
  { caption: "Praxe Reggio di Calabria", location: "Itálie 2023" },
  { caption: "Praxe Hazebrouck", location: "Francie 2023" },
  { caption: "Praxe Nazilli", location: "Turecko 2023" },
  { caption: "Praxe Villa Nova de Milfontes", location: "Portugalsko 2022" },
  { caption: "Praxe Alicante", location: "Španělsko 2022" },
  { caption: "Praxe Hazebrouck", location: "Francie 2022" },
];

export const studentQuotes: StudentQuote[] = [
  {
    id: "adam",
    name: "Adam",
    imageSrc: nazoryStudentuPhotos.adam,
    imageAlt: "Adam - zpětná vazba z projektu Erasmus+",
    sections: [
      {
        title: "Komunikační jazyk a spolupráce",
        content:
          "Jelikož tam bylo dost lidí z různých zemí, pro komunikaci byla logicky vybrána angličtina. Češi jsme na tom v běžné konverzaci byli nejlépe, ale v každé skupině se našel někdo další, kdo mluvil skvěle. Na překlad jsme měli tlumočnici - díky ní jsme věděli, co se děje. Jsem hrdý na to, jak naše česká skupina konverzovala a zapojovala se do aktivit.",
      },
      {
        title: "Osobní posun",
        content:
          "Určitě to člověka naučí samostatnost, komunikaci, empatii a v tomto případě i hodně trpělivost. Hodně záleží, jak se člověk angažuje.",
      },
      {
        title: "Výzvy na cestě",
        content:
          "Těch výzev bylo nespočet - například cesta z Deva zpět do Bukurešti. V Rumunsku je doprava dost svižná.",
      },
      {
        title: "Škola partnerů",
        content:
          "Školní komplex byl velký a dobře vybavený. Bylo vidět, že se opravdu snaží udělat dobrý program. Škola mi přišla hezká, hierarchie je tam možná větší než u nás.",
      },
      {
        title: "Splnil výjezd očekávání?",
        content:
          "Zájezd byl naprosto úžasný. Jel bych zase a klidně zítra. Měli jsme skvělou partu, super učitelky a hodně hustých zážitků. Miluju cestování.",
      },
      {
        title: "Rada vrstevníkům",
        content:
          "Řekl bych jim, ať se vůbec nerozhodují a rovnou se tam zapíšou. Jelikož je to hrazené, nevidím reálně negativní stránku. Nevyužít takovou nabídku je čirá hloupost.",
      },
    ],
  },
  {
    id: "dan",
    name: "Dan",
    imageSrc: nazoryStudentuPhotos.dan,
    imageAlt: "Dan - zpětná vazba z projektu Erasmus+",
    sections: [
      {
        title: "Komunikační jazyk",
        content:
          "Všichni si zvolili angličtinu. Když jsme dorazili na kolej, kde byli studenti z jiných států, tak asi polovina neuměla anglicky. A hodně učitelů také ne.",
      },
      {
        title: "Osobní posun",
        content:
          "Přestal jsem se bát dělat věci před velkou skupinou lidí. Odpolední aktivity ve škole mi pomohly - mluvili jsme a zpívali do mikrofonu, přednášeli prezentace. Užíval jsem si to.",
      },
      {
        title: "Výzvy",
        content:
          "Hlavní výzva byla domluvit se s lidmi, kteří neuměli anglicky - gesta nebo Google překladač.",
      },
      {
        title: "Škola partnerů",
        content:
          "Ve třídě byl velký zmatek, ale všiml jsem si, že jsou tam přísnější učitelé než u nás.",
      },
      {
        title: "Splnil výjezd očekávání?",
        content:
          "Rozhodně ano - užil jsem si to a zúčastnil bych se dalšího zájezdu.",
      },
      {
        title: "Rada vrstevníkům",
        content:
          "Ať se hlásí do Erasmu, dokud mají šanci - je to skvělá příležitost vycestovat, poznat kulturu a naučit se nové věci.",
      },
    ],
  },
  {
    id: "hoang",
    name: "Hoang",
    imageSrc: nazoryStudentuPhotos.hoang,
    imageAlt: "Hoang - zpětná vazba z projektu Erasmus+",
    sections: [
      {
        title: "Osobní posun",
        content:
          "Dozvěděl jsem se více o kultuře a tradicích. Spřátelil jsem se s kamarády, kteří se mi v budoucnu mohou hodit. Rád jsem poznal památky a tradice.",
      },
      {
        title: "Výzvy",
        content:
          "Spíš kulturní šok - zdejší kultura se výrazně lišila. Největší výzva bylo cestování; doprava není tak rychlá a provoz byl velmi hustý.",
      },
      {
        title: "Tradice a jídlo",
        content:
          "První den jsme dostali chléb posypaný solí - podle tradice jen pro vzácné hosty. Ve školní jídelně bylo podobné jídlo jako u nás.",
      },
      {
        title: "Škola partnerů",
        content:
          "Studenti trávili skoro celý den ve škole. Škola vychovávala vrcholové sportovce - po výuce oběd a trénink do večera.",
      },
      {
        title: "Splnil výjezd očekávání?",
        content:
          "Ano, splnilo to mé představy - určitě bych se přidal na další zájezd.",
      },
    ],
  },
];

export const partnerCountries = [
  "Portugalsko",
  "Francie",
  "Španělsko",
  "Turecko",
  "Polsko",
  "Slovensko",
  "Německo",
  "Itálie",
  "Rumunsko",
  "Maďarsko",
  "Bulharsko",
];
