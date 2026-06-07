/* eslint-disable @next/next/no-img-element */
import Link from "next/dist/client/link";
import { useInView } from "@/hooks/useInView";

const SectionWelcome = () => {
  const [textRef, textVisible] = useInView(0.1);
  const [mobileImgRef, mobileImgVisible] = useInView(0.1);
  const [mobileTextRef, mobileTextVisible] = useInView(0.1);

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

      {/* ════════════════ DESKTOP ════════════════ */}
      <div className="hidden md:block relative z-10">

        {/* Image — full-bleed background with fixed parallax */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/02.webp')",
            backgroundAttachment: 'fixed',
            backgroundPosition: 'right center',
            backgroundSize: 'cover',
          }}
        />
        {/* Subtle darkness over entire image */}
        <div className="absolute inset-0 pointer-events-none h-96" style={{ background: 'rgba(0,0,0,0.22)' }} />

        {/* Text panel — gradient negro sólido → transparente */}
        <div
          ref={textRef}
          className={`reveal from-left ${textVisible ? 'visible' : ''} relative z-10 flex flex-col justify-center space-y-5 p-14 h-full`}
          style={{
            maxWidth: '56%',
            background:
              'linear-gradient(to right, rgba(8,8,8,1) 0%, rgba(8,8,8,0.95) 45%, rgba(8,8,8,0.6) 72%, transparent 100%)',
          }}
        >
          <span
            className="absolute top-0 left-0 w-24 h-full pointer-events-none"
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
              className="text-yellow text-3xl md:text-4xl font-bold leading-tight"
              style={{ textShadow: '0 0 24px rgba(245,210,68,0.35)' }}
            >
              Identificar tu propósito y explotarlo
            </h1>
          </div>

          <div
            className="w-24 h-px"
            style={{ background: 'linear-gradient(to right, #F5D244, transparent)' }}
          />

          <p className="text-lightGray text-sm leading-relaxed">
            Te invito a repensar los objetivos de tu empresa para encontrar la
            estrategia correcta para hacer frente al nuevo mundo empresarial.
          </p>
          <p className="text-lightGray text-sm leading-relaxed">
            Sumá presencia en <em className="text-yellow not-italic">internet</em> con el
            asesoramiento correcto. Mostremos tu mejor imagen con toda la tecnología a favor.
          </p>

          <div className="pt-1">
            <Link href="/servicios">
              <button className="btn">Algunos trabajos</button>
            </Link>
          </div>

          <span
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(245,210,68,0.3), transparent)' }}
          />
        </div>
      </div>

      {/* ════════════════ MOBILE ════════════════ */}
      <div className="md:hidden flex flex-col relative z-10">

        {/* Image with title overlay */}
        <div
          ref={mobileImgRef}
          className={`reveal from-right ${mobileImgVisible ? 'visible' : ''} relative overflow-hidden`}
          style={{ height: '260px' }}
        >
          <img
            src="/02.webp"
            alt="dev zeppelin logo hyper webs gino pietrobon"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.65) contrast(1.1)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, rgba(8,8,8,0.1) 20%, rgba(8,8,8,0.75) 70%, rgba(8,8,8,1) 100%)',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 z-10">
            <p
              className="text-xs tracking-widest text-yellow mb-1 uppercase"
              style={{ fontFamily: 'Orbitron, sans-serif', opacity: 0.65 }}
            >
              Dev Zeppelin
            </p>
            <h1
              className="text-yellow text-xl font-bold leading-tight"
              style={{ textShadow: '0 0 20px rgba(245,210,68,0.4)' }}
            >
              Identificar tu propósito y explotarlo
            </h1>
          </div>
        </div>

        {/* Text content below image */}
        <div
          ref={mobileTextRef}
          className={`reveal from-left ${mobileTextVisible ? 'visible' : ''} px-5 pt-4 pb-8 space-y-3`}
          style={{ background: 'rgba(8,8,8,0.97)' }}
        >
          <div
            className="w-14 h-px mb-1"
            style={{ background: 'linear-gradient(to right, #F5D244, transparent)' }}
          />
          <p className="text-lightGray text-sm leading-relaxed">
            Te invito a repensar los objetivos de tu empresa para encontrar la
            estrategia correcta para hacer frente al nuevo mundo empresarial.
          </p>
          <p className="text-lightGray text-sm leading-relaxed">
            Sumá presencia en <em className="text-yellow not-italic">internet</em> con el
            asesoramiento correcto. Mostremos tu mejor imagen con toda la tecnología a favor.
          </p>
          <p className="text-lightGray text-sm leading-relaxed">
            Hagamos llegar tu negocio a todos esos rincones usando la estrategia indicada.
          </p>
          <div className="pt-3">
            <Link href="/servicios">
              <button className="btn w-full">Algunos trabajos</button>
            </Link>
          </div>
        </div>

      </div>

    </section >
  );
};

export default SectionWelcome;
