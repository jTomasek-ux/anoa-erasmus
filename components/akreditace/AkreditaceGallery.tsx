import ImageGallery from "@/components/ui/ImageGallery";
import {
  akreditaceImageSrc,
  akreditacePhotoGroups,
} from "@/content/akreditace-photos";
import { ProseHeading } from "@/components/layout/Prose";

export default function AkreditaceGallery() {
  return (
    <div className="space-y-14">
      {akreditacePhotoGroups.map((group) => (
        <section key={group.title}>
          <ProseHeading as="h3">{group.title}</ProseHeading>
          <div className="mt-6">
            <ImageGallery
              groupTitle={group.title}
              photos={group.indices.map((index) => ({
                src: akreditaceImageSrc(index),
                alt: `Erasmus+ praxe — ${group.title}`,
              }))}
            />
          </div>
        </section>
      ))}
    </div>
  );
}
