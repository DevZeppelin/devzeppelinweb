import Link from "next/dist/client/link";
import { useInView } from "@/hooks/useInView";

const SectionBackgroundFixed = () => {
  const [ref, visible] = useInView(0.15);

  return (
    <section className="relative overflow-hidden">
      <div className="relative p-8 md:p-32 py-24 bg-cover bg-hero-bigger bg-right bg-fixed grid grid-cols-1 md:grid-cols-2">

        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(8,8,8,0.9) 0%, rgba(16,16,28,0.78) 50%, rgba(8,8,8,0.55) 100%)',
          }}
        />

        {/* Scanlines texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)',
          }}
        />

        {/* Animated border accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent, rgba(245,210,68,0.5), transparent)' }}
        />

        <div ref={ref} className="relative z-10 space-y-6">

          <p
            className={`reveal from-fade d1 ${visible ? 'visible' : ''} text-xs tracking-widest text-yellow uppercase`}
            style={{ fontFamily: 'Orbitron, sans-serif', opacity: visible ? 0.7 : 0 }}
          >
            ━━&nbsp; Misión &nbsp;━━
          </p>

          <h2
            className={`reveal from-left d2 ${visible ? 'visible' : ''} text-3xl md:text-4xl font-bold`}
            style={{
              fontFamily: 'Orbitron, sans-serif',
              background: 'linear-gradient(90deg, #F5D244, #f0e870)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 10px rgba(245,210,68,0.4))',
            }}
          >
            Conquista de clientes
          </h2>

          <div
            className={`reveal from-left d3 ${visible ? 'visible' : ''} w-16 h-px`}
            style={{ background: 'linear-gradient(to right, #F5D244, transparent)' }}
          />

          <div
            className="space-y-3 text-base text-lightGray"
            style={{ textShadow: '1px 2px 8px rgba(0,0,0,0.9)' }}
          >
            <p className={`reveal from-bottom d3 ${visible ? 'visible' : ''}`}>
              El <strong className="text-yellow">propósito</strong> es promocionar tu negocio
              por medio de la tecnología.
            </p>
            <p className={`reveal from-bottom d4 ${visible ? 'visible' : ''}`}>
              Te ayudo a definir la estrategia de propaganda adecuada y el uso de tecnologías
              que mejoren tus procesos.
            </p>
            <p className={`reveal from-bottom d5 ${visible ? 'visible' : ''}`}>
              También te invito a repensar el propósito y objetivos de tu negocio, mirando
              hacia el futuro.
            </p>
          </div>

          <div className={`reveal from-bottom d5 ${visible ? 'visible' : ''} pt-2`}>
            <Link href="/contacto">
              <button className="btn">Contactame</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBackgroundFixed;
