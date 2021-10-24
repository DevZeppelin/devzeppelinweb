
export const IndexGridImageContent = ({ src, alt }) => {
  return (
    <div className="relative">
      
      <div className="gridImage imagen-filtro">
        <img 
          src={src} 
          alt={alt}
          className="w-full"
        />
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
