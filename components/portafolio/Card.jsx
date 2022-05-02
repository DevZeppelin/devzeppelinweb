/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";
import Fade from "react-reveal/Fade";

const Card = ({ name, src, alt, text, code, url }) => {
  return (
    <Fade left>
      <div className="relative m-4 border-8 border-dark border-opacity-50 bg-gradient-to-b from-blue hover:to-lgreen to-white rounded-lg p-4">
        <h2 className="text-3xl p-2 text-white font-thin ">{name}</h2>
        <div className="h-40 flex justify-center rounded-md">
          <img src={src} alt={alt} className=" mx-auto m-4 p-2 rounded-2xl" />
        </div>
        <p className="text-lg p-2 pb-3 h-36 italic"> {text}</p>
        <code className="text-sm p-2">{code}</code>
        <div className="h-16 w-32 ">
          <div className="absolute inset-x-0 bottom-0 h-16">
            <a href={url} target="_blank" rel="noreferrer">
              <Button text="Visitar Sitio" />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Card;
