"use client";

import Image from "next/image";
import AnimatedInView from "@/components/AnimatedInView";
import { ProseHeading } from "@/components/layout/Prose";
import ImageGallery from "@/components/ui/ImageGallery";
import {
  visegradHeadlinePhoto,
  visegradPhotoGroups,
} from "@/content/visegrad-slovensko";

export default function VisegradSlovenskoContent() {
  return (
    <>
      <AnimatedInView>
        <div className="relative mb-12 aspect-[21/9] min-h-[200px] overflow-hidden rounded-2xl border border-primary/10 md:mb-16 md:min-h-[280px]">
          <Image
            src={visegradHeadlinePhoto.src}
            alt={visegradHeadlinePhoto.alt}
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </AnimatedInView>

      <div className="space-y-16 md:space-y-20">
        {visegradPhotoGroups.map((group, index) => (
          <AnimatedInView key={group.title} delay={index * 0.05}>
            <section>
              <ProseHeading as="h3">{group.title}</ProseHeading>
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
