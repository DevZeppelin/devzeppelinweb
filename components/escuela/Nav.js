/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Nav = () => (
  <div className="nav-container" id="nav-container">
    <Link href="/escuela/" passHref>
      <img
        className="logo"
        src="/escuela/logo.webp"
        alt="logo code-obrero"        
      />
    </Link>

    <span>•</span>

    <Link href="/escuela/primeros-pasos-dev">
      <a>1ros pasos</a>
    </Link>

    <span>•</span>

    <Link href="/escuela/consejos">
      <a>Consejos</a>
    </Link>

    <span>•</span>

      <Link href="/escuela/criptomonedas">
      <a>Criptos</a>
    </Link>

    <span>•</span>

    
    <Link href="/escuela/acerca-de">
      <a>About</a>
    </Link>

    <span>•</span>

    <Link href="/escuela/contacto">
      <a>Contacto</a>
    </Link>

    <span>•</span>

    <Link href="/">
      <a>Volver a DevZeppein.ar</a>
    </Link>


    <style jsx>{`
      .nav-container {
        display: flex;
        align-items: center;
        list-style: none;
        /*padding: 0;
          margin: 0;
          display: grid;
          grid-auto-columns: 100px;
          grid-auto-flow: column;
          justify-content: space-around;*/
      }

      .nav-container a {
        font-family: "Rokkitt", serif;
      }
      
    `}</style>
  </div>
);

export default Nav;
