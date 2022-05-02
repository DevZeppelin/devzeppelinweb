/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const ProyectLinksComponent = ({dir, file, name }) => {
  return (
    <Link href={dir} passHref>
    <div className='flex flex-col justify-end cursor-pointer'>
     
       <div className="text-5xl p-3 text-yellow mx-auto my-auto hover:scale-125">{file}</div>
      
      <p>{name}</p>
    </div>
  </Link>
  )
}

export default ProyectLinksComponent