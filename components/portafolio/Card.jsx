/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";

const Card = ({ name, src, alt, text, code, url }) => {
  return (
    <div className="relative m-2 border-8 border-dark border-opacity-50 bg-gradient-to-b from-bluePF hover:to-lgreen to-white rounded-lg p-2">
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
      <p className="text-base p-2 pb-3 h-32 italic"> {text}</p>
      <div className="h-24 bg-bluePF p-2 text-white rounded-xl">
        <code className="text-sm p-2 font-bold">{code}</code>
      </div>
      <div className="h-16 w-32 ">
        <div className="absolute inset-x-0 bottom-0 h-16">
          <span href={url} target="_blank" rel="noreferrer">
            <Button text="Visitar Sitio" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
