import type { Metadata } from "next";
import AkreditaceGallery from "@/components/akreditace/AkreditaceGallery";
import CmsPageView from "@/components/cms/CmsPageView";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";

export const metadata: Metadata = {
  title: "Akreditace | ANOA Erasmus+",
  description:
    "Akreditace Erasmus+ 2021-1-CZ01-KA121-VET-000006611 - mobilita studentů a zaměstnanců ANOA.",
};

export default function AkreditacePage() {
  return (
    <CmsPageView
      slug="akreditace"
      gallery={
        <div className="mt-16">
          <AkreditaceGallery />
        </div>
      }
      fallback={
        <>
          <PageHeader
            title="Akreditace"
            description="2021-1-CZ01-KA121-VET-000006611"
            breadcrumb={[
              { label: "Úvod", href: "/" },
              { label: "Akreditace" },
            ]}
          />
          <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
            <Prose>
              <p>
                Akreditace Erasmus je určena pro všechny, kdo se chtějí účastnit a
                zapojit do mezinárodních projektů mobilit.
              </p>
            </Prose>
            <div className="mt-16">
              <ProseHeading as="h3">Fotografie z proběhlých praxí</ProseHeading>
              <AkreditaceGallery />
            </div>
          </article>
        </>
      }
    />
  );
}
