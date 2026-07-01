import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import Prose, { ProseHeading } from "@/components/layout/Prose";
import { milenaNajmanovaPhoto } from "@/content/tym";

export const metadata: Metadata = {
  title: "Tým mezinárodní spolupráce | ANOA Erasmus+",
  description:
    "Tým ANOA Erasmus+ - koordinátoři mezinárodní spolupráce a mobility.",
};

const qa = [
  {
    q: "Děláte Vaši práci ráda? A proč?",
    a: "Ano - kdyby mě nebavila, už bych dělala něco jiného. Moc mě baví kontakt s mladší generací, sledovat, jak během čtyř let rostou a připravují se na budoucí život.",
  },
  {
    q: "Proč jste se stala součástí týmu ANOA - Mezinárodní spolupráce?",
    a: "Mezinárodní spolupráci se na škole věnuji před čtyřmi lety. Ve firmě jsem byla denně v kontaktu se zahraničím - teorii o mezinárodní spolupráci nestačí vysvětlovat, člověk si to musí zažít.",
  },
  {
    q: "Který pobyt v zahraničí Vás profesně nejvíce formoval?",
    a: "V mládí jsem procestovala půlku světa. Největší vliv měla práce pro švýcarskou pobočku - kombinace švýcarského prostředí s nadřízenou z Hong Kongu mě naučila nový přístup k práci.",
  },
  {
    q: "Z čeho míváte největší radost?",
    a: "Ve škole, když se studentům něco povede - certifikáty, Erasmus+, úspěch na videokonferencích. V soukromém životě rodina a čas s ní.",
  },
  {
    q: "Na čem právě pracujete?",
    a: "Na další mezinárodní spolupráci a na svém profesním rozvoji.",
  },
  {
    q: "Co Vás v životě nejvíce formuje?",
    a: "Prostředí a lidé kolem mě.",
  },
];

export default function TymPage() {
  return (
    <>
      <PageHeader
        title="Tým mezinárodní spolupráce"
        description="Kdo jsme? Skupina nadšenců, pro které vzdělání nekončí u školních bran."
        breadcrumb={[
          { label: "Úvod", href: "/" },
          { label: "Tým" },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Prose>
          <p>
            Jsme skupina nadšenců, kteří věří, že vzdělání nezačíná a nekončí u
            školních bran, ale je součástí našich každodenních životů. Stačí
            jen chtít!
          </p>
          <p>
            Na naší škole se věnujeme mezinárodní spolupráci a společně čelíme
            nenadálým okolnostem. Otevřete dveře k nám do kabinetů a my uděláme
            vše pro to, abychom vám otevřeli dveře do celé Evropy.
          </p>
          <p className="font-heading text-xl text-primary">
            Neseďte, vstaňte, cestujte, žijte!
          </p>
        </Prose>

        <div className="mt-16 overflow-hidden rounded-2xl border border-primary/10 bg-[#E8F0FA] p-8 md:p-12">
          <div className="grid items-start gap-8 md:grid-cols-[min(280px,36%)_1fr] md:gap-10">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-md shadow-primary/5">
              <Image
                src={milenaNajmanovaPhoto.src}
                alt={milenaNajmanovaPhoto.alt}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 280px, 280px"
                priority
              />
            </div>

            <div>
              <ProseHeading as="h3">Milena Najmanová</ProseHeading>
              <Prose>
                <p>
                  Patnáct let jsem pracovala v mezinárodní firmě, do školství
                  jsem měla hodně daleko. Shodou okolností jsem se dostala k
                  doučování angličtiny a zjistila, že mě to baví - proto jsem si
                  dodělala vzdělání a kompletně vyměnila obor.
                </p>
                <p>
                  Znalost teorie je základem, nikoli cílem. Žijeme v době, kdy
                  teoretické informace shání každý za pár minut - důležitá je
                  připravenost je aplikovat v praxi.
                </p>
              </Prose>
            </div>
          </div>

          <div className="mt-10 space-y-6 border-t border-primary/10 pt-10">
            {qa.map((item) => (
              <div key={item.q}>
                <h4 className="font-heading text-base text-primary">{item.q}</h4>
                <p className="mt-2 font-sans text-sm leading-relaxed text-black/70">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
