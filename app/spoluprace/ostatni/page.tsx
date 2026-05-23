import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import OstatniSpolupraceContent from "@/components/spoluprace/OstatniSpolupraceContent";
import { ostatniProgramName } from "@/content/ostatni-spoluprace";

export const metadata: Metadata = {
  title: "Ostatní spolupráce | ANOA Erasmus+",
  description:
    "Spolupráce s Polskem - program Variety makes us stronger.",
};

export default function OstatniSpolupracePage() {
  return (
    <>
      <PageHeader
        title="Ostatní spolupráce"
        description="Spolupráce s polskými partnery v rámci programu Variety makes us stronger."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Spolupráce", href: "/projekty" },
          { label: "Ostatní spolupráce" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <OstatniSpolupraceContent programName={ostatniProgramName} />
      </article>
    </>
  );
}
