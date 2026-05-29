_App disponible en : https://devzeppelinweb.vercel.app

## DevZeppelin WEBS 🚀

_Este proyecto utiliza:_

_Programación reactiva con: react.js y Next.js_
_El códigos e encuentra separado en componentes lo que lo hace escalable y mantenible_
_Tailwind CSS es un framework muy poderoso que hace todo el diseño mucho más simple_


# La página web de una empresa es como su hogar

_Esta página es ultra rápida. El navegador "nunca" recarga. El sitio entrega una excelente experiencia de usuario al tener una buena perfomance_


## Construido con 🛠️
* [ReactJS] - El mejor framework de JavaScript
* [NextJS] - El mejor framework de React :)
* [Tailwind CSS] - El mejor framework de CSS

## Estructura del proyecto 📁

El código vive bajo `src/` y usa el alias `@/` → `src/` (ver `jsconfig.json`).

```
src/
  pages/            Rutas (Pages Router de Next.js)
  components/
    layout/         Chrome del sitio: Layout, NavBar, Footer, WhatsappIcon, etc.
    ui/             Piezas reutilizables: botones, items, grids
    home/           Secciones de la home (sections/*)
    portafolio/     Componentes del portfolio (Hero, Experience, Skills, ...)
    blog/           Componentes del blog (Prismic)
    escuela/        Componentes de codeObrero / escuela
    tourist/        Componentes de la página tourist
    alma/           Componentes de Alma Rockera
  lib/
    prismic.js      Cliente de Prismic CMS
    site.js         Constantes de marca: redes sociales y contacto
  data/             Datos estáticos (ej. portfolio.js)
  hooks/            Hooks reutilizables (useInView)
  styles/           globals.css + tailwind.css
```

### Convenciones
* Importá siempre con alias: `import Layout from "@/components/layout/Layout"`.
* Centralizá datos/constantes en `src/lib` y `src/data`, no los hardcodees en componentes.
* Enlaces internos: `next/link`; enlaces externos: `<a target="_blank" rel="noreferrer">`.

### Scripts
* `npm run dev` — desarrollo
* `npm run build` — build de producción
* `npm run lint` — linter
