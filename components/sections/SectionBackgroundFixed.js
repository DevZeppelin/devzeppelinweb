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
                Consideramos que tu web y tus redes son el hogar de tu negocio en el universo de
                internet.
              </p>
              <p>
                Dejame ayudarte a hacer más visible tu proyecto.
              </p>
              <p>
               Aparecé primero en Google. Que tu Instagram marque la diferencia. Te ayudo con estrategias de marketing. Reseñas 5 estrellas. Más visibilidad, más clientes.
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
        `}</style>
      </section>
    )
}

export default SectionBackgroundFixed
