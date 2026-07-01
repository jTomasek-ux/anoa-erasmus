import { defineArrayMember, defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Člen týmu",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Jméno",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Fotografie",
      type: "imageWithAlt",
    }),
    defineField({
      name: "bioParagraphs",
      title: "Životopis",
      type: "array",
      of: [{ type: "text", rows: 4 }],
    }),
    defineField({
      name: "tagline",
      title: "Citát / motto",
      type: "string",
    }),
    defineField({
      name: "qa",
      title: "Otázky a odpovědi",
      type: "array",
      of: [{ type: "qaItem" }],
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
