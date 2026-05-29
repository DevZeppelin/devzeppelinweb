/* eslint-disable @next/next/no-img-element */
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { contact } from "@/lib/site";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center relative">
        {/* Texto */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-yellow bg-yellow/10 border border-yellow/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
            Consultame para nuevos proyectos
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
            Desarrollador <strong className="text-white">Python</strong> con 4
            años automatizando procesos críticos en Coca-Cola Andina.
            Especialista en <strong className="text-white">RPA</strong>,{" "}
            <strong className="text-white">SAP</strong> e{" "}
            <strong className="text-white">integraciones con IA</strong>.
            Construyo soluciones que ahorran tiempo y hacen crecer negocios.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-yellow text-primary font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform"
            >
              <FaWhatsapp className="text-xl" /> Hablemos
            </a>
            <a
              href={contact.mailto}
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-6 py-3 rounded-full hover:bg-white/5 transition-colors"
            >
              <AiOutlineMail className="text-xl" /> Escribime
            </a>
          </div>

          <SocialLinks className="mt-8 text-2xl text-white/50" />
        </div>

        {/* Foto */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow rounded-full blur-2xl opacity-30 scale-110" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full ring-4 ring-yellow overflow-hidden bg-secundary">
              {/* TODO: reemplazá por tu foto real en /public/portafolio/gino.jpg */}
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
  );
}
