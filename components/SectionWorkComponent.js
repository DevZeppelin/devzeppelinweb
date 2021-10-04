import React from "react";

const SectionWorkComponent = ({description, web, src}) => {
  return (
    <div className="p-6 md:p-16">
      <img
        src={src}
        alt="responsive image mobile tablet notebook widescreen responsive-design"
        className="w-full  animateImage"
      />
      <p className="text-lg text-yellow text-center pt-3 md:pt-8 uppercase font-bold">
        {description}
      </p>
      <a href={`https://${web}`} rel="noopener" target="_blank">
          <p className="text-base text-lightGray text-center pt-3 md:pt-4 font-bold">
            {web}
          </p>
      </a>
      <style jsx>{` 
      
      .animateImage:hover {
          transform: scale(1.2);
          padding: 0;
          transition: 1.5s
      }
      
    `}</style>
    </div>
  );
};

export default SectionWorkComponent;
