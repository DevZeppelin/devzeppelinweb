import Fade from "react-reveal/Fade";
import Link from "next/dist/client/link";

const SectionBackgroundFixed = () => {
    return (
        <section>
        <div className="p-8 md:p-32 py-32 font-bold text-center bg-cover bg-hero-bigger bg-right bg-fixed grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-righteous fadeIn text-yellow textDark">
              Bienvenido al mundo nuevo de la última generación de tecnología
            </h2>
            <div className="text-primary space-y-3 text-lg textLight font-bold">
              <p>
                <strong>Dev Zeppelin</strong> te acompaña en tu incersión al
                nuevo mundo web.
              </p>
              <p>
                Consideramos que tu sitio web es tu hogar en el universo de
                internet.
              </p>
              <p>
                Aparecer en los primeros lugares de las búsquedas web te
                asegura visibilidad y potenciales clientes.
              </p>
              <p>
                Si tu empresa figura en google Maps, tenés clientes en
                Instagram, todo eso se puede integrar a tu página web en donde
                tenés la libertad de ofrecer una interfaz totalmente diferente
                y única.
              </p>
            </div>
            <div></div>

            <Fade big>
              <Link href="/contacto">
                <button className="btn uppercase">Reservá una reunión</button>
              </Link>
            </Fade>
          </div>
        </div>
        <style jsx>{`  

          .textLight {
            text-shadow: 1px 2px 4px white;
          }
          .textDark {
            text-shadow: 0px 0px 4px black;
          }
        `}</style>
      </section>
    )
}

export default SectionBackgroundFixed
