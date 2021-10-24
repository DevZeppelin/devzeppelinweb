import Image from 'next/image'


const WhatsappIcon = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5492616708100"
      target="_blank"
      rel="noopener"
    >
      <div className="fixed bottom-3 md:bottom-10 right-3 md:right-10 cursor-pointer z-40 h-16 w-16">
        <Image
          src="/whatsapp.webp"
          alt="whatsapp icon logo dev zeppelin webs pages www perfomance "
          layout="fill"
          objectFit="cover"
             
        />
      </div>
    </a>
  );
};

export default WhatsappIcon;
