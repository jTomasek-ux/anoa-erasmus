"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function OstatniIntroPhotoStack({
  photos,
  groupTitle,
}: {
  photos: readonly { src: string; alt: string }[];
  groupTitle?: string;
}) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-6">
        {photos.map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setLightbox(photo.src)}
            className="group block w-full text-left"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={1600}
              unoptimized
              className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </button>
        ))}
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
              alt={groupTitle ?? "Spolupráce s Polskem"}
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
