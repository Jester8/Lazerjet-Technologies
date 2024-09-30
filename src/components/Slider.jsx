import React from "react";
import atc from "../assets/img/ATC.svg";
import depigbo from "../assets/img/depgibo.jpg";
import kensy from "../assets/img/kensycare.png";
import lfc from "../assets/img/Lfc.png";
import darklogo from "../assets/img/darklogo (1).jpg";
import { useTheme } from "../components/ThemeContext";

const Slider = () => {
  const { isDarkMode } = useTheme();
  const images = [atc, depigbo, kensy, lfc, darklogo];
  const duplicatedImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  return (
    <div className={`py-9 px-8 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <h2
        className={`text-center text-2xl font-semibold font-bebas mt-4 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Meet Our Previous Clients
      </h2>
      <div className="overflow-hidden relative w-full h-40 bg-none mx-auto mt-4">
        <div className="flex space-x-5 animate-slide-left-to-right absolute left-0 top-0">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center"
            >
              <button
                className={`rounded-full shadow-md overflow-hidden w-24 h-24 ${
                  isDarkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
