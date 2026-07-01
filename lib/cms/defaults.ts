import {
  externalLinks,
  footerNav,
  legalNav,
  mainNav,
  contactEmail,
} from "@/content/navigation";
import {
  homeHeroImageAlt,
  homeHeroImageSrc,
  siteLogoAlt,
  siteLogoSrc,
} from "@/content/site-assets";
import type {
  CmsImage,
  CmsPage,
  NavGroup,
  NavLink,
  PartnerSchoolDoc,
  SiteSettings,
  StudentQuoteDoc,
  TeamMemberDoc,
} from "@/lib/cms/fetch";
import { getPageBySlug, getPartnerSchools, getSiteSettings, getStudentQuotes, getTeamMembers } from "@/lib/cms/fetch";
import { studentQuotes } from "@/content/pages";
import { milenaNajmanovaPhoto } from "@/content/tym";
import {
  partnerGalleries,
  partnerLogoCards,
  partnerTextCards,
} from "@/content/partnerske-skoly-photos";

const defaultSiteSettings: SiteSettings = {
  siteTitle: "Erasmus+",
  siteDescription:
    "Erasmus+ je vzdělávací program Evropské unie podporující spolupráci, mobilitu a praktické vzdělávání studentů napříč Evropou.",
  contactEmail,
  footerTagline:
    "Program Erasmus+ — mezinárodní spolupráce, mobilita studentů a pedagogů na ANOA.",
  logo: { src: siteLogoSrc, alt: siteLogoAlt },
  heroImage: { src: homeHeroImageSrc, alt: homeHeroImageAlt },
  heroHeadlineLine1: "Vzdělávání",
  heroHeadlineLine2: "bez hranic.",
  heroSubtitle:
    "Erasmus+ je vzdělávací program Evropské unie, který propojuje studenty a školy napříč celou Evropou.",
  heroCtaLabel: "Zjistit více",
  heroCtaHref: "#o-programu",
  homeIntroHeading: "Erasmus+ na ANOA",
  homeIntroParagraphs: [
    "Erasmus+ je program Evropské unie, který podporuje vzdělávání, odbornou přípravu, mládež a sport. Pro studenty a pedagogy ANOA představuje příležitost poznat jiné kultury, zlepšit jazykové dovednosti a získat praktické zkušenosti v zahraničí.",
    "Na naší škole věříme, že stejně důležité jako studium je i praktické použití naučených znalostí. Projektové spolupráce s partnerskými školami ze zahraničí jsou jednou z cest, které k této praxi napomáhají.",
  ],
  exploreSectionLabel: "Prozkoumejte program",
  exploreSectionSubtitle:
    "Vyberte oblast, která vás zajímá — od projektů až po zkušenosti studentů.",
  mainNav: mainNav as NavGroup[],
  footerNav: footerNav as NavLink[],
  externalLinks: externalLinks as NavLink[],
  legalNav: legalNav as NavLink[],
};

function mergeSettings(cms: SiteSettings | null): SiteSettings {
  if (!cms) return defaultSiteSettings;
  return {
    ...defaultSiteSettings,
    ...cms,
    logo: cms.logo?.src ? cms.logo : defaultSiteSettings.logo,
    heroImage: cms.heroImage?.src ? cms.heroImage : defaultSiteSettings.heroImage,
    mainNav: cms.mainNav?.length ? cms.mainNav : defaultSiteSettings.mainNav,
    footerNav: cms.footerNav?.length ? cms.footerNav : defaultSiteSettings.footerNav,
    externalLinks: cms.externalLinks?.length
      ? cms.externalLinks
      : defaultSiteSettings.externalLinks,
    legalNav: cms.legalNav?.length ? cms.legalNav : defaultSiteSettings.legalNav,
    exploreCards: cms.exploreCards?.length
      ? cms.exploreCards
      : undefined,
  };
}

export async function loadPage(slug: string) {
  return getPageBySlug(slug);
}

export async function loadSiteSettings(): Promise<SiteSettings> {
  const cms = await getSiteSettings();
  return mergeSettings(cms);
}

export async function loadStudentQuotes(): Promise<StudentQuoteDoc[]> {
  const cms = await getStudentQuotes();
  if (cms?.length) return cms;

  return studentQuotes.map((quote) => ({
    id: quote.id,
    name: quote.name,
    photo: { src: quote.imageSrc, alt: quote.imageAlt ?? quote.name },
    sections: quote.sections.map((section) => ({
      title: section.title,
      content: section.content,
    })),
  }));
}

export async function loadTeamMembers(): Promise<TeamMemberDoc[]> {
  const cms = await getTeamMembers();
  if (cms?.length) return cms;

  return [
    {
      name: "Milena Najmanová",
      photo: { src: milenaNajmanovaPhoto.src, alt: milenaNajmanovaPhoto.alt },
      bioParagraphs: [],
      tagline: "Neseďte, vstaňte, cestujte, žijte!",
      qa: [],
      order: 0,
    },
  ];
}

export async function loadPartnerSchools(): Promise<PartnerSchoolDoc[]> {
  const cms = await getPartnerSchools();
  if (cms?.length) return cms;

  return [
    ...partnerGalleries.map((partner) => ({
      id: partner.id,
      title: partner.title,
      country: partner.country,
      description: partner.description,
      href: partner.href,
      displayType: "gallery" as const,
      logo: partner.logo
        ? { src: partner.logo.src, alt: partner.logo.alt }
        : undefined,
      photos: partner.photos.map((photo) => ({
        src: photo.src,
        alt: photo.alt,
      })),
    })),
    ...partnerLogoCards.map((partner) => ({
      id: partner.id,
      title: partner.title,
      country: partner.country,
      description: partner.description,
      href: partner.href,
      displayType: "logoCard" as const,
      logo: { src: partner.logo.src, alt: partner.logo.alt },
    })),
    ...partnerTextCards.map((partner) => ({
      id: partner.id,
      title: partner.title,
      country: partner.country,
      description: partner.description,
      href: partner.href,
      displayType: "textCard" as const,
    })),
  ];
}

export function cmsImageSrc(image?: CmsImage, fallback = ""): string {
  return image?.src || fallback;
}
