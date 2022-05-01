/* eslint-disable @next/next/no-img-element */

export const IndexGridImageContent = ({ src, alt }) => {
  return (
    <div className="relative border-2 border-yellow mt-6  " >
     
        <div className="h-full imagen-filtro overflow-hidden">
          <div>
            <img
            src={src}
            alt={alt}           
            />          
            
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
