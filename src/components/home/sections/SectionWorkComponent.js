import Link from "next/link";
import Image from "next/image";

const SectionWorkComponent = ({ title, description, web, src }) => {
  const isApp = Boolean(title);

  return (
    <div className="p-3 md:p-4">
      <Link
        href={`${web}`}
        rel="noreferrer"
        target="_blank"
        className="group flex h-full flex-col rounded-2xl border border-yellow/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow/40 hover:bg-white/[0.06] hover:shadow-[0_0_35px_-8px_rgba(245,210,68,0.3)]"
      >
        {isApp ? (
          <div className="flex flex-1 flex-col items-center gap-1 text-center">
            {/* padding around the icon keeps its baked-in gold border clear of the edge on hover scale */}
            <div className="p-2">
              <Image
                src={src}
                alt={title}
                width={128}
                height={128}
                className="h-20 w-20 rounded-2xl shadow-[0_10px_25px_-8px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24"
              />
            </div>
            <p className="mt-3 text-base font-extrabold uppercase tracking-widest text-yellow md:text-lg">
              {title}
            </p>
            <p className="mt-1 text-sm font-normal italic text-yellow/60">
              {description}
            </p>
            <span className="mt-4 rounded-full border border-yellow/25 px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow transition-colors duration-300 group-hover:border-yellow group-hover:bg-yellow group-hover:text-primary">
              Ver app
            </span>
          </div>
        ) : (
          <>
            <div className="relative h-40 w-full overflow-hidden rounded-xl bg-black/30 md:h-48">
              <Image
                src={src}
                alt={description}
                fill
                sizes="(max-width: 850px) 100vw, 33vw"
                className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-center text-base font-normal italic text-yellow/60">
              {description}
            </p>
          </>
        )}
      </Link>
    </div>
  );
};

export default SectionWorkComponent;
