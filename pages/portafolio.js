/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

/* ----------------------------------------------------------------- */
/*  Datos                                                            */
/* ----------------------------------------------------------------- */

const experiencia = [
  {
    rol: "CEO & Fundador",
    empresa: "Dev Zeppelin",
    periodo: "Actualidad",
    descripcion:
      "Lidero el desarrollo de soluciones digitales a medida: sitios web de alto rendimiento, automatizaciones e integraciones con inteligencia artificial para empresas y emprendimientos.",
  },
  {
    rol: "CTO",
    empresa: "Anexa Links",
    periodo: "Actualidad",
    descripcion:
      "Dirijo la estrategia y arquitectura tecnológica, definiendo el stack, los procesos de desarrollo y la incorporación de IA en los productos de la compañía.",
  },
  {
    rol: "Analista & Desarrollador Python",
    empresa: "Coca-Cola Andina",
    periodo: "4 años",
    descripcion:
      "Desarrollo de automatizaciones (RPA) con Python y Automation Anywhere, integraciones con SAP y optimización de procesos de negocio críticos a gran escala.",
  },
];

const skills = [
  "Python",
  "Automation Anywhere",
  "RPA",
  "SAP",
  "Integraciones con IA",
  "Claude Code",
  "Automatización de procesos",
  "React.js / Next.js",
  "JavaScript",
  "Tailwind CSS",
];

const stats = [
  { valor: "4+", label: "Años en automatización" },
  { valor: "3", label: "Roles de liderazgo & desarrollo" },
  { valor: "∞", label: "Procesos optimizados" },
];

const WHATSAPP = "https://api.whatsapp.com/send?phone=5492616708100";
const EMAIL = "mailto:gino.b.pietrobon@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/gino-pietrobon/";
const INSTAGRAM = "https://www.instagram.com/moonwatcher.dev/";
const GITHUB = "https://github.com/DevZeppelin";

/* ----------------------------------------------------------------- */
/*  Página                                                           */
/* ----------------------------------------------------------------- */

export default function Portafolio() {
  return (
    <div className="bg-primary text-white min-h-screen font-body antialiased">
      <Head>
        <title>Gino Pietrobon · Portfolio</title>
        <meta
          name="description"
          content="Gino Pietrobon — CEO de Dev Zeppelin, CTO de Anexa Links. Desarrollador Python, automatización (RPA), SAP e integraciones con IA."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ---------- Nav ---------- */}
      <nav className="sticky top-0 z-50 bg-primary/80 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-extrabold tracking-tight text-lg">
            Gino<span className="text-yellow">.</span>
          </span>
          <div className="flex items-center gap-5 text-sm">
            <Link
              href="/"
              className="hidden sm:inline text-white/60 hover:text-white transition-colors"
            >
              DevZeppelin.com.ar
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="bg-yellow text-primary font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform"
            >
              Contratame
            </a>
          </div>
        </div>
      </nav>

      {/* ---------- Hero ---------- */}
      <header className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center relative">
          {/* Texto */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-yellow bg-yellow/10 border border-yellow/30 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
              Disponible para nuevos proyectos
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Gino
              <br />
              <span className="text-yellow">Pietrobon</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/70 font-semibold">
              CEO en <span className="text-white">Dev Zeppelin</span> · CTO en{" "}
              <span className="text-white">Anexa Links</span>
            </p>

            <p className="mt-5 text-base md:text-lg text-white/60 max-w-xl leading-relaxed">
              Desarrollador <strong className="text-white">Python</strong> con
              4 años automatizando procesos críticos en Coca-Cola Andina.
              Especialista en <strong className="text-white">RPA</strong>,{" "}
              <strong className="text-white">SAP</strong> e{" "}
              <strong className="text-white">integraciones con IA</strong>.
              Construyo soluciones que ahorran tiempo y hacen crecer negocios.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-yellow text-primary font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform"
              >
                <FaWhatsapp className="text-xl" /> Hablemos
              </a>
              <a
                href={EMAIL}
                className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-6 py-3 rounded-full hover:bg-white/5 transition-colors"
              >
                <AiOutlineMail className="text-xl" /> Escribime
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-2xl text-white/50">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-yellow transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-yellow transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-yellow transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow rounded-full blur-2xl opacity-30 scale-110" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full ring-4 ring-yellow overflow-hidden bg-secundary">
                {/* TODO: reemplazá esta imagen por tu foto real en /public/portafolio/gino.jpg */}
                <img
                  src="/portafolio/me.jpeg"
                  alt="Gino Pietrobon"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-2 -left-2 bg-yellow text-primary text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg">
                Python · IA · RPA
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Stats ---------- */}
      <section className="border-y border-white/10 bg-secundary/40">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl md:text-5xl font-extrabold text-yellow">
                {s.valor}
              </p>
              <p className="mt-1 text-xs md:text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Experiencia ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Experiencia<span className="text-yellow">.</span>
        </h2>
        <div className="mt-10 space-y-4">
          {experiencia.map((e) => (
            <div
              key={e.empresa}
              className="group relative rounded-2xl border border-white/10 bg-secundary/40 p-6 md:p-8 hover:border-yellow/50 transition-colors"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl md:text-2xl font-bold">
                  {e.rol}{" "}
                  <span className="text-yellow">· {e.empresa}</span>
                </h3>
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  {e.periodo}
                </span>
              </div>
              <p className="mt-3 text-white/60 leading-relaxed max-w-3xl">
                {e.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="bg-secundary/40 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Stack & habilidades<span className="text-yellow">.</span>
          </h2>
          <p className="mt-3 text-white/50 max-w-2xl">
            Tecnologías y herramientas con las que trabajo todos los días.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-yellow/30 text-white/90 font-semibold px-4 py-2 rounded-full hover:bg-yellow hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA Contacto ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-yellow text-primary p-10 md:p-16 text-center">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
          <h2 className="relative text-3xl md:text-5xl font-extrabold tracking-tight">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="relative mt-4 text-base md:text-lg font-medium text-primary/80 max-w-xl mx-auto">
            Automatizo procesos, integro IA y construyo productos digitales que
            generan resultados. Charlemos sin compromiso.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-full hover:scale-105 transition-transform"
            >
              <FaWhatsapp className="text-xl" /> WhatsApp
            </a>
            <a
              href={EMAIL}
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-7 py-3.5 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <AiOutlineMail className="text-xl" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <span>© {new Date().getFullYear()} Gino Pietrobon</span>
          <div className="flex items-center gap-5 text-lg">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-yellow transition-colors">
              <FaLinkedin />
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-yellow transition-colors">
              <FaGithub />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-yellow transition-colors">
              <FaInstagram />
            </a>
          </div>
          <Link href="/" className="hover:text-white transition-colors">
            Powered by Dev Zeppelin 🐵
          </Link>
        </div>
      </footer>

      <style global jsx>{`
        html {
          background: #0d0d0d;
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: "Poppins", Heebo, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
