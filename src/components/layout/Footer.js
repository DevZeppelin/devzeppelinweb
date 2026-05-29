/* eslint-disable @next/next/no-img-element */
import MainBarButton from "@/components/ui/MainBarButton";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/dist/client/link";
import ProyectLinks from "./ProyectLinks";

const Footer = () => {
  return (
    <footer className="bg-primary" style={{ borderTop: '1px solid rgba(245, 210, 68, 0.2)' }}>

      {/* Top glow line */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(245,210,68,0.6), transparent)',
          marginBottom: '0',
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12 cyber-grid-bg">

        {/* Logo */}
        <div className="flex justify-center items-center">
          <Link href="/">
            <div
              className="cursor-pointer transition-all duration-300"
              style={{ filter: 'drop-shadow(0 0 8px rgba(245,210,68,0.3))' }}
              onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 18px rgba(245,210,68,0.6))'}
              onMouseLeave={e => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(245,210,68,0.3))'}
            >
              <img
                src="/logo.webp"
                alt="development icon logo dev zeppelin webs pages"
                width="180"
                height="180"
              />
            </div>
          </Link>
        </div>

        {/* Contact */}
        <div>
          <h2
            className="font-extrabold text-yellow mb-4 text-sm tracking-widest uppercase"
            style={{ fontFamily: 'Orbitron, sans-serif', textShadow: '0 0 8px rgba(245,210,68,0.5)' }}
          >
            Contactame
          </h2>
          <div className="cyber-line mb-4" />

          <a
            href="https://api.whatsapp.com/send?phone=5492616708100"
            target="_blank"
            rel="noreferrer"
          >
            <MainBarButton
              logo={<FaWhatsapp className="text-yellow text-2xl flex my-auto m-2" />}
              text="Whatsapp, SMS o llamadas"
              description2="+5492616708100"
              classType="text-yellow text-sm"
            />
          </a>

          <a
            href="mailto:devzeppelin.ar@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MainBarButton
              logo={<FiMail className="text-yellow text-2xl flex my-auto m-2" />}
              text="Correo electrónico"
              description2="devZeppelin.ar@gmail.com"
              classType="text-yellow text-sm"
            />
          </a>
        </div>

        {/* Social + Project links */}
        <div>
          <h2
            className="font-extrabold text-yellow mb-4 text-sm tracking-widest uppercase"
            style={{ fontFamily: 'Orbitron, sans-serif', textShadow: '0 0 8px rgba(245,210,68,0.5)' }}
          >
            Seguime
          </h2>
          <div className="cyber-line mb-4" />

          <div className="flex space-x-5 mb-6 text-3xl text-lightGray">
            <a
              href="https://www.instagram.com/devzeppelin.ar/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-all duration-300 hover:text-yellow"
              onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(245,210,68,0.8))'}
              onMouseLeave={e => e.currentTarget.style.filter = 'none'}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/devzeppelin/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition-all duration-300 hover:text-yellow"
              onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(245,210,68,0.8))'}
              onMouseLeave={e => e.currentTarget.style.filter = 'none'}
            >
              <FaFacebook />
            </a>
          </div>

          <ProyectLinks classAdd="mr-2 md:mr-8" />
        </div>

      </div>

      {/* Bottom bar */}
      <div
        className="px-8 py-4 text-xs text-gray"
        style={{ borderTop: '1px solid rgba(245, 210, 68, 0.08)' }}
      >
        <p>
          Made with &#128153; in Mendoza, Argentina by Gino from{" "}
          <span className="font-bold text-yellow" style={{ textShadow: '0 0 6px rgba(245,210,68,0.4)' }}>
            Dev Zeppelin
          </span>
        </p>
        <p className="text-gray mt-1">All rights reserved &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
