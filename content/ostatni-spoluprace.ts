/** Assets exported from Google Sites - folder under /public. */
const base = "/Ostatní spolupráce";

function asset(fileName: string) {
  return `${base}/${fileName}`;
}

export const ostatniProgramName = "Variety makes us stronger";

export const ostatniIntroPhotos = [
  {
    src: asset("spolupráce s polskem.1.png"),
    alt: "Spolupráce s Polskem - setkání studentů ANOA a polských partnerů",
  },
  {
    src: asset("spolupráce s polskem.2.jpeg"),
    alt: "Spolupráce s Polskem - společné aktivity",
  },
] as const;

export type OstatniPhotoGroup = {
  title: string;
  description?: string;
  photos: { src: string; alt: string }[];
  imageFit?: "cover" | "contain";
  bordered?: boolean;
};

function numberedPhotos(
  prefix: string,
  ext: string,
  count: number,
  altBase: string,
): { src: string; alt: string }[] {
  return Array.from({ length: count }, (_, i) => ({
    src: asset(`${prefix}.${i + 1}.${ext}`),
    alt: `${altBase} - fotografie ${i + 1}`,
  }));
}

/** Filenames use two spaces in „jaro  2022“ - must match /public exactly. */
export const ostatniPhotoGroups: OstatniPhotoGroup[] = [
  {
    title: "Praha, podzim 2021",
    description:
      "První setkání - rozdíly ve společnosti a práce na komiksu, který v Polsku slouží jako mobilní výstava.",
    photos: numberedPhotos(
      "Praha, podzim 2021",
      "jpeg",
      6,
      "Setkání v Praze - podzim 2021",
    ),
  },
  {
    title: "Praha, jaro 2022",
    description:
      "Druhé setkání - kulturní a jazykové rozdíly a dobrovolnická akce (papírové květiny pro ÚVN Praha).",
    photos: numberedPhotos(
      "Praha, jaro  2022",
      "jpeg",
      12,
      "Setkání v Praze - jaro 2022",
    ),
  },
  {
    title: "Výsledky naší spolupráce",
    description:
      "Komiks, společné projekty a výstupy programu se zahraničními partnery.",
    imageFit: "contain",
    bordered: false,
    photos: numberedPhotos(
      "výsledky naší spolupráce",
      "jpeg",
      7,
      "Výsledky spolupráce s Polskem",
    ),
  },
];
