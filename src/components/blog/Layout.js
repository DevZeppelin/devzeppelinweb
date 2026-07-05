import React, { useState } from "react";
import Link from "next/link";
import IconLinksLayout from "./IconLinksLayout";
import { blogCategories, navCategories } from "@/data/blogCategories";
import { contact, social } from "@/lib/site";

import { GiMonkey, GiHamburgerMenu } from "react-icons/gi";
import { FiMail, FiTwitter } from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const socialLinks = [
  { href: contact.whatsapp, label: "WhatsApp de Gino", Icon: FaWhatsapp },
  { href: social.instagram, label: "Instagram de moonwatcher.dev", Icon: FaInstagram },
  { href: "https://www.twitter.com/moonwatcher73/", label: "Twitter de moonwatcher", Icon: FiTwitter },
  { href: "https://www.facebook.com/Gini77o", label: "Facebook de Gino", Icon: FaFacebook },
  { href: social.github, label: "GitHub de DevZeppelin", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/gino-pietrobon", label: "LinkedIn de Gino", Icon: FaLinkedinIn },
  { href: contact.mailto, label: "Enviar un mail a Gino", Icon: FiMail },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-primary font-body text-lightGray">
      {/* Orbes ambientales */}
      <div
        className="cyber-orb cyber-orb-a -top-20 right-0 h-72 w-72"
        style={{ background: "rgba(245, 210, 68, 0.10)" }}
      />
      <div
        className="cyber-orb cyber-orb-b bottom-40 -left-24 h-80 w-80"
        style={{ background: "rgba(0, 212, 255, 0.07)" }}
      />

      <header className="glass-dark sticky top-0 z-50 border-b border-yellow/10">
        <div className="flex h-16 items-center justify-between px-3 md:px-12">
          <Link href="/blog/">
            <span className="glow-text flex items-center font-heading text-lg text-yellow transition hover:scale-105 md:text-xl">
              <GiMonkey className="mr-2 inline text-3xl" aria-hidden="true" />
              moonwatcher.dev
            </span>
          </Link>

          <IconLinksLayout state="hidden md:flex items-center text-lightGray" />

          <button
            onClick={toggleNav}
            aria-label="Abrir menú de navegación"
            aria-expanded={open}
            className="p-2 text-2xl text-yellow md:hidden"
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Nav desktop de categorías */}
        <nav
          aria-label="Categorías del blog"
          className="hidden justify-center gap-1 border-t border-yellow/10 pb-2 pt-1 text-sm md:flex"
        >
          <Link href="/blog">
            <span className="nav-link cursor-pointer px-3 py-2 uppercase tracking-wide transition hover:text-yellow">
              Home
            </span>
          </Link>
          {navCategories.map((tag) => (
            <Link key={tag} href={`/blog/${tag}`}>
              <span className="nav-link cursor-pointer px-3 py-2 uppercase tracking-wide transition hover:text-yellow">
                {blogCategories[tag].label}
              </span>
            </Link>
          ))}
        </nav>
      </header>

      {/* Menú móvil */}
      {open && (
        <nav
          aria-label="Menú móvil del blog"
          className="glass-dark fadeIn fixed right-0 top-16 z-50 w-64 rounded-bl-2xl border border-yellow/20 md:hidden"
        >
          <div className="flex flex-col p-4 text-right">
            <Link href="/blog">
              <span className="cursor-pointer px-3 py-2 hover:text-yellow">
                Home 🏠
              </span>
            </Link>
            <Link href="/blog/news">
              <span className="cursor-pointer px-3 py-2 hover:text-yellow">
                Noticias &#128240;
              </span>
            </Link>
            <Link href="/blog/blog">
              <span className="cursor-pointer px-3 py-2 hover:text-yellow">
                Blog &#128053;
              </span>
            </Link>
            <Link href="/blog/dev">
              <span className="cursor-pointer px-3 py-2 hover:text-yellow">
                Programación &#128187;
              </span>
            </Link>
            <Link href="/blog/cripto">
              <span className="cursor-pointer px-3 py-2 hover:text-yellow">
                Criptomonedas &#128184;
              </span>
            </Link>
            <Link href="/blog/politica">
              <span className="cursor-pointer px-3 py-2 hover:text-yellow">
                Política &#128188;
              </span>
            </Link>
            <Link href="/blog/escritos">
              <span className="cursor-pointer px-3 py-2 hover:text-yellow">
                Escritos &#9997;
              </span>
            </Link>
            <Link href="/blog/rock">
              <span className="cursor-pointer px-3 py-2 hover:text-yellow">
                Rock &#127928;
              </span>
            </Link>
            <Link href="/blog/river">
              <span className="cursor-pointer px-3 py-2 hover:text-yellow">
                River 🐔
              </span>
            </Link>
          </div>
        </nav>
      )}

      {/* Links secundarios en móvil */}
      <div className="md:hidden">
        <IconLinksLayout state="flex md:hidden text-center flex-col mt-4 pl-6 text-lightGray text-sm align-middle" />
      </div>

      <main className="relative z-10 flex-1">{children}</main>

      <footer className="relative z-10 mt-16 border-t border-yellow/10 bg-secundary px-6 py-10 md:px-24">
        <div className="cyber-line mx-auto mb-8 max-w-xl" />
        <div
          id="contacto"
          className="flex justify-center space-x-5 text-2xl md:space-x-10 md:text-3xl"
        >
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="transition hover:scale-110 hover:text-yellow"
              style={{ transitionDuration: "300ms" }}
            >
              <Icon className="hover:drop-shadow-[0_0_10px_rgba(245,210,68,0.7)]" />
            </a>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-lightGray/70">
          Hecho con &#128155; en Mendoza, Argentina, por Gino Pietrobon. Todos
          los derechos reservados. &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
