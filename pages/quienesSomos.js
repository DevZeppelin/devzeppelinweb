/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Layout from "../components/Layout";
import { BiCheckShield } from "react-icons/bi";
import { FaEye } from "react-icons/fa";


const QuienesSomos = () => {
  return (
    <div>
      <Head>
        <title>¿Qué es Dev Zeppelin?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classQuienesSomos={"bg-secundary text-yellow"}>
        <section className="text-lightGray">
          <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
            <h1 className="text-4xl font-bold text-yellow uppercase textDark">
              Mi proyecto
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center space-y-8 md:space-y-4 p-8 md:p-16">
              <h2 className="text-2xl font-extrabold text-yellow">
                Tecnología par aun mundo mejor
              </h2>
              <div className="bg-yellow w-32 h-1 mx-auto"></div>
                <p>
                  Dev Zeppelin es mi proyecto como estudiante de programación y tecnología, comprometido con proyectos reales que solucionen problemas a personas y emprendedores comunes.
                </p>
                <p>
                  Creo firmemente que a través de la tecnología se pueden cambiar muchas cosas, por eso creé este proyecto para poder volcar mis esfuerzos y estudios en crear soluciones aplicando mis conocimientos en programación y tecnología.
                </p>
                <p>
                  <strong>Dev Zeppelin</strong> utiliza lo más nuevo en tecnología y lo más orginal del diseño para marcar la diferencia de quienes me dan la oportunidad de ayudarlos. 
                </p>
                
            </div>
            <div className="my-auto p-8">
              <img
                src="/logo.webp"
                alt="development big logo dev zeppelin webs pages www perfomance "
               
              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-32 pb-16 text-center text-lightGray">
            <div className="space-y-4">
              <FaEye className="mx-auto text-4xl text-yellow" />
              <h2 className="text-2xl text-yellow">Visión</h2>
              <p>
                Brindar un excelente servicio de calidad trasmitiendo valores y confianza. Entregar servicios web de calidad que faciliten e
                impulsen sus ideas hacia el éxito. Asesorar y brindar herramientas para que puedan hacer uso de las
                últimas tecnologías a su favor. Transmitir valores como el
                respeto, responsabilidad, honestidad y calidad.
              </p>
            </div>
            <div className="space-y-4">
              <BiCheckShield className="mx-auto text-4xl text-yellow " />
              <h2 className="text-2xl text-yellow">Misión</h2>
              <p>
                Realizar trabajos con alto nivel de compromiso, seguridad y
                transparencia. Atender de manera responsable
                los requerimientos y en lo posible superar las expectativas.
                Avanzar para buscar los mejores acuerdos y ser el recurso accesible para dar forma tecnológica a las ideas de las personas comunes.
              </p>
            </div>
        </section>
      </Layout>
    </div>
  );
};

export default QuienesSomos;
