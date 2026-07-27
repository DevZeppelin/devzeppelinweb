# AGENTS.md — DevZeppelin Webs

Guía rápida para trabajar en este repo. Sitio de portfolio/agencia de Gino Pietrobon (Dev Zeppelin), construido con Next.js (Pages Router) + Tailwind CSS. Producción: https://devzeppelin.com.ar (deploy en Vercel).

## Stack y arranque

* Next.js 15 (Pages Router, no App Router), React 19, Tailwind CSS 3.
* `npm run dev` — desarrollo · `npm run build` — build de producción · `npm run lint` — ESLint.
* Alias `@/` → `src/` (ver `jsconfig.json`). Importá siempre con el alias, no con rutas relativas largas.
* `next.config.js` permite imágenes remotas solo de `**.prismic.io` (el blog usa Prismic CMS).

## Estructura del proyecto

```
src/
  pages/            Rutas (Pages Router). Cada página top-level (webs.js, apps.js, servicios.js,
                     quienesSomos.js, contacto.js, blog.js, almarockera.js) es una landing con
                     Layout + secciones de SectionWorkComponent o similares.
  components/
    layout/          Chrome del sitio: Layout, NavBar (desktop), MobileNavBar, Footer,
                     WhatsappIcon, TopTicker, TopLeyend, TopMainScreen, ProyectLinks(Component).
    ui/              Piezas reutilizables: botones, items, grids.
    home/            Secciones de la home, incluida home/sections/SectionWorkComponent
                     (card con imagen + link externo usada en webs.js y apps.js).
    portafolio/       Hero, Experience, Skills, etc. del portfolio.
    blog/            Componentes del blog (Prismic).
    escuela/         Componentes de "codeObrero" / escuela (sub-sitio educativo).
    alma/            Componentes de "Alma Rockera" (radio web, sub-sitio propio).
  lib/
    prismic.js       Cliente de Prismic CMS.
    site.js          Constantes de marca: contacto, redes sociales, datos del sitio.
    seo.js           Helpers de SEO.
  data/              Datos estáticos (blogCategories.js, portfolio.js).
  hooks/             Hooks reutilizables (useInView).
  styles/            globals.css + tailwind.css
```

Rutas de navegación principal (ver `NavBar.js` / `MobileNavBar.js`): `/`, `/webs`, `/apps`, `/servicios`, `/quienesSomos`, `/contacto`. El blog y "escuela"/"alma" viven en sus propias subcarpetas de `pages/`.

## Las páginas "webs" y "apps" (vitrina de proyectos)

* `src/pages/webs.js` = "Páginas Web de muestra": sitios de clientes (kioscos, catálogos, hoteles, radios, etc.).
* `src/pages/apps.js` = "Web Apps de muestra": apps propias/demos (calculadoras, turnos, juegos, etc.).
* Ambas listan tarjetas con `<SectionWorkComponent src="..." description="..." web="..." />` dentro de un grid. `src` es una imagen en `public/apps/` o `public/responsiveImages/`, `web` es el link externo (se abre en `target="_blank"`).
* Para agregar un proyecto nuevo: agregar la imagen thumbnail en `public/apps/` (o `public/responsiveImages/` para webs) y sumar un `<SectionWorkComponent>` en el archivo correspondiente. El orden de aparición es el orden en el JSX.
* **Pendiente**: la card "juego RPG medieval crónico" (link `https://wolfwarrior.vercel.app/`) referencia `public/apps/wolfwarrior.png`, que todavía no existe — falta subir ese thumbnail.

## Convenciones

* Enlaces internos: `next/link`. Enlaces externos: `target="_blank" rel="noreferrer"` (así lo hace `SectionWorkComponent`).
* Centralizar datos/constantes de marca en `src/lib/site.js` y `src/data/`, no hardcodear en componentes.
* No hay apps/sub-sitios de terceros embebidas dentro del repo salvo casos explícitos como "Alma Rockera" (`almarockera.js` + `components/alma/`) y "escuela"/codeObrero (`pages/escuela/`). La app de turistas que vivía en `pages/tourist.js` + `components/tourist/` + `public/tourist/` fue eliminada (2026-07-27): ahora es un proyecto externo enlazado desde `apps.js` (`https://turistapp-kappa.vercel.app/`).
* El blog usa Prismic como CMS headless (`src/lib/prismic.js`); las rutas dinámicas del blog están bajo `pages/blog/<categoria>/[slug].js`.

## Cosas a tener en cuenta

* Revisar siempre los links externos que se agregan a mano en `apps.js`/`webs.js`: ya hubo un typo de `https://https://` en un link que rompía la navegación.
* Este repo no tiene tests automatizados; validar cambios visuales corriendo `npm run dev` y mirando la página afectada en el navegador.
