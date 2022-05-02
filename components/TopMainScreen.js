/* eslint-disable @next/next/no-img-element */

import Link from "next/dist/client/link";
import MainBarButton from "./MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import ProyectLinks from "./ProyectLinks";

const TopMainScreen = () => {
  return (
    <div className="flex my-4 p-10 md:p-0 px-2 md:px-24 text-yellow bg-secundary justify-center md:justify-between">
      <Link href="/">
        <img
          src="logo.webp"
          alt="dev zeppelin logo hyper webs gino pietrobon"
          width="200"
          height="200"
          className="animate-logo"
        />
      </Link>

      <div className="hidden md:flex justify-between space-x-4 text-center my-auto p-4 text-lg">
        
        <ProyectLinks classAdd="mr-12" />

        <Link href="/contacto">
          <p className="rounded-lg p-4 text-xl my-auto btn">Contactame</p>
        </Link>
      </div>
    </div>
  );
};

export default TopMainScreen;
