import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import { contactEmail } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Informace pro uchazeče | ANOA Erasmus+",
  description: "Přihláška do Erasmus+ projektu nebo praxe přes EDUspace.",
};

export default function UchazeciPage() {
  return (
    <>
      <PageHeader
        title="Informace pro uchazeče"
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Informace pro uchazeče" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <ProseHeading>Přihláška</ProseHeading>
        <Prose>
          <p>
            Přihláškový formulář naleznete na EDUspace v kolonce{" "}
            <strong>ZAHRANIČNÍ AKTIVITY</strong>. Máte na výběr ze dvou možností:
          </p>
        </Prose>

        <div className="my-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary bg-primary/5 p-8">
            <h3 className="font-heading text-xl text-primary">Erasmus+ projekt</h3>
            <p className="mt-2 font-sans text-sm text-black/60">
              Mezinárodní setkání, videokonference a týmové projekty s partnery.
            </p>
          </div>
          <div className="rounded-2xl border border-primary/15 bg-white p-8">
            <h3 className="font-heading text-xl text-black">Erasmus+ praxe</h3>
            <p className="mt-2 font-sans text-sm text-black/60">
              Odborná praxe v zahraničí v rámci akreditace školy.
            </p>
          </div>
        </div>

        <ProseHeading as="h3">Potřebujete poradit?</ProseHeading>
        <Prose>
          <p>
            Zaskočte za námi do kabinetů, nebo napište e-mail na{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-primary hover:underline"
            >
              {contactEmail}
            </a>
            .
          </p>
        </Prose>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/nazory-studentu"
            className="rounded-full bg-primary px-6 py-3 font-sans text-sm font-semibold text-white"
          >
            Názory studentů
          </Link>
          <Link
            href="/akreditace"
            className="rounded-full border border-primary/20 px-6 py-3 font-sans text-sm font-medium text-primary"
          >
            Akreditace a praxe
          </Link>
        </div>
      </article>
    </>
  );
}
