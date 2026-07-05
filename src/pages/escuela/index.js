/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/escuela/Layout";
import Link from "next/link";
import Seo from "@/components/Seo";
import { useInView } from "@/hooks/useInView";
import { educationalOrgJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export default function Index() {
  const [headerRef, headerVisible] = useInView(0.1);

  return (
    <Layout
      ID="main-index"
      MainTitle=""
      Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
    >
      <Seo
        title="codeObrero | Escuela gratuita de programación para principiantes"
        description="codeObrero: consejos, recomendaciones y guía gratuita en español para dar tus primeros pasos en el mundo de la programación. Por Gino Pietrobon (DevZeppelin)."
        path="/escuela"
        image="/escuela/logo.webp"
        jsonLd={[
          educationalOrgJsonLd(),
          breadcrumbJsonLd([{ name: "Escuela", path: "/escuela" }]),
        ]}
      />
      <header
        ref={headerRef}
        className={`reveal from-bottom ${headerVisible ? "visible" : ""}`}
      >
        <h1 className="mainTitle">codeObrero</h1>
        <h4>by Gino Pietrobon</h4>

        <a href="#index">
          <button className="buttonSchool">¿De qué se trata esto?</button>
        </a>
      </header>

      <div className="container index" id="index">
        <img
          className="icon"
          src="/escuela/robot.webp"
          alt="Ícono retro de un robot"
        />
        <p>
          <strong>codeObrero</strong> es un lugar creado para todos aquellos que
          están comenzando en el mundo de la programación.
        </p>
        <p>
          Aca encontrarás consejos, recomendaciones, ideas, y un poco de
          compañía para que tus primeros pasos en el mundo <i>dev</i> sean
          firmes y hacia adelante.
        </p>
        <p>La pregunta del millón es...</p>
        <h2>¿Realmente querés ser programador?</h2>
        <p>
          Si tu respuesta es <strong>SI</strong> y si realmente lo deseas, un
          mundo mágico de oportunidades espera por vos. Dejame ayudarte a{" "}
          <i>comenzar este camino</i> infinito.
        </p>
        <img
          className="icon"
          src="/escuela/dinosaurio.webp"
          alt="Ícono retro de un dinosaurio"
        />

        <p>
          Cuando quise comenzar a estudiar <strong>programación</strong> me
          sentí abrumado y desconcertado por tanta información. Me estanqué y
          sentía que necesitaba <i>algo o alguien</i> que me ayudara y
          acompañara en mis primeros pasos.
        </p>
        <p>
          Al tiempo, una pequeña charla con un <i>developer</i> me sacó del
          agua. Sus palabras y consejos fueron tan valiosas para mí que hoy me
          hacen crear este proyecto.
        </p>

        <p>
          Estoy seguro de poder ayudarte en este <b>primer pasito</b>. Una vez
          que te decidas que quieres ser programador, mil puertas se abrirán y tu
          vida cambiará, porque una llama interior te hará querer
          <i>saber y aprender</i> cosas nuevas cada día.
        </p>
        <img
          className="icon"
          src="/escuela/videojuego.webp"
          alt="Ícono retro de una consola de videojuegos"
        />
        <p>
          Quiero ser ese amigo que te dió un valioso consejo y unas palabras de
          guía. Si realmente esto es lo que querés y te gustaría ser
          programador, quiero generar esa <b>chispa</b> que dé arranque a ese
          tren hacia un futuro profesional y competitivo.
        </p>
        <p>
          <b>Requisito principal:</b>{" "}
        </p>
        <p>
          Nunca dejar de aprender, no estancarse y conformarse con el
          conocimiento obtenido. En el mundo tecnológico todo cambia muy rápido
          y hay que estar preparados para surfear las olas del cambio. El
          objetivo es adquirir bases sólidas que nos ayudarán a tomar buenas
          decisiones.
        </p>

        <Link href="/escuela/primeros-pasos-dev" passHref>
          <button className="buttonSchool">
            Primeros pasos del futuro programador
          </button>
        </Link>
      </div>
      <style jsx>{`
        * {
          text-align: center;
        }

        h2 {
          padding-top: 2em;
        }

        header {
          display: flex;
          flex-direction: column;
          margin-bottom: 4em;
          text-align: center;
          z-index: 100;
        }

        header button {
          font-size: 1em;
          margin-bottom: 6em;
        }

        .mainTitle {
          font-size: 3.4em;
          margin-top: 1.2em;
        }

        @media screen and (max-width: 700px) {
          .mainTitle {
            font-size: 2.6em;
          }

          h4 {
            font-size: 1.1em;
          }
        }
      `}</style>
    </Layout>
  );
}
