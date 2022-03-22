import { AiOutlinePhone } from "react-icons/ai";

const PhoneCard = ({ title, description, number, number2 }) => {
  return (
    <div className="border-2 border-black p-4  rounded-xl hover:bg-lightGray m-2">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="p-2">{description}</p>
      <span className="text-xl p-1 flex justify-center gap-2 ">
        <AiOutlinePhone className="my-auto" />
        {number}
      </span>

      {number2 ? (
        <span className="text-xl flex justify-center gap-2">
          <AiOutlinePhone className="my-auto" />
          {number2}
        </span>
      ) : null}
    </div>
  );
};

export default PhoneCard;
