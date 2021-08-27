import React from 'react'

export const IndexGridImageContent = ({ src, alt}) => {
    return (
        <div className="relative">
                    
                    <img
                      src={src}
                      alt={alt}
                      className="gridImage w-full h-full"
                    />
        
                  </div>
    )
}
