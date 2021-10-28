import Link from "next/dist/client/link";
import Image from 'next/image'

import MainBarButton from "./MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const TopMainScreen = () => {
  return (
    <div className="flex px-2 md:px-24 text-yellow bg-secundary justify-center md:justify-between py-2">
      <Link href="/">
        <div className=''>
        <Image
            src='/logo.png'
            alt='dev zeppelin logo hyper webs gino pietrobon'
            layout='fixed' 
            objectFit='cover'
            width={200}
            height={200}
          />
        </div>
        
      </Link>

      <div className="hidden md:flex justify-between space-x-4 text-center my-auto p-4 text-lg">
        <a
          href="https://api.whatsapp.com/send?phone=5492616708100"
          target="_blank"
          rel="noreferrer"
        >
          <MainBarButton
            logo={
              <FaWhatsapp className=" text-yellow text-4xl flex my-auto m-3" />
            }
            text="Whatsapp Chat!"
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
            logo={<FiMail className="text-yellow text-4xl flex my-auto m-3" />}
            text="Correo electrónico"
            description1="devzeppelin.ar@gmail.com"
            classType="text-yellow font-bold"
          />
        </a>

        <Link href="/contacto">
          <p className="rounded-lg p-4 text-xl my-auto btn">Contactanos</p>
        </Link>
      </div>
    </div>
  );
};

export default TopMainScreen;
