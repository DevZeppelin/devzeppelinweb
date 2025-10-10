import React, { useState } from "react";
import IconLinksLayout from "./IconLinksLayout";

import { GiMonkey } from "react-icons/gi";
import { FiMail, FiTwitter } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div>
      <div className="px-2 md:px-24 bg-primaryBlog text-white flex justify-between h-16">
        <Link href="/blog/">
          <span className="text-background text-2xl flex align-baseline px-2 md:px-10 my-auto hover:text-secundaryBlog">
            <GiMonkey className="inline text-4xl mr-4" /> moonwatcher.dev
          </span>
        </Link>

        <IconLinksLayout state={"hidden md:flex items-center"} />

        <div className="p-2 md:p-4 md:hidden flex justify-center w-10 text-2xl">
          <button onClick={toggleNav} aria-label="Hamburguer Button of Main Content">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <div
        className="absolute z-20 right-0 bg-primaryBlog text-background w-1/2 rounded-b-3xl"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="flex text-right flex-col text-base p-2 text-backgroundBlog mb-5">
          <Link href="/blog">
            <span className="mr-2  mt-2 px-3 hover:border-black">Home 🏠</span>
          </Link>
          <Link href="/news">
            <span className="mr-2 mt-5 px-3 hover:border-black">
              Noticias &#128240;
            </span>
          </Link>
          <Link href="/blog/blog">
            <span className="mr-2 mt-5 px-3 hover:border-black">Blog &#128053;</span>
          </Link>
          <Link href="/blog/dev">
            <span className="mr-2 mt-5 px-3 hover:border-black">Programación &#128187;</span>
          </Link>
          <Link href="/blog/cripto">
            <span className="mr-2 mt-5 px-3 hover:border-black">
              Criptomonedas &#128184;
            </span>
          </Link>
          <Link href="/blog/politica">
            <span className="mr-2 mt-5 px-3 hover:border-black">
              Política &#128188;
            </span>
          </Link>
          <Link href="/blog/escritos">
            <span className="mr-2 mt-5 px-3 hover:border-black">
              Escritos &#9997;
            </span>
          </Link>
          <Link href="/blog/rock">
            <span className="mr-2 mt-5 px-3 hover:border-black">Rock &#127928;</span>
          </Link>
          <Link href="/blog/river">
            <span className="mr-2 mt-5 px-3 hover:border-black">River 🐔</span>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex justify-center px-2 md:px-24 bg-backgroundSecundaryBlog text-backgroundBlog border-b border-black text-base">
        <Link href="/blog">
          <span className="mr-6  mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Home
          </span>
        </Link>
        <Link href="/blog/news">
          <span className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Noticias
          </span>
        </Link>
        <Link href="/blog/blog">
          <span className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Blog
          </span>
        </Link>
        <Link href="/blog/dev">
          <span className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Programación
          </span>
        </Link>
        <Link href="/blog/cripto">
          <span className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Criptomonedas
          </span>
        </Link>
        <Link href="/blog/politica">
          <span className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Política
          </span>
        </Link>
        <Link href="/blog/escritos">
          <span className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Escritos
          </span>
        </Link>
        <Link href="/blog/rock">
          <span className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-secundaryBlog">
            Rock
          </span>
        </Link>
        <Link href="/blog/river">
          <span className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-red-600">
            River
          </span>
        </Link>
      </div>

      <div className="md:hidden flex flex-col mx-auto">

        <div>
          <IconLinksLayout
            state={"flex md:hidden text-center flex-col mt-4 pl-6 text-primaryBlog text-sm align-middle"}
          />
        </div>
      </div>

      {children}


      <div id="footer" className="bg-primaryBlog text-white text-xl px-6 md:px-24 flex flex-col py-10 mt-8">

        <div
          id="contacto"
          className="flex space-x-5 md:space-x-10 text-2xl md:text-4xl justify-center"
        >
          <span
            href="https://api.whatsapp.com/send?phone=5492616708100"
            target="_blank"
            rel="noreferrer"
          >
            <button
              aria-label="go to my whatsapp"
              target="_blank"
              rel="noopener"
              alt="whatsapp-logo"
            >
              <FaWhatsapp className="hover:text-green-700" />
            </button>
          </span>

          <span href="https://www.instagram.com/moonwatcher.dev/">
            <button
              aria-label="go to my instagram"
              target="_blank"
              rel="noopener"
              alt="instagram-logo"
            >
              <FaInstagram className="hover:text-purple-700" />
            </button>
          </span>

          <span href="https://www.twitter.com/moonwatcher73/">
            <button
              aria-label="go to my twitter"
              target="_blank"
              rel="noopener"
              alt="twitter-logo"
            >
              <FiTwitter className="hover:text-blue-500" />
            </button>
          </span>

          <span href="https://www.facebook.com/Gini77o">
            <button
              aria-label="go to my fabecook"
              target="_blank"
              rel="noopener"
              alt="facebook-logo"
            >
              <FaFacebook className="hover:text-blue-800" />
            </button>
          </span>

          <span href="https://github.com/DevZeppelin">
            <button
              aria-label="go to my github"
              target="_blank"
              rel="noopener"
              alt="github-logo"
            >
              <FaGithub className="hover:text-red-400" />
            </button>
          </span>

          <span href="https://www.linkedin.com/in/gino-pietrobon">
            <button
              aria-label="go to my linked in"
              target="_blank"
              rel="noopener"
              alt="linkedin-logo"
            >
              <FaLinkedinIn className="hover:text-green-400" />
            </button>
          </span>

          <span href="mailto:gino.b.pietrobon@gmail.com">
            <button
              aria-label="send me span mail"
              target="_blank"
              rel="noopener"
              alt="gmail-logo"
            >
              <FiMail className="hover:text-red-600" />
            </button>
          </span>
        </div>

        <div className="mt-10 text-sm max-w-2xl">
          Make with &#128153; in Mendoza, Argentina, by Gino Pietrobon. All
          rights reserved. &copy; &nbsp; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
