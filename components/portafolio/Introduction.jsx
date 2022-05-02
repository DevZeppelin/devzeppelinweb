/* eslint-disable @next/next/no-img-element */
import React from "react";

const Introduction = () => {
  return (
    <div className="text-center text-lg max-w-7xl px-6 md:px-16 mx-auto mt-16 font-medium grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-2">
      <div>
        <img src="../portafolio/icons/me.png" className="mx-auto" alt="gino pietrobon portfolio image" />

        <p className="p-6">
          ¡Hola! Mi nombre es <strong>Gino Pietrobon</strong>, soy <i>Técnico Universitario en Redes y Telecomunicaciones</i>, y sueño con trabajar aportando valor a un equipo tecnológico
        </p>
      </div>
      <div>
        <img src="../portafolio/icons/js.png" className="mx-auto" alt="gino pietrobon portfolio image" />
        <p className="p-6">
          Mi lenguaje de programación es <strong>JavaScript</strong>, y hoy trabajo con la librería <strong>React.js</strong> y su framework <strong>Next.js</strong> construyendo sitios web de altísimo <i>perfomance</i>
        </p>
      </div>
      <div>
        <img src="../portafolio/icons/react.png" className="mx-auto" alt="gino pietrobon portfolio image" />
        <p className="p-6">
          Mi <strong>inglés</strong> es <i>intermedio-avanzado</i>. Me gusta leer libros de tecnología en inglés, y nunca parar de perfeccionarlo 
        </p>
      </div>
      <div>
        <img src="../portafolio/icons/design.png" className="mx-auto" alt="gino pietrobon portfolio image" />
        <p className="p-6">
          ¡Soy muy creativo!
          Para el diseño de mis webs utilizo <strong>Tailwind CSS</strong>.
          Me encanta el diseño, los colores y trabajar con <strong>Adobe Photoshop</strong>.{" "}
        </p>
      </div>
    </div>
  );
};

export default Introduction;
