/** Assets exported from Google Sites - folder under /public. */
const base = "/Praxe pro zahraniční studenty";

function asset(fileName: string) {
  return `${base}/${fileName}`;
}

export const praxeIntroImages = {
  headline: {
    src: asset("Headline.jpeg"),
    alt: "Erasmus+ banner Anglo-německé obchodní akademie ANOA",
  },
} as const;

export type PraxePlacement = {
  period: string;
  school: string;
  country: string;
  detail: string;
  link: string;
  image: { src: string; alt: string };
};

export const praxePlacements: PraxePlacement[] = [
  {
    period: "Únor 2020",
    school: "Studentky z Lycee Depoorter",
    country: "Francie",
    detail: "Studentky absolvovaly praxe v kanadské školce v Praze.",
    link: "http://www.lycee-depoorter.com/",
    image: {
      src: asset("unor2020.jpeg"),
      alt: "Studentky z Francie na vyhlídce nad Prahou - únor 2020",
    },
  },
  {
    period: "Březen 2020",
    school: "Studentky z Lycee Depoorter",
    country: "Francie",
    detail:
      "Studentky absolvovaly praxe v Dobrovolnickém centru ve Vojenské nemocnici v Praze.",
    link: "http://www.lycee-depoorter.com/",
    image: {
      src: asset("brezen2020.jpeg"),
      alt: "Studentky z Francie v kavárně - březen 2020",
    },
  },
  {
    period: "Březen – květen 2022",
    school: "Absolventky z Colegio Nossa Senhora da Graça, Portugalsko",
    country: "",
    detail:
      "Absolventky absolvovaly praxi ve společnosti zabývající se zemědělskými produkty.",
    link: "https://www.colegionsgraca.com.pt/new/",
    image: {
      src: asset("berezen-kveten2022.jpeg"),
      alt: "Skupina studentek z Portugalska - březen až květen 2022",
    },
  },
];
