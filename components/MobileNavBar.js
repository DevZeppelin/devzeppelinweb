import Link from "next/link";

const MobileNavBar = ({ open }) => {
  return (
    <div
      className="absolute z-50 top-14 right-0 w-3/5 rounded-b-2xl glass-dark overflow-hidden"
      style={{
        display: open ? "block" : "none",
        borderLeft: '1px solid rgba(245, 210, 68, 0.3)',
        borderBottom: '1px solid rgba(245, 210, 68, 0.3)',
        boxShadow: '0 16px 40px rgba(0,0,0,0.6), -4px 0 20px rgba(245,210,68,0.08)',
        background: 'rgba(8, 8, 8, 0.92)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* Top accent line */}
      <div className="cyber-line" />

      <div className="flex flex-col py-4 px-4 space-y-1">
        {[
          { href: '/', label: 'Home', emoji: '⬡' },
          { href: '/webs', label: 'Webs', emoji: '⬡' },
          { href: '/apps', label: 'Apps', emoji: '⬡' },
          { href: '/servicios', label: 'Servicios', emoji: '⬡' },
          { href: '/quienesSomos', label: 'Acerca de DZ', emoji: '⬡' },
          { href: '/contacto', label: 'Contactame', emoji: '⬡' },
        ].map(({ href, label, emoji }) => (
          <Link key={href} href={href}>
            <span
              className="flex items-center space-x-2 px-4 py-3 text-sm font-bold text-lightGray rounded transition-all duration-300 cursor-pointer"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#F5D244';
                e.currentTarget.style.background = 'rgba(245,210,68,0.06)';
                e.currentTarget.style.borderLeft = '2px solid rgba(245,210,68,0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '';
                e.currentTarget.style.background = '';
                e.currentTarget.style.borderLeft = '';
              }}
            >
              <span className="text-yellow text-xs">{emoji}</span>
              <span>{label.toUpperCase()}</span>
            </span>
          </Link>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="cyber-line" />
    </div>
  );
};

export default MobileNavBar;
