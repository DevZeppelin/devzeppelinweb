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
         <a href="mailto:gino.b.pietrobon@gmail.com">
              ¡Click AQUÍ para mandarme un mail!
            </a>
          </h2>
          
          <div className="contactNetworks">
            <a
              href="https://api.whatsapp.com/send?phone=5492616708100"
              target="_blank" rel="noreferrer"
            >
              <img src="..//escuela/social/whatsapp.webp" alt="whatsapp logo"/>
            </a>
            <p>•</p>
            <a href="http://facebook.com/gini77o" target="_blank" rel="noreferrer">
            <img src="..//escuela/social/facebook.webp" alt="facebook logo"/>
            </a>
            <p>•</p>
            <a href="http://instagram.com/moonwatcher73" target="_blank" rel="noreferrer">
            <img src="..//escuela/social/instagram.webp" alt="instagram logo"/>
            </a>
            <p>•</p>
            <a href="http://twitter.com/moonwatcher73" target="_blank" rel="noreferrer">
            <img src="..//escuela/social/twitter.webp" alt="twitter logo"/>
            </a>
            <p>•</p>
            <a href="http://github.com/devzeppelin" target="_blank" rel="noreferrer">
            <img src="..//escuela/social/github.webp" alt="github logo"/>
            </a>
            <p>•</p>
            <a href="https://www.linkedin.com/in/gino-pietrobon/" target="_blank" rel="noreferrer">
            <img src="..//escuela/social/linkedin.webp" alt="linkedin logo"/>
            </a>
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

        .contacto a {
          font-size: 1.2em;
          margin-top: 0.2em;
          margin-bottom: 1em;
        }

        h2 {
          margin-top: 1em;
          margin-bottom: 1em;
          font-size: 1.5rem
        }

        a>img {
          width: 64px;
          height: 64px; 
        }

        @media(max-width: 750px){
          
        a>img {
          width: 36px;
          height: 36px;          
        }

        }

      `}</style>
    </Layout>
  );
}
