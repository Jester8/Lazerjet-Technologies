import React, { useState, useEffect } from "react";
import LogoWhite from "../assets/logo/2.png"; // Make sure the path to the logo is correct

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="relative overflow-hidden h-20 mb-6">
        <img
          src={LogoWhite}
          alt="LazerJet Logo"
          className="w-32 h-34 animate-slide-down"
          style={{ animation: "slideDown 1s ease-in-out forwards" }}
        />
      </div>

      <div className="loader border-t-transparent border-white"></div>

      <style jsx="true">{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .loader {
          border: 4px solid white; /* Outer border */
          border-radius: 50%;
          border-top: 4px solid transparent; /* Transparent border-top for spinning effect */
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
