"use client";

import Image from "next/image";
import Link from "next/link";
import { siteLogoAlt, siteLogoSrc } from "@/content/site-assets";
import { useSiteSettings } from "@/components/providers/SiteSettingsProvider";

export default function SiteLogo({ priority = false }: { priority?: boolean }) {
  const { logo } = useSiteSettings();
  const src = logo?.src ?? siteLogoSrc;
  const alt = logo?.alt ?? siteLogoAlt;
  return (
    <Link
      href="/"
      className="relative flex shrink-0 items-center"
      aria-label="Úvodní stránka"
    >
      <Image
        src={src}
        alt={alt}
        width={220}
        height={64}
        priority={priority}
        className="h-9 w-auto max-w-[180px] lg:h-10 lg:max-w-[200px] xl:h-11 xl:max-w-[220px]"
      />
    </Link>
  );
}
