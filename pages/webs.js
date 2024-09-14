import Head from "next/head";
import Layout from "../components/Layout";
import SectionWorkComponent from "../components/sections/SectionWorkComponent"


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
              <div className="p-4 md:px-16 mx-auto pt-16 ">
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
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Webs;
