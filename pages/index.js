import Head from "next/head";
import Layout from "../components/Layout";
import SectionWelcome from "../components/sections/SectionWelcome";
import SectionFirstFlayer from "../components/sections/SectionFirstFlayer";
import SectionGridImages from "../components/sections/SectionGridImages";
import SectionBackgroundFixed from "../components/sections/SectionBackgroundFixed";
import SectionServices from "../components/sections/SectionServices";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevZeppelin | Hacete ver</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="dev zeppelin, programación, softare, diseño, paginas web, sistemas, soluciones, tecnología, servicios web, paginas rapidas, adminsitrables, webs modernas, velocidad, optimizacion, perfomance, react, next, tailwind, programacion, sitio web, webs unicas "
        />
        <meta
          name="keywords"
          content="dev zeppelin, programación, softare, diseño, paginas web, sistemas, soluciones, tecnología, servicios web, paginas rapidas, adminsitrables, webs modernas, velocidad, optimizacion, perfomance, react, next, tailwind, programacion, sitio web, webs unicas "
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>

      <Layout classHome={"bg-secundary text-yellow"}>

        <SectionWelcome />
        <SectionFirstFlayer />
        <SectionGridImages />
        <SectionBackgroundFixed />       
        <SectionServices />
        
      </Layout>
    </div>
  );
}
