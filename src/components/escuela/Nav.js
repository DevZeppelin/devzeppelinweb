import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  { href: "/escuela/primeros-pasos-dev", label: "1ros pasos", emoji: "👆" },
  { href: "/escuela/consejos", label: "Consejos", emoji: "🗣" },
  { href: "/escuela/criptomonedas", label: "Criptomonedas", emoji: "💎" },
  { href: "/escuela/acerca-de", label: "About", emoji: "❔" },
  { href: "/escuela/contacto", label: "Contacto", emoji: "📬" },
  { href: "/blog", label: "Blog", emoji: "🐵" },
  { href: "/", label: "Volver a DevZeppelin.ar", emoji: "🦅" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div
      className="glass-dark sticky top-0 z-50 border-b border-yellow/10"
      id="nav-container"
    >
      <nav
        aria-label="Navegación de codeObrero"
        className="flex items-center justify-between px-3 md:px-8"
      >
        <Link href="/escuela/" passHref>
          <span className="cursor-pointer p-2">
            <Image
              src="/escuela/logo.webp"
              alt="logo code-obrero"
              width={64}
              height={64}
              className="drop-shadow-[0_0_10px_rgba(245,210,68,0.4)] transition hover:scale-105"
            />
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span className="nav-link cursor-pointer px-3 py-2 font-heading text-xs uppercase tracking-wide text-lightGray transition hover:text-yellow">
                {label}
              </span>
            </Link>
          ))}
        </div>

        <button
          onClick={toggleNav}
          aria-label="Abrir menú de navegación"
          aria-expanded={open}
          className="p-3 text-2xl text-yellow md:hidden"
        >
          <GiHamburgerMenu />
        </button>
      </nav>

      {open && (
        <div className="glass-dark fadeIn fixed right-2 top-20 z-50 flex flex-col rounded-2xl border border-yellow/20 p-4 md:hidden">
          {links.map(({ href, label, emoji }) => (
            <Link key={href} href={href}>
              <span className="cursor-pointer px-3 py-2 text-sm text-lightGray transition hover:text-yellow">
                {emoji} {label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
