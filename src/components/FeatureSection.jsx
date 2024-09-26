import React, { useEffect, useState } from "react";
import { useTheme } from "../components/ThemeContext";
import FloatingIcons from "./FloatingIcons"; // Importing FloatingIcons component

const FeatureSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useTheme(); // Assuming this provides the current theme state

  const heading = "What We Do";
  const mainText =
    "We deliver innovative solutions for your business needs. From concept to creation, we aim to solve problems with efficiency and creativity.";
  const featuresText =
    "Our approach revolves around bringing the best of technology to meet real-world needs. From innovative AI systems to IoT integration, we ensure that your business remains competitive in a rapidly changing landscape.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 max-w-2xl mx-auto text-center lg:text-left mb-6 lg:mb-0 lg:pr-6 z-10">
        {/* Heading */}
        {!isLoading && (
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-inria">
            {heading}
          </h1>
        )}

        {/* Main Text */}
        {!isLoading && (
          <p className="text-lg sm:text-xl mb-4 font-inria">{mainText}</p>
        )}

        {/* Features Text */}
        {!isLoading && (
          <p className="text-md sm:text-lg font-inria">{featuresText}</p>
        )}
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:pl-6">
        {!isLoading ? (
          <img
            src="https://via.placeholder.com/400"
            alt="Feature Image"
            className="w-full sm:w-96 rounded-lg"
          />
        ) : (
          <div className="h-72 w-72 bg-gray-200 rounded-lg"></div> // Placeholder for image only if loading
        )}
      </div>

      {/* Floating Icons Component */}
      <FloatingIcons />
    </section>
  );
};

export default FeatureSection;
