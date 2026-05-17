/* eslint-disable @next/next/no-img-element */

import Link from "next/dist/client/link";
import ProyectLinks from "./ProyectLinks";

const TopMainScreen = () => {
  return (
    <div
      className="relative flex my-0 px-6 md:px-24 py-4 bg-secundary justify-center md:justify-between items-center cyber-grid-bg overflow-hidden"
      style={{ borderBottom: '1px solid rgba(245, 210, 68, 0.15)' }}
    >
      {/* Decorative corner accent */}
      <span
        className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(245,210,68,0.12) 0%, transparent 60%)',
        }}
      />

      <Link href="/">
        <img
          src="logo.webp"
          alt="dev zeppelin logo hyper webs gino pietrobon"
          width="180"
          height="180"
          className="animate-logo cursor-pointer"
        />
      </Link>

      <div className="hidden md:flex justify-between items-center space-x-8">
        <ProyectLinks classAdd="mr-8" />

        <Link href="/contacto">
          <span className="btn cursor-pointer whitespace-nowrap">
            Contactame
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TopMainScreen;
