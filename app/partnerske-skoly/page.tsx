import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import { partnerCountries } from "@/content/pages";

export const metadata: Metadata = {
  title: "Partnerské školy | ANOA Erasmus+",
  description: "Síť partnerských škol ANOA Erasmus+ v Evropě.",
};

export default function PartnerskeSkolyPage() {
  return (
    <>
      <PageHeader
        title="Partnerské školy"
        description="Spolupracujeme se školami napříč Evropou."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Partnerské školy" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <p className="mb-10 max-w-2xl font-sans text-base leading-relaxed text-black/65">
          Spolupracujeme se školami v několika evropských zemích. Seznam
          partnerů průběžně doplňujeme podle aktuálních projektů.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {partnerCountries.map((country) => (
            <div
              key={country}
              className="flex items-center gap-3 rounded-xl border border-primary/10 bg-[#E8F0FA] px-5 py-4"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              <span className="font-heading text-lg text-black">{country}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/10 bg-white p-6 md:p-8">
          <h3 className="font-heading text-lg text-black">Uvedené partnery</h3>
          <ul className="mt-4 space-y-3 font-sans text-sm text-black/70">
            <li>
              <strong>Slovensko:</strong>{" "}
              <a
                href="https://kadavinci.edupage.org/"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Súkromná stredná odborná škola ekonomická KOŠICKÁ AKADÉMIA, Košice
              </a>
            </li>
            <li>
              <strong>Francie:</strong> Lycée Depoorter – Hazebrouck
            </li>
            <li>
              <strong>Portugalsko:</strong> Colegio Nossa Senhora da Graça
            </li>
            <li>
              <strong>Španělsko, Turecko, Polsko</strong> — partneři v rámci
              projektů Erasmus+ a eTwinning
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
