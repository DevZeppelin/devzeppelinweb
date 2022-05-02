import Fade from "react-reveal/Fade";
import Link from "next/dist/client/link";

const SectionBackgroundFixed = () => {
    return (
        <section>
        <div className="p-8 md:p-32 py-32 font-bold text-center bg-cover bg-hero-bigger bg-right bg-fixed grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-righteous fadeIn text-yellow textDark">
              ¿Has invertido en tu marca?
            </h2>
            <div className="text-primary space-y-3 text-lg textLight font-bold">
              <p>
                <strong>Dev Zeppelin</strong> te acompaña en tu incersión al
                nuevo mundo de internet.
              </p>
              <p>
                Estoy seguro que toda tu inversión en tu marca serà bien retribuìda en ventas y nuevos clientes.
              </p>             
              <p>
               Que cuando busquen tu rubro aparezca tu negocio. Que tu Instagram marque la diferencia. Que tus logos, fotos y afiches demuestren que te importa la presencia de tu marca.
              </p>
            </div>
            <div></div>

            <Fade big>
              <Link href="/contacto">
                <button className="btn uppercase">¡Reunámonos!</button>
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
