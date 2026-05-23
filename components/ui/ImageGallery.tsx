"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
export type GalleryPhoto = {
  src: string;
  alt: string;
};

export default function ImageGallery({
  photos,
  groupTitle,
  layout = "grid",
}: {
  photos: GalleryPhoto[];
  groupTitle?: string;
  layout?: "grid" | "featured";
}) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const featured = layout === "featured";

  return (
    <>
      <div
        className={
          featured
            ? "grid grid-cols-1"
            : "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        }
      >
        {photos.map((photo) => {
          const { src } = photo;
          return (
            <button
              key={src}
              type="button"
              onClick={() => setLightbox(src)}
              className={
                featured
                  ? "group relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/10 bg-[#E8F0FA] text-left shadow-md shadow-primary/5"
                  : "group relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/10 bg-[#E8F0FA] text-left"
              }
            >
              <Image
                src={src}
                alt={photo.alt}
                fill
                unoptimized
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes={
                  featured
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                }
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/10" />
            </button>
          );
        })}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Zavřít"
          >
            <X size={24} />
          </button>
          <div
            className="relative h-[min(85vh,720px)] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt={groupTitle ?? "Fotografie z praxe"}
              fill
              unoptimized
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
