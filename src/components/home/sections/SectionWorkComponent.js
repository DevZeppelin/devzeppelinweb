import Link from "next/link";
import Image from "next/image";

const SectionWorkComponent = ({ title, description, web, src }) => {
  return (
    <div className="p-3 md:p-4">
      <Link
        href={`${web}`}
        rel="noreferrer"
        target="_blank"
        className="group flex h-full flex-col rounded-2xl border border-yellow/15 bg-primary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow/40 hover:shadow-[0_0_30px_-8px_rgba(245,210,68,0.25)]"
      >
        <div className="relative h-48 w-full overflow-hidden rounded-xl bg-black ring-1 ring-white/5">
          <Image
            src={src}
            alt={title || description}
            fill
            sizes="(max-width: 850px) 100vw, 33vw"
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {title && (
          <p className="mt-2 text-center text-lg font-extrabold uppercase tracking-widest text-yellow">
            {title}
          </p>
        )}
        <p
          className={`text-center text-sm font-normal italic text-yellow/60 ${title ? "mt-1" : "mt-2 text-base"
            }`}
        >
          {description}
        </p>
      </Link>
    </div>
  );
};

export default SectionWorkComponent;
