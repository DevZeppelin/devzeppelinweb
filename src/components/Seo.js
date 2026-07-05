import Head from "next/head";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

/**
 * Meta tags reutilizables: title, description, canonical, Open Graph,
 * Twitter cards y JSON-LD. Optimizado para Google y buscadores IA.
 *
 * @param {string} title - Título de la página (obligatorio).
 * @param {string} description - Meta description única (~150 chars).
 * @param {string} path - Ruta relativa canónica, ej. "/blog/dev".
 * @param {string} [image] - Imagen OG (relativa o absoluta). Default: /logo.webp
 * @param {"website"|"article"} [type]
 * @param {object|object[]} [jsonLd] - Uno o varios objetos schema.org.
 * @param {string} [publishedTime] - ISO date para article:published_time.
 * @param {string} [modifiedTime] - ISO date para article:modified_time.
 */
export default function Seo({
  title,
  description,
  path = "/",
  image = "/logo.webp",
  type = "website",
  jsonLd,
  publishedTime,
  modifiedTime,
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const jsonLdItems = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="author" content={site.author} />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="es_AR" />
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />

      {jsonLdItems.map((item, i) => (
        <script
          key={`jsonld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Head>
  );
}
