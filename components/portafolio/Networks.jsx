import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Networks = () => {
  return  <div className="flex justify-center p-6 mx-4 gap-8 text-4xl text-dark ">
  <a
    href="https://www.instagram.com/moonwatcher.dev/"
    target="_blank"
    rel="noreferrer"
  >
    <button aria-label="go to my instagram" alt="instagram-logo">
      <FaInstagram className="hover:text-blue" />
    </button>
  </a>
  <a
    href="mailto:gino.b.pietrobon@gmail.com"
    target="_blank"
    rel="noreferrer"
  >
    <button aria-label="go to my facebook" alt="facebook-logo">
      <AiOutlineMail className="hover:text-blue" />
    </button>
  </a>
  <a
   href="https://api.whatsapp.com/send?phone=5492616708100"
    target="_blank"
    rel="noreferrer"
  >
    <button aria-label="go to my facebook" alt="facebook-logo">
      <FaWhatsapp className="hover:text-blue" />
    </button>
  </a>
</div>;
};

export default Networks;
