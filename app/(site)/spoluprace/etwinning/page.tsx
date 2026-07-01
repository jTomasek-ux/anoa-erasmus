import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import { etwinningImages } from "@/content/etwinning-photos";

export const metadata: Metadata = {
  title: "eTwinning spolupráce | ANOA Erasmus+",
  description:
    "eTwinning projekty ANOA - Young European Founders a videokonference.",
};

export default function EtwinningPage() {
  return (
    <>
      <PageHeader
        title="eTwinning spolupráce"
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Spolupráce", href: "/projekty" },
          { label: "eTwinning" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(220px,320px)] lg:gap-14">
          <Prose className="max-w-none">
            <p>
              eTwinning je platforma pro vyhledávání spolupráce mezi školami a
              slouží jako bezpečná forma komunikace. Každoročně zde navazujeme
              kontakty pro projekty v rámci předmětů Business English a
              Mezinárodní spolupráce.
            </p>
          </Prose>
          <Image
            src={etwinningImages.logo}
            alt="Logo eTwinning"
            width={800}
            height={600}
            priority
            className="h-auto w-full max-w-[280px] justify-self-center object-contain lg:max-w-none lg:justify-self-end"
            sizes="(max-width: 1024px) 280px, 320px"
          />
        </section>

        <section className="mt-16 grid items-center gap-10 md:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] lg:gap-14">
          <div>
            <ProseHeading>Young European Founders</ProseHeading>
            <Prose>
              <p>
                Třetí ročníky se v současném roce věnují projektu Young European
                Founders. Partnerské školy jsou z Německa, Portugalska, Itálie a
                Turecka.
              </p>
              <p>
                V projektu se věnujeme aktuálním ekonomickým problémům. Studenti
                nejdříve analyzovali stávající firmy a následně si vytvářeli vlastní - důraz na start-upy a Green deal.
              </p>
              <p>
                Logo, které v projektu vyhrálo, vytvořili naši studenti.
              </p>
            </Prose>
          </div>
          <Image
            src={etwinningImages.youngEuropeanFoundersLogo}
            alt="Logo projektu Young European Founders - vítězný návrh studentů ANOA"
            width={800}
            height={800}
            className="h-auto w-full max-w-[260px] rounded-xl object-contain justify-self-center lg:max-w-none lg:justify-self-end"
            sizes="(max-width: 1024px) 260px, 300px"
          />
        </section>

        <section className="mt-16 md:mt-20">
          <ProseHeading>Videokonference</ProseHeading>
          <div className="mt-6 overflow-hidden rounded-2xl border border-primary/10 bg-[#E8F0FA] shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] min-h-[220px] md:aspect-auto md:min-h-[280px]">
                <Image
                  src={etwinningImages.videokonference}
                  alt="Studenti ANOA během eTwinning videokonference"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                  sizes="(max-width: 768px) 100vw, 576px"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <Prose className="max-w-none">
                  <p>
                    V rámci eTwinningových projektů studenti komunikují přes eTwinning
                    chat nebo organizují videokonference. Studenti ze 3A se účastnili
                    první videokonference, kde představili firmu vyrábějící sprchové
                    hlavice šetřící vodu - své pozice ujali na výbornou.
                  </p>
                </Prose>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
