/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="nav-container" id="nav-container">
     
        <img className="logo" src="/escuela/logo.webp" alt="logo code-obrero" />
     

      <div className="nav-titles">
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
          <a>Criptomonedas</a>
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
          <a>Volver a DevZeppelin.ar</a>
        </Link>
      </div>

      <div>
        <div className="hamburguer-icon">
          <button
            onClick={toggleNav}
            aria-label="Hamburguer Button of Main Content"
            className="buttonSchool"
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <div
          className="nav-titles-mobile"
          style={{ display: open ? "flex" : "none" }}
        >
          <Link href="/escuela/primeros-pasos-dev">
            <a>👆 1ros pasos</a>
          </Link>

          <Link href="/escuela/consejos">
            <a>🗣 Consejos</a>
          </Link>

          <Link href="/escuela/criptomonedas">
            <a>💎 Criptomonedas</a>
          </Link>

          <Link href="/escuela/acerca-de">
            <a>❔ About</a>
          </Link>

          <Link href="/escuela/contacto">
            <a>📬 Contacto</a>
          </Link>
          <Link href="/">
            <a>🦅 Volver a devZeppelin.ar</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .logo {
          cursor: pointer;
        }
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
        .hamburguer-icon {
          padding-right: 40px;
          font-size: 22px;
          display: none;
        }
        .nav-titles-mobile {
          display: none;
        }
        @media screen and (max-width: 700px) {
          .nav-container {
            justify-content: space-between;
          }

          .hamburguer-icon {
            display: flex;
          }
          .nav-titles {
            display: none;
          }

          .nav-titles-mobile {
            position: fixed;
            right: 0;
            flex-direction: column;
            padding: 10px;
            margin-right: 10px;
            background: var(--orange-hard);
            border-radius: 10px;
            border: 2px solid black;
          }
        }
      `}</style>
    </div>
  );
}
