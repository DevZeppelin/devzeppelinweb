import React, { useEffect, useRef } from "react";
import Link from "next/dist/client/link";

const SectionWelcome = () => {
  let radio1 = useRef();
  let radio2 = useRef();
  let radio3 = useRef();
  let radio4 = useRef();

  useEffect(() => {
    let counter = 1;
    const arrayRadio = [
      radio1.current,
      radio2.current,
      radio3.current,
      radio4.current,
    ];
    arrayRadio[counter - 1].checked = true;

    setInterval(function () {
      arrayRadio[counter].checked = true;
      counter++;
      if (counter > 3) {
        counter = 0;
      }
    }, 5000);

    return () => {};
  }, []);

  return (
    <section>
      <div>
        <div className="flex relative overflow-hidden md:grid md:grid-cols-2 text-base md:text-lg xs:px-2 sm:px-6 md:px-24 bg-yellow background-overlay">
          <div className="first-block text-lightGray space-y-4 md:space-y-5 p-6 md:p-10 my-auto bg-secundary z-40 opacity-80 md:opacity-100 h-full">
            <h1 className="font-yellow text-yellow text-xl md:text-3xl font-prompt">
              Elevá tu marca personal al eXtremo
            </h1>
            <div className="h-1 w-64 bg-yellow  mx-auto"></div>
            <p className="text-base">
              {" "}
              Damos a tu marca excelente presencia en la Web luciendo profesional ante los ojos del mundo.
            </p>

            <p>
              <b>¡Basta de webs viejas y lentas!</b> Utilizamos la última tecnología por lo que nuestras páginas son ultra rápidas y optimizadas.
            </p>
            <p>
              El tiempo es dinero. Elevá tus ventas. ¡Dale a tus usuarios una experiencia increíble!
            </p>            

         
          </div>
          <div className="slider-body flex-wrap absolute bottom-0 left-0 h-full md:relative md:h-auto">
            <div className="slider">
              <div className="slides">
                {/* Radio buttons Start */}
                <input type="radio" name="radio-btn" id="radio1" ref={radio1} />
                <input type="radio" name="radio-btn" id="radio2" ref={radio2} />
                <input type="radio" name="radio-btn" id="radio3" ref={radio3} />
                <input type="radio" name="radio-btn" id="radio4" ref={radio4} />
                {/*Slides images Start*/}
                <div className="slide first">
                  <img src="01.png" alt="" />
                </div>
                <div className="slide">
                  <img src="02.png" alt="" />
                </div>
                <div className="slide">
                  <img src="03.png" alt="" />
                </div>
                <div className="slide">
                  <img src="04.png" alt="" />
                </div>
                {/*Automatic Navigation Start*/}
                <div className="navigation-auto">
                  <div className="auto-btn-1"></div>
                  <div className="auto-btn-2"></div>
                  <div className="auto-btn-3"></div>
                  <div className="auto-btn-4"></div>
                </div>
                {/*Automatic Navigation End*/}
                {/*Manual Navigation Start*/}
                <div className="navigation-manual">
                  <label htmlFor="radio1" className="manual-btn" />
                  <label htmlFor="radio2" className="manual-btn" />
                  <label htmlFor="radio3" className="manual-btn" />
                  <label htmlFor="radio4" className="manual-btn" />
                </div>
                {/*Manual Navigation End*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWelcome;
