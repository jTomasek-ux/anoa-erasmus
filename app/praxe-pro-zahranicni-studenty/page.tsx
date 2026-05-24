import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import { contactEmail } from "@/content/navigation";
import { praxeZahranicniImages } from "@/content/praxe-zahranicni-photos";

export const metadata: Metadata = {
  title: "Praxe pro zahraniční studenty | ANOA Erasmus+",
  description:
    "ANOA přijímá studenty ze zahraničních partnerských škol na praxi v Praze.",
};

const placements: {
  period: string;
  school: string;
  detail: string;
  link?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
}[] = [
  {
    period: "Únor 2020",
    school: "Studentky z Lycee Depoorter",
    detail: "Praxe v kanadské školce v Praze.",
    link: "http://www.lycee-depoorter.com/",
    imageSrc: praxeZahranicniImages.unor2020,
    imageAlt: "Studentky z Lycée Depoorter na praxi v Praze, únor 2020",
    imagePosition: "center 18%",
  },
  {
    period: "Březen 2020",
    school: "Studentky z Lycee Depoorter",
    detail:
      "Praxe v Dobrovolnickém centru ve Vojenské nemocnici v Praze.",
    link: "http://www.lycee-depoorter.com/",
    imageSrc: praxeZahranicniImages.brezen2020,
    imageAlt:
      "Studentky z Lycée Depoorter na praxi ve Vojenské nemocnici, březen 2020",
    imagePosition: "center 22%",
  },
  {
    period: "Březen – květen 2022",
    school: "Absolventky z Colegio Nossa Senhora da Graça, Portugalsko",
    detail:
      "Absolventky absolvovaly praxi ve společnosti zabývající se zemědělskými produkty.",
    link: "https://www.colegionsgraca.com.pt/new/",
    imageSrc: praxeZahranicniImages.brezenKveten2022,
    imageAlt:
      "Absolventky z Portugalska na praxi u zemědělské společnosti, 2022",
  },
];

export default function PraxeZahranicniPage() {
  return (
    <>
      <PageHeader
        title="Praxe pro zahraniční studenty"
        description="Spolupráci se u nás meze nekladou."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Praxe pro zahraniční studenty" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
          <div className="flex flex-col gap-7 lg:gap-8">
            <div className="max-w-xl">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary/55">
                Praxe v Praze
              </p>
              <h2 className="mt-3 font-heading text-[clamp(2rem,3.8vw,2.875rem)] leading-[1.08] tracking-tight text-black">
                Spolupráci se u nás
                <br />
                <span className="text-primary">meze nekladou.</span>
              </h2>
              <div
                aria-hidden
                className="mt-5 h-1 w-14 rounded-full bg-primary/75"
              />
            </div>

            <Prose className="max-w-none lg:py-0">
              <p>
                Nejen, že se snažíme pro naše studenty nalézt nejlepší praxe v
                zahraničí, ale také je naší snahou vyhovět žádostem partnerských
                škol a nalézt praxe pro studenty ze zahraničí.
              </p>
              <p>
                Pokud byste měli příležitost přijmout tyto studenty, budeme rádi o
                zaslání jakékoliv nabídky na{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium text-primary hover:underline"
                >
                  {contactEmail}
                </a>
                . Předem děkujeme.
              </p>
            </Prose>
          </div>
          <Image
            src={praxeZahranicniImages.headline}
            alt="Erasmus+ a ANOA - praxe pro zahraniční studenty"
            width={960}
            height={540}
            priority
            className="h-auto w-full max-w-xl justify-self-center lg:max-w-none lg:justify-self-end"
            sizes="(max-width: 1024px) 90vw, 520px"
          />
        </section>

        <div className="mt-16 md:mt-20">
          <ProseHeading>Proběhlé spolupráce</ProseHeading>
        </div>
        <div className="space-y-8">
          {placements.map((p, index) => (
            <div
              key={`${p.period}-${p.school}`}
              className="overflow-hidden rounded-2xl border border-primary/10 bg-[#E8F0FA] shadow-sm"
            >
              <div
                className={`grid md:grid-cols-2 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] min-h-[220px] md:aspect-auto md:min-h-[280px]">
                  <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: p.imagePosition ?? "center",
                    }}
                    sizes="(max-width: 768px) 100vw, 576px"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                    {p.period}
                  </p>
                  <h3 className="mt-2 font-heading text-xl text-black">
                    {p.school}
                  </h3>
                  <p className="mt-2 font-sans text-base text-black/65">
                    {p.detail}
                  </p>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block font-sans text-sm text-primary hover:underline"
                    >
                      Web školy →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
