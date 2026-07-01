import type { Metadata } from "next";
import Image from "next/image";
import ErasmusDaysGallery from "@/components/erasmus-days/ErasmusDaysGallery";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import {
  erasmusDaysImportance,
  erasmusDaysPoster,
} from "@/content/erasmus-days";

export const metadata: Metadata = {
  title: "Erasmus Days | ANOA Erasmus+",
  description:
    "Erasmus Days - mezinárodní oslava programu Erasmus+ a aktivit Anglo-německé obchodní akademie.",
};

export default function ErasmusDaysPage() {
  return (
    <>
      <PageHeader
        title="Erasmus Days"
        description="Každoroční oslava programu Erasmus+ a mezinárodní spolupráce na ANOA."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Erasmus Days" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_min(360px,38%)] lg:gap-14">
          <Prose>
            <ProseHeading as="h2">Co jsou Erasmus Days?</ProseHeading>
            <p>
              Erasmus Days je každoroční mezinárodní akce, která slaví úspěchy a
              dopady programu Erasmus+ na vzdělávání a kulturu po celé Evropě a
              ve světě. Tyto dny poskytují platformu pro sdílení zkušeností,
              úspěchů a příběhů studentů, učitelů a institucí zapojených do
              programu.
            </p>
            <p>
              Během těchto dnů se konají různé akce, jako jsou workshopy,
              konference, výstavy a setkání, které pomáhají šířit povědomí o
              programu a jeho přínosech.
            </p>
          </Prose>

          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-md shadow-primary/5 lg:sticky lg:top-24">
            <Image
              src={erasmusDaysPoster.src}
              alt={erasmusDaysPoster.alt}
              fill
              unoptimized
              className="object-contain p-2"
              sizes="(max-width: 1024px) 100vw, 360px"
              priority
            />
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <ProseHeading>Důležitost Erasmus Days</ProseHeading>
          <div className="mt-8 space-y-6">
            {erasmusDaysImportance.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5 md:p-8"
              >
                <h3 className="font-heading text-lg text-primary">{item.title}</h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-black/65">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <Prose className="mt-10">
            <p>
              Erasmus Days jsou významnou událostí, která podporuje rozvoj
              vzdělávání, kultury a mezinárodní spolupráce. Pomáhají zvyšovat
              povědomí o programu Erasmus+ a jeho přínosech, inspirují další
              generace k účasti a přispívají k budování otevřenější a propojenější
              Evropy. Účast na Erasmus Days může být nejen obohacující zkušeností,
              ale také příležitostí k navázání nových kontaktů a rozvoji osobních
              i profesních dovedností.
            </p>
          </Prose>
        </div>

        <div className="mt-16 md:mt-20">
          <ProseHeading as="h3">Fotografie z Erasmus Days</ProseHeading>
          <p className="mb-10 mt-3 font-sans text-sm text-black/50">
            Aktivity a setkání naší školy během Erasmus Days - kliknutím
            fotografii zvětšíte.
          </p>
          <ErasmusDaysGallery />
        </div>
      </article>
    </>
  );
}
