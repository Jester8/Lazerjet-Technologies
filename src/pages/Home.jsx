import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import NavBar from "../components/NavBar";
import img1 from "../assets/img/pic.jpg";
import Loader from "../components/Loader.jsx";
import Atc from "../assets/img/ATC.svg";
import LFC from "../assets/img/Lfc.png";
import Depigbo from "../assets/img/depgibo.jpg";
import Black from "../assets/img/darklogo (1).jpg";
import Kensy from "../assets/img/kensycare.png";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const brands = [
    { src: Atc, alt: "ATC" },
    { src: Depigbo, alt: "Depigbo" },
    { src: Kensy, alt: "Kensy" },
    { src: LFC, alt: "LFC" },
    { src: Black, alt: "Blacksuise" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex flex-col items-center text-center relative">
        <img src={img1} alt="" className="w-full h-auto object-cover" />
        <div className="w-full bg-blue-100 py-4 mt-0 overflow-hidden">
          <div className="scrolling-wrapper flex animate-scroll items-center">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-2 w-24 sm:w-28 md:w-32 lg:w-36"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .scrolling-wrapper {
          display: flex;
          overflow-x: hidden;
          white-space: nowrap;
          width: 300%;
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
