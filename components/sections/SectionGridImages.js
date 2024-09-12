import { DiCodeigniter, DiAndroid, DiCode } from "react-icons/di";
import HoverIconComponent from "../HoverIconComponent";

const SectionGridImages = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8 md:m-24 text-center fadeIn element ">
          <div className="relative">
            <HoverIconComponent file={<DiCodeigniter />} text="Descubrir la estrategia adecuada" />
          </div>
          <div className="relative">
            <HoverIconComponent file={<DiCode />} text="Conquistar el nuevo mundo con la tecnología como aliada"/>
          </div>
          <div className="relative">
            <HoverIconComponent file={<DiAndroid />} text="Toda la fuerza de la innovación y la IA a tu favor" />
          </div>
      </div>
    </section>
  );
};

export default SectionGridImages;
