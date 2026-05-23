import ExploreGrid from "@/components/home/ExploreGrid";
import Hero from "@/components/Hero";
import Prose, { ProseHeading } from "@/components/layout/Prose";

const exploreCards = [
  {
    title: "Projekty",
    description:
      "Projektové Erasmus+ spolupráce, videokonference a výjezdy do partnerských škol.",
    href: "/projekty",
    tag: "Program",
  },
  {
    title: "Akreditace",
    description:
      "Akreditace 2021-1-CZ01-KA121-VET-000006611 — mobilita studentů i zaměstnanců.",
    href: "/akreditace",
    tag: "Mobilita",
  },
  {
    title: "Informace pro uchazeče",
    description: "Přihláška přes EDUspace, Erasmus+ projekt nebo praxe.",
    href: "/informace-pro-uchazece",
    tag: "Studenti",
  },
  {
    title: "Názory studentů",
    description: "Zpětná vazba z mezinárodních setkání a mobilit.",
    href: "/nazory-studentu",
    tag: "Zkušenosti",
  },
  {
    title: "eTwinning",
    description: "Young European Founders a videokonference s partnery.",
    href: "/spoluprace/etwinning",
    tag: "Spolupráce",
  },
  {
    title: "Visegrad — Slovensko",
    description: "Ekologické cestování, EKORAY a módní přehlídka z recyklovaných oděvů.",
    href: "/spoluprace/visegrad",
    tag: "Spolupráce",
  },
  {
    title: "Ostatní spolupráce",
    description: "Program „Variety makes us stronger“ s polskými partnery.",
    href: "/spoluprace/ostatni",
    tag: "Spolupráce",
  },
  {
    title: "Partnerské školy",
    description: "Síť škol v Portugalsku, Francii, Španělsku, Turecku, Polsku a dalších.",
    href: "/partnerske-skoly",
    tag: "Síť",
  },
  {
    title: "Tým mezinárodní spolupráce",
    description: "Koordinátoři, kteří otevírají dveře do Evropy.",
    href: "/tym",
    tag: "Lidé",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-tight text-black">
            Erasmus+ na <span className="text-primary">ANOA</span>
          </h2>
          <Prose className="mt-6 max-w-3xl">
            <p>
              Erasmus+ je vzdělávací program pod záštitou Evropské unie, jehož
              cílem je podpora spolupráce a mobilit ve všech sférách vzdělávání.
              Cílem Erasmu je zvýšení kvality a přiměřenosti kvalifikací a
              dovedností.
            </p>
            <p>
              Na naší škole věříme, že stejně důležité jako studium je i praktické
              použití naučených znalostí. Různé druhy projektů s partnerskými
              školami ze zahraničí jsou jednou z cest, které k této praxi
              napomáhají. Nedílnou součástí je pro studenty možnost využití cizích
              jazyků a vyzkoušení si jazykových kompetencí.
            </p>
          </Prose>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-[#F4F7FB] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <ProseHeading>Prozkoumejte program</ProseHeading>
          <p className="mb-10 max-w-2xl font-sans text-base text-black/55">
            Přehled všech sekcí programu Erasmus+ na naší škole.
          </p>
          <ExploreGrid cards={exploreCards} />
        </div>
      </section>
    </>
  );
}
