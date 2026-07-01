import type { Template } from "sanity";

export const pageBySlugTemplate: Template = {
  id: "page-by-slug",
  title: "Stránka",
  schemaType: "page",
  parameters: [
    { name: "slug", title: "Adresa", type: "string" },
    { name: "title", title: "Název", type: "string" },
  ],
  value: ({ slug, title }: { slug: string; title: string }) => ({
    title,
    slug: { _type: "slug", current: slug },
    headerTitle: title,
  }),
};
