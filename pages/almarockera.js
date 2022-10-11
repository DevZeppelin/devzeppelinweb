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
              Volver a DevZeppelin.ar
            </div>
          </Link>
        </span>
        <div className="text-center m-6 mt-24">
          <h1 className="text-4xl md:text-6xl font-extrabold pb-12">AlmaRockera 100%</h1>
          
        </div>

        <div className="p-12 text-center mt-32  text-white bg-black to-dark">
          <h3 className="text-2xl font-bold">
            ¿Estás listo para andar el sendero del rock?
          </h3>
        </div>
        <div className="flex justify-center mx-16 space-x-3 font-bold orange uppercase">
          <a href="#radio">Radio</a>
          <a href="#articulos">Artículos</a>{" "}
          <a href="#renzo">RenzoFrases</a>
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

      <section id="sponsors">
        <h3 className="text-3xl m-8  mt-24 text-center font-extrabold text-black pb-12">
          Sponsors
          <div className="grid md:grid-cols-3 mx-16">
            <img className="my-auto m-4 p-4" src="/alma/lmdtp.png" />
            <img className="my-auto m-4 p-4" src="/alma/suena.png" />
            <img className="my-auto m-4 p-4" src="/alma/andamio.png" />
            
            
          </div>
        </h3>

      </section>

      <section id="articulos" className="mx-10 text-center">
        <h3 className="text-3xl m-8 text-center font-extrabold text-black">
          Enlaces a nuestra Facebook Page
        </h3>
        <div className="grid md:grid-cols-3 gap-3">
          <Card
            name="Simplemente Luca"
            text="Entrevista exclusiva a Luca Prodan en VH1"
            src="/alma/luca.png"
            url="https://www.facebook.com/almarockera100/posts/pfbid02ji8d1dsR7ArhWQjzobEbpWtkApmFava3ZNLh7QV5WP8eNiYtMvEkdodpceDnCNppl"
          />
          <Card
            name="Diez enojos del Indio"
            text="¡Se puso bravo el Pelado!"
            src="/alma/indio.png"
            url="https://www.facebook.com/almarockera100/posts/pfbid0UcACSVgPvbrzAxGXVmS3RCYjJ3z47DCaqjyVi7xBmgdcY9cZg5qbWh1EsjnGk6PEl"
          />
          <Card
            name="El tema que quedó afuera"
            text="Este tema quedó afuera del último disco de Los Redondos: Momo Sampler (2000). Una joyita que hoy ve la luz..."
            src="/alma/momo.png"
            url="https://www.facebook.com/almarockera100/posts/pfbid04B3mjSbjZUrxHwm4Sp7JpJTCmRbsqTPaJdWKRviurAd6nuL54vChogVVBt3dBv6ol"
          />
          <Card
            name="Pity Fernandez y el Tachero"
            text="Gracias señor tachero, gracias señor Piti, gracias señor D10s, ¡gracias señor 10! "
            src="/alma/piti.png"
            url="https://www.facebook.com/almarockera100/posts/pfbid02azvgA6TzUAeg1UHmk1UQgVKur9bHsfAHeJbLAdCmp4385EKLEXGB3r3Vysgtwd51l"
          />
          <Card
            name="Tremenda Versión"
            text="Soy Quién No ha de Morir - Romaphonic"
            src="/alma/morir.png"
            url="https://www.facebook.com/almarockera100/posts/pfbid0EJVMqbKTG8EVQ5tGCbArfv4LuWsEbEKWUwsD433TLznzFXWGR5n68edCbGzUHzmKl"
          />
          <Card
            name="Padre e Hijo"
            text="Korneta Suárez y Eli a Dúo (Los Gardelitos)"
            src="/alma/gardelitos.png"
            url="https://www.facebook.com/almarockera100/posts/pfbid02qtLn3d3HzmfouUr4asT5i1enrNUKATkbxJbM5fjwvFNZdmg8fdDUWRwz3t6RyNByl"
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
        <a
          href="https://devzeppelin.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Moonwatcher 🐵
        </a>
      </footer>
      
      <Footer/>

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
