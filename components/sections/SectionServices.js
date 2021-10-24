import Fade from "react-reveal/Fade";

import { IoIosSpeedometer } from "react-icons/io";
import { BiBookContent } from "react-icons/bi";
import { BsTriangleFill } from "react-icons/bs";
import { CgScreenWide } from "react-icons/cg";
import { AiFillGoogleCircle } from "react-icons/ai";
import { SiMaterialdesign } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";


const SectionServices = () => {
    return (
        <section>
          <div className="text-center pt-16">
            <h2 className="text-3xl font-bold pb-12 font-righteous text-yellow">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 md:px-32 pb-16 text-lightGray ">
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <IoIosSpeedometer className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Calidad y velocidad
                  </h2>
                  <p>
                    Construímos nuestros sitios con última tecnología, lo que
                    garantiza escalabilidad, velocidad y modernización frente a
                    la competencia.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <BiBookContent className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Web adminsitrable
                  </h2>

                  <p>
                    Te permitimos manejar el contenido de tu web y te ayudamos a
                    crear contenido, para generar tráfico lo que resulta en
                    atraer clientes y aumentar las ventas
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <BsTriangleFill className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Hosting y SSL Gratuitos
                  </h2>

                  <p>
                    Por tiempo indefinido no tenés que pagar un hosting anual
                    que almacene tu página. Nosotros nos encargamos de almacenar
                    tu sitio en el mejor lugar y de forma gratuita.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <CgScreenWide className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Responsive Design
                  </h2>

                  <p>
                    Tu web se verá excelente y diferente dependiendo el
                    dispositivo que la reproduzca, ya sea: Celular, Tablet, PC o
                    cualqueir otro dispositivo
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <SiMaterialdesign className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Imagen y Logo HD
                  </h2>

                  <p>
                    Nos encargamos del diseño de varias imágenes HD y un logo
                    moderno que entregue una imagen profesional y moderna de tu
                    marca
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <AiFillGoogleCircle className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Buenas prácticas y SEO
                  </h2>

                  <p>
                    Nuestra forma de programar cumple con las exigencias de los
                    buscadores web para obtener el mejor puntaje en cuanto a
                    SEO, Accesibilidad y buenas prácticas
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <FaShopify className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Shopify e-Commerce
                  </h2>

                  <p>
                    Nuestras web aplicadas a una tienda online son perfectas, ya
                    que el tiempo y velocidad a la hora de realizar una compra
                    por internet son lo más importante para el usuario
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <GiPartyPopper className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Tarjetas de invitación estilo WEB
                  </h2>

                  <p>
                    ¿Te gusta ser original? Mirá nuestro diseño de invitaciones
                    web totalmente personalizables, originales y prácticas.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </section>
    )
}

export default SectionServices
