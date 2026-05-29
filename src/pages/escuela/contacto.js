/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/escuela/Layout";

export default function Contacto() {
  return (
    <Layout
      MainTitle="Contacto"
      Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
    >
      <div className="container">
        <img
          className="icon"
          src="/escuela/videojuego.webp"
          alt="videojuego png"
        />
        <div className="contacto-main">
          <h2>
            <span href="mailto:gino.b.pietrobon@gmail.com">
              ¡Click AQUÍ para mandarme un mail!
            </span>
          </h2>

          <div className="contactNetworks">
            <span
              href="https://api.whatsapp.com/send?phone=5492616708100"
              target="_blank" rel="noreferrer"
            >
              <img src="..//escuela/social/whatsapp.webp" alt="whatsapp logo" />
            </span>
            <p>•</p>
            <span href="http://facebook.com/gini77o" target="_blank" rel="noreferrer">
              <img src="..//escuela/social/facebook.webp" alt="facebook logo" />
            </span>
            <p>•</p>
            <span href="http://instagram.com/moonwatcher73" target="_blank" rel="noreferrer">
              <img src="..//escuela/social/instagram.webp" alt="instagram logo" />
            </span>
            <p>•</p>
            <span href="http://twitter.com/moonwatcher73" target="_blank" rel="noreferrer">
              <img src="..//escuela/social/twitter.webp" alt="twitter logo" />
            </span>
            <p>•</p>
            <span href="http://github.com/devzeppelin" target="_blank" rel="noreferrer">
              <img src="..//escuela/social/github.webp" alt="github logo" />
            </span>
            <p>•</p>
            <span href="https://www.linkedin.com/in/gino-pietrobon/" target="_blank" rel="noreferrer">
              <img src="..//escuela/social/linkedin.webp" alt="linkedin logo" />
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contacto-main {
          text-align: center;
        }

        .contactNetworks {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-bottom: 2em;
          flex-wrap: wrap;          
        }

        .contacto span {
          font-size: 1.2em;
          margin-top: 0.2em;
          margin-bottom: 1em;
        }

        h2 {
          margin-top: 1em;
          margin-bottom: 1em;
          font-size: 1.5rem
        }

        span>img {
          width: 64px;
          height: 64px; 
        }

        @media(max-width: 750px){
          
        span>img {
          width: 36px;
          height: 36px;          
        }

        }

      `}</style>
    </Layout>
  );
}
