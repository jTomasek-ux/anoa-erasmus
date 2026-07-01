import { defineField, defineType } from "sanity";

export const navLink = defineType({
  name: "navLink",
  title: "Odkaz",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Text odkazu",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "Adresa (např. /projekty)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Krátký popis (volitelné)",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "href" },
  },
});

export const navGroup = defineType({
  name: "navGroup",
  title: "Položka menu",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Název v menu",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "Přímý odkaz (nechte prázdné, pokud má podmenu)",
      type: "string",
    }),
    defineField({
      name: "children",
      title: "Podmenu",
      type: "array",
      of: [{ type: "navLink" }],
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "href" },
  },
});
