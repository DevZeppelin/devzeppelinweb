import Fade from "react-reveal/Fade";
import SectionWorkComponent from "./SectionWorkComponent";

const SectionWorks = () => {
  return (
    <section id="work">
      <div className="p-4 md:px-16 mx-auto pt-16 ">
        <h2 className="text-center text-3xl text-yellow my-8 pb-6">
          ¡Algunos de nuestros trabajos!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0">
          <Fade bottom>
            <SectionWorkComponent
              src="/responsiveImages/01.png"
              description="Empresa de tecnología"
              web="www.tecnicosya.com.ar"
            />
          </Fade>
          <Fade bottom>
            <SectionWorkComponent
              src="/responsiveImages/02.png"
              description="Escuela de Programación"
              web="www.code-obrero.vercel.app"
            />
          </Fade>
          <Fade bottom>
            <SectionWorkComponent
              src="/responsiveImages/03.png"
              description="Tarjeta de invitación Web"
              web="devzeppelin.github.io/InvitacionWeb"
            />
          </Fade>
          <Fade bottom>
            <SectionWorkComponent
              src="/responsiveImages/04.png"
              description="Blog Personal"
              web="www.moonblog.ar"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default SectionWorks;
