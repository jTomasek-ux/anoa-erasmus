import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Prose from "@/components/layout/Prose";
import StudentQuotes from "@/components/ui/StudentQuotes";
import { studentQuotes } from "@/content/pages";

export const metadata: Metadata = {
  title: "Názory studentů | ANOA Erasmus+",
  description:
    "Zpětná vazba studentů z mezinárodních projektů Erasmus+ - Rumunsko a další.",
};

export default function NazoryStudentuPage() {
  return (
    <>
      <PageHeader
        title="Názory studentů"
        description="Děkujeme za zpětnou vazbu - pomáhá nám i dalším uchazečům."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Názory studentů" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Prose>
          <p>
            Jsme rádi, když díky vyhraným projektům můžeme poslat studenty do
            zahraničí. Ještě více si užíváme váš zájem o tyto projekty. Vaše
            názory pomáhají koordinátorům lépe plánovat výjezdy i dalším
            zájemcům, kteří s účastí váhají. Děkujeme!
          </p>
        </Prose>
        <div className="mt-12">
          <StudentQuotes students={studentQuotes} />
        </div>
      </article>
    </>
  );
}
