import Link from "next/dist/client/link";

const NavBar = ({ classHome, classQuienesSomos, classWebs, classApps, classServicios, classContacto }) => {
  return (
    <div className="flex md:py-0 justify-between align-middle px-0 font-bold bg-yellow text-primary text-xl my-auto">
      <div className="hidden md:flex h-24 justify-center align-middle items-center">

        <Link href="/">
          <span className={`px-3 hover:bg-secundary hover:text-yellow ml-24 py-9 ${classHome}`}>Home</span>
        </Link>
        <Link href="/webs">
          <span className={`px-3 hover:bg-secundary hover:text-yellow py-9 ${classWebs}`}>Webs</span>
        </Link>
        <Link href="/apps">
          <span className={`px-3 hover:bg-secundary hover:text-yellow py-9 ${classApps}`}>Apps</span>
        </Link>
        <Link href="/servicios">
          <span className={`px-3 hover:bg-secundary hover:text-yellow py-9 ${classServicios}`}>Servicios</span>
        </Link>
        <Link href="/quienesSomos">
          <span className={`px-3 hover:bg-secundary hover:text-yellow py-9 ${classQuienesSomos}`}>Acerca de DZ</span>
        </Link>
        <Link href="/contacto">
          <span className={`px-3 hover:bg-secundary hover:text-yellow py-9 ${classContacto}`}>Contacto</span>
        </Link>

      </div>



    </div>
  );
};

/* md:hidden */

export default NavBar;
