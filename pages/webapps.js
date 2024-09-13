import Head from "next/head";
import Layout from "../components/Layout";
import SectionWorkComponent from "../components/sections/SectionWorkComponent"


const Servicios = () => {
  return (
    <div>
      <Head>
        <title>Webs y Apps de muestra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classWebs={"bg-secundary text-yellow"}>
        <div>
          <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
            <h1 className="text-4xl font-bold text-yellow uppercase textDark">
              Webs y Apps de muestra
            </h1>
          </div>
          <div>

            <section id="work">
              <div className="p-4 md:px-16 mx-auto pt-16 ">
                <h2 className="text-center text-4xl text-yellow my-8 pb-2 uppercase">
                  Páginas Web de muestra
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0">
                  <SectionWorkComponent
                    src="/responsiveImages/01.png"
                    description="Empresa de tecnología"
                    web="www.tecnicosya.com.ar"
                  />

                  <SectionWorkComponent
                    src="/responsiveImages/03.png"
                    description="Tarjeta de invitación Web"
                    web="invitaweb.vercel.app/gabi_y_pablo_out"
                  />
                  <SectionWorkComponent
                    src="/responsiveImages/jeans.png"
                    description="Venta de Jeans"
                    web="indianajeans-ar.vercel.app/"
                  />
                  <SectionWorkComponent
                    src="/responsiveImages/cercos.png"
                    description="Web de cercos perimetrales"
                    web="cercos-san-nicolas-n8ij8okes-devzeppelin.vercel.app/"
                  />
                  <SectionWorkComponent
                    src="/responsiveImages/04.png"
                    description="Blog personal"
                    web="devzeppelinweb.vercel.app/blog"
                  />
                  <SectionWorkComponent
                    src="/responsiveImages/portafolio.png"
                    description="Radio Web"
                    web="devzeppelinweb.vercel.app/almarockera"

                  />
                </div>
              </div>
            </section>
            <section id="apps">
              <div className="p-4 md:px-16 mx-auto pt-16 ">
                <h2 className="text-center text-4xl text-yellow my-8 pb-2 uppercase">
                  Web Apps de muestra
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0">
                  <SectionWorkComponent
                    src="/apps/ccu.png"
                    description="App para sacar la cuenta en los asados"
                    web="cuantocadauno.vercel.app"
                  />
                  <SectionWorkComponent
                    src="/apps/turist.png"
                    description="App Ayuda a turistas"
                    web="devzeppelinweb.vercel.app/tourist"
                  />
                  <SectionWorkComponent
                    src="/apps/winehouse.png"
                    description="App catálogo de cabañas"
                    web="winehouse.vercel.app"
                  />
                  <SectionWorkComponent
                    src="/apps/gastapp.png"
                    description="App de calcular gastos personales"
                    web="presupuesto-app-psi.vercel.app"
                  />
                  <SectionWorkComponent
                    src="/apps/turnon.png"
                    description="App de Turnos"
                    web="barber-app-psi.vercel.app/"
                  />

                  <SectionWorkComponent
                    src="/apps/carta-qr.png"
                    description="Carta QR (Restaurant)"
                    web="ejemplo-carta-qr.vercel.app/"
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
