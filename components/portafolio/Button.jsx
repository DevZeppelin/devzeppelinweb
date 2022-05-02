import React from 'react';

const Button = ({text}) => {
  return <button className="px-6 py-2 border-2 bg-gradient-to-l from-dark hover:from-blue to-blue hover:to-dark hover:scale-125 transition-transform rounded-lg text-white font-bold">{text}</button>;
};

export default Button;
