import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import VisegradProjectContent from "@/components/spoluprace/VisegradProjectContent";

export const metadata: Metadata = {
  title: "Visegrad Project | ANOA Erasmus+",
  description:
    "Projekt ekologického cestování — spolupráce studentů z Česka, Polska a Slovenska v rámci Visegradských fondů.",
};

export default function VisegradProjectPage() {
  return (
    <>
      <PageHeader
        title="Visegrad Project"
        description="Ekologické cestování — setkání studentů v Polsku a spolupráce v rámci Visegradských fondů."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Spolupráce", href: "/projekty" },
          { label: "Visegrad Project" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <VisegradProjectContent />
      </article>
    </>
  );
}
