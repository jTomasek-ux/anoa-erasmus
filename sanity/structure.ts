import type { StructureResolver } from "sanity/structure";

const pageSlugs: { slug: string; title: string }[] = [
  { slug: "home", title: "Úvodní stránka" },
  { slug: "projekty", title: "Projekty" },
  { slug: "akreditace", title: "Akreditace" },
  { slug: "erasmus-days", title: "Erasmus Days" },
  { slug: "informace-pro-uchazece", title: "Informace pro uchazeče" },
  { slug: "nazory-studentu", title: "Názory studentů" },
  { slug: "praxe-pro-zahranicni-studenty", title: "Praxe pro zahraniční studenty" },
  { slug: "stinovani-a-pedagogicke-staze", title: "Stínování a pedagogické stáže" },
  { slug: "partnerske-skoly", title: "Partnerské školy" },
  { slug: "tym", title: "Náš tým" },
  { slug: "spoluprace-etwinning", title: "eTwinning" },
  { slug: "spoluprace-visegrad-project", title: "Visegrad Project" },
  { slug: "spoluprace-visegrad", title: "Visegrad — Slovensko" },
  { slug: "spoluprace-ostatni", title: "Ostatní spolupráce" },
  { slug: "ochrana-osobnich-udaju", title: "Ochrana osobních údajů" },
  { slug: "podminky-pouziti", title: "Podmínky použití" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("ANOA Erasmus+")
    .items([
      S.listItem()
        .title("Nastavení webu")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Nastavení webu"),
        ),
      S.divider(),
      S.listItem()
        .title("Stránky")
        .child(
          S.list()
            .title("Stránky")
            .items(
              pageSlugs.map(({ slug, title }) =>
                S.listItem()
                  .title(title)
                  .child(
                    S.document()
                      .schemaType("page")
                      .documentId(`page-${slug}`)
                      .title(title)
                      .initialValueTemplate("page-by-slug", { slug, title }),
                  ),
              ),
            ),
        ),
      S.divider(),
      S.documentTypeListItem("studentQuote").title("Názory studentů"),
      S.documentTypeListItem("teamMember").title("Náš tým"),
      S.documentTypeListItem("partnerSchool").title("Partnerské školy"),
    ]);
