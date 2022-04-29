import Link from "next/dist/client/link";

const MobileNavBar = ({ open }) => {
  return (
    <div
      className="absolute z-50 left-0 font-bold bg-secundary w-3/5 rounded-b-3xl"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="flex text-right flex-col text-base p-2 text-lowContrast mb-5">
        <Link href="/">
          <a className="mr-2  mt-2 px-3 hover:border-yellow">Home 🏠</a>
        </Link>
        <Link href="/quienesSomos">
          <a className="mr-2 mt-5 px-3 hover:border-yellow">Acerca de DZ 🙋‍♂️</a>
        </Link>
        <Link href="/servicios">
          <a className="mr-2 mt-5 px-3 hover:border-yellow">Servicios y Trabajos 🛠</a>
        </Link>        
        <Link href="/blog">
          <a className="mr-2 mt-5 px-3 hover:border-yellow">Blog 🙊</a>
        </Link>        

        <Link href="/contacto">
          <a className="mr-2 mt-5 px-3 hover:border-yellow">Contactame 📞</a>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavBar;
