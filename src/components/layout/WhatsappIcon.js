/* eslint-disable @next/next/no-img-element */
import { contact } from "@/lib/site";

const WhatsappIcon = () => {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
    >
      <div className="fixed bottom-3 md:bottom-10 right-3 md:right-10 cursor-pointer z-40 h-16 w-16">
        <img
          src="/whatsapp.webp"
          alt="whatsapp icon logo dev zeppelin webs pages www perfomance "

        />
      </div>
    </a>
  );
};

export default WhatsappIcon;
