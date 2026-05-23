"use client";

import Image from "next/image";
import AnimatedInView from "@/components/AnimatedInView";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import ImageGallery from "@/components/ui/ImageGallery";
import {
  visegradProjectIntro,
  visegradProjectPhotoGroups,
} from "@/content/visegrad-project-photos";

export default function VisegradProjectContent() {
  return (
    <>
      <AnimatedInView>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_min(460px,48%)] lg:items-center lg:gap-12 xl:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Image
                src={visegradProjectIntro.flag}
                alt="Vlajka Polska"
                width={48}
                height={32}
                className="h-8 w-auto rounded-sm object-contain"
              />
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary/55">
                Visegradské fondy
              </p>
            </div>
            <ProseHeading>Ekologické cestování</ProseHeading>
            <Prose className="mt-6">
              <p>
                V prvním týdnu školy se studenti ANOA zúčastnili setkání studentů
                z Polska a Slovenska. Toto setkání bylo pořádáno na základě
                spolupráce Visegradských fondů v rámci projektu ekologického
                cestování. Studenti v rámci projektu a svých týmů vytvořených tak,
                aby byl v každé skupině minimálně jeden zástupce z každé země,
                vytvořili prezentaci v podobě vlastnoručně namalovaných bodů z
                pohledu ekologického cestování.
              </p>
              <p>
                Tento projekt byl velice úspěšný a studenti vše výborně
                odprezentovali v angličtině. Cestování jako významný zdroj ekonomiky
                většiny zemí je stále na vzestupu. Obezřetnost a ekologické
                cestování je důležitým aspektem daného sektoru, což studenti velmi
                dobře pochopili a hledali v rámci projektu všechna možná řešení pro
                zlepšení a vývoj této problematiky.
              </p>
            </Prose>
          </div>

          <div className="overflow-hidden rounded-2xl border border-primary/10 bg-[#E8F0FA] shadow-md shadow-primary/5">
            <Image
              src={visegradProjectIntro.headline}
              alt="Studenti ANOA na výletě v Gdaňsku v rámci Visegrad projektu"
              width={1600}
              height={900}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </AnimatedInView>

      <AnimatedInView delay={0.05}>
        <Prose className="mt-12 max-w-none md:mt-16">
          <p>
            V daném projektu náleží leadership právě Polsku. Organizace celého
            projektu byla výborná. V pátek všichni studenti navštívili Gdaňsk, kde
            viděli krásné náměstí, přístav, katedrálu a navštívili muzeum druhé
            světové války. Muzeem procházíte chronologicky ještě před válečnou
            dobou, jsou zde i připomínky první světové války. Budova je velmi
            moderní, ale betonově strohá a díky tomu dotváří krutost a surovost
            událostí té doby.
          </p>
          <p>
            Studentům se tato expozice velice líbila. Připomínání historie je
            důležitou součástí i pro dnešní dobu, která je opět složitá. Je
            důležité, aby si lidé připomínali i špatné a chybné události, které
            vedly k tak hrozné devastaci lidstva.
          </p>
          <p>
            Díky ubytování studentů v polských rodinách měli studenti možnost
            poznat a ochutnat jinou kuchyni a zvyky. Všichni studenti byli velice
            nadšeni vstřícností a pohostinností polských rodičů. Studenti byli
            velice šťastní, že si mohli popovídat s polskými studenty v angličtině
            na dobré úrovni.
          </p>
        </Prose>
      </AnimatedInView>

      <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
        {visegradProjectPhotoGroups.map((group, index) => (
          <AnimatedInView key={group.title} delay={index * 0.05}>
            <section>
              <ProseHeading as="h3">{group.title}</ProseHeading>
              {group.description && (
                <p className="mb-6 mt-3 max-w-3xl font-sans text-base leading-relaxed text-black/60">
                  {group.description}
                </p>
              )}
              <ImageGallery
                groupTitle={group.title}
                photos={group.photos}
                layout={group.layout ?? "grid"}
                imageFit={group.imageFit ?? "cover"}
                bordered={group.bordered ?? true}
              />
            </section>
          </AnimatedInView>
        ))}
      </div>
    </>
  );
}
