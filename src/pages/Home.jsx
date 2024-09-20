import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import NavBar from "../components/NavBar";
import Vid1 from "../assets/vid/Lazerjett.mp4";
import img1 from "../assets/img/pic.png";
import Loader from "../components/Loader.jsx";

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
      {/* Make NavBar stick to the top */}
      <NavBar />

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center p-0 text-center relative">
        <img
          src={img1}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
