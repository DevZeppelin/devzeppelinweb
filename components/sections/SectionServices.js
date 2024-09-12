import Fade from "react-reveal/Fade";

import { IoIosSpeedometer } from "react-icons/io";
import { BiBookContent } from "react-icons/bi";
import { BsTriangleFill } from "react-icons/bs";
import { CgScreenWide } from "react-icons/cg";

const SectionServices = () => {
  return (
    <section>
      <div className="text-center pt-16">
        <h2 className="text-3xl font-bold pb-12 font-righteous text-yellow">
          ¿Por qué elegir DevZeppelin?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 md:px-32 pb-16 text-lightGray ">
          <Fade bottom>
            <div className="space-y-4 pb-6">
              <IoIosSpeedometer className="text-6xl text-yellow mx-auto" />
              <h2 className="uppercase text-yellow font-bold">Velocidad</h2>
              <p>No hay tiempo que perder</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="space-y-4 pb-6">
              <BiBookContent className="text-6xl text-yellow mx-auto" />
              <h2 className="uppercase text-yellow font-bold">Estrategia</h2>

              <p>El análisis correcto para la estrategia adecuada</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="space-y-4 pb-6">
              <BsTriangleFill className="text-6xl text-yellow mx-auto" />
              <h2 className="uppercase text-yellow font-bold">Calidad</h2>

              <p>IA + Última tecnología para conquistar el mercado</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="space-y-4 pb-6">
              <CgScreenWide className="text-6xl text-yellow mx-auto" />
              <h2 className="uppercase text-yellow font-bold">
               Diseño
              </h2>
              <p>
             Mostremos la mejor cara. Clásico y moderno.
              </p>
            </div>
          </Fade>
         
          
         
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
