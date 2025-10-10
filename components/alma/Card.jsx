/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Card = ({ name, src, alt, text, url, local }) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-800 text-white shadow-lg">
      {/* Título + Local */}
      <header className="px-4 pt-5 md:px-6">
        <h2 className="text-2xl font-bold uppercase tracking-wide">{name}</h2>

        {local && (
          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-zinc-700/50 px-3 py-1 text-xs text-zinc-200">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <i className="not-italic">{local}</i>
          </div>
        )}
      </header>

      {/* Imagen: sin márgenes en mobile, contenida en desktop */}
      <div
        className="
          relative w-full
          h-64           /* altura consistente en móvil */
          sm:h-72
          md:h-60        /* un toque más baja en desktop */
          bg-black/20
        "
      >
        <Image
          src={src}
          alt={alt || name}
          fill
          priority={false}
          className="
            object-cover       /* MOBILE: llena sin márgenes */
            md:object-contain  /* DESKTOP: no recorta */
            md:p-2             /* DESKTOP: respira un poco */
            transition-transform duration-300 group-hover:scale-[1.02]
          "
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Descripción */}
      {text && (
        <p className="px-4 pb-2 pt-4 md:px-6 text-sm text-zinc-200/90 italic line-clamp-4">
          {text}
        </p>
      )}

      {/* CTA */}
      <div className="px-4 pb-5 pt-2 md:px-6">
        {url ? (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir tema recomendado de ${name}`}
            className="inline-flex"
          >
            <Button text="Tema recomendado ↗" />
          </Link>
        ) : (
          <div className="opacity-60">
            <Button text="Tema no disponible" />
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;
