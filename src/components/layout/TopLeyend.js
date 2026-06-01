import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const TopLeyend = ({ toggleNav }) => {
  return (
    <div
      className="flex justify-center md:justify-between items-center px-4 md:px-8 py-2 bg-primary relative"
      style={{ borderBottom: '1px solid rgba(245, 210, 68, 0.1)' }}
    >
      {/* Tagline desktop */}
      <div className="hidden md:flex items-center space-x-3">
        <span
          className="w-6 h-px"
          style={{ background: 'linear-gradient(to right, transparent, #F5D244)' }}
        />
        <p
          className="text-xs font-bold tracking-widest text-yellow uppercase"
          style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.18em' }}
        >
          Tu marca, tu estilo, tu web
        </p>
      </div>

      {/* Hamburger mobile */}
      <div className="md:hidden absolute top-1 right-4 text-2xl text-yellow">
        <button
          onClick={toggleNav}
          aria-label="Menú principal"
          className="transition-all duration-300 hover:text-lowContrast"
          style={{ filter: 'drop-shadow(0 0 6px rgba(245,210,68,0.5))' }}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Social icons */}
      <div className="flex items-center space-x-4 text-lg text-lightGray">
        <a
          href="https://api.whatsapp.com/send?phone=5492616708100"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="transition-all duration-300 hover:text-yellow"
          style={{ transition: 'color 0.3s, filter 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(245,210,68,0.8))'}
          onMouseLeave={e => e.currentTarget.style.filter = 'none'}
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.facebook.com/devzeppelin/"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="transition-all duration-300 hover:text-yellow"
          onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(245,210,68,0.8))'}
          onMouseLeave={e => e.currentTarget.style.filter = 'none'}
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/devzeppelin.com.ar/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="transition-all duration-300 hover:text-yellow"
          onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(245,210,68,0.8))'}
          onMouseLeave={e => e.currentTarget.style.filter = 'none'}
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:devzeppelin.ar@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
          className="transition-all duration-300 hover:text-yellow"
          onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(245,210,68,0.8))'}
          onMouseLeave={e => e.currentTarget.style.filter = 'none'}
        >
          <FiMail />
        </a>
      </div>
    </div>
  );
};

export default TopLeyend;
