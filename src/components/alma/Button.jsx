const VARIANTS = {
  solid:
    "border-2 border-alma2/50 bg-gradient-to-b from-darkGray to-black hover:border-alma2 hover:bg-gradient-to-t hover:from-dark hover:to-black",
  outline: "border-2 border-white/30 bg-transparent hover:border-alma2 hover:text-alma2",
};

const Button = ({ text, variant = "solid", className = "" }) => {
  return (
    <button
      className={`px-6 italic py-2 hover:scale-105 transition-transform rounded-lg text-white font-bold text-base ${VARIANTS[variant]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
