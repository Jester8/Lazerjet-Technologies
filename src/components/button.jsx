import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-700 text-white  px-9 py-3  font-bold animate-slide-in-slower rounded-full transition-colors duration-300 hover:bg-blue-700 font-poppins hover:text-white"
    >
      {text}
    </button>
  );
};

export default Button;
