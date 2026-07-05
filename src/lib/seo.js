/**
 * Helpers de SEO y datos estructurados (JSON-LD) para Google y buscadores IA.
 * Funciones puras, sin React. La marca sale de src/lib/site.js.
 */
import { RichText } from "prismic-reactjs";
import { site, social, contact } from "@/lib/site";

export const absoluteUrl = (path = "/") =>
  path.startsWith("http") ? path : `${site.url}${path}`;

/** Fecha legible es-AR desde un ISO date ("2023-05-12"). */
export const formatDate = (isoDate) => {
  if (!isoDate) return "";
  const date = new Date(`${isoDate}T00:00:00`);
  if (isNaN(date)) return isoDate;
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

export const personJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.author,
  url: absoluteUrl("/portafolio"),
  sameAs: [social.linkedin, social.instagram, social.github],
  jobTitle: "CEO Dev Zeppelin · CTO Anexa Links",
  worksFor: { "@type": "Organization", name: site.name, url: site.url },
});

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: absoluteUrl("/logo.webp"),
  founder: { "@type": "Person", name: site.author },
  sameAs: [social.linkedin, social.instagram, social.github],
});

export const breadcrumbJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(({ name, path }, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: absoluteUrl(path),
  })),
});

export const blogJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Moonwatcher Blog",
  url: absoluteUrl("/blog"),
  inLanguage: "es",
  author: { "@type": "Person", name: site.author },
  publisher: { "@type": "Organization", name: site.name, url: site.url },
});

export const collectionPageJsonLd = (tag, title, blogs) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  url: absoluteUrl(`/blog/${tag}`),
  inLanguage: "es",
  isPartOf: { "@type": "Blog", name: "Moonwatcher Blog", url: absoluteUrl("/blog") },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: (blogs?.results || []).map((article, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: RichText.asText(article.data["blog-title"] || []),
      url: absoluteUrl(`/blog/${tag}/${article.uid}`),
    })),
  },
});

export const blogPostingJsonLd = (article, tag) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: RichText.asText(article.data["blog-title"] || []),
  description: RichText.asText(article.data["preview-info"] || []).slice(0, 160),
  image: article.data.image?.url ? [article.data.image.url] : undefined,
  datePublished: article.data["blog-date"] || undefined,
  dateModified: article.last_publication_date || undefined,
  inLanguage: "es",
  author: { "@type": "Person", name: site.author, url: absoluteUrl("/portafolio") },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: absoluteUrl("/logo.webp") },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": absoluteUrl(`/blog/${tag}/${article.uid}`),
  },
});

export const profilePageJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: absoluteUrl("/portafolio"),
  inLanguage: "es",
  mainEntity: {
    ...personJsonLd(),
    "@context": undefined,
    knowsAbout: ["Python", "RPA", "SAP", "Inteligencia Artificial", "JavaScript", "React"],
  },
});

export const educationalOrgJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "codeObrero",
  url: absoluteUrl("/escuela"),
  logo: absoluteUrl("/escuela/logo.webp"),
  description:
    "Escuela gratuita de programación y tecnología para principiantes, en español.",
  founder: { "@type": "Person", name: site.author },
  parentOrganization: { "@type": "Organization", name: site.name, url: site.url },
});

export const learningResourceJsonLd = ({ title, description, path }) => ({
  "@context": "https://schema.org",
  "@type": ["Article", "LearningResource"],
  headline: title,
  description,
  url: absoluteUrl(path),
  inLanguage: "es",
  educationalLevel: "Beginner",
  author: { "@type": "Person", name: site.author },
  publisher: { "@type": "Organization", name: site.name, url: site.url },
});

export const contactPageJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: absoluteUrl("/escuela/contacto"),
  mainEntity: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: contact.email,
    telephone: `+${contact.whatsappNumber}`,
    availableLanguage: "es",
  },
});
