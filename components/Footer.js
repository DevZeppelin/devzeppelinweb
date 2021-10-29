import MainBarButton from "./MainBarButton";
import Image from "next/image";

import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/dist/client/link";

const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6 space-y-8">
        <div className="flex justify-center my-auto">
          <Link href="/">
            <div className="block">
              <Image
                src="/logo.webp"
                alt="development icon logo dev zeppelin webs pages www perfomance "
                height={200}
                width={200}                
              />
            </div>
    

          </Link>
        </div>
        <div className="text-lg">
          <h2 className="font-extrabold">¡Contactanos hoy!</h2>

          <a
            href="https://api.whatsapp.com/send?phone=5492616708100"
            target="_blank"
            
            rel="noreferrer"
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
            href="mailto:devzeppelin.ar@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MainBarButton
              logo={
                <FiMail className="text-yellow text-2xl flex my-auto m-2" />
              }
              text="Correo electrónico"
              description2="devZeppelin.ar@gmail.com"
              classType="text-yellow"
            />
          </a>
        </div>

        <div className="text-xl">
          <h2 className="font-extrabold">Síguenos!</h2>
          <div className="flex flex-wrap justify-start p-6 md:p-10m md:pr-30 mx-4 gap-4 text-4xl w-44 md:w-44 ">
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
              href="https://www.facebook.com/devzeppelin/"
              target="_blank"
              rel="noreferrer"
            >
              <button aria-label="go to my facebook" alt="facebook-logo">
                <FaFacebook className="hover:text-yellow" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 text-sm bg-primary text-lightGray z-50">
        <p>
          Make with &#128153; in Mendoza, Argentina by{" "}
          <a
            href="https://devzepelin.ar"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-yellow"
          >
            Dev Zeppelin
          </a>
        </p>
        All rights reserved. &copy; &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
