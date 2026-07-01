/**
 * Seeds the siteSettings document into Sanity.
 * Run after setting env vars in .env.local
 *
 * Usage: npm run seed:cms
 */

import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  siteTitle: "Erasmus+",
  siteDescription:
    "Erasmus+ je vzdělávací program Evropské unie podporující spolupráci, mobilitu a praktické vzdělávání studentů napříč Evropou.",
  contactEmail: "m.najmanova@anoa.cz",
  footerTagline:
    "Program Erasmus+ — mezinárodní spolupráce, mobilita studentů a pedagogů na ANOA.",
  heroHeadlineLine1: "Vzdělávání",
  heroHeadlineLine2: "bez hranic.",
  heroSubtitle:
    "Erasmus+ je vzdělávací program Evropské unie, který propojuje studenty a školy napříč celou Evropou.",
  heroCtaLabel: "Zjistit více",
  heroCtaHref: "/informace-pro-uchazece",
  homeIntroHeading: "Erasmus+ na ANOA",
  homeIntroParagraphs: [
    "Erasmus+ je vzdělávací program pod záštitou Evropské unie, jehož cílem je podpora spolupráce a mobilit ve všech sférách vzdělávání.",
    "Na naší škole věříme, že stejně důležité jako studium je i praktické použití naučených znalostí.",
  ],
  exploreSectionLabel: "Prozkoumejte program",
  exploreSectionSubtitle:
    "Přehled všech sekcí programu Erasmus+ na naší škole.",
};

async function main() {
  await client.createOrReplace(siteSettings);
  console.log("✓ siteSettings document created in Sanity");
  console.log("Next: open /admin and upload logo + hero images");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
