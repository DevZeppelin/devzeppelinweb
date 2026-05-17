import { DiCodeigniter, DiAndroid, DiCode } from "react-icons/di";
import HoverIconComponent from "../HoverIconComponent";
import { useInView } from "../../hooks/useInView";

const cards = [
  {
    icon: <DiCodeigniter />,
    text: "Descubrir la estrategia adecuada según tu propósito",
    delay: "d1",
  },
  {
    icon: <DiCode />,
    text: "Conquistar el nuevo mundo con la tecnología como aliada",
    delay: "d2",
  },
  {
    icon: <DiAndroid />,
    text: "Toda la fuerza de la innovación y la IA a tu favor",
    delay: "d3",
  },
];

const SectionGridImages = () => {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="bg-primary relative overflow-hidden">

      {/* Ambient orb */}
      <div
        className="cyber-orb cyber-orb-b"
        style={{ width: 350, height: 350, background: 'rgba(245,210,68,0.05)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      />

      <div ref={ref} className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 py-16 px-6 md:px-20">
        {cards.map(({ icon, text, delay }) => (
          <div
            key={text}
            className={`reveal from-bottom ${delay} ${visible ? 'visible' : ''}`}
          >
            <HoverIconComponent file={icon} text={text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionGridImages;
