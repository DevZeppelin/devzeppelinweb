import Link from "next/link";

const MobileNavBar = ({ open }) => {
  return (
    <div
      className="absolute z-50 top-16 right-0 font-bold bg-secundary w-3/5 rounded-b-3xl border-2 border-yellow"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="flex text-right flex-col text-base p-2 text-lowContrast mb-5">
        <Link href="/">
          <span className="mr-2  mt-2 px-3 hover:border-yellow">Home 🏠</span>
        </Link>
        <Link href="/webs">
          <span className="mr-2 mt-5 px-3 hover:border-yellow">Webs 🕸</span>
        </Link>
        <Link href="/apps">
          <span className="mr-2 mt-5 px-3 hover:border-yellow">Apps 🐱‍👤</span>
        </Link>
        <Link href="/servicios">
          <span className="mr-2 mt-5 px-3 hover:border-yellow">Servicios 🛠</span>
        </Link>
        <Link href="/quienesSomos">
          <span className="mr-2 mt-5 px-3 hover:border-yellow">Acerca de DZ 🙋‍♂️</span>
        </Link>

        <Link href="/contacto">
          <span className="mr-2 mt-5 px-3 hover:border-yellow">Contactame 📞</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavBar;
