/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/escuela/Layout";
import Seo from "@/components/Seo";
import { contactPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { contact } from "@/lib/site";

export default function Contacto() {
  return (
    <Layout
      MainTitle="Contacto"
      Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
    >
      <Seo
        title="Contacto | codeObrero"
        description="Contactá a Gino Pietrobon de codeObrero por mail, WhatsApp o redes sociales para consultas sobre programación y tus primeros pasos como developer."
        path="/escuela/contacto"
        image="/escuela/logo.webp"
        jsonLd={[
          contactPageJsonLd(),
          breadcrumbJsonLd([
            { name: "Escuela", path: "/escuela" },
            { name: "Contacto", path: "/escuela/contacto" },
          ]),
        ]}
      />
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
              href={contact.whatsapp}
              target="_blank" rel="noreferrer"
            >
              <img src="..//escuela/social/whatsapp.webp" alt="whatsapp logo" />
            </a>
            <p>•</p>
            <a href="http://facebook.com/gini77o" target="_blank" rel="noreferrer">
              <img src="..//escuela/social/facebook.webp" alt="facebook logo" />
            </a>
            <p>•</p>
            <a href="http://instagram.com/moonwatcher73" target="_blank" rel="noreferrer">
              <img src="..//escuela/social/instagram.webp" alt="instagram logo" />
            </a>
            <p>•</p>
            <a href="http://twitter.com/moonwatcher73" target="_blank" rel="noreferrer">
              <img src="..//escuela/social/twitter.webp" alt="twitter logo" />
            </a>
            <p>•</p>
            <a href="http://github.com/devzeppelin" target="_blank" rel="noreferrer">
              <img src="..//escuela/social/github.webp" alt="github logo" />
            </a>
            <p>•</p>
            <a href="https://www.linkedin.com/in/gino-pietrobon/" target="_blank" rel="noreferrer">
              <img src="..//escuela/social/linkedin.webp" alt="linkedin logo" />
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

        h2 {
          margin-top: 1em;
          margin-bottom: 1em;
          font-size: 1.5rem;
        }

        .contactNetworks img {
          width: 56px;
          height: 56px;
          margin: 0 4px;
          filter: drop-shadow(0 0 8px rgba(245, 210, 68, 0.3));
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .contactNetworks img:hover {
          transform: scale(1.15);
          filter: drop-shadow(0 0 14px rgba(245, 210, 68, 0.6));
        }

        @media (max-width: 750px) {
          .contactNetworks img {
            width: 40px;
            height: 40px;
          }
        }

      `}</style>
    </Layout>
  );
}
