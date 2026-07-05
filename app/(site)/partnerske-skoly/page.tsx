import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import PartnerskeSkolyContent from "@/components/partnerske-skoly/PartnerskeSkolyContent";
import { loadPage, loadPartnerSchools } from "@/lib/cms/defaults";

export const metadata: Metadata = {
  title: "Partnerské školy | Erasmus+",
  description: "Síť partnerských škol Erasmus+ v Evropě.",
};

export default async function PartnerskeSkolyPage() {
  const [page, partners] = await Promise.all([
    loadPage("partnerske-skoly"),
    loadPartnerSchools(),
  ]);

  return (
    <>
      <PageHeader
        title={page?.headerTitle ?? "Partnerské školy"}
        description={
          page?.headerDescription ?? "Spolupracujeme se školami napříč Evropou."
        }
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Partnerské školy" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <PartnerskeSkolyContent partners={partners} />
      </article>
    </>
  );
}
