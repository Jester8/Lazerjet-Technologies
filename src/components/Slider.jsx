import React from "react";
// Ensure the images are correctly imported
import atc from "../assets/img/ATC.svg";
import depigbo from "../assets/img/depgibo.jpg";
import kensy from "../assets/img/kensycare.png";
import lfc from "../assets/img/Lfc.png";
import darklogo from "../assets/img/darklogo (1).jpg";

const Slider = () => {
  const images = [atc, depigbo, kensy, lfc, darklogo];

  const duplicatedImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  return (
    <div className="bg-gray-50 py-9 px-8">
      {" "}
      <h2 className="text-center text-2xl font-semibold font-bebas mt-4">
        Meet Our Previous Clients
      </h2>
      <div className="overflow-hidden relative flex justify-center items-center w-auto h-40 bg-none mx-auto">
        {" "}
        <div className="flex space-x-5 animate-slide">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-3 flex justify-center items-center"
            >
              <button className="bg-white rounded-full shadow-md overflow-hidden w-24 h-24">
                {" "}
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
