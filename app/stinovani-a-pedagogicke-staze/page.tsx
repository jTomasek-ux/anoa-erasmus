import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import { stinovaniImages } from "@/content/stinovani-photos";

export const metadata: Metadata = {
  title: "Stínování a pedagogické stáže | ANOA Erasmus+",
  description:
    "Stínování zahraničních kolegů a přijímání studentů pedagogických fakult na ANOA.",
};

const visits: {
  period: string;
  names: string;
  origin: string;
  link?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
}[] = [
  {
    period: "Březen 2022",
    names: "Alicia a Chemi",
    origin: "Valencia, Španělsko",
    link: "https://www.maristasalgemesi.com/",
    imageSrc: stinovaniImages.brezen2022,
    imageAlt:
      "Alicia a Chemi z Valencie s certifikáty po stínování na ANOA, březen 2022",
    imagePosition: "center 12%",
  },
  {
    period: "Červen 2022",
    names: "Učitelé ze střední ekonomické školy HUNFALVY",
    origin: "Budapešť, Maďarsko",
    link: "https://www.hunfalvy-szki.hu/en/",
    imageSrc: stinovaniImages.cerven2022,
    imageAlt:
      "Učitelé ze školy HUNFALVY na stínování u tabule Erasmus+, červen 2022",
  },
  {
    period: "Březen 2020",
    names: "Zahraniční kolegové",
    origin: "Erasmus+ stínování",
    imageSrc: stinovaniImages.brezen2020,
    imageAlt: "Návštěva zahraničních kolegů na stínování, březen 2020",
  },
];

export default function StinovaniPage() {
  return (
    <>
      <PageHeader
        title="Stínování a pedagogické stáže"
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Stínování a pedagogické stáže" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12">
          <div>
            <ProseHeading>Stínování</ProseHeading>
            <Prose>
              <p>
                „Žádný učený z nebe nespadl.“ Spolupráce se zahraničními kolegy
                — nebo „víc hlav, víc ví.“ Informace z univerzit i z praxe dává
                smysl sladit v diskuzi s kolegy, jak se to dělá jinde.
              </p>
              <p className="font-heading text-lg text-primary">
                Nové tváře, kultury, diskuse v cizím jazyce — proč ne?!
              </p>
            </Prose>
          </div>

          <Image
            src={stinovaniImages.stinovani}
            alt="Stínování zahraničních kolegů na ANOA"
            width={1280}
            height={719}
            priority
            className="h-auto w-full rounded-xl object-contain"
            sizes="(max-width: 1024px) 100vw, 620px"
          />
        </div>

        <ProseHeading as="h3">Proběhlé návštěvy</ProseHeading>
        <div className="space-y-8">
          {visits.map((v, index) => (
            <div
              key={v.period}
              className="overflow-hidden rounded-2xl border border-primary/10 bg-[#E8F0FA] shadow-sm"
            >
              <div
                className={`grid md:grid-cols-2 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] min-h-[220px] md:aspect-auto md:min-h-[280px]">
                  <Image
                    src={v.imageSrc}
                    alt={v.imageAlt}
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: v.imagePosition ?? "center",
                    }}
                    sizes="(max-width: 768px) 100vw, 576px"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                    {v.period}
                  </p>
                  <h3 className="mt-2 font-heading text-xl text-black">
                    {v.names}
                  </h3>
                  <p className="mt-2 font-sans text-base text-black/65">
                    {v.origin}
                  </p>
                  {v.link && (
                    <a
                      href={v.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block font-sans text-sm text-primary hover:underline"
                    >
                      Web partnera →
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
