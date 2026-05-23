/** Assets from Google Sites — folder under /public. */
const base = "/Visegrad Project";

function asset(fileName: string) {
  return `${base}/${fileName}`;
}

export const visegradProjectIntro = {
  headline: asset("headlinePhoto.jpeg"),
  flag: asset("PolandFlag.png"),
} as const;

export type VisegradProjectPhotoGroup = {
  title: string;
  description?: string;
  photos: { src: string; alt: string }[];
  imageFit?: "cover" | "contain";
  bordered?: boolean;
  layout?: "grid" | "featured";
};

function photo(fileName: string, alt: string) {
  return { src: asset(fileName), alt };
}

export const visegradProjectPhotoGroups: VisegradProjectPhotoGroup[] = [
  {
    title: "První setkání v Margonin",
    description:
      "Setkání studentů z Česka, Polska a Slovenska v základní škole Margonin a seznámení s programem projektu.",
    layout: "featured",
    photos: [
      photo(
        "První setkání.1.jpeg",
        "První setkání studentů v základní škole Margonin",
      ),
    ],
  },
  {
    title: "Gdaňsk a muzeum druhé světové války",
    description:
      "Páteční výlet do Gdaňsku — náměstí, přístav, katedrála a návštěva Muzea druhé světové války.",
    photos: [
      photo(
        "Návštěva muzea 2. světové války v Gdaňsku.jpeg",
        "Návštěva muzea druhé světové války v Gdaňsku",
      ),
    ],
  },
  {
    title: "Projekt ekologického cestování",
    description:
      "Studenti ve smíšených týmech pracovali na tématu ekologického cestování a připravovali vizuální prezentace.",
    photos: [
      photo(
        "Projekt ekologické cestování v základní škole Margonin.jpeg",
        "Projekt ekologického cestování v základní škole Margonin",
      ),
      photo(
        "Studenti namalovili a prezentovali důležitost ekologického cestování .jpeg",
        "Studenti namalovali a prezentovali důležitost ekologického cestování",
      ),
      photo(
        "Další skupina - studenti spolupracovali ve skupinách sestavených z polských, slovenských a českých studentů.jpeg",
        "Spolupráce polských, slovenských a českých studentů ve skupinách",
      ),
      photo(
        "Další propagační prezentaci v rámci projektu ekologické cestování .jpeg",
        "Propagační prezentace v rámci projektu ekologického cestování",
      ),
      photo(
        "Příprava na prezentaci .jpeg",
        "Příprava na prezentaci projektu",
      ),
      photo(
        "Společná práce všech skupin .jpeg",
        "Společná práce všech skupin na projektu",
      ),
    ],
  },
  {
    title: "Vizuální prezentace skupin",
    description:
      "Výsledné plakáty a vizuální prezentace jednotlivých týmů k tématu ekologického cestování.",
    imageFit: "contain",
    bordered: false,
    photos: [
      photo("Vizuální prezentace skupiny1.jpeg", "Vizuální prezentace skupiny 1"),
      photo("Vizuální prezentace skupiny2.jpeg", "Vizuální prezentace skupiny 2"),
      photo("Vizuální prezentace skupiny3.jpeg", "Vizuální prezentace skupiny 3"),
      photo("Vizuální prezentace skupiny4.jpeg", "Vizuální prezentace skupiny 4"),
    ],
  },
  {
    title: "Závěr projektu",
    description:
      "Nedělní výlet na kolech a slavnostní předání certifikátů od starosty města Margonin.",
    photos: [
      photo("Nedělní výlet na kolech.jpeg", "Nedělní výlet na kolech"),
      photo(
        "Převzetí certifikátů od starosty města Margonin a koordinátorky projektu.1.jpeg",
        "Převzetí certifikátů od starosty města Margonin — 1",
      ),
      photo(
        "Převzetí certifikátů od starosty města Margonin a koordinátorky projektu.2.jpeg",
        "Převzetí certifikátů od starosty města Margonin — 2",
      ),
      photo(
        "Převzetí certifikátů od starosty města Margonin a koordinátorky projektu.3.jpeg",
        "Převzetí certifikátů od starosty města Margonin — 3",
      ),
      photo(
        "Převzetí certifikátů od starosty města Margonin a koordinátorky projektu.4.jpeg",
        "Převzetí certifikátů od starosty města Margonin — 4",
      ),
    ],
  },
];
