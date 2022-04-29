import Link from "next/dist/client/link";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ toggleNav, classHome, classQuienesSomos, classServicios, classContacto }) => {
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
        
        <Link href="/blog">
          <a className="px-3 hover:bg-secundary hover:text-yellow py-6">Blog</a>
        </Link>        
      

        <Link href="/contacto">
          <a className={`px-3 hover:bg-secundary hover:text-yellow py-6 ${classContacto}`}>Contacto</a>
        </Link>
      </div>
      <div className="p-2 ml-2 md:hidden flex justify-start w-10 text-4xl">
        <button
          onClick={toggleNav}
          aria-label="Hamburguer Button of Main Content"
        >
          <GiHamburgerMenu />
        </button>
      </div>

     
    </div>
  );
};

/* md:hidden */

export default NavBar;
