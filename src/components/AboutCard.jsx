import React, { useEffect, useState } from "react";
import { useTheme } from "../components/ThemeContext";
import FloatingIcons from "./FloatingIcons";
import F1 from "../assets/img/ai.jpeg";
import F2 from "../assets/img/feature2.png";
import { Skeleton } from "@mui/material";
import Aboutdetails from "./Aboutdetails";

const AboutCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useTheme();

  const heading = "Here's Our Story";
  const mainText =
    "Our brand is focused on developing web applications and services for clients in Africa and beyond. We priotize client satisfaction and ensure that we design, develop and deploy user friendly web applications.";
  const featuresText =
    " We started as a small startup focused on teaching and training students on developing web applications in 2022 and since it has evolved to become a brand reaching several organizations and businesses. ";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Set the loading time to 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcons />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full mb-12">
          <div className="w-full lg:w-1/2 max-w-2xl mx-auto text-center lg:text-left mb-6 lg:mb-0 lg:pr-6">
            {isLoading ? (
              <>
                <Skeleton variant="text" width="80%" height={50} />
                <Skeleton variant="text" width="100%" height={30} />
                <Skeleton variant="text" width="90%" height={30} />
              </>
            ) : (
              <>
                <p className="text-2xl sm:text-5xl font-bold mb-4 font-bebas">
                  {heading}
                </p>
                <p className="text-2xl sm:text-lg mb-4 font-inria">
                  {mainText}
                </p>
                <p className="text-2xl sm:text-lg font-inria">{featuresText}</p>
              </>
            )}
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:pl-6">
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                width={600}
                height={400}
                className="rounded-lg"
              />
            ) : (
              <img
                src={F1}
                alt="Feature Image"
                className="w-full rounded-lg object-cover"
                style={{ maxWidth: "600px", height: "400px" }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;