import ProyectLinksComponent from "./ProyectLinksComponent";
import ProyectLinksComponentExtern from "./ProyectLinksComponentExtern";

import { GiMonkey } from "react-icons/gi";
import { FaSchool, FaWineGlassAlt } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";

const ProyectLinks = ({ classAdd }) => {
  return (
    <div
      className={`grid grid-cols-4 ${classAdd} gap-3 text-center justify-between mx-auto px-6 md:px-0  py-2 md:py-2 text-white text-sm`}
    >
      <ProyectLinksComponent file={<GiMonkey />} name="Blog" dir="/blog" />
      <ProyectLinksComponent
        file={<FaSchool />}
        name="Escuela"
        dir="/escuela"
      />
      <ProyectLinksComponent
        file={<BsBriefcaseFill />}
        name="Portafolio"
        dir="/portafolio"
      />
      <ProyectLinksComponentExtern
        file={<FaWineGlassAlt />}
        name="CuantoCadaUno"
        dir="https://cuantocadauno.vercel.app"
      />
    </div>
  );
};

export default ProyectLinks;
