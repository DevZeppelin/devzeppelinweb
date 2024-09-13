/* eslint-disable @next/next/no-img-element */

const ProyectLinksComponentExtern = ({ dir, file, name }) => {
  return (
    <a
      href={dir}
      target='_blank'
      rel='noopener noreferrer' >

      <div className='flex flex-col justify-end cursor-pointer'>

        <div className="text-5xl p-3 text-yellow mx-auto my-auto hover:scale-125">{file}</div>

        <p>{name}</p>
      </div>
    </a>
  )
}

export default ProyectLinksComponentExtern