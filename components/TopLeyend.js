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
          webs 100% perfomance
        </p>
      </div>
      <div>
        <div className="text-xl space-x-3 pr-6">
          <a
            href="https://api.whatsapp.com/send?phone=5492616708100"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="go to my whatsapp" alt="whatsapp-logo">
              <FaWhatsapp className="hover:text-yellow" />
            </button>
          </a>
          <a
              href="https://www.facebook.com/devzeppelin/"
              target="_blank"
              rel="noopener"
            >
              <button aria-label="go to my facebook" alt="facebook-logo">
                <FaFacebook className="hover:text-yellow" />
              </button>
            </a>

          <a
            href="https://www.instagram.com/moonwatcher.dev/"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="go to my instagram" alt="instagram-logo">
              <FaInstagram className="hover:text-yellow" />
            </button>
          </a>

          <a
            href="https://www.twitter.com/moonwatcher73/"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="go to my twitter" alt="twitter-logo">
              <FiTwitter className="hover:text-yellow" />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/gino-pietrobon"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="go to my linked in" alt="linkedin-logo">
              <FaLinkedinIn className="hover:text-yellow" />
            </button>
          </a>

          <a
            href="mailto:gino.b.pietrobon@gmail.com"
            target="_blank"
            rel="noopener"
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
