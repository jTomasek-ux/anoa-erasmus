/** Assets exported from Google Sites - folder under /public. */
const base = "/Erasmus Days";

function asset(fileName: string) {
  return `${base}/${fileName}`;
}

export const erasmusDaysPoster = {
  src: asset("PosterCoJsouErasmusDays.jpeg"),
  alt: "Plakát Erasmus Days 2024 - 14. až 19. října",
};

const galleryFiles = [
  "AA5AbUA9I37dd8JJ0WKa8qUv4GFtkIDTiZn-a-_fDGaqcLJrF0IoLbgLsk4i.jpeg",
  "AA5AbUAeuCpAaCgkIg-P9RR-e_dh1xEqS4-kCtRfolGxAKSFrv5XRAWT_psW.jpeg",
  "AA5AbUAMKxaqNJY50z40aCr4gEmszp2MzFcmbe0BoJbp1SDqEf9azp2tgWEu.jpeg",
  "AA5AbUAR0u5t5P6N8vB0hEMWk3h_aYUPbcbQ9IO4vG-kYkcYSXPGXtMr_JXe.jpeg",
  "AA5AbUAV-91vptPX89yUasTerM6UNQznNVsftu9Y627h8V2A1NmkoA5A1HWv.jpeg",
  "AA5AbUB9WfFYXmMECh9_kAczEPhctwr7wsFrTFCxusPfJUo0NGJ_UsxIIr1L.jpeg",
  "AA5AbUBcbSQebGozORiR0CY2NvTe9w0PVL-TO9HD9htvs4uKV6rnXFORR2pO.jpeg",
  "AA5AbUBimJAuqlVgumWZ1hLs_uTupP9pcE428jRmGCwIF-nIi8HMwJcUnJkJ.jpeg",
  "AA5AbUBnAHX1M9lZpuXQUe9bdWRFpE8xVXlKoN4h3Z8R7b-9MDTUrsst4fin.jpeg",
  "AA5AbUBsUqXGBo4T4QfHZsyBt1tDm-2IUP3qqnutB5BiIZ-5eTFWnI_i78s2.jpeg",
  "AA5AbUBUb5DCZqijWhE3uddKxgF9fsRbEkb9GljFu6cH8RjOKyG3oxVp8Xzm.jpeg",
  "AA5AbUCja-cGHmaq-F8a0hE-CLeY43Fb4E_4x_zv7zMOW9byEEKmDkljUgJf.jpeg",
  "AA5AbUCKd3JiytGIynFCS1DFcvBRt1NnC9SLNTrhecb98iwHvKdTRSxma4cp.jpeg",
  "AA5AbUCKUxr8In28Igyk0mKyFE8V6U0D537ENaheiEWn76CECPQOmWQvGjxD.jpeg",
  "AA5AbUCPk4qk-_YcBpryF66FJQf5VGYKAQXQKpo7h91zqNZ7H1Ea2Ren3N4K.jpeg",
  "AA5AbUDDML7-GKsD8UoSB3u2ZRwrj6SiZ8KuaHtovmc-kJDTCuCjbNF2mFea.jpeg",
  "AA5AbUDkuSmhL9PinQZKyBTVu5cR1fhY3la1pAW8njbDE6-9QoYeyvcsFxsN.jpeg",
  "AA5AbUDxGU6wyrB-M_Lo63iV-y3OnnJnPrj1HvfOsInJQtn6XBHRzYLXyIi5.jpeg",
] as const;

export const erasmusDaysGalleryPhotos = galleryFiles.map((fileName, index) => ({
  src: asset(fileName),
  alt: `Erasmus Days na ANOA - fotografie ${index + 1}`,
}));

export const erasmusDaysImportance = [
  {
    title: "Šíření povědomí o programu Erasmus+",
    body: "Erasmus Days pomáhají zvyšovat povědomí o možnostech, které program nabízí, a to jak v oblasti vzdělávání, tak i v profesním růstu. Tím se zvyšuje zájem o účast na programu a podporuje se jeho udržitelnost.",
  },
  {
    title: "Sdílení zkušeností",
    body: "Účastníci programu mají možnost sdílet své zážitky a úspěchy, což může inspirovat další studenty a profesionály k účasti. Sdílení pozitivních příběhů pomáhá rozvíjet komunitu a podporuje mezikulturní porozumění.",
  },
  {
    title: "Podpora mezinárodní spolupráce",
    body: "Akce pořádané během Erasmus Days často vedou k navazování nových kontaktů a partnerství mezi institucemi z různých zemí, což přispívá k rozvoji mezinárodní spolupráce v oblasti vzdělávání a výzkumu.",
  },
  {
    title: "Oslava úspěchů programu",
    body: "Erasmus Days slouží jako platforma pro uznání a oslavu úspěchů dosažených prostřednictvím programu Erasmus+. Ukazují, jak program přispěl ke zlepšení vzdělávání a profesního rozvoje milionů lidí po celém světě.",
  },
  {
    title: "Podpora inovací ve vzdělávání",
    body: "Díky setkávání různorodých skupin a sdílení nápadů podporují Erasmus Days inovace a nové přístupy ve vzdělávání a školení.",
  },
] as const;
