import Image from "next/image";
import Link from "next/link";
import { siteLogoAlt, siteLogoSrc } from "@/content/site-assets";

export default function SiteLogo({ priority = false }: { priority?: boolean }) {
  return (
    <Link
      href="/"
      className="relative flex shrink-0 items-center"
      aria-label="Úvodní stránka"
    >
      <Image
        src={siteLogoSrc}
        alt={siteLogoAlt}
        width={220}
        height={64}
        priority={priority}
        className="h-9 w-auto max-w-[180px] lg:h-10 lg:max-w-[200px] xl:h-11 xl:max-w-[220px]"
      />
    </Link>
  );
}
