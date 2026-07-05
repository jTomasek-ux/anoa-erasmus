import PageHeader from "@/components/layout/PageHeader";
import ContentSections from "@/components/cms/ContentSections";
import { loadPage } from "@/lib/cms/defaults";

type BreadcrumbItem = { label: string; href?: string };

export default async function CmsPageView({
  slug,
  fallback,
  gallery,
}: {
  slug: string;
  fallback: React.ReactNode;
  gallery?: React.ReactNode;
}) {
  const page = await loadPage(slug);

  if (!page?.sections?.length) {
    return fallback;
  }

  const breadcrumb: BreadcrumbItem[] =
    page.breadcrumb?.map((label, index, arr) =>
      index === 0 && label === "Úvod"
        ? { label, href: "/" }
        : index < arr.length - 1
          ? { label, href: "#" }
          : { label },
    ) ?? [];

  return (
    <>
      <PageHeader
        title={page.headerTitle ?? page.title ?? ""}
        description={page.headerDescription}
        breadcrumb={breadcrumb}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        {page.eyebrow ? (
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {page.eyebrow}
          </p>
        ) : null}
        {page.headlineLine1 || page.headlineLine2 ? (
          <h2 className="mb-8 font-heading text-[clamp(2rem,5vw,3.5rem)] leading-tight text-black">
            {page.headlineLine1}
            {page.headlineLine2 ? (
              <>
                <br />
                <span className="text-primary">{page.headlineLine2}</span>
              </>
            ) : null}
          </h2>
        ) : null}
        <ContentSections sections={page.sections} />
        {gallery}
      </article>
    </>
  );
}
