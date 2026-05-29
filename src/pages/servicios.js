import Head from "next/head";
import Layout from "../components/Layout";

import { IoMdAppstore } from "react-icons/io";
import { ImEllo } from "react-icons/im";
import { ImBriefcase } from "react-icons/im";
import { DiModernizr } from "react-icons/di";
import { AiOutlineBuild } from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { SiMaterialdesign } from "react-icons/si";
import { FiCpu } from "react-icons/fi";
import { ServiciosItem } from "../components/ServiciosItem";


const Servicios = () => {
  return (
    <div>
      <Head>
        <title>Servicios y Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classServicios={"bg-secundary text-yellow"}>
        <div>
          <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
            <h1 className="text-4xl font-bold text-yellow uppercase textDark">
              Servicios y Trabajos
            </h1>
          </div>
          <div>

            <section className="text-yellow-400 body-font">
              <div className="p-6 md:p-24 py-16 mx-auto">

                <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
                  <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 mt-6 text-yellow uppercase">
                    Variedad de servicios
                  </h1>
                  <p className="lg:w-1/2 w-full text-lg px-2 md:px-32  text-lightGray leading-relaxed text-opacity-80">
                    Estamos actualizados en el mundo de la informática. En Dev Zeppelin somos estudiantes permanentes lo que nos permite estar al tanto de todo lo nuevo y animarnos a aprender nuevas tecnologías para mejorar la calidad de nuestro servicio. Nuestro objetivo es que tu página web sea la más rápida que se pueda encontrar en el mercado.
                  </p>
                </div>


                <div className="flex flex-wrap -m-4">
                  <ServiciosItem
                    titulo={"Redes sociales activas"}
                    icono={
                      <FiCpu className="mx-auto text-4xl text-yellow" />
                    }
                  />
                  <ServiciosItem
                    titulo={"Diseño y fabricación de páginas Web"}
                    icono={
                      <AiOutlineBuild className="mx-auto text-4xl text-yellow" />
                    }
                  />
                  <ServiciosItem
                    titulo={"Aplicaciones Web Superrápidas"}
                    icono={
                      <IoMdAppstore className="mx-auto text-4xl text-yellow" />
                    }
                  />
                  <ServiciosItem
                    titulo={"Logos, imágenes y videos promocionales"}
                    icono={
                      <SiMaterialdesign className="mx-auto text-4xl text-yellow" />
                    }
                  />
                  <ServiciosItem
                    titulo={"Modernización de marca"}
                    icono={
                      <DiModernizr className="mx-auto text-4xl text-yellow" />
                    }
                  />
                  <ServiciosItem
                    titulo={"Asesoramiento estratégico"}
                    icono={
                      <ImBriefcase className="mx-auto text-4xl text-yellow" />
                    }
                  />
                  <ServiciosItem
                    titulo={"Invitaciones Web + QR"}
                    icono={
                      <GiPartyPopper className="mx-auto text-4xl text-yellow" />
                    }
                  />
                  <ServiciosItem
                    titulo={"Captura de clientes (Sitio Google)"}
                    icono={
                      <MdSettingsSystemDaydream className="mx-auto text-4xl text-yellow" />
                    }
                  />
                  <ServiciosItem
                    titulo={"Otros métodos de publicidad y cacería de clientes"}
                    icono={
                      <ImEllo className="mx-auto text-4xl text-yellow" />
                    }
                  />
                </div>

              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Servicios;
