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
              ¿Por qué elegir DevZeppelin?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 md:px-32 pb-16 text-lightGray ">
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <IoIosSpeedometer className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Calidad y velocidad
                  </h2>
                  <p>
                    Entrega de productos digitales en tiempo y forma. Podés ver que para crear mis productos utilizo tecnologías punta de lanza. Casi todo lo que imaginés se puede hacer.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <BiBookContent className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Marketing Digital
                  </h2>

                  <p>
                    Utilizá toda la fuerza de la revolución tecnológica a favor de tu marca. Llegá a lugares que nunca imaginaste llegar.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <BsTriangleFill className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Cartas QR para bares y restos
                  </h2>

                  <p>
                   Mis cartas QR son las más originales y rápidas del mercado. No son fotos, sino que son interactivas. ¡Miralas y sacá tus conclusiones!
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <CgScreenWide className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Diseño adaptable
                  </h2>
                  <p>
                    El <i>Responsive design</i> hoy es imprescindible para todo el contenido digital. Me encargo de que todo el contenido creado se vea genial en : Celular, Tablet, PC o
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
                    En el instagram de @devzeppelin podés ver varios trabajos y cómo las creaciones son originales y coloridas. Pasate por el IG y comprobalo vos mismo.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <AiFillGoogleCircle className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Primeros lugares en Google
                  </h2>

                  <p>
                    Te ayudo a que el nombre de tu empresa aparezca en las búsquedas, para atraer tráfico y nuevos clientes.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <FaShopify className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">
                    Tienda online
                  </h2>

                  <p>
                    ¡Mis web super rápidas combinadas con una tienda shopify son un misil de ventas automáticas!
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
                   ¿Querés romeprla con las invitaciones QR más originales jamás vistas? Mirá algún ejemplo de nuestras invitaciones web
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </section>
    )
}

export default SectionServices
