import Head from "next/head";
import Layout from "@/components/layout/Layout";
import SectionWorkComponent from "@/components/home/sections/SectionWorkComponent"


const Webs = () => {
  return (
    <div>
      <Head>
        <title>Páginas web de muestra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classWebs={"bg-secundary text-yellow"}>
        <div>

          <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
            <h1 className="text-4xl font-bold text-yellow uppercase textDark">
              Páginas Web de muestra
            </h1>
          </div>
          <div>

            <section id="work">
              <div className="p-4 md:px-16 mx-auto pt-16 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <SectionWorkComponent
                    src="/responsiveImages/01.png"
                    description="Anexa Links Kiosko Web"
                    web="www.anexalinks.ar"
                  />

                  <SectionWorkComponent
                    src="/responsiveImages/cuchillos.png"
                    description="Web de cuchillos con catálogo"
                    web="https://cuchillosgalucho.vercel.app/"
                  />
                  <SectionWorkComponent
                    src="/responsiveImages/miami.png"
                    description="Catálogo simple de iphones"
                    web="https://www.miamiphones.com.ar/"
                  />
                  <SectionWorkComponent
                    src="/responsiveImages/iguazu.png"
                    description="Web de apart hotel en Iguazú"
                    web="https://apart-flores.vercel.app/"
                  />
                  <SectionWorkComponent
                    src="/responsiveImages/monoblanco.png"
                    description="Web de cine, minimalista"
                    web="https://www.monoblancofilms.com/"
                  />
                  <SectionWorkComponent
                    src="/responsiveImages/04.png"
                    description="Blog personal"
                    web="devzeppelin.com.ar/blog"
                  />
                  <SectionWorkComponent
                    src="/responsiveImages/portafolio.png"
                    description="Radio Web"
                    web="devzeppelin.com.ar/almarockera"

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

export default Webs;
