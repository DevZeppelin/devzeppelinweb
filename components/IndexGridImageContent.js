import Image from "next/image";

export const IndexGridImageContent = ({ src, alt }) => {
  return (
    <div className="relative border-2 border-yellow" >
     
        <div className="h-60 imagen-filtro">
          <div className="">
            <Image
            src={src}
            alt={alt}            
            layout="fill"
            objectFit="fill" />
          </div>
        </div>
      
      <style jsx>{`
          
          .imagen-filtro {
            transition: all 0.4s ease;   
              
          }
          .imagen-filtro:hover {
            -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
            filter: grayscale(100%);
          }          
          }
        `}</style>
    </div>
  );
};
