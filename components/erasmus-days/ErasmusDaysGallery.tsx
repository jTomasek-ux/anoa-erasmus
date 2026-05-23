"use client";

import ImageGallery from "@/components/ui/ImageGallery";
import { erasmusDaysGalleryPhotos } from "@/content/erasmus-days";

export default function ErasmusDaysGallery() {
  return (
    <ImageGallery
      groupTitle="Erasmus Days na ANOA"
      photos={erasmusDaysGalleryPhotos}
    />
  );
}
