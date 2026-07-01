import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

const title = "ANOA Erasmus+ — správa obsahu";

export default defineConfig({
  name: "anoa-erasmus",
  title,
  projectId,
  dataset,
  basePath: "/admin",
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    newDocumentOptions: (prev) =>
      prev.filter((template) => template.templateId !== "siteSettings"),
  },
});
