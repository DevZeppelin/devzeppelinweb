import Link from "next/dist/client/link";

import MainBarButton from "./MainBarButton";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const TopMainScreen = () => {
  return (
    <div className="flex px-2 md:px-24 text-yellow bg-secundary justify-center md:justify-between py-2">
      <Link href="/">
        <img
          src="logo.png"
          alt="dev zeppelin logo hyper webs gino pietrobon"
          height="200"
          width="200"
        />
      </Link>

      <div className="hidden md:flex justify-between space-x-4 text-center my-auto p-4 text-lg">
        
        <MainBarButton
          logo={<FaWhatsapp className=" text-yellow text-4xl flex my-auto m-3" />}
          text="Whatsapp Chat!"
          
          description2="+5492616708100"
          classType="text-yellow"
        />
        <MainBarButton
          logo={<FiMail className="text-yellow text-4xl flex my-auto m-3" />}
          text="Correo electrónico"
          description1="gino.b.pietrobon@gmail.com"
          classType="text-yellow font-bold"
        />

        <Link href="/contacto">
          <p className="rounded-lg p-4 text-xl my-auto btn">Contactanos</p>
        </Link>
      </div>
    </div>
  );
};

export default TopMainScreen;
