export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const mainNav: NavGroup[] = [
  { label: "Úvod", href: "/" },
  { label: "Projekty", href: "/projekty" },
  { label: "Akreditace", href: "/akreditace" },
  { label: "Erasmus Days", href: "/erasmus-days" },
  {
    label: "Spolupráce",
    children: [
      {
        label: "eTwinning",
        href: "/spoluprace/etwinning",
        description: "Online projekty a videokonference",
      },
      {
        label: "Visegrad Project",
        href: "/spoluprace/visegrad-project",
        description: "Ekologické cestování — Polsko, Margonin",
      },
      {
        label: "Visegrad — Slovensko",
        href: "/spoluprace/visegrad",
        description: "EKORAY, recyklace a módní přehlídka",
      },
      {
        label: "Ostatní spolupráce",
        href: "/spoluprace/ostatni",
        description: "Spolupráce s Polskem",
      },
    ],
  },
  {
    label: "Pro studenty",
    children: [
      {
        label: "Informace pro uchazeče",
        href: "/informace-pro-uchazece",
        description: "Přihláška a kontakt",
      },
      {
        label: "Názory studentů",
        href: "/nazory-studentu",
        description: "Zkušenosti z mobilit",
      },
      {
        label: "Praxe pro zahraniční studenty",
        href: "/praxe-pro-zahranicni-studenty",
        description: "Přijímáme studenty ze zahraničí",
      },
      {
        label: "Stínování a pedagogické stáže",
        href: "/stinovani-a-pedagogicke-staze",
        description: "Pro pedagogy a studenty pedagogiky",
      },
    ],
  },
  { label: "Partnerské školy", href: "/partnerske-skoly" },
  { label: "Náš tým", href: "/tym" },
];

export const footerNav: NavLink[] = [
  { label: "Úvod", href: "/" },
  { label: "Projekty", href: "/projekty" },
  { label: "Akreditace", href: "/akreditace" },
  { label: "Erasmus Days", href: "/erasmus-days" },
  { label: "eTwinning", href: "/spoluprace/etwinning" },
  { label: "Visegrad Project", href: "/spoluprace/visegrad-project" },
  { label: "Visegrad — Slovensko", href: "/spoluprace/visegrad" },
  { label: "Ostatní spolupráce", href: "/spoluprace/ostatni" },
  { label: "Informace pro uchazeče", href: "/informace-pro-uchazece" },
  { label: "Názory studentů", href: "/nazory-studentu" },
  { label: "Partnerské školy", href: "/partnerske-skoly" },
  { label: "Tým", href: "/tym" },
];

export const externalLinks = [
  {
    label: "Erasmus+ EU",
    href: "https://erasmus-plus.ec.europa.eu",
  },
];

/** Footer legal links - text should be reviewed by the school’s DPO / lawyer. */
export const legalNav: NavLink[] = [
  { label: "Ochrana osobních údajů", href: "/ochrana-osobnich-udaju" },
  { label: "Podmínky použití", href: "/podminky-pouziti" },
];

export const contactEmail = "m.najmanova@anoa.cz";
