/* eslint-disable @next/next/no-img-element */
const HoverIconComponent = ({ file,text }) => {
  return (
    <div className="relative group p-24">
      <div className="absolute inset-0 flex items-center justify-center group-hover:hidden text-9xl p-3 text-yellow mx-auto my-auto">
        {file}
      </div>
      <div className="absolute inset-0 hidden items-center justify-center group-hover:flex ">
        <p className="text-yellow text-2xl">{text}</p>
      </div>
    </div>
  );
};

export default HoverIconComponent;
