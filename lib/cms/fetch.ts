import { getSanityClient } from "@/sanity/lib/client";
import { isSanityConfigured } from "@/sanity/env";
import {
  pageBySlugQuery,
  partnerSchoolsQuery,
  siteSettingsQuery,
  studentQuotesQuery,
  teamMembersQuery,
} from "@/sanity/lib/queries";

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  if (!isSanityConfigured) return null;

  const client = getSanityClient();
  if (!client) return null;

  try {
    return await client.fetch<T>(query, params, {
      next: { tags: ["sanity"] },
    });
  } catch {
    return null;
  }
}

export function getSiteSettings() {
  return sanityFetch<SiteSettings>(siteSettingsQuery);
}

export function getPageBySlug(slug: string) {
  return sanityFetch<CmsPage>(pageBySlugQuery, { slug });
}

export function getStudentQuotes() {
  return sanityFetch<StudentQuoteDoc[]>(studentQuotesQuery);
}

export function getTeamMembers() {
  return sanityFetch<TeamMemberDoc[]>(teamMembersQuery);
}

export function getPartnerSchools() {
  return sanityFetch<PartnerSchoolDoc[]>(partnerSchoolsQuery);
}

export type CmsImage = {
  src?: string;
  alt: string;
  caption?: string;
};

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

export type SiteSettings = {
  siteTitle?: string;
  siteDescription?: string;
  contactEmail?: string;
  footerTagline?: string;
  logo?: CmsImage;
  heroImage?: CmsImage;
  heroHeadlineLine1?: string;
  heroHeadlineLine2?: string;
  heroSubtitle?: string;
  heroCtaLabel?: string;
  heroCtaHref?: string;
  homeIntroHeading?: string;
  homeIntroParagraphs?: string[];
  exploreSectionLabel?: string;
  exploreSectionSubtitle?: string;
  exploreCards?: {
    title?: string;
    description?: string;
    href?: string;
    tag?: string;
  }[];
  mainNav?: NavGroup[];
  footerNav?: NavLink[];
  externalLinks?: NavLink[];
  legalNav?: NavLink[];
};

export type ContentSection = {
  sectionType: string;
  heading?: string;
  paragraphs?: string[];
  body?: string;
  photos?: CmsImage[];
  stats?: { value?: string; label?: string }[];
  links?: { label?: string; href?: string }[];
  qa?: { question?: string; answer?: string }[];
  placements?: {
    period?: string;
    school?: string;
    country?: string;
    detail?: string;
    link?: string;
    photo?: CmsImage;
  }[];
  benefits?: { label?: string; text?: string }[];
  importance?: { title?: string; body?: string }[];
  photoGroups?: {
    title?: string;
    description?: string;
    photos?: CmsImage[];
  }[];
};

export type CmsPage = {
  title?: string;
  slug?: string;
  description?: string;
  headerTitle?: string;
  headerDescription?: string;
  breadcrumb?: string[];
  eyebrow?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  poster?: CmsImage;
  sections?: ContentSection[];
};

export type StudentQuoteDoc = {
  id?: string;
  name: string;
  photo?: CmsImage;
  sections?: { title?: string; content?: string }[];
  order?: number;
};

export type TeamMemberDoc = {
  name: string;
  photo?: CmsImage;
  bioParagraphs?: string[];
  tagline?: string;
  qa?: { question?: string; answer?: string }[];
  order?: number;
};

export type PartnerSchoolDoc = {
  id?: string;
  title: string;
  country: string;
  description?: string;
  href?: string;
  displayType?: "gallery" | "logoCard" | "textCard";
  logo?: CmsImage;
  photos?: CmsImage[];
  order?: number;
};
