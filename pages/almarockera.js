import Link from "next/link";
import Head from "next/head";
import Networks from "../components/alma/Networks";
import RenzoFrase from "../components/alma/RenzoFrase";
import Card from "../components/alma/Card";
import Footer from "../components/Footer"


export default function Home() {
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

      <main>
        <span>
          <Networks />
          <Link href="/" passHref>
            <div className="text-center font-bold orange cursor-pointer">
              {" "}
              Volver span DevZeppelin.com.ar
            </div>
          </Link>
        </span>
        <div className="text-center m-6 mt-24">
          <h1 className="text-4xl md:text-6xl font-extrabold pb-12">
            AlmaRockera 100%
          </h1>
        </div>

        <div className="p-12 text-center mt-32  text-white bg-black to-dark">
          <h3 className="text-2xl font-bold">
            ¿Estás listo para andar el sendero del rock?
          </h3>
        </div>
        <div className="flex justify-center mx-16 space-x-3 font-bold orange uppercase">
          <Link href="#radio">Radio</Link>
          <Link href="#rockomendadas">Rock o Mendadas</Link>
          <Link href="#renzo">RenzoFrases</Link>
        </div>
      </main>

      <section id="radio" className="pb-16">
        <h3 className="text-3xl m-8  mt-24 text-center font-extrabold text-black">
          Radio
        </h3>
        {/* <div className="text-center p-16 m-16 bg-white border-2 rounded-3xl">
          <p className="text-2xl font-bold">
            🔧🔨🛠⚙ Estamos trabajando en ello 🔧🔨🛠⚙
          </p>
        </div> */}
        <div className="mx-2 md:mx-16">
          <h2 className="text-center text-2xl">Undinamo Rock</h2>
          <iframe
            className="w-72 md:w-96 text-center flex mx-auto rounded-2xl"
            id="ee01236ae"
            src="https://streamingradioplayer.inovanex.com/s#/player-1#tema=5b9c07b2a2892d736b3871f9&amp;id=ee01236ae&amp;c=915ea9be2ec0f2d05b64bb43e1bab1f9e2beb1919ee1a678a9270c09c495730a&amp;d=25a10fb2598a2ca6e8dc1de5b31304eaebced465a2eb1d5c28069b748b152c471b66854e3553162b71295a26fba94bb6752c42a504b70026615f3cb245193093dfb9b3dd026cf7e4949c01f95713ab3aa3c9896d1228275c4922bf672125d5b84a2b626654328493c8277320b0ff8cec89c44a78b3925b86a257b075059b6a24293a7ab9becf75647a898dbbd9ab2969f000320aee7a1cb72804a688a1b8bd525d71d75a78f3460c26574c93aaee4ed6c0dc42391130ca2ce382de3370642ec8cdf266fc147bdc736864d1d9e29edc756bb9283908225651fe67c41b525f5526d5c97c9a217d1c52464376799f5f336b5a7eb4372dc09b62fea2aedf71b5755814c9ca61cdcdcf45db29d47ca2da4a91f8c4eb33cc6367ba34f408b6ab58ff57"
          ></iframe>
        </div>
      </section>

      <section id="rockomendadas">
        <h3 className="text-3xl m-8  mt-24 text-center font-extrabold text-black pb-12">
          ROCK o Mendados!
        </h3>
        <div className="grid md:grid-cols-3 mx-16">

          <Card
            name="El Andamio"
            local="Mendoza"
            text="Banda local mendocina de jovenes estudiantes manufactuando Rock"
            src="/alma/andamio.png"
            url="https://www.youtube.com/@elandamio7525"
          />
          <Card
            name="Arido"
            local="Mendoza"
            text="Banda de Maetal muy potente, si uno no sabe que es mendocina diría que es una banda internacional. El cantante y líder tristemente falleció."
            src="/alma/arido.png"
            url="https://www.youtube.com/watch?v=kzoy0808YF4&list=RDkzoy0808YF4&start_radio=1"
          />
          <Card
            name="Chantas"
            local="Mendoza"
            text="Banda activa, rocanrolera y popular. Con más de 20 años desde su fundación, hoy se encuentran tocando mucho y movilizando span sus seguidores."
            src="/alma/chantas.png"
            url="https://youtu.be/_DuSYXKUuXk?si=yVcM75VVsQvqXkZQ"
          />
          <Card
            name="Nagual"
            local="Buenos Aires"
            text="Banda emergente de rock poderoso, buenas letras y con un público que cada vez se expande más."
            src="/alma/nagual.png"
            url="https://youtu.be/STqO1sEvMfU?si=pJwpzrGtpe4uEVs4"
          />
          <Card
            name="La chancha muda"
            local="Buenos Aires"
            text="La Chancha Muda se formó en ''Parque Chacabuco' , un barrio porteño en Argentina, span inicios de la década del 2000. 'Somos un grupo de amigos que ama hacer música, una banda de locos hermandados', dice Diego Chiaradía, quien lleva el ritmo de las canciones en la batería."
            src="/alma/lachancha.png"
            url="https://www.youtube.com/watch?v=QyBMBotKKSw&list=PLjdp01j6sK4gxLMYsaYxuAltWaaZ1sr7d"
          />
          <Card
            name="La Máquina del Tío Pedro"
            local="Mendoza"
            text="Rock de galpón. Solo una vez tocaron en un bar. Mal sonido en sus temas. Mucho cariño de su comunidad."
            src="/alma/lmdtp.png"
            url="https://www.youtube.com/watch?v=LaBBheQH8hs&list=RDLaBBheQH8hs&start_radio=1&pp=ygUYbGEgbWFxdWluYSBkbGUgdGlvIHBlZHJvoAcB"
          />

        </div>
      </section>
      <section id="renzo">
        <h3 className="text-3xl m-8 mt-16 text-center font-extrabold text-black">
          Renzo Frases
        </h3>
        <RenzoFrase />
      </section>

      <div className="m-12 text-center mt-16 bg-black p-4 rounded-3xl">
        <h3 className="text-2xl font-bold ">¡Contactanos! 🤘🤘🤘</h3>
        <Networks />
      </div>

      <footer className="text-center bg-black text-orange-500 mt-12">
        <span
          href="https://devzeppelin.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
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

        span {
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
