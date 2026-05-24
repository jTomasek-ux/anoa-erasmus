"use client";

import Image from "next/image";
import AnimatedInView from "@/components/AnimatedInView";
import { ProseHeading } from "@/components/layout/Prose";
import ImageGallery from "@/components/ui/ImageGallery";
import type { PraxePlacement } from "@/content/praxe-zahranicni";
import { praxeIntroImages } from "@/content/praxe-zahranicni";

export default function PraxeZahranicniContent({
  placements,
  contactEmail,
}: {
  placements: PraxePlacement[];
  contactEmail: string;
}) {
  return (
    <>
      <AnimatedInView>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_min(420px,42%)] lg:gap-14">
          <div className="font-sans text-base leading-relaxed text-black/70">
            <p>
              Nejen, že se snažíme pro naše studenty nalézt nejlepší praxe v
              zahraničí, ale také je naší snahou vyhovět žádostem partnerských
              škol a nalézt praxe pro studenty ze zahraničí.
            </p>
            <p className="mt-4">
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
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/10 bg-[#E8F0FA] shadow-md shadow-primary/5">
            <Image
              src={praxeIntroImages.headline.src}
              alt={praxeIntroImages.headline.alt}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
            />
          </div>
        </div>
      </AnimatedInView>

      <div className="mt-16 md:mt-20">
        <ProseHeading>Proběhlé spolupráce</ProseHeading>
        <p className="mb-10 mt-3 font-sans text-sm text-black/50">
          Přehled hostujících studentek ze zahraničí - kliknutím fotografii
          zvětříte.
        </p>

        <div className="space-y-16 md:space-y-20">
          {placements.map((placement, index) => (
            <AnimatedInView key={placement.period} delay={index * 0.06}>
              <article className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
                <div
                  className={
                    index % 2 === 1 ? "md:order-2" : undefined
                  }
                >
                  <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5 md:p-8">
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                      {placement.period}
                    </p>
                    <h3 className="mt-2 font-heading text-xl text-black md:text-2xl">
                      {placement.school}
                    </h3>
                    {placement.country ? (
                      <p className="mt-1 font-sans text-sm font-medium text-black/45">
                        {placement.country}
                      </p>
                    ) : null}
                    <p className="mt-4 font-sans text-base leading-relaxed text-black/65">
                      {placement.detail}
                    </p>
                    <a
                      href={placement.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1 font-sans text-sm font-medium text-primary hover:underline"
                    >
                      Web školy
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>

                <div
                  className={
                    index % 2 === 1 ? "md:order-1" : undefined
                  }
                >
                  <ImageGallery
                    layout="featured"
                    groupTitle={`${placement.school} - ${placement.period}`}
                    photos={[placement.image]}
                  />
                </div>
              </article>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </>
  );
}
