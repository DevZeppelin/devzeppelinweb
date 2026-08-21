import React, { Fragment } from "react";
import Link from "next/link";
import { BiCodeAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GiZeppelin } from "react-icons/gi";

export default function IconLinksLayout({ state }) {
  return (
    <Fragment>
      <div className={`${state}`}>
        <div className="flex">
          <Link href="/blog/tecnoticiero">
            <div className="flex transition hover:text-yellow">
              <abbr title="¡Potente buscador de noticias!">
                <FiSearch className="cursor-pointer text-3xl" />
              </abbr>
              <span className="my-auto ml-1 mr-4 cursor-pointer">
                Buscador de Noticias
              </span>
            </div>
          </Link>
        </div>

        <div className="flex">
          <Link href="/escuela" passHref>
            <div className="flex transition hover:text-yellow">
              <abbr title="CodeObrero. Escuela de programación">
                <BiCodeAlt className="cursor-pointer text-3xl" />
              </abbr>

              <span className="my-auto ml-1 mr-4 cursor-pointer">
                Escuela Dev
              </span>
            </div>
          </Link>
        </div>

        <div className="flex">
          <Link href="/">
            <div className="flex transition hover:text-yellow">
              <abbr title="DevZeppelin. Webs 100% performance">
                <GiZeppelin className="cursor-pointer text-3xl" />
              </abbr>
              <span className="my-auto ml-1 cursor-pointer font-bold">
                Volver a DevZeppelin.ar{" "}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
