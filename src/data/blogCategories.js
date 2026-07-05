/**
 * Metadatos de las categorías del blog (moonwatcher.dev).
 * La key es el tag de Prismic; las queries no dependen de este archivo.
 */
export const blogCategories = {
  dev: {
    label: "Programación",
    title: "Moonwatcher's Dev 💻",
    description:
      "Blog de programación de Gino Pietrobon: JavaScript, React, Next.js, aprendizaje dev y contenido relevante del mundo del software, en español.",
  },
  news: {
    label: "Noticias",
    title: "¡Moon News! 👓",
    description:
      "Selección de noticias de tecnología comentadas: lanzamientos, tendencias tech y novedades del mundo digital, con buscador de noticias incluido.",
  },
  blog: {
    label: "Blog",
    title: "Moon-Blog ⭐",
    description:
      "Moon-Blog: artículos personales de Gino Pietrobon sobre tecnología, proyectos, ideas y experiencias del día a día como desarrollador web.",
  },
  cripto: {
    label: "Criptomonedas",
    title: "Blog Cripto 💎",
    description:
      "Artículos sobre economía, Bitcoin y criptomonedas: conceptos, análisis y aprendizajes del ecosistema cripto explicados en español simple.",
  },
  politica: {
    label: "Política",
    title: "Blog de Política 💼",
    description:
      "Escritos y opiniones sobre política y actualidad, desde la mirada personal de Gino Pietrobon, autor del Moonwatcher Blog.",
  },
  escritos: {
    label: "Escritos",
    title: "Moonwatcher's Escritos ✍",
    description:
      "Relatos, cuentos y escritos creativos de Gino Pietrobon y su hermano Adriel: literatura breve, humor y textos para leer de una sentada.",
  },
  rock: {
    label: "Rock",
    title: "Alma Rockera 100% 🎸",
    description:
      "Alma Rockera: artículos sobre rock argentino e internacional, bandas, discos e historias de la música que nos marcaron.",
  },
  river: {
    label: "River",
    title: "Blog de River Plate 🐓",
    description:
      "Blog del Club Atlético River Plate: partidos, ídolos, historia y pasión por el más grande, escrito por un hincha millonario.",
  },
  adriel: {
    label: "Adriel",
    title: "Escritos de mi hermano Adriel ✍",
    description:
      "Escritos y relatos creativos de Adriel Pietrobon: cuentos y textos breves publicados en el Moonwatcher Blog.",
  },
};

/** Categorías visibles en la navegación del blog (orden del menú). */
export const navCategories = [
  "news",
  "blog",
  "dev",
  "cripto",
  "politica",
  "escritos",
  "rock",
  "river",
];
