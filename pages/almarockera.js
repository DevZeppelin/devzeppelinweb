import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Networks from "../components/alma/Networks";
import RenzoFrase from "../components/alma/RenzoFrase";
import Card from "../components/alma/Card";
import Footer from "../components/Footer";

// 1) Llevar los datos a una estructura que podamos filtrar fácilmente
//tallando, maldita suerte, heroicos sobrevivientes
//agregar categoria, como super under, under, conocidos, estrellas, algo asi
const BANDS = [
  {
    name: "Maldita Suerte",
    recomienda: "adriel",
    categoria: "conocidos",
    local: "Buenos Aires",
    text: "Banda de mataderos. Suenan como los hijos oficiales de La Renga.",
    src: "/alma/maldita.png",
    url: "https://www.youtube.com/watch?v=HJ8qv2gnAjI",
  }, {
    name: "Tallando el elefante",
    recomienda: "javi (general)",
    categoria: "conocidos",

    local: "Buenos Aires",
    src: "/alma/tallando.png",
    url: "https://www.youtube.com/watch?v=A5C5-VsHZwk&list=PL2r6j3Ysf-6iz8tDPm1FXbqDl4v0U-FEf&index=12",
  }, {
    name: "Guillermina",
    recomienda: "adriel",
    categoria: "conocidos",

    local: "Buenos Aires",
    src: "/alma/guillermina.png",
    url: "https://www.youtube.com/watch?v=jMGEwWuz0CM",
  },
  {
    name: "Joistick",
    recomienda: "genaro",
    categoria: "under",

    local: "Rosario",
    src: "/alma/joistick.png",
    url: "https://www.youtube.com/@elandamio7525",
  },
  {
    name: "El Andamio",
    recomienda: "adriel",
    categoria: "muy under",

    local: "Mendoza",
    text: "Banda local mendocina de jovenes estudiantes manufactuando Rock",
    src: "/alma/andamio.png",
    url: "https://www.youtube.com/watch?v=X_PqP4muRos&list=RDX_PqP4muRos&start_radio=1",
  },

  {
    name: "Arido",
    recomienda: "adriel",
    categoria: "muy under",

    local: "Mendoza",
    text:
      "Banda de Maetal muy potente, si uno no sabe que es mendocina diría que es una banda internacional. El cantante y líder tristemente falleció.",
    src: "/alma/arido.png",
    url: "https://www.youtube.com/watch?v=kzoy0808YF4&list=RDkzoy0808YF4&start_radio=1",
  },
  {
    name: "Chantas",
    categoria: "under",

    recomienda: "gino",

    local: "Mendoza",
    text:
      "Banda activa, rocanrolera y popular. Con más de 20 años desde su fundación, hoy se encuentran tocando mucho y movilizando a sus seguidores.",
    src: "/alma/chantas.png",
    url: "https://youtu.be/_DuSYXKUuXk?si=yVcM75VVsQvqXkZQ",
  },
  {
    name: "Nagual",
    recomienda: "gino",
    categoria: "conocidos",

    local: "Buenos Aires",
    text:
      "Banda emergente de rock poderoso, buenas letras y con un público que cada vez se expande más.",
    src: "/alma/nagual.png",
    url: "https://youtu.be/STqO1sEvMfU?si=pJwpzrGtpe4uEVs4",
  },
  {
    name: "La chancha muda",
    categoria: "conocidos",

    recomienda: "gino",

    local: "Buenos Aires",
    text:
      "La Chancha Muda se formó en ''Parque Chacabuco' a inicios del 2000. 'Somos un grupo de amigos que ama hacer música, una banda de locos hermandados', dice el batero.",
    src: "/alma/lachancha.png",
    url: "https://www.youtube.com/watch?v=QyBMBotKKSw&list=PLjdp01j6sK4gxLMYsaYxuAltWaaZ1sr7d",
  },
  {
    name: "La Máquina del Tío Pedro",
    recomienda: "adriel",
    categoria: "de galpon",


    local: "Mendoza",
    text:
      "Rock de galpón. Solo una vez tocaron en un bar. Mal sonido en sus temas. Mucho cariño de su comunidad.",
    src: "/alma/lmdtp.png",
    url: "https://www.youtube.com/watch?v=LaBBheQH8hs&list=RDLaBBheQH8hs&start_radio=1&pp=ygUYbGEgbWFxdWluYSBkbGUgdGlvIHBlZHJvoAcB",
  },
];

