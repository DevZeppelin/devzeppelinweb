import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { contact } from "@/lib/site";

export default function Contact() {
  return (
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
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-full hover:scale-105 transition-transform"
          >
            <FaWhatsapp className="text-xl" /> WhatsApp
          </a>
          <a
            href={contact.mailto}
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-7 py-3.5 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <AiOutlineMail className="text-xl" /> Email
          </a>
        </div>
      </div>
    </section>
  );
}
