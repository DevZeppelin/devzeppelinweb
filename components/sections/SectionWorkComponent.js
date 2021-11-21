const SectionWorkComponent = ({ description, web, src }) => {
  return (
    <div className="p-6 md:p-8">
      <a href={`https://${web}`} rel="noreferrer" target="_blank">
        <div className=" w-96 animateImage mx-auto">
          <img
            src={src}
            alt="responsive image mobile tablet notebook widescreen responsive-design"
          />
        </div>
        <p className="text-lg text-yellow text-center uppercase font-bold ">
          {description}
        </p>
        <p className="text-base text-lightGray text-center pt-2 md:pt-3 font-bold">
          {web}
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
