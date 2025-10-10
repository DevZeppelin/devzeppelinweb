import Head from "next/head";

import Layout from "../components/Layout";
import MainBarButton from "../components/MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contacto = () => {


  return (
    <div>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classContacto={"bg-secundary text-yellow"}>
        <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
          <h1 className="text-4xl font-bold text-yellow uppercase textDark">
            ¡Contactame!
          </h1>
        </div>
        <div className="text-center pt-6 text-lightGray">
          <h2 className="text-2xl pt-6 p-4">¡Animate span dar un paso hacia el futuro!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 md:p-8 ">
            <div>
              <span
                href="https://api.whatsapp.com/send?phone=5492616708100"
                target="_blank"
                rel="noreferrer"
              >
                <MainBarButton
                  logo={
                    <FaWhatsapp className="text-yellow text-2xl md:text-6xl flex my-auto m-4" />
                  }
                  text="Whatsapp SMS y llamadas"
                  description2="+5492616708100"
                  classType="text-yellow text-2xl my-2"
                />
              </span>
            </div>
            <div>
              <span
                href="mailto:devzeppelin.ar@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MainBarButton
                  logo={
                    <FiMail className="text-yellow text-2xl md:text-6xl flex my-auto m-4" />
                  }
                  text="Correo electrónico"
                  description2="devZeppelin.ar@gmail.com"
                  classType="text-yellow text-xl my-2"
                />
              </span>
            </div>
          </div>
        </div>

      </Layout>
    </div>
  );
};

/* style="" */

export default Contacto;
