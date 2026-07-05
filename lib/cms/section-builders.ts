type Stat = { value: string; label: string };
type Link = { label: string; href: string };
type Benefit = { label: string; text: string };
type Qa = { question: string; answer: string };
type Placement = {
  period: string;
  school: string;
  country: string;
  detail: string;
  link?: string;
};
type Importance = { title: string; body: string };

export function prose(...paragraphs: string[]) {
  return {
    _type: "contentSection" as const,
    sectionType: "prose",
    paragraphs,
  };
}

export function headingProse(heading: string, body: string) {
  return {
    _type: "contentSection" as const,
    sectionType: "headingProse",
    heading,
    body,
  };
}

export function stats(...items: Stat[]) {
  return {
    _type: "contentSection" as const,
    sectionType: "stats",
    stats: items,
  };
}

export function relatedLinks(heading: string, links: Link[]) {
  return {
    _type: "contentSection" as const,
    sectionType: "relatedLinks",
    heading,
    links,
  };
}

export function benefits(heading: string, items: Benefit[]) {
  return {
    _type: "contentSection" as const,
    sectionType: "benefits",
    heading,
    benefits: items,
  };
}

export function qaBlock(...items: Qa[]) {
  return {
    _type: "contentSection" as const,
    sectionType: "qa",
    qa: items,
  };
}

export function placements(...items: Placement[]) {
  return {
    _type: "contentSection" as const,
    sectionType: "placements",
    placements: items.map((item) => ({
      ...item,
      country: item.country || "",
    })),
  };
}

export function importance(...cards: Importance[]) {
  return {
    _type: "contentSection" as const,
    sectionType: "importance",
    importance: cards,
  };
}

export function callout(text: string) {
  return {
    _type: "contentSection" as const,
    sectionType: "callout",
    body: text,
  };
}

export function galleryIntro(heading: string, body: string) {
  return headingProse(heading, body);
}
