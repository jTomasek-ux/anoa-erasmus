import { defineArrayMember, defineField, defineType } from "sanity";

export const quoteSection = defineType({
  name: "quoteSection",
  title: "Část rozhovoru",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Téma", type: "string" }),
    defineField({ name: "content", title: "Odpověď", type: "text", rows: 5 }),
  ],
});

export const studentQuote = defineType({
  name: "studentQuote",
  title: "Názor studenta",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Jméno studenta",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Identifikátor (např. adam)",
      type: "slug",
      options: { source: "name", maxLength: 32 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Fotografie studenta",
      type: "imageWithAlt",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Části rozhovoru",
      type: "array",
      of: [{ type: "quoteSection" }],
    }),
    defineField({
      name: "order",
      title: "Pořadí zobrazení",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "Pořadí", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", media: "photo.image" },
  },
});
