import MainBarButton from "./MainBarButton";

import { FiMail, FiTwitter } from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaPhone
} from "react-icons/fa";
import Link from "next/dist/client/link";

const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6 space-y-8">
        <div className="flex justify-center my-auto">
          <Link href="/">
            <div className="block">
              <img
                src="logo.png"
                alt="development icon logo dev zeppelin webs pages www perfomance "
                height="160"
                width="280"
            
              />
            </div>
          </Link>
        </div>
        <div className="text-lg">
          <h2 className="font-extrabold">¡Contactanos hoy!</h2>
          
          <a
            href="https://api.whatsapp.com/send?phone=5492616708100"
            target="_blank"
            rel="noopener"
          >
            <MainBarButton
              logo={
                <FaWhatsapp className="text-yellow text-2xl flex my-auto m-2" />
              }
              text="Whatsapp, SMS o llamadas"
              description2="+5492616708100"
              
              classType="text-yellow"
            />
          </a>
          <a
            href="mailto:gino.b.pietrobon@gmail.com"
            target="_blank"
            rel="noopener"
          ><MainBarButton
            logo={<FiMail className="text-yellow text-2xl flex my-auto m-2" />}
            text="Correo electrónico"
            description2="gino.b.pietrobon@gmail.com"
            classType="text-yellow"
          /></a>
        </div>

        <div className="text-xl">
          <h2 className="font-extrabold">Síguenos!</h2>
          <div className="flex flex-wrap justify-between m-8 gap-4 text-4xl w-36 ">
          <a
            href="https://api.whatsapp.com/send?phone=5492616708100"
            target="_blank"
            rel="noopener"
          >
            <button
              aria-label="go to my whatsapp"              
              alt="whatsapp-logo"
            >
              <FaWhatsapp className="hover:text-yellow" />
            </button>
          </a>

          <a href="https://www.instagram.com/moonwatcher.dev/"
            target="_blank"
            rel="noopener">
            <button
              aria-label="go to my instagram"
              
              alt="instagram-logo"
            >
              <FaInstagram className="hover:text-yellow" />
            </button>
          </a>

          <a href="https://www.twitter.com/moonwatcher73/"
          target="_blank"
          rel="noopener">
            <button
              aria-label="go to my twitter"
              
              alt="twitter-logo"
            >
              <FiTwitter className="hover:text-yellow" />
            </button>
          </a>

          <a href="https://www.facebook.com/Gini77o"
          target="_blank"
          rel="noopener">
            <button
              aria-label="go to my fabecook"
              
              alt="facebook-logo"
            >
              <FaFacebook className="hover:text-yellow" />
            </button>
          </a>

          
          <a href="https://www.linkedin.com/in/gino-pietrobon"
          target="_blank"
          rel="noopener">
            <button
              aria-label="go to my linked in"
              
              alt="linkedin-logo"
            >
              <FaLinkedinIn className="hover:text-yellow" />
            </button>
          </a>

          <a href="mailto:gino.b.pietrobon@gmail.com"
           target="_blank"
           rel="noopener">
            <button
              aria-label="send me a mail"
             
              alt="gmail-logo"
            >
              <FiMail className="hover:text-yellow" />
            </button>
          </a>
          </div>
        </div>
      </div>
      <div className="p-4 text-sm bg-primary text-lightGray z-50">
        <p>
          Make with &#128153; in Mendoza, Argentina by{" "}
          <a href="https://moonblog.ar" target="_blank" rel="noopener" className="font-bold text-yellow">
            Dev Zeppelin
          </a>
        </p>
         All rights reserved. &copy; &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
