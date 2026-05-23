"use client";

import AnimatedInView from "@/components/AnimatedInView";
import OstatniIntroPhotoStack from "@/components/spoluprace/OstatniIntroPhotoStack";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import ImageGallery from "@/components/ui/ImageGallery";
import {
  ostatniIntroPhotos,
  ostatniPhotoGroups,
} from "@/content/ostatni-spoluprace";

export default function OstatniSpolupraceContent({
  programName,
}: {
  programName: string;
}) {
  return (
    <>
      <AnimatedInView>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_min(420px,44%)] lg:items-center lg:gap-12 xl:gap-16">
          <div>
            <ProseHeading>Spolupráce s Polskem</ProseHeading>
            <Prose className="mt-6">
              <p>
                <strong>Název programu:</strong> „{programName}“
              </p>
              <p>
                Na podzim 2021 a na jaře 2022 jsme hostili studenty a pedagogy z
                Polska. Studenti se věnovali rozdílům ve společnosti a tomu, jak
                se chovat k lidem s handicapem. Na fotografiích jsou naši i polští
                studenti - z podzimního setkání vznikl komiks, který v Polsku
                funguje jako mobilní výstava.
              </p>
              <p>
                Při druhém setkání se studenti věnovali kulturním a jazykovým
                rozdílům a zapojili se do dobrovolnické akce - výroby papírových
                květin pro oddělení Ústřední vojenské nemocnice, kterou naše
                škola zorganizovala.
              </p>
              <p>
                I když to byla naše první spolupráce, vyšla na výbornou.
              </p>
            </Prose>
          </div>

          <OstatniIntroPhotoStack
            photos={ostatniIntroPhotos}
            groupTitle="Spolupráce s Polskem"
          />
        </div>
      </AnimatedInView>

      <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
        {ostatniPhotoGroups.map((group, index) => (
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
