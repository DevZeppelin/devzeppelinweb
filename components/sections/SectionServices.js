import { IoIosSpeedometer } from "react-icons/io";
import { BiBookContent } from "react-icons/bi";
import { BsTriangleFill } from "react-icons/bs";
import { CgScreenWide } from "react-icons/cg";
import { useInView } from "../../hooks/useInView";

const services = [
  {
    icon: <IoIosSpeedometer />,
    title: "Velocidad",
    text: "Te ayudo a adaptarte al nuevo mundo que avanza rápido. ¡No hay tiempo que perder!",
    delay: "d1",
  },
  {
    icon: <BiBookContent />,
    title: "Estrategia",
    text: "Te ayudo a descubrir el propósito y definir la misión y visión de tu negocio, para entender a dónde ir y cómo.",
    delay: "d2",
  },
  {
    icon: <BsTriangleFill />,
    title: "Tecnología",
    text: "IA + nuevas tecnologías de punta para mejorar tus procesos y llegar a quienes querés llegar.",
    delay: "d3",
  },
  {
    icon: <CgScreenWide />,
    title: "Diseño e imagen",
    text: "Te ayudo a renovar la imagen de tu marca, para estar a la altura de las exigencias modernas.",
    delay: "d4",
  },
];

const SectionServices = () => {
  const [titleRef, titleVisible] = useInView(0.2);
  const [cardsRef, cardsVisible] = useInView(0.08);

  return (
    <section className="bg-secundary py-20 px-6 md:px-16 cyber-grid-bg relative overflow-hidden">

      {/* Ambient orbs */}
      <div
        className="cyber-orb cyber-orb-a"
        style={{ width: 400, height: 400, background: 'rgba(245,210,68,0.05)', top: '-80px', right: '10%' }}
      />
      <div
        className="cyber-orb cyber-orb-c"
        style={{ width: 280, height: 280, background: 'rgba(0,212,255,0.03)', bottom: '0', left: '5%' }}
      />

      {/* Top/bottom glow lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(245,210,68,0.4), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(245,210,68,0.4), transparent)' }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,210,68,0.05) 0%, transparent 55%)' }}
      />

      {/* Title */}
      <div ref={titleRef} className="text-center mb-14 relative z-10">
        <p
          className={`reveal from-fade d1 ${titleVisible ? 'visible' : ''} text-xs tracking-widest text-yellow mb-3 uppercase`}
          style={{ fontFamily: 'Orbitron, sans-serif', opacity: titleVisible ? 0.65 : 0 }}
        >
          ━━&nbsp; Ventajas &nbsp;━━
        </p>
        <h2
          className={`reveal from-scale d2 ${titleVisible ? 'visible' : ''} text-3xl md:text-4xl font-bold`}
          style={{
            fontFamily: 'Orbitron, sans-serif',
            background: 'linear-gradient(90deg, #F5D244, #f0e870, #F5D244)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 14px rgba(245,210,68,0.4))',
          }}
        >
          ¿Por qué elegir DevZeppelin?
        </h2>
      </div>

      {/* Cards */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
        {services.map(({ icon, title, text, delay }) => (
          <div
            key={title}
            className={`reveal from-bottom ${delay} ${cardsVisible ? 'visible' : ''} glass rounded-xl p-8 flex flex-col items-center text-center space-y-4 cursor-default`}
            style={{ transition: 'box-shadow 0.4s ease, border-color 0.4s ease, transform 0.3s ease, opacity 0.75s cubic-bezier(0.22,1,0.36,1)' }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 32px rgba(245,210,68,0.2), inset 0 0 24px rgba(245,210,68,0.05)';
              e.currentTarget.style.borderColor = 'rgba(245,210,68,0.4)';
              e.currentTarget.style.transform   = 'translateY(-6px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '';
              e.currentTarget.style.borderColor = '';
              e.currentTarget.style.transform   = '';
            }}
          >
            <div
              className="text-6xl text-yellow transition-all duration-300"
              style={{ filter: 'drop-shadow(0 0 6px rgba(245,210,68,0.4))' }}
              onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 18px rgba(245,210,68,0.9))'}
              onMouseLeave={e => e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(245,210,68,0.4))'}
            >
              {icon}
            </div>

            <div
              className="w-10 h-px"
              style={{ background: 'linear-gradient(to right, transparent, #F5D244, transparent)' }}
            />

            <h2
              className="uppercase text-yellow font-bold text-sm tracking-widest"
              style={{ fontFamily: 'Orbitron, sans-serif', textShadow: '0 0 8px rgba(245,210,68,0.4)' }}
            >
              {title}
            </h2>

            <p className="text-lightGray text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionServices;
