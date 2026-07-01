import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import PartnerskeSkolyContent from "@/components/partnerske-skoly/PartnerskeSkolyContent";

export const metadata: Metadata = {
  title: "Partnerské školy | Erasmus+",
  description: "Síť partnerských škol Erasmus+ v Evropě.",
};

export default function PartnerskeSkolyPage() {
  return (
    <>
      <PageHeader
        title="Partnerské školy"
        description="Spolupracujeme se školami napříč Evropou."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Partnerské školy" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <PartnerskeSkolyContent />
      </article>
    </>
  );
}
