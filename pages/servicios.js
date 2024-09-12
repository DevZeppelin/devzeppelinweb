import Head from "next/head";
import Layout from "../components/Layout";
import SectionWorkComponent from "../components/sections/SectionWorkComponent"

import { IoMdAppstore, IoLogoBitcoin } from "react-icons/io";
import { DiModernizr } from "react-icons/di";
import { AiOutlineBuild } from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { SiMaterialdesign, SiShopify } from "react-icons/si";
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
          <section id="work">
          <div className="p-4 md:px-16 mx-auto pt-16 ">
            <h2 className="text-center text-4xl text-yellow my-8 pb-6">
              Páginas Web de muestra:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0">
                <SectionWorkComponent
                  src="/responsiveImages/01.png"
                  description="Empresa de tecnología"
                  web="www.tecnicosya.com.ar"
                />
                <SectionWorkComponent
                  src="/responsiveImages/02.png"
                  description="Escuela de Programación"
                  web="www.code-obrero.vercel.app"
                />
                <SectionWorkComponent
                  src="/responsiveImages/03.png"
                  description="Tarjeta de invitación Web"
                  web="devzeppelin.github.io/InvitacionWeb"
                />
                <SectionWorkComponent
                  src="/responsiveImages/04.png"
                  description="Blog Personal"
                  web="www.moonblog.ar"
                />
            </div>
          </div>
        </section>
        <section id="work">
          <div className="p-4 md:px-16 mx-auto pt-16 ">
            <h2 className="text-center text-4xl text-yellow my-8 pb-6">
              Aplicaciones Web de muestra:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0">
                <SectionWorkComponent
                  src="/apps/gastapp.png"
                  description="App de calcular gastos personales"
                  web="presupuesto-app-psi.vercel.app"
                />
                <SectionWorkComponent
                  src="/apps/turnon.png"
                  description="App de Turnos"
                  web="administrador-de-turnos.vercel.app/"
                />
                <SectionWorkComponent
                  src="/apps/bb.png"
                  description="Generador de frases de Breaking Bad"
                  web="breakingbad-beige.vercel.app"
                />
              
            </div>
          </div>
        </section>
            <section className="text-yellow-400 body-font">
              <div className="p-6 md:p-24 py-16 mx-auto">               
            
                <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
                  <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 mt-6 text-yellow">
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
