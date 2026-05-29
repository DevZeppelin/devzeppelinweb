import { useInView } from "@/hooks/useInView";

const SectionFirstFlayer = () => {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="relative overflow-hidden">
      <div
        className="relative py-12 px-8 md:px-32 text-center"
        style={{
          background: 'linear-gradient(135deg, #0f0f18 0%, #1a1a28 50%, #0f0f18 100%)',
          borderTop: '1px solid rgba(245, 210, 68, 0.2)',
          borderBottom: '1px solid rgba(245, 210, 68, 0.2)',
        }}
      >
        {/* Glow background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(245,210,68,0.07) 0%, transparent 65%)' }}
        />

        {/* Accent lines */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(245,210,68,0.55), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(245,210,68,0.55), transparent)' }}
        />

        <div ref={ref} className="relative z-10">
          <p
            className={`reveal from-fade d1 ${visible ? 'visible' : ''} text-xs tracking-widest text-yellow mb-3 uppercase`}
            style={{ fontFamily: 'Orbitron, sans-serif', opacity: visible ? 0.65 : 0 }}
          >
            ━━&nbsp; Propuesta de valor &nbsp;━━
          </p>

          <h1
            className={`reveal from-scale d2 ${visible ? 'visible' : ''} font-bold text-xl md:text-3xl tracking-wide uppercase`}
            style={{
              fontFamily: 'Orbitron, sans-serif',
              background: 'linear-gradient(90deg, #F5D244, #f0e870, #F5D244)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 14px rgba(245,210,68,0.45))',
            }}
          >
            TecnologIA y estrategia para mejorar tu negocio
          </h1>

          <p className={`reveal from-bottom d3 ${visible ? 'visible' : ''} text-lightGray md:text-lg mt-4`}>
            Subite al tren del futuro.{' '}
            <span className="text-yellow font-semibold">Tecnología + IA + Ideas + Marketing</span>
            {' '}→ Clientes felices
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFirstFlayer;
