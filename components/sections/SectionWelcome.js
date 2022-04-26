import Link from "next/dist/client/link";

const SectionWelcome = () => {
  return (
    <section>
      <div>
        <div className="flex relative overflow-hidden md:grid md:grid-cols-2 text-lg xs:px-2 sm:px-6 md:px-12 bg-primary">
          <span className="first-block text-lightGray space-y-4 md:space-y-10 p-6 md:p-8 my-auto bg-secundary z-40 opacity-80 md:opacity-95 h-full xs:text-base sm:text-lg">
            <h1 className="font-yellow text-yellow text-xl md:text-3xl mt-1 font-righteous">
              Agregá tecnología a tu negocio
            </h1>
            <div className="h-1 w-64 bg-yellow  mx-auto"></div>
            <p>
              Tu marca con excelente presencia en la Web. Vos vendé, yo me encargo de tus redes, logos y tecnología.
            </p>
            <p>
              Con tecnología de última generación ayudo a tu negocio a crecer en el mundo de internet.
              
            </p>
             <p className="hidden md:block">
             Elevá tus ventas dando a tus usuarios <b>una experiencia increíble</b>, diferente, única.
             </p>
             
            <Link href="/servicios">
              <button className="btn opacity-100 uppercase mt-6">
                Algunos trabajos
              </button>
            </Link>
            
          </span>

            <div className="flex flex-wrap m-0 p-0 justify-center align-middle absolute bottom-0 left-0 h-full md:relative md:h-full md:max-w-auto">              
              <img
                src="/01.webp"
                alt="dev zeppelin logo hyper webs gino pietrobon"  
                
              />
         
            </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWelcome;
