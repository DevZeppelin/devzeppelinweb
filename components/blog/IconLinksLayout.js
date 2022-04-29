import React, { Fragment } from "react";
import Link from "next/dist/client/link";
import { BiCodeAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GiZeppelin } from "react-icons/gi";

export default function IconLinksLayout({ state }) {
  return (
    <Fragment>
      <div className={`${state}`}>
        <div className="flex">
          <Link href="/tecnoticiero">
            <div className="flex hover:text-secundaryBlog">
              <abbr title="¡Potente buscador de noticias!">
                <FiSearch className=" text-3xl cursor-pointer" />
              </abbr>
              <span className="my-auto cursor-pointer mr-4 ml-1">
                Buscador de Noticias
              </span>
            </div>
          </Link>
        </div>

        <div className="flex hover:text-secundaryBlog">
          <a
            className="flex"
            href="https://code-obrero.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <abbr title="codeObrero ¡Empezá hoy a programar!">
              <BiCodeAlt className=" text-3xl cursor-pointer " />
            </abbr>
            <span className="my-auto cursor-pointer mr-4 ml-1 ">Escuela Dev</span>
          </a>
        </div>

        <div className="flex">
          <Link href="/">
            <div className="flex hover:text-secundaryBlog">
              <abbr title="DevZeppelin. Webs 100% perfomance">
                <GiZeppelin className="text-3xl cursor-pointer " />
              </abbr>
              <span className="ml-1 my-auto cursor-pointer">
                Volver a DevZeppelin.AR{" "}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
