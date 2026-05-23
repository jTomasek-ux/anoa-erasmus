import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  contactEmail,
  externalLinks,
  footerNav,
  legalNav,
} from "@/content/navigation";

export default function SiteFooter() {
  return (
    <footer className="mt-auto rounded-t-[2.5rem] bg-primary px-6 pb-10 pt-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
              Stránky
            </p>
            <nav className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {footerNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
              Zdroje a kontakt
            </p>
            <div className="flex flex-col gap-3">
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 font-sans text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                  <ExternalLink
                    size={12}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              ))}
              <a
                href={`mailto:${contactEmail}`}
                className="mt-2 font-sans text-sm text-white/70 transition-colors hover:text-white"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <p className="font-sans text-sm text-white/45">
              Program Erasmus+ — mezinárodní spolupráce a mobilit studentů
            </p>
            <nav
              aria-label="Právní informace"
              className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 sm:justify-start"
            >
              {legalNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-xs text-white/40 underline-offset-2 transition-colors hover:text-white/70 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <p className="font-sans text-sm text-white/35">
            © {new Date().getFullYear()} ANOA Erasmus+
          </p>
        </div>
      </div>
    </footer>
  );
}
