/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const ProyectLinksComponent = ({ dir, file, name }) => {
  return (
    <Link href={dir} passHref>
      <div
        className="flex flex-col items-center justify-end cursor-pointer group"
        style={{ transition: 'transform 0.3s ease' }}
      >
        <div
          className="text-4xl text-yellow p-2 transition-all duration-300 group-hover:scale-125"
          style={{ transition: 'filter 0.3s ease, transform 0.3s ease' }}
          onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(245,210,68,0.9))'}
          onMouseLeave={e => e.currentTarget.style.filter = 'none'}
        >
          {file}
        </div>
        <p
          className="text-xs text-lightGray transition-colors duration-300 group-hover:text-yellow"
          style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.6rem', letterSpacing: '0.08em' }}
        >
          {name}
        </p>
      </div>
    </Link>
  )
}

export default ProyectLinksComponent
