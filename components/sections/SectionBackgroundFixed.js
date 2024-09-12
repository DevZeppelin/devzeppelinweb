import Fade from "react-reveal/Fade";
import Link from "next/dist/client/link";

const SectionBackgroundFixed = () => {
    return (
        <section>
        <div className="p-8 md:p-32 py-32 font-bold text-center bg-cover bg-hero-bigger bg-right bg-fixed grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-righteous fadeIn text-yellow textDark">
            Inyectá tecnología a tu marca
            </h2>
            <div className="text-primary space-y-3 text-lg textLight font-bold">
              <p>
                
              </p>
              <p>
                El <strong>propósito</strong> es que tu marca sea visible, y que vos no te preocupes por nada.
              </p>             
              <p>
               Presencia en las redes, imagen moderna y asesoramiento para encontrar la estrategia de propaganda adecuada. 
              </p>
            </div>
            <div></div>

            <Fade big>
              <Link href="/contacto">
                <button className="btn uppercase">¡Llamame!</button>
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
