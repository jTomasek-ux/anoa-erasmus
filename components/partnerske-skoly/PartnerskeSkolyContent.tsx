"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedInView from "@/components/AnimatedInView";
import { ProseHeading } from "@/components/layout/Prose";
import ImageGallery from "@/components/ui/ImageGallery";
import {
  partnerGalleries,
  partnerLogoCards,
  partnerTextCards,
} from "@/content/partnerske-skoly-photos";
import { ExternalLink } from "lucide-react";

function PartnerLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  const className =
    "inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
        <ExternalLink size={14} aria-hidden />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function PartnerskeSkolyContent() {
  return (
    <>
      <div className="space-y-16 md:space-y-20">
        {partnerGalleries.map((partner, index) => (
          <AnimatedInView key={partner.id} delay={index * 0.05}>
            <section>
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-sans text-sm font-medium uppercase tracking-wide text-primary">
                    {partner.country}
                  </p>
                  <ProseHeading as="h3">{partner.title}</ProseHeading>
                  <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-black/60">
                    {partner.description}
                  </p>
                  <p className="mt-3">
                    <PartnerLink href={partner.href}>
                      Web partnerské školy
                    </PartnerLink>
                  </p>
                </div>
                {partner.logo && (
                  <div className="flex shrink-0 items-center rounded-xl border border-primary/10 bg-white p-4">
                    <Image
                      src={partner.logo.src}
                      alt={partner.logo.alt}
                      width={200}
                      height={120}
                      unoptimized
                      className="h-auto max-h-20 w-auto max-w-[180px] object-contain"
                    />
                  </div>
                )}
              </div>
              <ImageGallery
                groupTitle={partner.title}
                photos={partner.photos}
              />
            </section>
          </AnimatedInView>
        ))}

        <AnimatedInView delay={0.1}>
          <section>
            <ProseHeading as="h3">Partneři</ProseHeading>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {partnerLogoCards.map((partner) => (
                <article
                  key={partner.id}
                  className="flex flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-sm md:p-8"
                >
                  <p className="font-sans text-sm font-medium uppercase tracking-wide text-primary">
                    {partner.country}
                  </p>
                  <h4 className="mt-2 font-heading text-xl text-black">
                    {partner.title}
                  </h4>
                  <div className="my-6 flex min-h-[100px] items-center justify-center rounded-xl border border-primary/10 bg-[#E8F0FA] p-6">
                    <Image
                      src={partner.logo.src}
                      alt={partner.logo.alt}
                      width={320}
                      height={160}
                      unoptimized
                      className="h-auto max-h-24 w-auto max-w-full object-contain"
                    />
                  </div>
                  <p className="flex-1 font-sans text-sm leading-relaxed text-black/65">
                    {partner.description}
                  </p>
                  <p className="mt-5">
                    <PartnerLink href={partner.href}>
                      Web partnerské školy
                    </PartnerLink>
                  </p>
                </article>
              ))}
            </div>
          </section>
        </AnimatedInView>

        <AnimatedInView delay={0.15}>
          <section>
            <ProseHeading as="h3">Další partneři v projektech</ProseHeading>
            <p className="mb-8 mt-3 max-w-3xl font-sans text-base leading-relaxed text-black/60">
              Školy z dalších zemí spolupracují s námi v rámci projektů Erasmus+
              a eTwinning. U těchto partnerů zatím nemáme vlastní fotografie ani
              oficiální logo ke zveřejnění.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {partnerTextCards.map((partner) => (
                <article
                  key={partner.id}
                  className="rounded-xl border border-primary/10 bg-[#E8F0FA] px-5 py-5"
                >
                  <p className="font-sans text-xs font-medium uppercase tracking-wide text-primary">
                    {partner.country}
                  </p>
                  <h4 className="mt-2 font-heading text-lg text-black">
                    {partner.title}
                  </h4>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-black/65">
                    {partner.description}
                  </p>
                  {partner.href && (
                    <p className="mt-4">
                      <PartnerLink href={partner.href}>
                        Více o spolupráci
                      </PartnerLink>
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        </AnimatedInView>
      </div>
    </>
  );
}
