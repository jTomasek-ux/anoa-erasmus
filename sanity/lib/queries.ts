export const imageWithAltProjection = `{
  "src": image.asset->url,
  alt,
  caption
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteTitle,
  siteDescription,
  contactEmail,
  footerTagline,
  logo ${imageWithAltProjection},
  heroImage ${imageWithAltProjection},
  heroHeadlineLine1,
  heroHeadlineLine2,
  heroSubtitle,
  heroCtaLabel,
  heroCtaHref,
  homeIntroHeading,
  homeIntroParagraphs,
  exploreSectionLabel,
  exploreSectionSubtitle,
  exploreCards[]{ title, description, href, tag },
  mainNav[]{ label, href, children[]{ label, href, description } },
  footerNav[]{ label, href, description },
  externalLinks[]{ label, href, description },
  legalNav[]{ label, href, description }
}`;

export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  description,
  headerTitle,
  headerDescription,
  breadcrumb,
  eyebrow,
  headlineLine1,
  headlineLine2,
  poster ${imageWithAltProjection},
  sections[]{
    sectionType,
    heading,
    paragraphs,
    body,
    photos[] ${imageWithAltProjection},
    stats[]{ value, label },
    links[]{ label, href },
    qa[]{ question, answer },
    placements[]{
      period, school, country, detail, link,
      photo ${imageWithAltProjection}
    },
    benefits[]{ label, text },
    importance[]{ title, body },
    photoGroups[]{
      title, description,
      photos[] ${imageWithAltProjection}
    }
  }
}`;

export const studentQuotesQuery = `*[_type == "studentQuote"] | order(order asc){
  "id": slug.current,
  name,
  photo ${imageWithAltProjection},
  sections[]{ title, content },
  order
}`;

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc){
  name,
  photo ${imageWithAltProjection},
  bioParagraphs,
  tagline,
  qa[]{ question, answer },
  order
}`;

export const partnerSchoolsQuery = `*[_type == "partnerSchool"] | order(order asc){
  "id": _id,
  title,
  country,
  description,
  href,
  displayType,
  logo ${imageWithAltProjection},
  photos[] ${imageWithAltProjection},
  order
}`;
