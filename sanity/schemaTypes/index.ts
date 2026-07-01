import type { SchemaTypeDefinition } from "sanity";
import { page } from "@/sanity/schemaTypes/page";
import { partnerSchool } from "@/sanity/schemaTypes/partnerSchool";
import { siteSettings } from "@/sanity/schemaTypes/siteSettings";
import { studentQuote } from "@/sanity/schemaTypes/studentQuote";
import { teamMember } from "@/sanity/schemaTypes/teamMember";
import {
  benefitItem,
  contentSection,
  exploreCard,
  importanceCard,
  photoGroup,
  placementCard,
  qaItem,
  relatedLink,
  statItem,
} from "@/sanity/schemaTypes/objects/contentBlocks";
import { imageWithAlt } from "@/sanity/schemaTypes/objects/imageWithAlt";
import { navGroup, navLink } from "@/sanity/schemaTypes/objects/navLink";
import { quoteSection } from "@/sanity/schemaTypes/studentQuote";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    page,
    studentQuote,
    teamMember,
    partnerSchool,
    imageWithAlt,
    navLink,
    navGroup,
    exploreCard,
    statItem,
    relatedLink,
    qaItem,
    placementCard,
    benefitItem,
    importanceCard,
    photoGroup,
    contentSection,
    quoteSection,
  ],
};
