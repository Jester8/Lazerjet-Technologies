import React, { useEffect, useState } from "react";
import { useTheme } from "../components/ThemeContext";
import FloatingIcons from "./FloatingIcons";
import F1 from "../assets/img/ai.jpeg";
import F2 from "../assets/img/feature2.png";
import { Skeleton } from "@mui/material";

const FeatureSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useTheme();

  const heading = "What We Do";
  const mainText =
    "We deliver innovative solutions for your business needs. From concept to creation, we aim to solve problems with efficiency and creativity.";
  const featuresText =
    "Our approach revolves around bringing the best of technology to meet real-world needs. From innovative AI systems to IoT integration, we ensure that your business remains competitive in a rapidly changing landscape.";

  const newSectionHeading = "Our Approach";
  const newSectionText =
    "We believe in a collaborative approach, working closely with our clients to understand their unique challenges and deliver tailored solutions. Our team of experts combines cutting-edge technology with industry best practices to drive your business forward.";

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
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-bebas">
                  {heading}
                </h1>
                <p className="text-md sm:text-lg mb-4 font-inria">{mainText}</p>
                <p className="text-md sm:text-lg font-inria">{featuresText}</p>
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

        {/* New Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
          {/* Image Section (Left) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:pr-6 order-2 lg:order-1">
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                width={600}
                height={400}
                className="rounded-lg"
              />
            ) : (
              <img
                src={F2}
                alt="Approach Image"
                className="w-full rounded-lg object-cover"
                style={{ maxWidth: "600px", height: "400px" }}
              />
            )}
          </div>
          {/* Text Section (Right) */}
          <div className="w-full lg:w-1/2 max-w-2xl mx-auto text-center lg:text-left mb-6 lg:mb-0 lg:pl-6 order-1 lg:order-2">
            {isLoading ? (
              <>
                <Skeleton variant="text" width="60%" height={30} />
                <Skeleton variant="text" width="60%" height={30} />
              </>
            ) : (
              <>
                <h2 className="text-4xl sm:text-4xl font-bold mb-4 font-bebas">
                  {newSectionHeading}
                </h2>
                <p className="text-lg sm:text-xl font-inria">
                  {newSectionText}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
