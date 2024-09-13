import Link from "next/dist/client/link";

const SectionBackgroundFixed = () => {
  return (
    <section>
      <div className="p-8 md:p-32 py-32 font-bold text-center bg-cover bg-hero-bigger bg-right bg-fixed grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-righteous fadeIn text-yellow textDark">
            Cacería de clientes
          </h2>
          <div className="text-primary space-y-3 text-lg textLight font-bold">
            <p>
              El <strong>propósito</strong> es promocionar tu negocio por medio de la tecnologìa.
            </p>
            <p>
              Te ayudo a definir la estrategia de propaganda adecuada y el uso de tecnologìas que mejoren tus procesos.
            </p>
            <p>
              También te invito a repensar el propósito y objetivos de tu negocio, mirando hacia el futuro
            </p>
          </div>
          <div></div>

          <Link href="/contacto">
            <button className="btn uppercase">Contactame</button>
          </Link>
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
