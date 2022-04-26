import { FiMail, FiTwitter } from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  
} from "react-icons/fa";

const TopLeyend = () => {
  return (
    <div className="flex justify-center md:justify-between pt-2 text-lightGray md:bg-darkGray">
      <div className="hidden md:flex px-12">
        <p className="text-sm font-bold tracking-widest my-auto font-righteous uppercase text-yellow">
          Soluciones Tecnológicas
        </p>
      </div>
      <div>
        <div className="text-xl space-x-3 pr-6">
          <a
            href="https://api.whatsapp.com/send?phone=5492616708100"
            target="_blank"
            rel="noreferrer"
          >
            <button aria-label="go to my whatsapp" alt="whatsapp-logo">
              <FaWhatsapp className="hover:text-yellow" />
            </button>
          </a>
          <a
              href="https://www.facebook.com/devzeppelin/"
              target="_blank"
              rel="noreferrer"
            >
              <button aria-label="go to my facebook" alt="facebook-logo">
                <FaFacebook className="hover:text-yellow" />
              </button>
            </a>

          <a
            href="https://www.instagram.com/devzeppelin.ar/"
            target="_blank"
            rel="noreferrer"
          >
            <button aria-label="go to my instagram" alt="instagram-logo">
              <FaInstagram className="hover:text-yellow" />
            </button>
          </a>

         

          <a
            href="mailto:devzeppelin.ar@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <button aria-label="send me a mail" alt="gmail-logo">
              <FiMail className="hover:text-yellow" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopLeyend;
