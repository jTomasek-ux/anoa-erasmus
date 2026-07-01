import Image from "next/image";
import type { ContentSection } from "@/lib/cms/fetch";
import ImageGallery from "@/components/ui/ImageGallery";
import Prose, { ProseHeading } from "@/components/layout/Prose";

export default function ContentSections({
  sections = [],
}: {
  sections?: ContentSection[];
}) {
  return (
    <>
      {sections.map((section, index) => (
        <SectionBlock key={`${section.sectionType}-${index}`} section={section} />
      ))}
    </>
  );
}

function SectionBlock({ section }: { section: ContentSection }) {
  switch (section.sectionType) {
    case "prose":
      return (
        <Prose>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </Prose>
      );

    case "headingProse":
      return (
        <Prose>
          {section.heading ? <ProseHeading>{section.heading}</ProseHeading> : null}
          {section.body ? <p>{section.body}</p> : null}
        </Prose>
      );

    case "callout":
      return (
        <blockquote className="border-l-4 border-[#00468E] pl-5 font-serif text-xl italic text-[#00468E]">
          {section.body}
        </blockquote>
      );

    case "gallery":
      return section.photos?.length ? (
        <ImageGallery
          photos={section.photos.map((photo) => ({
            src: photo.src ?? "",
            alt: photo.alt,
          }))}
          groupTitle={section.heading}
        />
      ) : null;

    case "stats":
      return (
        <dl className="grid gap-6 sm:grid-cols-3">
          {section.stats?.map((stat) => (
            <div key={`${stat.value}-${stat.label}`} className="text-center">
              <dt className="font-headline text-4xl text-[#00468E]">{stat.value}</dt>
              <dd className="mt-2 text-sm text-black/70">{stat.label}</dd>
            </div>
          ))}
        </dl>
      );

    case "relatedLinks":
      return (
        <ul className="space-y-2">
          {section.links?.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[#00468E] underline-offset-4 hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      );

    case "qa":
      return (
        <div className="space-y-8">
          {section.qa?.map((item) => (
            <div key={item.question}>
              <h3 className="font-headline text-xl text-[#00468E]">{item.question}</h3>
              <p className="mt-2 text-black/75">{item.answer}</p>
            </div>
          ))}
        </div>
      );

    case "benefits":
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {section.benefits?.map((benefit) => (
            <div key={benefit.label} className="rounded-2xl border border-black/10 p-6">
              <p className="font-headline text-lg text-[#00468E]">{benefit.label}</p>
              <p className="mt-2 text-black/75">{benefit.text}</p>
            </div>
          ))}
        </div>
      );

    case "importance":
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {section.importance?.map((card) => (
            <div key={card.title} className="rounded-2xl bg-[#00468E]/5 p-6">
              <h3 className="font-headline text-lg text-[#00468E]">{card.title}</h3>
              <p className="mt-2 text-black/75">{card.body}</p>
            </div>
          ))}
        </div>
      );

    case "placements":
      return (
        <div className="grid gap-8">
          {section.placements?.map((placement) => (
            <article
              key={`${placement.school}-${placement.period}`}
              className="grid gap-6 rounded-[2rem] border border-black/10 p-6 md:grid-cols-[1fr_220px]"
            >
              <div>
                <p className="text-sm uppercase tracking-wide text-[#00468E]">
                  {placement.period}
                </p>
                <h3 className="mt-2 font-headline text-2xl">{placement.school}</h3>
                <p className="mt-1 text-black/60">{placement.country}</p>
                <p className="mt-4 text-black/75">{placement.detail}</p>
                {placement.link ? (
                  <a
                    href={placement.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-[#00468E] underline-offset-4 hover:underline"
                  >
                    Web školy →
                  </a>
                ) : null}
              </div>
              {placement.photo?.src ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={placement.photo.src}
                    alt={placement.photo.alt}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      );

    case "photoGroups":
      return (
        <div className="space-y-12">
          {section.photoGroups?.map((group) => (
            <div key={group.title}>
              <h3 className="font-headline text-2xl text-[#00468E]">{group.title}</h3>
              {group.description ? (
                <p className="mt-2 max-w-3xl text-black/75">{group.description}</p>
              ) : null}
              {group.photos?.length ? (
                <div className="mt-6">
                  <ImageGallery
                    photos={group.photos.map((photo) => ({
                      src: photo.src ?? "",
                      alt: photo.alt,
                    }))}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}
