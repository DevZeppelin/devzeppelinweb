import Head from "next/head";
import Layout from "../components/Layout";
import SectionWorkComponent from "../components/sections/SectionWorkComponent"


const Apps = () => {
  return (
    <div>
      <Head>
        <title>Web Apps de muestra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classApps={"bg-secundary text-yellow"}>
        <div>
      
          <div>
            <section id="apps">
              <div className="p-4 md:px-16 mx-auto pt-16 ">
              <h2 className="text-center text-4xl text-yellow my-8 pb-2 uppercase">
                  WebApps de muestra
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0">
                  <SectionWorkComponent
                    src="/apps/ccu.png"
                    description="App para sacar la cuenta en los asados"
                    web="cuantocadauno.vercel.app"
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
                 


                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Apps;
