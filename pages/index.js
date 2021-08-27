import Head from "next/head";
import Link from "next/dist/client/link";
import Layout from "../components/Layout";
import SectionWelcome from "../components/sections/SectionWelcome";

import {IoIosSpeedometer} from "react-icons/io"
import {BiBookContent} from "react-icons/bi"
import {BsTriangleFill} from "react-icons/bs"
import {CgScreenWide} from "react-icons/cg"
import {AiFillGoogleCircle} from "react-icons/ai"
import {SiMaterialdesign} from "react-icons/si"
import {FaShopify} from "react-icons/fa"
import {GiPartyPopper} from "react-icons/gi"

import Fade from "react-reveal/Fade";

//Comilla invertida ````````

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevZeppelin | Webs 100% perfomance</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="dev zeppelin, web pages, paginas web, servicios web, paginas rapidas, adminsitrables, webs modernas, velocidad, optimizacion, perfomance, react, next, tailwind, programacion, sitio web, webs unicas "
        />
        <meta
          name="keywords"
          content="dev zeppelin, web pages, paginas web, servicios web, paginas rapidas, adminsitrables, webs modernas, velocidad, optimizacion, perfomance, react, next, tailwind, programacion, sitio web, webs unicas"
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>
      <Layout classHome={"bg-secundary text-yellow"}>
        <SectionWelcome />
        <section>
          <div className="space-y-2 text-center p-12 px-8 md:px-32 pt-8 bg-yellow">
            <h1 className="font-bold text-2xl tracking-wider text-secundary uppercase">
              Revolucioná tu negocio a tarvés de la tecnología
            </h1>
            <p className="text-secundary text-lg">
              Nuestras páginas cumplen con todas las exigencias en cuanto a{" "}
              <i>perfomance</i>, accesibilidad, buenas prácticas y SEO; todo lo
              necesario para aparecer en los primeros lugares de los buscadores
              más famosos y sin pagar nada extra
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8 md:m-24 text-center fadeIn element">
            <Fade left>
              <div className="my-auto font-bold flex">
                <div className="w-3 h-32 bg-yellow my-auto"></div>
                <p className="text-lg m-6 text-lightGray">
                  FABRICAMOS PÁGINAS WEB ADMINISTRABLES, VELOCES, ESCALABLES Y
                  OPTIMIZADAS PARA UNA EXCELENTE EXPERIENCIA DE USUARIO
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridContainer">
                  <div className="indexGridImageText">
                    Webs de última tecnología
                  </div>
                  <img
                    src="/gridImg/01.png"
                    alt="development icon logo dev zeppelin webs pages www perfomance "
                    className="gridImage imagen-filtro"
                  />
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">
                  Administrá tu contenido
                </div>
                <img
                  src="/gridImg/02.png"
                  alt="development icon logo dev zeppelin webs pages www perfomance "
                  className="gridImage imagen-filtro"
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">
                  Diseño, colores, imágenes HD y logo
                </div>
                <img
                  src="/gridImg/03.png"
                  alt="development icon logo dev zeppelin webs pages www perfomance "
                  className="gridImage imagen-filtro"
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">
                  Primeros lugares en las búsquedas
                </div>
                <img
                  src="/gridImg/04.png"
                  alt="development icon logo dev zeppelin webs pages www perfomance "
                  className="gridImage imagen-filtro"
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">App Movil</div>
                <img
                  src="/gridImg/05.png"
                  alt="development icon logo dev zeppelin webs pages www perfomance "
                  className="gridImage imagen-filtro"
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">Diseño responsivo</div>
                <img
                  src="/gridImg/06.png"
                  alt="development icon logo dev zeppelin webs pages www perfomance "
                  className="gridImage imagen-filtro"
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">
                  e-commerce con Shopify
                </div>
                <img
                  src="/gridImg/07.png"
                  alt="development icon logo dev zeppelin webs pages www perfomance "
                  className="gridImage imagen-filtro"
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="m-6 space-y-4 md:space-y-4 text-center my-auto element">
                <h2 className="font-bold text-xl font-prompt text-yellow">
                  ¡Nosotros te llamamos!
                </h2>
                <p className="text-lightGray">
                  Déjanos tu nombre, teléfono o correo electrónico y nos
                  comunicaremos contigo a la brevedad
                </p>
                <Fade bottom>
                  <Link href="/contacto">
                    <button className="btn">Te Llamamos!</button>
                  </Link>
                </Fade>
              </div>
            </Fade>
          </div>
        </section>
        <section>
          <div className="p-8 md:p-32 py-32 font-bold text-center bg-cover bg-hero-bigger bg-right bg-fixed grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-prompt fadeIn text-yellow textDark">
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
                  asegura visibilidad y potenciales clientes. Si tu empresa
                  figura en google Maps, tenés clientes en Instagram, todo eso
                  se puede integrar a tu página web en donde tenés la libertad
                  de ofrecer una interfaz totalmente diferente y única.
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
        </section>
        <section>
          <div className="text-center pt-16">
            <h2 className="text-3xl font-bold pb-12 font-prompt text-yellow">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 md:px-32 pb-16 text-lightGray ">
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <IoIosSpeedometer className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">Calidad y velocidad</h2>
                  <p>
                    Construímos nuestros sitios con última tecnología, lo que garantiza escalabilidad, velocidad y modernización frente a la competencia.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <BiBookContent className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">Web adminsitrable</h2>
                  
                  <p>
                   Te permitimos manejar el contenido de tu web y te ayudamos a crear contenido, para generar tráfico lo que resulta en atraer clientes y aumentar las ventas
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <BsTriangleFill className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">Hosting y SSL Gratuitos</h2>
                 
                  <p>
                   Por tiempo indefinido no tenés que pagar un hosting anual que almacene tu página. Nosotros nos encargamos de almacenar tu sitio en el mejor lugar y de forma gratuita.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <CgScreenWide className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">Responsive Design</h2>
                  
                  <p>
                    Tu web se verá excelente y diferente dependiendo el dispositivo que la reproduzca, ya sea: Celular, Tablet, PC o cualqueir otro dispositivo
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <SiMaterialdesign className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">Imagen y Logo HD</h2>
                  
                  <p>
                    Nos encargamos del diseño de varias imágenes HD y un logo moderno que entregue una imagen profesional y moderna de tu marca 
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <AiFillGoogleCircle className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">Buenas prácticas y SEO</h2>
                 
                  <p>
                    Nuestra forma de programar cumple con las exigencias de los buscadores web para obtener el mejor puntaje en cuanto a SEO, Accesibilidad y buenas prácticas
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <FaShopify className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">Shopify e-Commerce</h2>
                 
                  <p>
                    Nuestras web aplicadas a una tienda online son perfectas, ya que el tiempo y velocidad a la hora de realizar una compra por internet son lo más importante para el usuario
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-4 pb-6">
                  <GiPartyPopper className="text-6xl text-yellow mx-auto" />
                  <h2 className="uppercase text-yellow font-bold">Tarjetas de invitación estilo WEB</h2>
                 
                  <p>
                    ¿Te gusta ser original? Mirá nuestro diseño de invitaciones web totalmente personalizables, originales y prácticas. 
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </section>
        {/* CSS Puro */}
        <style jsx>{`
          .imagen-filtro {
            transition: all 0.4s ease;
          }
          .imagen-filtro:hover {
            -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
            filter: grayscale(100%);
          }

          .textLight {
            text-shadow: 1px 2px 4px white;
          }
          .textDark {
            text-shadow: 0px 0px 4px black;
          }
        `}</style>
      </Layout>
    </div>
  );
}
