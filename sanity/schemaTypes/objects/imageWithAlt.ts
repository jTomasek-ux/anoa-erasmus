import { defineField, defineType } from "sanity";

export const imageWithAlt = defineType({
  name: "imageWithAlt",
  title: "Obrázek",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Soubor",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Popis obrázku (pro nevidomé)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Popisek pod obrázkem",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "alt", media: "image" },
  },
});
