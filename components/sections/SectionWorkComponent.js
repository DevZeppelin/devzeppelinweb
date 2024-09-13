/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

const SectionWorkComponent = ({ description, web, src }) => {
  return (
    <div className="p-6 md:p-8 flex flex-col">
      <a href={`https://${web}`} rel="noreferrer" target="_blank">
    <div className="relative w-full flex items-center justify-center animateImage mx-auto">
          <Image
            src={src}
            alt="responsive image mobile tablet notebook widescreen responsive-design"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>
        <p className="text-lg text-yellow text-center font-bold mx-auto">
          {description}
        </p>
      </a>
      <style jsx>{`
        .animateImage {
          margin-bottom: 2rem;
        }

        .animateImage:hover {
          transform: scale(1.15);
          padding: 0;
          transition: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default SectionWorkComponent;
