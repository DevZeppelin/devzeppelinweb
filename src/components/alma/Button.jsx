const Button = ({ text }) => {
  return (
    <button
      className="px-6 italic py-2 border-2 bg-gradient-to-b from-darkGray to-black 
    hover:bg-gradient-to-t hover:from-dark hover:to-black 
    hover:scale-125 
    transition-transform rounded-lg text-white font-bold text-base"
    >
      {text}
    </button>
  );
};

export default Button;
