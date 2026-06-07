import ProyectLinksComponent from "./ProyectLinksComponent";
import { GiMonkey } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import { FiRadio } from "react-icons/fi";
import { GiBattleGear } from "react-icons/gi";
import { BsBriefcaseFill } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";

const ProyectLinks = ({ classAdd }) => {
  return (
    <div
      className={`grid grid-cols-6 ${classAdd} gap-2 text-center justify-between mx-auto px-2 md:px-0  py-2 md:py-2 text-white text-sm`}
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
      <ProyectLinksComponent
        file={<DiAndroid />}
        name="Webs"
        dir="/webs"
      />
      <ProyectLinksComponent
        file={<GiBattleGear />}
        name="Web Apps"
        dir="/apps"
      />
      <ProyectLinksComponent
        file={<FiRadio />}
        name="Radio"
        dir="/almarockera"
      />
    </div>
  );
};

export default ProyectLinks;
