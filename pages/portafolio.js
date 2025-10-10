import Link from "next/link";
import Head from "next/head";
import Card from "../components/portafolio/Card";
import { GinoWorks } from "../src/helper-portafolio/helper";
import Title from "../components/portafolio/Title";
import Button from "../components/portafolio/Button";
import Networks from "../components/portafolio/Networks";
import Introduction from "../components/portafolio/Introduction";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Portfolio Gino</title>
        <meta
          name="description"
          content="Gino Pietrobon (moonwatcher.dev) portfolio, programación, blog, tecnología, javascript, react"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <span>
          <Networks />
          <Link href="/" passHref>
            <div className="text-center font-bold text-primaryBlog cursor-pointer">
              {" "}
              Volver span DevZeppelin.com.ar
            </div>
          </Link>
        </span>
        <div className="text-center m-6 mt-24">
          <h1 className="text-6xl font-extrabold text-dark pb-12">
            Portafolio De Gino
          </h1>

          <div className="flex flex-col mx-0 space-y-6">
            <span
              href="https://github.com/DevZeppelin/devzeppelin"
              rel="noreferrer"
              target="_blank"
            >
              <Button text="Link span mi Github" />
            </span>
            <span href="#works">
              <Button text="Mis trabajos realizados" />
            </span>
          </div>
        </div>

        <Introduction />

        <div className="p-12 text-center mt-32  text-white bg-gradient-to-tr from-green to-dark">
          <h3 className="text-2xl font-bold">
            ¡Te invito span conocer mis trabajos y proyectos realizados!
          </h3>
          <span href="#works">
            <p className="text-3xl mt-6">🔽</p>
          </span>
        </div>

        <div className="text-center mt-24" id="works">
          <Title name="Aplicaciones Web" />
          <div className="grid grid-cols-1 md:grid-cols-4 mx-2 md:mx-8">
            {GinoWorks.apps.map((app) => (
              <Card
                key={app.name}
                name={app.name}
                src={app.src}
                alt={app.alt}
                text={app.text}
                code={app.code}
                url={app.url}
              />
            ))}
          </div>

          <Title name="Páginas web para empresas" />
          <div className="grid grid-cols-1 md:grid-cols-4 mx-2 md:mx-8">
            {GinoWorks.empresas.map((empresa) => (
              <Card
                key={empresa.name}
                name={empresa.name}
                src={empresa.src}
                alt={empresa.alt}
                text={empresa.text}
                code={empresa.code}
                url={empresa.url}
              />
            ))}
          </div>

          <Title name="Proyectos personales" />
          <div className="grid grid-cols-1 md:grid-cols-4 mx-2 md:mx-8">
            {GinoWorks.proyectos.map((proyecto) => (
              <Card
                key={proyecto.name}
                name={proyecto.name}
                src={proyecto.src}
                alt={proyecto.alt}
                text={proyecto.text}
                code={proyecto.code}
                url={proyecto.url}
              />
            ))}
          </div>

          <Title name="Mis primeros proyectos + antiguos" />
          <div className="grid grid-cols-1 md:grid-cols-4 mx-2 md:mx-8">
            {GinoWorks.proyectosOld.map((proyecto) => (
              <Card
                key={proyecto.name}
                name={proyecto.name}
                src={proyecto.src}
                alt={proyecto.alt}
                text={proyecto.text}
                code={proyecto.code}
                url={proyecto.url}
              />
            ))}
          </div>
        </div>
      </main>

      <div className="m-12 text-center mt-32 text-dark">
        <h3 className="text-2xl font-bold">
          ¡Gracias por recorrer mis trabajos! Para cualquier tipo de consulta no
          dudes en escribirme 😊
        </h3>
        <Networks />
      </div>

      <footer className="text-center bg-dark text-white mt-12">
        <span
          href="https://devzeppelin.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Moonwatcher 🐵
        </span>
      </footer>

      <style global jsx>{`
        html {
          background-image: -webkit-linear-gradient(
            top left,

            #16c79a 0%,
            #f8f1f1 6%,
            #f8f1f1 92%,
            #11698e 100%
          );
          scroll-behavior: smooth;
        }

        body {
          padding: 0;
          margin: 0;
          font-family: Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        h2 {
          font-family: "Staatliches", cursive;
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
