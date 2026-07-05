import { defineArrayMember, defineField, defineType } from "sanity";

export const exploreCard = defineType({
  name: "exploreCard",
  title: "Karta na úvodní stránce",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Nadpis", type: "string" }),
    defineField({ name: "description", title: "Popis", type: "text", rows: 3 }),
    defineField({ name: "href", title: "Odkaz", type: "string" }),
    defineField({ name: "tag", title: "Štítek", type: "string" }),
  ],
  preview: {
    select: { title: "title", subtitle: "tag" },
  },
});

export const statItem = defineType({
  name: "statItem",
  title: "Statistika",
  type: "object",
  fields: [
    defineField({ name: "value", title: "Hodnota (např. EU, 27+)", type: "string" }),
    defineField({ name: "label", title: "Popisek", type: "string" }),
  ],
});

export const relatedLink = defineType({
  name: "relatedLink",
  title: "Související odkaz",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Text", type: "string" }),
    defineField({ name: "href", title: "Odkaz", type: "string" }),
  ],
});

export const qaItem = defineType({
  name: "qaItem",
  title: "Otázka a odpověď",
  type: "object",
  fields: [
    defineField({ name: "question", title: "Otázka", type: "string" }),
    defineField({ name: "answer", title: "Odpověď", type: "text", rows: 4 }),
  ],
});

export const placementCard = defineType({
  name: "placementCard",
  title: "Karta praxe / návštěvy",
  type: "object",
  fields: [
    defineField({ name: "period", title: "Období", type: "string" }),
    defineField({ name: "school", title: "Škola", type: "string" }),
    defineField({ name: "country", title: "Země", type: "string" }),
    defineField({ name: "detail", title: "Detail", type: "text", rows: 3 }),
    defineField({ name: "link", title: "Web školy (URL)", type: "url" }),
    defineField({
      name: "photo",
      title: "Fotografie",
      type: "imageWithAlt",
    }),
  ],
});

export const benefitItem = defineType({
  name: "benefitItem",
  title: "Výhoda / bod",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Nadpis", type: "string" }),
    defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
  ],
});

export const importanceCard = defineType({
  name: "importanceCard",
  title: "Karta významu",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Nadpis", type: "string" }),
    defineField({ name: "body", title: "Text", type: "text", rows: 4 }),
  ],
});

export const photoGroup = defineType({
  name: "photoGroup",
  title: "Skupina fotografií",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Nadpis skupiny", type: "string" }),
    defineField({
      name: "description",
      title: "Popis skupiny",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "photos",
      title: "Fotografie",
      type: "array",
      of: [{ type: "imageWithAlt" }],
    }),
  ],
});

export const contentSection = defineType({
  name: "contentSection",
  title: "Sekce obsahu",
  type: "object",
  fields: [
    defineField({
      name: "sectionType",
      title: "Typ sekce",
      type: "string",
      options: {
        list: [
          { title: "Text (odstavce)", value: "prose" },
          { title: "Nadpis + text", value: "headingProse" },
          { title: "Galerie fotografií", value: "gallery" },
          { title: "Statistiky", value: "stats" },
          { title: "Související odkazy", value: "relatedLinks" },
          { title: "Otázky a odpovědi", value: "qa" },
          { title: "Karty praxí / návštěv", value: "placements" },
          { title: "Výhody / body", value: "benefits" },
          { title: "Karty významu", value: "importance" },
          { title: "Skupiny fotografií", value: "photoGroups" },
          { title: "Citát / callout", value: "callout" },
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Nadpis sekce",
      type: "string",
      hidden: ({ parent }) =>
        !["headingProse", "gallery", "callout", "benefits", "relatedLinks"].includes(
          parent?.sectionType,
        ),
    }),
    defineField({
      name: "paragraphs",
      title: "Odstavce",
      type: "array",
      of: [{ type: "text", rows: 4 }],
      hidden: ({ parent }) => parent?.sectionType !== "prose",
    }),
    defineField({
      name: "body",
      title: "Text",
      type: "text",
      rows: 6,
      hidden: ({ parent }) =>
        !["headingProse", "callout"].includes(parent?.sectionType),
    }),
    defineField({
      name: "photos",
      title: "Fotografie",
      type: "array",
      of: [{ type: "imageWithAlt" }],
      hidden: ({ parent }) => parent?.sectionType !== "gallery",
    }),
    defineField({
      name: "stats",
      title: "Statistiky",
      type: "array",
      of: [{ type: "statItem" }],
      hidden: ({ parent }) => parent?.sectionType !== "stats",
    }),
    defineField({
      name: "links",
      title: "Odkazy",
      type: "array",
      of: [{ type: "relatedLink" }],
      hidden: ({ parent }) => parent?.sectionType !== "relatedLinks",
    }),
    defineField({
      name: "qa",
      title: "Otázky a odpovědi",
      type: "array",
      of: [{ type: "qaItem" }],
      hidden: ({ parent }) => parent?.sectionType !== "qa",
    }),
    defineField({
      name: "placements",
      title: "Karty",
      type: "array",
      of: [{ type: "placementCard" }],
      hidden: ({ parent }) => parent?.sectionType !== "placements",
    }),
    defineField({
      name: "benefits",
      title: "Výhody",
      type: "array",
      of: [{ type: "benefitItem" }],
      hidden: ({ parent }) => parent?.sectionType !== "benefits",
    }),
    defineField({
      name: "importance",
      title: "Karty významu",
      type: "array",
      of: [{ type: "importanceCard" }],
      hidden: ({ parent }) => parent?.sectionType !== "importance",
    }),
    defineField({
      name: "photoGroups",
      title: "Skupiny fotografií",
      type: "array",
      of: [{ type: "photoGroup" }],
      hidden: ({ parent }) => parent?.sectionType !== "photoGroups",
    }),
  ],
  preview: {
    select: { title: "heading", subtitle: "sectionType" },
    prepare({ title, subtitle }) {
      return {
        title: title || "Sekce obsahu",
        subtitle,
      };
    },
  },
});
