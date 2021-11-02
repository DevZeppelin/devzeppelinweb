import Link from "next/dist/client/link";
import Image from "next/image";

const SectionWelcome = () => {
  return (
    <section>
      <div>
        <div className="flex relative overflow-hidden md:grid md:grid-cols-2 text-lg xs:px-2 sm:px-6 md:px-12 bg-primary">
          <p className="first-block text-lightGray space-y-6 md:space-y-10 p-6 md:p-8 my-auto bg-secundary z-40 opacity-80 md:opacity-95 h-full">
            <h1 className="font-yellow text-yellow text-xl md:text-3xl mt-1 font-righteous">
              Agregá tecnología a tu negocio
            </h1>
            <div className="h-1 w-64 bg-yellow  mx-auto"></div>
            <p>
              Damos a tu marca excelente presencia en la Web luciendo
              profesional ante los ojos del mundo.
            </p>
            <p>
              Programamos usando tecnología de última generación por lo que
              nuestras páginas son modernas, rápidas y optimizadas.
              
            </p>
             <p className="hidden md:block">
             El tiempo es dinero. Elevá tus ventas dando a tus usuarios <b>una experiencia increíble</b>
             </p>
            <Link href="/servicios">
              <button className="btn opacity-100 uppercase mt-6">
                Algunos trabajos
              </button>
            </Link>
            
          </p>

          <div className="flex-wrap bottom-0 left-0 h-full md:relative md:h-auto">
            <Image
              src="/01.webp"
              alt="dev zeppelin logo hyper webs gino pietrobon"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWelcome;
