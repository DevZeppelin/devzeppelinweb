/* eslint-disable @next/next/no-img-element */
import Button from "./Button";
import Image from "next/image";

const Card = ({ name, src, alt, text, url, local }) => {
  return (
    <div className="relative text-center bg-gradient-to-t from-red-600 to-zinc-500 border-orange-600 m-8 border-4 rounded-3xl p-2">
      <h2 className="text-2xl px-2 text-white font-thin ">{name}</h2>
      <span>
        <i className="text-sm mx-auto pb-4">{local}</i>
      </span>
      <div className="flex justify-center align-middle rounded-md my-auto">
        <Image
          width={400}
          height={400}
          src={src}
          alt={alt}
          className=" mx-auto m-4 p-2 rounded-2xl h-auto my-auto"
        />
      </div>
      <p className="text-base p-2 pb-3 italic text-white"> {text}</p>

      <div className="h-12 w-24 text-center ">
        <div className="absolute inset-x-0 bottom-0 h-16">
          <a href={url} target="_blank" rel="noreferrer">
            <Button text="Tema recomendado" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
