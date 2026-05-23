const base = "/Partnerské školy";

function asset(fileName: string) {
  return `${base}/${fileName}`;
}

export type PartnerGallery = {
  id: string;
  country: string;
  title: string;
  description: string;
  href: string;
  logo?: { src: string; alt: string };
  photos: { src: string; alt: string }[];
};

export type PartnerLogoCard = {
  id: string;
  country: string;
  title: string;
  description: string;
  href: string;
  logo: { src: string; alt: string };
};

export type PartnerTextCard = {
  id: string;
  country: string;
  title: string;
  description: string;
  href?: string;
};

export const partnerGalleries: PartnerGallery[] = [
  {
    id: "france-depoorter",
    country: "Francie",
    title: "Lycée Depoorter – Hazebrouck",
    description:
      "Dlouhodobý partner pro studentské praxe a výměny. Francouzští studenti pravidelně absolvují stáže v Praze a naši studenti jezdí do Hazebroucku.",
    href: "http://www.lycee-depoorter.com/",
    logo: {
      src: asset("logo-lycee-depoorter.png"),
      alt: "Logo Lycée Depoorter – Hazebrouck",
    },
    photos: [
      {
        src: asset("diapo1.jpg"),
        alt: "Lycée Depoorter – budova školy v Hazebroucku",
      },
      {
        src: asset("Photo-pourvie-au-lycee-1080x675.jpg"),
        alt: "Život na Lycée Depoorter",
      },
      {
        src: asset("IMG_2340-scaled.jpg"),
        alt: "Studenti na Lycée Depoorter",
      },
      {
        src: asset("20250423_154703-3-scaled.jpg"),
        alt: "Setkání s partnery z Lycée Depoorter",
      },
      {
        src: asset("afficheDepoorter2025-2-1080x675.jpg"),
        alt: "Plakát Lycée Depoorter 2025",
      },
      {
        src: asset("PORTES-OUVERTES1-1080x675.jpg"),
        alt: "Dny otevřených dveří na Lycée Depoorter",
      },
      {
        src: asset("bienvenue1-test.jpg"),
        alt: "Uvítání na Lycée Depoorter",
      },
      {
        src: asset("5.jpg"),
        alt: "Mezinárodní setkání studentů s vlajkami partnerských zemí",
      },
    ],
  },
  {
    id: "spain-maristas",
    country: "Španělsko",
    title: "Colegio Marista Algemesí",
    description:
      "Spolupracujeme s maristickou školou Colegio Nuestra Señora de la Salud v Algemesí. Fotografie pocházejí ze společných projektů a setkání.",
    href: "https://www.maristasalgemesi.com/",
    photos: [
      {
        src: asset("20250201_113929-720x480.jpg"),
        alt: "Colegio Marista Algemesí – společná fotografie",
      },
      {
        src: asset("banner-3-colores-identificativos-1920px.jpg"),
        alt: "Maristas – identifikační banner",
      },
      {
        src: asset("Fundacion-Marcelino.jpg"),
        alt: "Fundación Marcelino Champagnat",
      },
    ],
  },
];

export const partnerLogoCards: PartnerLogoCard[] = [
  {
    id: "portugal-nsgraca",
    country: "Portugalsko",
    title: "Colégio de Nossa Senhora da Graça",
    description:
      "Partnerská škola ve Vila Nova de Milfontes. Studenti z Portugalska u nás absolvovali praxe a naši studenti jezdí na stáže na jih Portugalska.",
    href: "https://www.colegionsgraca.com.pt/",
    logo: {
      src: asset("logo-colegio-nsgraca.png"),
      alt: "Logo Colégio de Nossa Senhora da Graça",
    },
  },
  {
    id: "slovakia-kosicka-akademia",
    country: "Slovensko",
    title: "Súkromná stredná odborná škola ekonomická KOŠICKÁ AKADÉMIA, Košice",
    description:
      "Partnerská škola v centru Košic. Spolupracujeme v rámci projektů Erasmus+ a studentských mobilit.",
    href: "https://kadavinci.edupage.org/",
    logo: {
      src: asset("logo-kosicka-akademia.png"),
      alt: "Logo KOŠICKÁ AKADÉMIA, Košice",
    },
  },
];

export const partnerTextCards: PartnerTextCard[] = [
  {
    id: "polsko",
    country: "Polsko",
    title: "Polské partnerské školy",
    description:
      "Partneři v rámci projektu „Variety makes us stronger“ a dalších mobilit Erasmus+.",
    href: "/spoluprace/ostatni",
  },
  {
    id: "turecko",
    country: "Turecko",
    title: "Turecké partnerské školy",
    description:
      "Partneři v projektech Erasmus+ a eTwinning, například v rámci Young European Founders.",
    href: "/spoluprace/etwinning",
  },
  {
    id: "nemecko",
    country: "Německo",
    title: "Německé partnerské školy",
    description: "Partneři v projektech Erasmus+ a eTwinning.",
  },
  {
    id: "italie",
    country: "Itálie",
    title: "Italské partnerské školy",
    description:
      "Partneři v projektech Erasmus+ a eTwinning, včetně studentských stáží.",
  },
];
