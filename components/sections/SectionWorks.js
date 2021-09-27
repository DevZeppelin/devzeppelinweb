import Fade from "react-reveal/Fade";

const SectionWorks = () => {
  return (
    <section>
      <div className="p-4 md:px-16 mx-auto pt-16 ">
        <h2 className="text-center text-3xl text-yellow my-8">
          ¡Algunos de nuestros trabajos!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0">
          <Fade big>
              <div className="p-2 md:p-16">
                  <img
                    src="/responsiveImages/01.png"
                    alt="responsive image mobile tablet notebook widescreen responsive-design"
                    className="w-full  animateImage"
                  />
                  <p className="text-lg text-yellow text-center pt-3 md:pt-8 uppercase font-bold">Página de tecnología</p>
              </div>
          </Fade>
          <Fade big>
          <div className="p-2 md:p-16">
              <img
                src="/responsiveImages/02.png"
                alt="responsive image mobile tablet notebook widescreen responsive-design"
                className="w-full  animateImage"
              />
              <p className="text-lg text-yellow text-center pt-3 md:pt-8 uppercase font-bold">Escuela de programación</p>
          </div>
          </Fade>
          <Fade big>
          <div className="p-2 md:p-16">
              <img
                src="/responsiveImages/03.png"
                alt="responsive image mobile tablet notebook widescreen responsive-design"
                className="w-full  animateImage"
              />
              <p className="text-lg text-yellow text-center pt-3 md:pt-8 uppercase font-bold">Tarjetas de invitación web</p>
          </div>
          </Fade>
          <Fade big>
          <div className="p-2 md:p-16">
              <img
                src="/responsiveImages/04.png"
                alt="responsive image mobile tablet notebook widescreen responsive-design"
                className="w-full  animateImage"
              />
              <p className="text-lg text-yellow text-center pt-3 md:pt-8 uppercase font-bold">Blog personal</p>
          </div>
          </Fade>

          
        </div>
      </div>
      <style jsx>{` 
      
        .animateImage:hover {
            transform: scale(1.3);
            padding: 0;
            transition: 1.5s
        }
        
      `}</style>
    </section>
  );
};

export default SectionWorks;
