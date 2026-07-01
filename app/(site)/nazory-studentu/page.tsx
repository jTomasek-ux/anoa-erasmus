import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Prose from "@/components/layout/Prose";
import StudentQuotes from "@/components/ui/StudentQuotes";
import { loadPage, loadStudentQuotes } from "@/lib/cms/defaults";

export const metadata: Metadata = {
  title: "Názory studentů | ANOA Erasmus+",
  description:
    "Zpětná vazba studentů z mezinárodních projektů Erasmus+ - Rumunsko a další.",
};

export default async function NazoryStudentuPage() {
  const [page, quotes] = await Promise.all([
    loadPage("nazory-studentu"),
    loadStudentQuotes(),
  ]);

  const intro =
    page?.sections?.find((section) => section.sectionType === "prose")
      ?.paragraphs?.[0] ??
    "Jsme rádi, když díky vyhraným projektům můžeme poslat studenty do zahraničí. Ještě více si užíváme váš zájem o tyto projekty. Vaše názory pomáhají koordinátorům lépe plánovat výjezdy i dalším zájemcům, kteří s účastí váhají. Děkujeme!";

  const students = quotes.map((quote) => ({
    id: quote.id ?? quote.name.toLowerCase(),
    name: quote.name,
    imageSrc: quote.photo?.src ?? "",
    imageAlt: quote.photo?.alt ?? quote.name,
    sections: (quote.sections ?? []).map((section) => ({
      title: section.title ?? "",
      content: section.content ?? "",
    })),
  }));

  return (
    <>
      <PageHeader
        title={page?.headerTitle ?? "Názory studentů"}
        description={
          page?.headerDescription ??
          "Děkujeme za zpětnou vazbu - pomáhá nám i dalším uchazečům."
        }
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Názory studentů" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Prose>
          <p>{intro}</p>
        </Prose>
        <div className="mt-12">
          <StudentQuotes students={students} />
        </div>
      </article>
    </>
  );
}
