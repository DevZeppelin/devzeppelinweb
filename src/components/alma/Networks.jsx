import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { contact } from "@/lib/site";

const Networks = () => {
  return (
    <div className="flex justify-center p-6 mx-4 gap-8 text-4xl text-alma1">
      <a
        href="https://www.facebook.com/almarockera100"
        target="_blank"
        rel="noreferrer"
      >
        <button aria-label="Facebook de Alma Rockera">
          <FaFacebook className="transition-colors hover:text-white" />
        </button>
      </a>
      <a
        href="mailto:gino.b.pietrobon@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <button aria-label="Enviar un mail a Alma Rockera">
          <AiOutlineMail className="transition-colors hover:text-white" />
        </button>
      </a>
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        <button aria-label="WhatsApp de Alma Rockera">
          <FaWhatsapp className="transition-colors hover:text-white" />
        </button>
      </a>
    </div>
  );
};

export default Networks;
