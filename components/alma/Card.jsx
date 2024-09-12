/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";

const Card = ({ name, src, alt, text, url }) => {
  return (
      <div className="relative bg-gradient-to-alma1 from-alma2 border-orange-600 m-8 border-4 rounded-3xl p-2">
        <h2 className="text-2xl p-2 text-white font-thin ">{name}</h2>
        <div className="h-40">
          <div className="flex justify-center align-middle rounded-md my-auto">
            <img
              src={src}
              alt={alt}
              className=" mx-auto m-4 p-2 rounded-2xl max-h-36 "
            />
          </div>
        </div>
        <p className="text-base p-2 pb-3 h-24 italic"> {text}</p>
        
        <div className="h-16 w-32 text-center ">
          <div className="absolute inset-x-0 bottom-0 h-16">
            <a href={url} target="_blank" rel="noreferrer">
              <Button text="Ir al artículo"/>
            </a>
          </div>
        </div>
      </div>
  );
};

export default Card;
