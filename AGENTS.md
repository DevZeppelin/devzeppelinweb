# AGENTS.md — DevZeppelin Webs

Guía rápida para trabajar en este repo. Sitio de portfolio/agencia de Gino Pietrobon (Dev Zeppelin), construido con Next.js (Pages Router) + Tailwind CSS. Producción: https://devzeppelin.com.ar (deploy en Vercel).

## Stack y arranque

* Next.js 15 (Pages Router, no App Router), React 19, Tailwind CSS 3.
* `npm run dev` — desarrollo · `npm run build` — build de producción · `npm run lint` — ESLint.
* Sin tests automatizados en el repo.
* Alias `@/` → `src/` (ver `jsconfig.json`). Importá siempre con el alias, no con rutas relativas largas.
* `next.config.js` permite imágenes remotas solo de `**.prismic.io` (el blog usa Prismic CMS).

## No hacer QA visual / navegador sin que se pida explícitamente

Después de un cambio, no levantes `npm run dev`, no abras el navegador ni tomes screenshots "para verificar" — ni en cambios de CSS/UI. Alcanza con que compile/lintee. Razoná el diagnóstico leyendo el código (JSX/Tailwind), no reproduciéndolo en vivo. Solo usar el navegador o levantar el server cuando el usuario lo pida explícitamente en ese mismo mensaje (regla del usuario, ya vale para todos sus proyectos — ver también `~/.claude/CLAUDE.md`).

## Estructura del proyecto

```
src/
  pages/            Rutas (Pages Router). Cada página top-level (webs.js, apps.js, servicios.js,
                     quienesSomos.js, contacto.js, blog.js, almarockera.js, portafolio.js) es una
                     landing con Layout + secciones propias o de SectionWorkComponent.
  components/
    layout/          Chrome del sitio principal: Layout, NavBar (desktop), MobileNavBar, Footer,
                     WhatsappIcon, TopTicker, TopLeyend, TopMainScreen, ProyectLinks(Component).
    ui/              Piezas reutilizables: botones, items, grids.
    home/            Secciones de la home, incluida home/sections/SectionWorkComponent
                     (card con imagen + link externo, usada en webs.js y apps.js).
    portafolio/      Nav, Hero, Stats, Experience, Skills, Contact, Footer del portfolio personal
                     (`pages/portafolio.js`). Usa fuente Poppins vía next/font.
    blog/            Layout/BlogLayout/ArticlePage/CategoryPage/SlugLayout/IconLinksLayout del
                     blog (Prismic).
    escuela/         Layout + Nav de "codeObrero" (sub-sitio educativo de programación).
    alma/            Button, Card, Networks, RenzoFrase de "Alma Rockera" (radio web).
    Seo.js           Componente de meta tags reutilizable (title, description, canonical, OG,
                     Twitter cards, JSON-LD). Ver docstring del archivo para props.
  lib/
    prismic.js       Cliente de Prismic CMS.
    site.js          Constantes de marca: contacto, redes sociales, datos del sitio. Única fuente
                     de verdad — no hardcodear whatsapp/email/redes en componentes.
    seo.js           Helpers puros de SEO y JSON-LD (absoluteUrl, formatDate, breadcrumbJsonLd,
                     blogJsonLd, educationalOrgJsonLd, profilePageJsonLd, etc.), consume site.js.
  data/              Datos estáticos: blogCategories.js (metadatos de categorías/tags de Prismic),
                     portfolio.js (experiencia/skills del portfolio personal).
  hooks/             Hooks reutilizables (useInView, para animaciones "reveal" al hacer scroll).
  styles/            globals.css + tailwind.css
```

Rutas de navegación principal (ver `NavBar.js` / `MobileNavBar.js`): `/`, `/webs`, `/apps`, `/servicios`, `/quienesSomos`, `/contacto`. El blog, "escuela" y "alma" viven en sus propias subcarpetas/páginas y tienen su propio Layout y paleta de colores (ver abajo) — no reusan el chrome de `components/layout/`.

