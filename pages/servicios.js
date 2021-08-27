import Head from "next/head";
import Layout from "../components/Layout";

import { IoMdAppstore, IoLogoBitcoin } from "react-icons/io";
import { DiModernizr } from "react-icons/di";
import { AiOutlineBuild } from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { SiMaterialdesign, SiShopify } from "react-icons/si";
import { FiCpu } from "react-icons/fi";
import { ServiciosItem } from "../components/ServiciosItem";

import Fade from "react-reveal/Fade";

const Servicios = () => {
  return (
    <div>
      <Head>
        <title>Servicios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classServicios={"bg-secundary text-yellow"}>
        <div>
          <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
            <h1 className="text-4xl font-bold text-yellow uppercase">
              Servicios
            </h1>
          </div>
          <div>
            <section className="text-yellow-400 body-font">
              <div className="p-6 md:p-24 py-16 mx-auto">               
            
                <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
                  <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 mt-20 text-yellow">
                    Variedad de servicios
                  </h1>
                  <p className="lg:w-1/2 w-full text-lg px-2 md:px-32  text-lightGray leading-relaxed text-opacity-80">
                   Estamos actualizados en el mundo de la informática. En Dev Zeppelin somos estudiantes permanentes lo que nos permite estar al tanto de todo lo nuevo y animarnos a aprender nuevas tecnologías para mejorar la calidad de nuestro servicio. Nuestro objetivo es que tu página web sea la más rápida que se pueda encontrar en el mercado.
                  </p>
                </div>
               
                   
                  <div className="flex flex-wrap -m-4">
                        <ServiciosItem
                          titulo={"Asesoramiento tecnológico"}
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
                          titulo={"Tu página web en forma de Aplicación Movil"}
                          icono={
                            <IoMdAppstore className="mx-auto text-4xl text-yellow" />
                          }
                        />
                        <ServiciosItem
                          titulo={"Diseño de logos e imágenes promocionales"}
                          icono={
                            <SiMaterialdesign className="mx-auto text-4xl text-yellow" />
                          }
                        />
                        <ServiciosItem
                          titulo={"Modernización de sitios web antiguos"}
                          icono={
                            <DiModernizr className="mx-auto text-4xl text-yellow" />
                          }
                        />
                        <ServiciosItem
                          titulo={"Montaje de tiendas electrónicas"}
                          icono={
                            <SiShopify className="mx-auto text-4xl text-yellow" />
                          }
                        />
                        <ServiciosItem
                          titulo={"Invitaciones a eventos en forma de página Web"}
                          icono={
                            <GiPartyPopper className="mx-auto text-4xl text-yellow" />
                          }
                        />
                        <ServiciosItem
                          titulo={"Aplicaciones y sistemas específicos y avanzados"}
                          icono={
                            <MdSettingsSystemDaydream className="mx-auto text-4xl text-yellow" />
                          }
                        />
                        <ServiciosItem
                          titulo={"Asesoría y consultoria de Criptomonedas y Bitcoin"}
                          icono={
                            <IoLogoBitcoin className="mx-auto text-4xl text-yellow" />
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
