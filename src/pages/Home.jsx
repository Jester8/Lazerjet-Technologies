import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import NavBar from "../components/NavBar";
import img1 from "../assets/img/pic.jpg"; // Ensure this path is correct
import Loader from "../components/Loader.jsx";
import Atc from "../assets/img/ATC_Africa_logo_(Purple).png";
import LFC from "../assets/img/Lfc.png";
import Depigbo from "../assets/img/depgibo.jpg";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a data loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* NavBar */}
      <NavBar />

      {/* Main Content Section */}
      <div className="flex-grow flex flex-col items-center text-center relative">
        <img
          src={img1}
          alt=""
          className="w-auto h-auto max-w-full max-h-full object-contain"
        />

        {/* Brands Section with Text */}
        <div className="w-full bg-blue-100 py-4 overflow-hidden mt-2">
          {" "}
          {/* Reduced space between image and text */}
          <div className="flex animate-scroll">
            <div className="h-16 mx-4 flex items-center text-xl font-bold text-blue-600">
              Brand 1
            </div>
            <div className="h-16 mx-4 flex items-center text-xl font-bold text-blue-600">
              Brand 2
            </div>
            <div className="h-16 mx-4 flex items-center text-xl font-bold text-blue-600">
              Brand 3
            </div>
            <div className="h-16 mx-4 flex items-center text-xl font-bold text-blue-600">
              Brand 4
            </div>
            {/* Repeat the texts to make it loop seamlessly */}
            <div className="h-16 mx-4 flex items-center text-xl font-bold text-blue-600">
              Brand 1
            </div>
            <div className="h-16 mx-4 flex items-center text-xl font-bold text-blue-600">
              Brand 2
            </div>
            <div className="h-16 mx-4 flex items-center text-xl font-bold text-blue-600">
              Brand 3
            </div>
            <div className="h-16 mx-4 flex items-center text-xl font-bold text-blue-600">
              Brand 4
            </div>
          </div>
        </div>
      </div>

      {/* Add the scroll animation */}
      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
