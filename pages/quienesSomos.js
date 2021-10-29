import Head from "next/head";
import Layout from "../components/Layout";
import { BiCheckShield } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Image from "next/image"

const QuienesSomos = () => {
  return (
    <div>
      <Head>
        <title>Quienes Somos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classQuienesSomos={"bg-secundary text-yellow"}>
        <section className="text-lightGray">
          <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
            <h1 className="text-4xl font-bold text-yellow uppercase textDark">
              nuestra empresa
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center space-y-8 md:space-y-4 p-8 md:p-16">
              <h2 className="text-2xl font-extrabold text-yellow">
                Damos tecnología a tu negocio
              </h2>
              <div className="bg-yellow w-32 h-1 mx-auto"></div>
              <Fade big>
                <p>
                  En Dev Zeppelin pensamos en elevar tu marca entregando una
                  presencia digital excelente.
                </p>
                <p>
                  Utilizamos la última tecnología punta de lanza para
                  mantenernos actualizados y ser competentes en el mercado. Nos
                  enfocamos en proveer las últimas funcionalidades para que tu
                  sitio web resalte contra el resto.
                </p>
                <p>
                  <strong>Dev Zeppelin</strong> es una empresa dedicada a
                  brindar soluciones web y de tecnología, con una amplia
                  cantidad de servicios orientados a satisfacer las más
                  exigentes demandas del sector. Para nosotros los clientes son
                  el principal objetivo, y centramos todos nuestros esfuerzos
                  para lograr una relación que nos permita establecer
                  compromisos a largo plazo.
                </p>
                <p>
                  <strong>Dev Zeppelin</strong> entiende, que el valor agregado
                  que puede aportar se encuentra en el profesionalismo e
                  idoneidad de nuestros recursos humanos, buscando así, las
                  mejores opciones tecnológicas y humanas para cada necesidad.
                </p>
              </Fade>
            </div>
            <div className="my-auto p-8">
              <Image
                src="/logo.webp"
                alt="development big logo dev zeppelin webs pages www perfomance "
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-32 pb-16 text-center text-lightGray">
          <Fade bottom>
            <div className="space-y-4">
              <FaEye className="mx-auto text-4xl text-yellow" />
              <h2 className="text-2xl text-yellow">Nuestra Visión</h2>
              <p>
                Brindar el mejor servicio web a nivel global. Entregar a
                nuestros clientes servicios web de calidad que faciliten e
                impulsen sus respectivos negocios hacia el éxito. Brindar
                asesoramient y herramientas para que puedan hacer uso de las
                últimas tecnologías a su favor. Transmitir valores como el
                respeto, responsabilidad, honestidad, calidad y eficiencia
                necesaria para lograr confianza.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="space-y-4">
              <BiCheckShield className="mx-auto text-4xl text-yellow " />
              <h2 className="text-2xl text-yellow">Nuestra Misión</h2>
              <p>
                Realizar trabajos con alto nivel de compromiso, seguridad y
                transparencia. Nuestro desafío es atender de manera responsable
                los requerimientos y en lo posible superar las expectativas.
                Avanzar para buscar los mejores acuerdos y ser la alternativa
                que da tranquilidad frente a una inversión.
              </p>
            </div>
          </Fade>
        </section>
      </Layout>
    </div>
  );
};

export default QuienesSomos;
