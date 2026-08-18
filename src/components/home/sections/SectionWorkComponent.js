import Link from "next/link";
import Image from "next/image";

const SectionWorkComponent = ({ title, description, web, src }) => {
  return (
    <div className="p-3 md:p-4">
      <Link
        href={`${web}`}
        rel="noreferrer"
        target="_blank"
        className="group flex h-full flex-col rounded-2xl border border-yellow/15 bg-slate-800 p-5 transition-all duration-300 hover:border-yellow/50 hover:bg-slate-800/60"
      >
        <div className="relative h-44 w-full">
          <Image
            src={src}
            alt={title || description}
            fill
            sizes="(max-width: 850px) 100vw, 33vw"
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {title && (
          <p className="mt-5 text-center text-lg font-bold text-yellow">
            {title}
          </p>
        )}
        <p
          className={`text-center text-base font-semibold text-yellow/90 ${
            title ? "mt-1" : "mt-5"
          }`}
        >
          {description}
        </p>
      </Link>
    </div>
  );
};

export default SectionWorkComponent;
