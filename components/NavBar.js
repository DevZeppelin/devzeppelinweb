import Link from "next/dist/client/link";
import ProyectLinks from "./ProyectLinks";

const NavBar = ({ classHome, classQuienesSomos, classServicios, classContacto }) => {
  return (
    <div className="flex my-0 md:py-0 justify-between px-0 font-bold bg-yellow text-primary text-xl">
      <div className="hidden md:flex">
        
        <Link href="/">
          <a className={`px-3 hover:bg-secundary hover:text-yellow ml-24 py-6 ${classHome}`}>Home</a>
        </Link>
        <Link href="/quienesSomos">
          <a className={`px-3 hover:bg-secundary hover:text-yellow py-6 ${classQuienesSomos}`}>Acerca de DZ</a>
        </Link>
        <Link href="/servicios">
          <a className={`px-3 hover:bg-secundary hover:text-yellow py-6 ${classServicios}`}>Servicios y Trabajos </a>
        </Link>        
       

        <Link href="/contacto">
          <a className={`px-3 hover:bg-secundary hover:text-yellow py-6 ${classContacto}`}>Contacto</a>
        </Link>       

      </div>
      

     
    </div>
  );
};

/* md:hidden */

export default NavBar;
