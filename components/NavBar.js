import Link from "next/dist/client/link";

const NavBar = ({ classHome, classQuienesSomos, classWebs, classApps, classServicios, classContacto }) => {
  return (
    <nav
      className="hidden md:flex justify-between items-center px-0 bg-primary"
      style={{ borderBottom: '1px solid rgba(245, 210, 68, 0.2)', boxShadow: '0 2px 20px rgba(245, 210, 68, 0.08)' }}
    >
      <div className="flex h-16 items-center pl-24 space-x-1">

        <Link href="/">
          <span className={`nav-link relative px-5 py-5 text-sm font-bold tracking-widest transition-colors duration-300 cursor-pointer ${classHome ? 'text-yellow glow-text' : 'text-lightGray hover:text-yellow'}`}
            style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.72rem', letterSpacing: '0.1em' }}>
            HOME
            {classHome && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4/5 bg-yellow" style={{ boxShadow: '0 0 8px rgba(245,210,68,0.8)' }} />}
          </span>
        </Link>

        <Link href="/webs">
          <span className={`nav-link relative px-5 py-5 text-sm font-bold tracking-widest transition-colors duration-300 cursor-pointer ${classWebs ? 'text-yellow glow-text' : 'text-lightGray hover:text-yellow'}`}
            style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.72rem', letterSpacing: '0.1em' }}>
            WEBS
            {classWebs && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4/5 bg-yellow" style={{ boxShadow: '0 0 8px rgba(245,210,68,0.8)' }} />}
          </span>
        </Link>

        <Link href="/apps">
          <span className={`nav-link relative px-5 py-5 text-sm font-bold tracking-widest transition-colors duration-300 cursor-pointer ${classApps ? 'text-yellow glow-text' : 'text-lightGray hover:text-yellow'}`}
            style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.72rem', letterSpacing: '0.1em' }}>
            APPS
            {classApps && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4/5 bg-yellow" style={{ boxShadow: '0 0 8px rgba(245,210,68,0.8)' }} />}
          </span>
        </Link>

        <Link href="/servicios">
          <span className={`nav-link relative px-5 py-5 text-sm font-bold tracking-widest transition-colors duration-300 cursor-pointer ${classServicios ? 'text-yellow glow-text' : 'text-lightGray hover:text-yellow'}`}
            style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.72rem', letterSpacing: '0.1em' }}>
            SERVICIOS
            {classServicios && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4/5 bg-yellow" style={{ boxShadow: '0 0 8px rgba(245,210,68,0.8)' }} />}
          </span>
        </Link>

        <Link href="/quienesSomos">
          <span className={`nav-link relative px-5 py-5 text-sm font-bold tracking-widest transition-colors duration-300 cursor-pointer ${classQuienesSomos ? 'text-yellow glow-text' : 'text-lightGray hover:text-yellow'}`}
            style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.72rem', letterSpacing: '0.1em' }}>
            ACERCA DE
            {classQuienesSomos && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4/5 bg-yellow" style={{ boxShadow: '0 0 8px rgba(245,210,68,0.8)' }} />}
          </span>
        </Link>

        <Link href="/contacto">
          <span className={`nav-link relative px-5 py-5 text-sm font-bold tracking-widest transition-colors duration-300 cursor-pointer ${classContacto ? 'text-yellow glow-text' : 'text-lightGray hover:text-yellow'}`}
            style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.72rem', letterSpacing: '0.1em' }}>
            CONTACTO
            {classContacto && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4/5 bg-yellow" style={{ boxShadow: '0 0 8px rgba(245,210,68,0.8)' }} />}
          </span>
        </Link>

      </div>
    </nav>
  );
};

export default NavBar;