## Sub-sitios dentro del mismo repo

Varias "marcas" conviven en este repo, cada una con su propio Layout y paleta Tailwind:

* **Sitio principal (Dev Zeppelin)** — `pages/index.js`, `webs.js`, `apps.js`, `servicios.js`, `quienesSomos.js`, `contacto.js`. Usa `components/layout/` y los colores `primary/secundary/yellow/gray/...` (paleta "Cyberpunk").
* **Blog / Tecnoticiero** (`pages/blog.js` y `pages/blog/*`) — agregador de noticias/artículos por categoría (dev, rock, river, política, cripto, news, escritos, adriel), usa Prismic como CMS headless vía `src/lib/prismic.js`. Rutas dinámicas bajo `pages/blog/<categoria>/[slug].js`. Colores `*Blog`.
* **codeObrero / Escuela** (`pages/escuela/*`) — sub-sitio educativo gratuito de programación (consejos, primeros pasos, criptomonedas). Layout propio en `components/escuela/`.
* **Alma Rockera** (`pages/almarockera.js`) — radio web con listado/recomendaciones de bandas (array `BANDS` hardcodeado en la propia página). Componentes en `components/alma/`, colores `alma1..4`.
* **Portafolio personal** (`pages/portafolio.js`) — CV/portfolio de Gino Pietrobon, datos en `src/data/portfolio.js`. Colores "legacy" (`green`, `dark`, `bluePF`, etc.).

Al tocar un sub-sitio, usar su Layout y su paleta — no mezclar colores de una marca en otra.

## Las páginas "webs" y "apps" (vitrina de proyectos)

* `src/pages/webs.js` = "Páginas Web de muestra": sitios de clientes (kioscos, catálogos, hoteles, radios, etc.).
* `src/pages/apps.js` = "Web Apps de muestra": apps propias/demos (calculadoras, turnos, juegos, etc.).
* Ambas listan tarjetas `<SectionWorkComponent src="..." title="..." description="..." web="..." />` dentro de un grid.
  * `src` es una imagen en `public/apps/` o `public/responsiveImages/`.
  * `web` es el link externo (se abre en `target="_blank"`).
  * `title` (opcional) es el nombre del proyecto, se muestra destacado arriba de `description`. Si se omite, la card solo muestra `description` (comportamiento previo).
  * `description` es una descripción breve.
* Para agregar un proyecto nuevo: subir el thumbnail a `public/apps/` (o `public/responsiveImages/` para webs) y sumar un `<SectionWorkComponent>` en el archivo correspondiente. El orden de aparición es el orden en el JSX.

## Convenciones

* Enlaces internos: `next/link`. Enlaces externos: `target="_blank" rel="noreferrer"` (así lo hace `SectionWorkComponent`).
* Centralizar datos/constantes de marca en `src/lib/site.js` y `src/data/`, no hardcodear en componentes.
* SEO: cada página debe montar `<Seo />` con `title`, `description` y `path`; agregar JSON-LD relevante usando los helpers de `src/lib/seo.js` en vez de armar el schema a mano.
* No hay apps/sub-sitios de terceros embebidas dentro del repo salvo casos explícitos como "Alma Rockera" (`almarockera.js` + `components/alma/`) y "escuela"/codeObrero (`pages/escuela/`). La app de turistas que vivía en `pages/tourist.js` + `components/tourist/` + `public/tourist/` fue eliminada (2026-07-27): ahora es un proyecto externo enlazado desde `apps.js` (`https://turistapp-kappa.vercel.app/`).

## Cosas a tener en cuenta

* Revisar siempre los links externos que se agregan a mano en `apps.js`/`webs.js`: ya hubo un typo de `https://https://` en un link que rompía la navegación.
* Este repo no tiene tests automatizados; el usuario prueba los cambios visuales él mismo — no correr `npm run dev` ni abrir el navegador salvo pedido explícito (ver arriba).
