// API route que trae los titulares del día desde Google News (Argentina).
// Se hace del lado del servidor para evitar problemas de CORS y de límites
// de servicios externos de conversión RSS->JSON.

const RSS_URL = "https://news.google.com/rss?hl=es-419&gl=AR&ceid=AR:es-419";

// Cache simple en memoria para no pegarle a Google en cada request.
let cache = { ts: 0, titulares: [] };
const CACHE_MS = 10 * 60 * 1000; // 10 minutos

// Decodifica las entidades HTML básicas que aparecen en los títulos.
const decodeEntities = (str) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&apos;/g, "'");

const parseTitulares = (xml) => {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
  return items
    .map((item) => {
      const m =
        item.match(/<title>\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*<\/title>/) ||
        item.match(/<title>([\s\S]*?)<\/title>/);
      return m ? decodeEntities(m[1].trim()) : "";
    })
    .filter(Boolean);
};

export default async function handler(req, res) {
  try {
    const ahora = Date.now();
    if (cache.titulares.length > 0 && ahora - cache.ts < CACHE_MS) {
      return res.status(200).json({ titulares: cache.titulares });
    }

    const r = await fetch(RSS_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (DevZeppelin TopTicker)" },
    });
    if (!r.ok) {
      // No tiramos error al cliente: devolvemos lo que haya en cache (o vacío).
      return res.status(200).json({ titulares: cache.titulares });
    }

    const xml = await r.text();
    const titulares = parseTitulares(xml).slice(0, 15);

    if (titulares.length > 0) {
      cache = { ts: ahora, titulares };
    }

    return res.status(200).json({ titulares: cache.titulares });
  } catch {
    // Ante cualquier falla devolvemos un array (posiblemente vacío) sin error.
    return res.status(200).json({ titulares: cache.titulares });
  }
}
