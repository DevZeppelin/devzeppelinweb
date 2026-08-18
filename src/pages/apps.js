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
                    title="Academia Aventura"
                    description="App para aprender de todo un poco y complementar la escuela, pensada para chicos y grandes"
                    web="https://anime-math.vercel.app"
                  />
                  <SectionWorkComponent
                    src="/apps/wolfwarrior.png"
                    title="WolfWarrior"
                    description="RPG por turnos que corre directo desde el navegador"
                    web="https://wolfwarrior.vercel.app/"
                  />
                  <SectionWorkComponent
                    src="/apps/ccu.png"
                    title="Cuanto Cada Uno"
                    description="App para sacar las cuentas cuando te juntás a comer con amigos"
                    web="https://cuantocadauno.vercel.app"
                  />
                  <SectionWorkComponent
                    src="/apps/turnon.png"
                    title="MyAgenda"
                    description="App para gestionar turnos de cualquier rubro"
                    web="https://barber-app-psi.vercel.app"
                  />

                  <SectionWorkComponent
                    src="/apps/carta-qr.png"
                    title="FidelizApp"
                    description="Carta QR con sistema de fidelización integrado"
                    web="https://carta-qr-opal.vercel.app/"
                  />
                  <SectionWorkComponent
                    src="/apps/turist.png"
                    title="TuristApp"
                    description="App de ayuda para turistas que visitan Mendoza"
                    web="https://turistapp-kappa.vercel.app/"
                  />
                  <SectionWorkComponent
                    src="/apps/winehouse.png"
                    title="WineHouse"
                    description="App de alquiler de cabañas en Argentina"
                    web="https://winehouse.vercel.app"
                  />
                  <SectionWorkComponent
                    src="/apps/gastapp.png"
                    title="MyEconomist"
                    description="Asistente de ahorro y economía para ayudarte a entender tus finanzas"
                    web="https://bailandoenunapata.vercel.app"
                  />
                  <SectionWorkComponent
                    src="/apps/app-recetas.png"
                    title="AppRecetas"
                    description="Red social de recetas: comidas, lista de compras y para compartir recetas"
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