export default function Home() {
  // ====== Helpers ======
  const norm = (v) => (v ?? "").toString().trim();
  const eqi = (a, b) => norm(a).toLowerCase() === norm(b).toLowerCase();

  // ====== Estados de filtros ======
  const [selectedLocal, setSelectedLocal] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [selectedRecomienda, setSelectedRecomienda] = useState("");

  // ====== Opciones únicas ======
  const locals = useMemo(() => {
    const set = new Set(BANDS.map((b) => norm(b.local)).filter(Boolean));
    return ["", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  const categorias = useMemo(() => {
    const set = new Set(BANDS.map((b) => norm(b.categoria)).filter(Boolean));
    return ["", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  // Recomendaciones: usamos el valor literal del campo "recomienda" (p.ej. "Sí", "No", "true", "Destacada", etc.)
  const recomendaciones = useMemo(() => {
    const set = new Set(BANDS.map((b) => norm(b.recomienda)).filter(Boolean));
    return ["", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  // ====== Filtrado ======
  const filtered = useMemo(() => {
    return BANDS.filter((b) => {
      const matchLocal =
        !selectedLocal || eqi(b.local, selectedLocal);

      const matchCategoria =
        !selectedCategoria || eqi(b.categoria, selectedCategoria);

      const matchRecomienda =
        !selectedRecomienda || eqi(b.recomienda, selectedRecomienda);

      return matchLocal && matchCategoria && matchRecomienda;
    });
  }, [selectedLocal, selectedCategoria, selectedRecomienda]);

  // ====== UI ======
  const Chip = ({ active, onClick, children }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full border transition-all text-sm ${active
        ? "bg-white text-black border-white"
        : "bg-transparent text-white border-white/30 hover:border-white"
        }`}
      aria-pressed={active}
    >
      {children}
    </button>
  );

  const resetFilters = () => {
    setSelectedLocal("");
    setSelectedCategoria("");
    setSelectedRecomienda("");
  };

  const NavBar = () => (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="hidden md:block text-white font-extrabold tracking-wide">El Rock, vos y yo.</span>
        </Link>
        <div className="flex items-center gap-6 text-orange-500 uppercase text-sm font-bold">
          <Link href="#radio" className="hover:text-white">Radio</Link>
          <Link href="#rockomendadas" className="hover:text-white">Rockomendaciones</Link>
          <Link href="#renzo" className="hover:text-white">RenzoFrases</Link>
        </div>
      </div>
    </nav>
  );

  return (
    <div>
      <Head>
        <title>Alma Rockera 100%</title>
        <meta
          name="description"
          content="Almarockera 100, radio, rock, renzo frases, radio rockera, led zeppelin, creedence, la renga, diversion, juegos, programacion"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="max-w-6xl mx-auto">
        <div className="flex flex-col text-center m-4 mt-12">
          <Image
            src="/alma/logo.png"
            width={400}
            height={400}
            className="mx-auto"
            alt="Logo Alma Rockera"
          />
        </div>

        <div className="p-12 text-center mt-16 text-white bg-black rounded-2xl mx-4">
          <h3 className="text-2xl font-bold">¿Estás listo para andar el sendero del rock?</h3>
        </div>
      </main>

      <section id="radio" className="pb-16 max-w-6xl mx-auto">
        <h3 className="text-3xl m-8 mt-24 text-center font-extrabold text-black">Radio</h3>
        <div className="mx-2 md:mx-16">
          <h2 className="text-center text-2xl">Undinamo Rock</h2>
          <iframe
            className="w-72 md:w-96 text-center flex mx-auto rounded-2xl"
            id="ee01236ae"
            src="https://streamingradioplayer.inovanex.com/s#/player-1#tema=5b9c07b2a2892d736b3871f9&amp;id=ee01236ae&amp;c=915ea9be2ec0f2d05b64bb43e1bab1f9e2beb1919ee1a678a9270c09c495730a&amp;d=25a10fb2598a2ca6e8dc1de5b31304eaebced465a2eb1d5c28069b748b152c471b66854e3553162b71295a26fba94bb6752c42a504b70026615f3cb245193093dfb9b3dd026cf7e4949c01f95713ab3aa3c9896d1228275c4922bf672125d5b84a2b626654328493c8277320b0ff8cec89c44a78b3925b86a257b075059b6a24293a7ab9becf75647a898dbbd9ab2969f000320aee7a1cb72804a688a1b8bd525d71d75a78f3460c26574c93aaee4ed6c0dc42391130ca2ce382de3370642ec8cdf266fc147bdc736864d1d9e29edc756bb9283908225651fe67c41b525f5526d5c97c9a217d1c52464376799f5f336b5a7eb4372dc09b62fea2aedf71b5755814c9ca61cdcdcf45db29d47ca2da4a91f8c4eb33cc6367ba34f408b6ab58ff57"
          />
        </div>
      </section>

      <section id="rockomendadas" className="max-w-6xl mx-auto">
        <h3 className="text-3xl m-8 mt-24 text-center font-extrabold text-black pb-6">
          Rockomendaciones
        </h3>

        {/* Barra de filtros */}
        <div className="mx-4 md:mx-0 mb-8">
          <div className="bg-black text-white rounded-2xl p-4 flex flex-col gap-6">
            {/* FILTRO LOCAL */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="font-bold text-lg">Filtrar por local</div>
              <div className="flex items-center gap-3 flex-wrap">
                <label className="text-sm opacity-80" htmlFor="local-select">Localidad:</label>
                <select
                  id="local-select"
                  className="text-black rounded-xl px-3 py-2"
                  value={selectedLocal}
                  onChange={(e) => setSelectedLocal(e.target.value)}
                >
                  {locals.map((loc) => (
                    <option key={`loc-${loc || "todos"}`} value={loc}>
                      {loc || "Todos"}
                    </option>
                  ))}
                </select>

                <div className="flex gap-2 flex-wrap">
                  {locals.map((loc) => (
                    <Chip
                      key={`chip-local-${loc || "todos"}`}
                      active={selectedLocal === loc}
                      onClick={() => setSelectedLocal(loc)}
                    >
                      {loc || "Todos"}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>

            {/* FILTRO CATEGORÍA */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="font-bold text-lg">Filtrar por categoría</div>
              <div className="flex items-center gap-3 flex-wrap">
                <label className="text-sm opacity-80" htmlFor="categoria-select">Categoría:</label>
                <select
                  id="categoria-select"
                  className="text-black rounded-xl px-3 py-2"
                  value={selectedCategoria}
                  onChange={(e) => setSelectedCategoria(e.target.value)}
                >
                  {categorias.map((c) => (
                    <option key={`cat-${c || "todas"}`} value={c}>
                      {c || "Todas"}
                    </option>
                  ))}
                </select>

                <div className="flex gap-2 flex-wrap">
                  {categorias.map((c) => (
                    <Chip
                      key={`chip-cat-${c || "todas"}`}
                      active={selectedCategoria === c}
                      onClick={() => setSelectedCategoria(c)}
                    >
                      {c || "Todas"}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>

            {/* FILTRO RECOMIENDA */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="font-bold text-lg">Filtrar por recomendado</div>
              <div className="flex items-center gap-3 flex-wrap">
                <label className="text-sm opacity-80" htmlFor="recomienda-select">Recomienda:</label>
                <select
                  id="recomienda-select"
                  className="text-black rounded-xl px-3 py-2"
                  value={selectedRecomienda}
                  onChange={(e) => setSelectedRecomienda(e.target.value)}
                >
                  {recomendaciones.map((r) => (
                    <option key={`rec-${r || "todos"}`} value={r}>
                      {r || "Todos"}
                    </option>
                  ))}
                </select>

                <div className="flex gap-2 flex-wrap">
                  {recomendaciones.map((r) => (
                    <Chip
                      key={`chip-rec-${r || "todos"}`}
                      active={selectedRecomienda === r}
                      onClick={() => setSelectedRecomienda(r)}
                    >
                      {r || "Todos"}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>

            {/* Reset */}
            <div className="flex justify-end">
              <button
                onClick={resetFilters}
                className="px-4 py-2 rounded-xl border border-white/30 hover:border-white transition"
                title="Borrar filtros"
              >
                Limpiar filtros
              </button>
            </div>
          </div>
        </div>

        {/* Grilla */}
        <div className="grid md:grid-cols-3 mx-4 md:mx-0 gap-6">
          {filtered.map((band) => (
            <Card
              key={`${norm(band.name)}-${norm(band.local)}-${norm(band.categoria)}-${norm(band.recomienda)}`}
              name={band.name}
              local={band.local}
              text={band.text}
              src={band.src}
              url={band.url}
              recomienda={band.recomienda}
              categoria={band.categoria}
            />
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center bg-white rounded-2xl p-8">
              <p className="text-black">No hay resultados con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </section>

      <section id="renzo" className="max-w-6xl mx-auto">
        <h3 className="text-3xl m-8 mt-16 text-center font-extrabold text-black">Renzo Frases</h3>
        <RenzoFrase />
      </section>

      <div className="m-12 text-center mt-16 bg-black p-4 rounded-3xl max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold ">¡Contactanos! 🤘🤘🤘</h3>
        <Networks />
      </div>

      <footer className="text-center bg-black text-orange-500 mt-12">
        <span href="https://devzeppelin.com.ar" target="_blank" rel="noopener noreferrer">
          Powered by Moonwatcher 🐵
        </span>
      </footer>

      <Footer />

      <style global jsx>{`
        html {
          background-image: -webkit-linear-gradient(
            top,
            #000 0%,
            #ff4301 50%,
            #e45826 100%
          );
          scroll-behavior: smooth;
        }
        .orange,
        h1,
        h2,
        h3 {
          color: #ff4301;
        }
        body {
          padding: 0;
          margin: 0;
          font-family: Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}