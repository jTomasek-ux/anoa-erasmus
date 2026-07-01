import { defineArrayMember, defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Stránka",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Název stránky (pro vyhledávače)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Adresa stránky",
      type: "slug",
      description:
        "Např. „projekty“ pro anoa.cz/projekty. Pro úvodní stránku použijte „home“.",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Popis stránky (pro vyhledávače)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "headerTitle",
      title: "Velký nadpis na stránce",
      type: "string",
    }),
    defineField({
      name: "headerDescription",
      title: "Podnadpis pod nadpisem",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "breadcrumb",
      title: "Drobečková navigace",
      type: "array",
      of: [{ type: "string" }],
      description: "Např. Úvod → Projekty",
    }),
    defineField({
      name: "eyebrow",
      title: "Malý nadpis nad titulkem (volitelné)",
      type: "string",
    }),
    defineField({
      name: "headlineLine1",
      title: "Hero — první řádek (volitelné)",
      type: "string",
    }),
    defineField({
      name: "headlineLine2",
      title: "Hero — druhý řádek (volitelné)",
      type: "string",
    }),
    defineField({
      name: "poster",
      title: "Plakát / hlavní obrázek",
      type: "imageWithAlt",
    }),
    defineField({
      name: "sections",
      title: "Obsah stránky",
      type: "array",
      of: [{ type: "contentSection" }],
    }),
  ],
  preview: {
    select: { title: "headerTitle", subtitle: "slug.current" },
    prepare({ title, subtitle }) {
      return {
        title: title || "Stránka",
        subtitle: subtitle ? `/${subtitle === "home" ? "" : subtitle}` : "",
      };
    },
  },
});
