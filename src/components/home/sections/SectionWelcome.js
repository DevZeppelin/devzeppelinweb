/* eslint-disable @next/next/no-img-element */
import Link from "next/dist/client/link";
import { useInView } from "../../hooks/useInView";

const SectionWelcome = () => {
  const [textRef, textVisible] = useInView(0.1);
  const [imgRef, imgVisible]   = useInView(0.1);

  return (
    <section className="relative overflow-hidden hero-gradient">

      {/* ── Ambient orbs ── */}
      <div
        className="cyber-orb cyber-orb-a"
        style={{ width: 420, height: 420, background: 'rgba(245,210,68,0.07)', top: '-80px', left: '-100px' }}
      />
      <div
        className="cyber-orb cyber-orb-b"
        style={{ width: 300, height: 300, background: 'rgba(0,212,255,0.04)', bottom: '0px', right: '20%' }}
      />
      <div
        className="cyber-orb cyber-orb-c"
        style={{ width: 240, height: 240, background: 'rgba(245,210,68,0.05)', top: '30%', right: '-60px' }}
      />

      {/* ── Scan sweep ── */}
      <div className="scan-sweep" />

      <div className="relative z-10 flex md:grid md:grid-cols-2 min-h-96">

        {/* Text panel — slides from left */}
        <div
          ref={textRef}
          className={`reveal from-left ${textVisible ? 'visible' : ''} hidden md:flex flex-col justify-center space-y-6 p-10 md:p-14`}
          style={{
            background: 'rgba(8, 8, 8, 0.86)',
            borderRight: '1px solid rgba(245, 210, 68, 0.15)',
          }}
        >
          {/* Corner accent */}
          <span
            className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(245,210,68,0.12) 0%, transparent 55%)' }}
          />

          <div>
            <p
              className="text-xs tracking-widest text-yellow mb-3 uppercase"
              style={{ fontFamily: 'Orbitron, sans-serif', opacity: 0.65 }}
            >
              Dev Zeppelin
            </p>
            <h1
              className="text-yellow text-2xl md:text-4xl font-bold leading-tight"
              style={{ textShadow: '0 0 24px rgba(245,210,68,0.35)' }}
            >
              Identificar tu propósito y explotarlo
            </h1>
          </div>

          <div
            className="w-24 h-px"
            style={{ background: 'linear-gradient(to right, #F5D244, transparent)' }}
          />

          <p className="text-lightGray text-base leading-relaxed">
            Te invito a repensar los objetivos de tu empresa para encontrar la
            estrategia correcta para hacer frente al nuevo mundo empresarial.
          </p>
          <p className="text-lightGray text-base leading-relaxed">
            Sumá presencia en <em className="text-yellow not-italic">internet</em> con el
            asesoramiento correcto. Mostremos tu mejor imagen con toda la tecnología a favor.
          </p>
          <p className="text-lightGray text-base leading-relaxed">
            Hagamos llegar tu negocio a todos esos rincones usando la estrategia indicada.
          </p>

          <div className="pt-2">
            <Link href="/servicios">
              <button className="btn">Algunos trabajos</button>
            </Link>
          </div>

          <span
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(245,210,68,0.3), transparent)' }}
          />
        </div>

        {/* Image — slides from right */}
        <div
          ref={imgRef}
          className={`reveal from-right ${imgVisible ? 'visible' : ''} flex justify-center items-center relative overflow-hidden`}
        >
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.45) 0%, transparent 40%)' }}
          />
          <img
            src="/02.webp"
            alt="dev zeppelin logo hyper webs gino pietrobon"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.85) contrast(1.1)' }}
          />
        </div>

      </div>
    </section>
  );
};

export default SectionWelcome;
