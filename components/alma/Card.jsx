/* eslint-disable @next/next/no-img-element */
import Button from "./Button";
import Image from "next/image";

const Card = ({ name, src, alt, text, url, local }) => {
  return (
    <div className="flex flex-col text-center bg-gradient-to-t from-red-600 to-zinc-500 border-orange-600 m-8 border-4 rounded-3xl p-2">
      <h2 className="text-3xl px-2 text-white  font-thin uppercase">{name}</h2>
      <span>
        <i className="text-sm mx-auto pb-4">{local}</i>
      </span>
      <div className="relative rounded-md my-auto min-h-80">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-2 rounded-2xl" // 👈 clave: contiene sin recortar
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <p className="text-base p-2 mb-2 italic text-white"> {text}</p>

      <div className="text-center mx-auto p-4">
        <span href={url} target="_blank" rel="noreferrer">
          <Button text="Tema recomendado" />
        </span>
      </div>
    </div>
  );
};

export default Card;
