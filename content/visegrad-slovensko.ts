/** Assets exported from Google Sites - folder under /public. */
const base = "/Visegrad Project - Slovensko";

function asset(fileName: string) {
  return `${base}/${fileName}`;
}

export const visegradHeadlinePhoto = {
  src: asset("healinePhoto.jpeg"),
  alt: "Visegrad Project - ekologické cestování a spolupráce studentů na Slovensku",
};

export type VisegradPhotoGroup = {
  title: string;
  photos: { src: string; alt: string }[];
  imageFit?: "cover" | "contain";
  bordered?: boolean;
};

function photo(fileName: string, alt: string) {
  return { src: asset(fileName), alt };
}

function numberedPhotos(
  prefix: string,
  count: number,
  altBase: string,
): { src: string; alt: string }[] {
  return Array.from({ length: count }, (_, i) => ({
    src: asset(`${prefix}.${i + 1}.jpeg`),
    alt: `${altBase} - fotografie ${i + 1}`,
  }));
}

/** Pořadí odpovídá galerii na webu školy. */
export const visegradPhotoGroups: VisegradPhotoGroup[] = [
  {
    title: "Oravská Jasenice - začátek projektu",
    photos: [
      photo(
        "Výběr modelů na úpravu na módní přehlídku .jpeg",
        "Výběr modelů na úpravu na módní přehlídku",
      ),
      photo("Příprava na únikovou hru.jpeg", "Příprava na únikovou hru"),
      photo("Příprava na únikovou hru.2.jpeg", "Příprava na únikovou hru"),
    ],
  },
  {
    title: "Pátek - EKORAY a módní přehlídka",
    photos: [
      photo(
        "Návštěva ve společnosti EKORAY - sběr a zpracování odpadů.jpeg",
        "Návštěva ve společnosti EKORAY - sběr a zpracování odpadů",
      ),
      photo(
        "Druhá divize spelčnosti EKORAY - zpracování bio odpadu a palet.jpeg",
        "Druhá divize společnosti EKORAY - zpracování bio odpadu a palet",
      ),
      photo(
        "Ukázka počítačových komponentů na zpracování elektroodpadu.jpeg",
        "Ukázka počítačových komponentů na zpracování elektroodpadu",
      ),
      photo(
        "Příprava oděvů z použitého a nenošeného oblečení .jpeg",
        "Příprava oděvů z použitého a nenošeného oblečení",
      ),
      photo("Modely na módní přehlídku .jpeg", "Modely na módní přehlídku"),
      photo(
        "Celá kolekce na módní přehlídku připravené za pomoci paní učitelek.jpeg",
        "Celá kolekce na módní přehlídku připravené za pomoci paní učitelek",
      ),
    ],
  },
  {
    title: "Sobota - Štrbské pleso a Bešeňová",
    photos: [
      photo("Štrbské pleso.jpeg", "Štrbské pleso"),
      photo("Tatras towe.jpeg", "Tatras tower"),
      photo("Štrbské pleso - celá skupina.jpeg", "Štrbské pleso - celá skupina"),
    ],
  },
  {
    title: "Neděle - film SODOMA a závěr",
    photos: [
      photo("Sledovani filmu SODOMA.jpeg", "Sledování ekologického filmu SODOMA"),
      ...numberedPhotos("Předávání certifikátů", 5, "Předávání certifikátů"),
    ],
  },
];
