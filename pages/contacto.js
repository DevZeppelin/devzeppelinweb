import Head from "next/head";
import emailjs from "emailjs-com"

import Layout from "../components/Layout";
import MainBarButton from "../components/MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Fade from "react-reveal/Fade";

const Contacto = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_sj28bhq', 'template_63hecpe', e.target, 'user_32Nh0XQNE3OeiZzW1g5uH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert("Mensaje enviado correctamente")
  }

  return (
    <div>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/favicon.ico" />
        <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"            
            async
            
          />
      </Head>
      <Layout classContacto={"bg-secundary text-yellow"}>
        <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
          <h1 className="text-4xl font-bold text-yellow uppercase textDark">
            ¡Contactame!
          </h1>
        </div>
        <div className="text-center pt-6 text-lightGray">
          <h2 className="text-2xl pt-6 p-4">¡Animate a dar un paso hacia el futuro!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 md:p-8 ">
            <Fade big>
              <div>
                <a
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
                </a>
              </div>
            </Fade>
            <Fade big>
              <div>
                <a
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
                </a>
              </div>
            </Fade>
          </div>
        </div>


        <section className="pt-16">
          <h2 className="text-center text-yellow text-3xl p-4">Reservá una reunión con nostoros</h2>

          <div
            className="calendly-inline-widget h-20 my-2"
            data-url="https://calendly.com/devzeppelin/reunion-consulta-personal?background_color=0D0D0D&text_color=f7f7f7&primary_color=c9ff00"
            
          ></div>
        
        </section>
       
        <section className="text-yellow-400 bg-yellow-900 body-font relative">
          <div className="absolute inset-0 bg-yellow-900">
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=mendoza, maipu,(dev zeppelin)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <Fade bottom>
              <form onSubmit={sendEmail}>
                <div className="lg:w-1/3 md:w-3/4 bg-yellow-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                  <h2 className="text-black text-xl mb-1 font-extrabold title-font">
                    Contactame!
                  </h2>
                  <p className="leading-relaxed mb-5 font-bold">
                    Enviame tu consulta y me pondré en contacto con vos en
                    breve!
                  </p>
                  <div className="relative mb-4">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-yellow-400 font-bold"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-yellow-800 rounded border border-yellow-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-yellow-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-yellow-400 font-bold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-yellow-800 rounded border border-yellow-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-yellow-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="subject"
                      className="leading-7 text-sm text-yellow-400 font-bold"
                    >
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full bg-yellow-800 rounded border border-yellow-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-yellow-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-yellow-400 font-bold"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-yellow-800 rounded border border-yellow-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-yellow-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                  <button className="btn">Enviar</button>
                  <p className="text-xs text-yellow-400 text-opacity-90 mt-3">
                    Dev Zeppelin. Soluciones tecnológicas para personas comunes.
                  </p>
                </div>
              </form>
            </Fade>
          </div>
        </section>


        <style jsx>{`      

            .calendly-inline-widget {
              min-width : 320px ;
              min-height: 800px ;
              display: 'flex',

              
            }
        `}</style>
      </Layout>
    </div>
  );
};

/* style="" */

export default Contacto;
