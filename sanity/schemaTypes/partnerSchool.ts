import { defineArrayMember, defineField, defineType } from "sanity";

export const partnerSchool = defineType({
  name: "partnerSchool",
  title: "Partnerská škola",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Název školy",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "country",
      title: "Země",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Popis spolupráce",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "href",
      title: "Web školy",
      type: "url",
    }),
    defineField({
      name: "displayType",
      title: "Jak zobrazit na webu",
      type: "string",
      options: {
        list: [
          { title: "Galerie s fotkami", value: "gallery" },
          { title: "Karta s logem", value: "logoCard" },
          { title: "Textová karta", value: "textCard" },
        ],
        layout: "radio",
      },
      initialValue: "textCard",
    }),
    defineField({
      name: "logo",
      title: "Logo školy",
      type: "imageWithAlt",
      hidden: ({ document }) => document?.displayType === "textCard",
    }),
    defineField({
      name: "photos",
      title: "Fotografie",
      type: "array",
      of: [{ type: "imageWithAlt" }],
      hidden: ({ document }) => document?.displayType !== "gallery",
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
    select: { title: "title", subtitle: "country", media: "logo.image" },
  },
});
