import Prismic from "prismic-javascript";
import { Client } from "@/lib/prismic";
import { site } from "@/lib/site";

const STATIC_PATHS = [
  "/",
  "/webs",
  "/apps",
  "/servicios",
  "/contacto",
  "/quienesSomos",
  "/portafolio",
  "/blog",
  "/blog/dev",
  "/blog/news",
  "/blog/cripto",
  "/blog/blog",
  "/blog/escritos",
  "/blog/politica",
  "/blog/rock",
  "/blog/river",
  "/blog/adriel",
  "/blog/tecnoticiero",
  "/escuela",
  "/escuela/primeros-pasos-dev",
  "/escuela/consejos",
  "/escuela/criptomonedas",
  "/escuela/acerca-de",
  "/escuela/contacto",
];

const urlEntry = ({ loc, lastmod }) =>
  `<url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`;

export async function getServerSideProps({ res }) {
  const entries = STATIC_PATHS.map((path) => ({ loc: `${site.url}${path}` }));

  try {
    const posts = await Client().query(
      Prismic.Predicates.at("document.type", "blog"),
      { pageSize: 100 }
    );
    for (const doc of posts.results || []) {
      const tag = doc.tags?.[0];
      if (!tag || !doc.uid) continue;
      entries.push({
        loc: `${site.url}/blog/${tag}/${doc.uid}`,
        lastmod: doc.last_publication_date?.split("T")[0],
      });
    }
  } catch (e) {
    // Si Prismic falla, el sitemap degrada a las rutas estáticas.
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(urlEntry).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.write(xml);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
