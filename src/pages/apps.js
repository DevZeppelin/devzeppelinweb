import Head from "next/head";
import Layout from "@/components/layout/Layout";
import SectionWorkComponent from "@/components/home/sections/SectionWorkComponent"


const Apps = () => {
  return (
    <div>
      <Head>
        <title>Web Apps de muestra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classApps={"bg-secundary text-yellow"}>
        <div>

          <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
            <h1 className="text-4xl font-bold text-yellow uppercase textDark">
              Web Apps de muestra
            </h1>
          </div>
          <div>
            <section id="apps">
              <div className="p-4 md:px-16 mx-auto pt-16 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <SectionWorkComponent
                    src="/apps/anime-math.png"
                    description="App para practicar las tablas, con recompensas ánime"
                    web="https://anime-math.vercel.app"
                  />
                  <SectionWorkComponent
                    src="/apps/wolfwarrior.png"
                    description="juego RPG medieval crónico"
                    web="https://wolfwarrior.vercel.app/"
                  />
                  <SectionWorkComponent
                    src="/apps/ccu.png"
                    description="App para sacar la cuenta en los asados"
                    web="https://cuantocadauno.vercel.app"
                  />
                  <SectionWorkComponent
                    src="/apps/turnon.png"
                    description="App de Turnos"
                    web="https://barber-app-psi.vercel.app"
                  />

                  <SectionWorkComponent
                    src="/apps/carta-qr.png"
                    description="Carta QR (Restaurant)"
                    web="https://carta-qr-opal.vercel.app/"
                  />
                  <SectionWorkComponent
                    src="/apps/turist.png"
                    description="App Ayuda a turistas"
                    web="https://turistapp-kappa.vercel.app/"
                  />
                  <SectionWorkComponent
                    src="/apps/winehouse.png"
                    description="App catálogo de cabañas"
                    web="https://winehouse.vercel.app"
                  />
                  <SectionWorkComponent
                    src="/apps/gastapp.png"
                    description="App de calcular gastos personales"
                    web="https://bailandoenunapata.vercel.app"
                  />
                  <SectionWorkComponent
                    src="/apps/app-recetas.png"
                    description="Asistente de cocina, recetas e ingredientes"
                    web="https://app-recetas-seven.vercel.app/"
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
