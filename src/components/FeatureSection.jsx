import { useEffect, useState } from "react";
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
    "We deliver innovative solutions for your business needs. From concept to creation, we aim to solve problems with efficiency and creativity. We also help bring your ideas to life by by employing the use of the best languages and technologies to deliver just as expected.";

  const newSectionHeading = "Our Approach";
  const newSectionText =
    "We believe in a collaborative approach, working closely with our clients to understand their unique challenges and deliver tailored solutions. Our team of experts combines cutting-edge technology with industry best practices to drive your business forward.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
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
        {/* First Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full mb-12">
          {/* Text content for first section */}
          <div className="w-full lg:w-1/2 max-w-2xl mx-auto text-center lg:text-left lg:pr-6">
            {isLoading ? (
              <>
                <Skeleton variant="text" width="80%" height={50} />
                <Skeleton variant="text" width="100%" height={30} />
                <Skeleton variant="text" width="90%" height={30} />
              </>
            ) : (
              <div className="flex flex-col">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-bebas order-1">
                  {heading}
                </h1>
                <div className="order-3 lg:order-2">
                  <p className="text-md sm:text-lg mb-4 font-inria">{mainText}</p>
                </div>
                {/* Image for mobile view */}
                <div className="w-full mb-4 order-2 lg:hidden">
                  <img
                    src={F1}
                    alt="Feature Image"
                    className="w-full rounded-lg object-cover"
                    style={{ height: "300px" }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Image Section - hidden on mobile, shown on desktop */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:pl-6">
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

        {/* Second Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
          {/* Image Section */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:pr-6 lg:order-1">
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

          {/* Text content for second section */}
          <div className="w-full lg:w-1/2 max-w-2xl mx-auto text-center lg:text-left lg:pl-6 lg:order-2">
            {isLoading ? (
              <>
                <Skeleton variant="text" width="60%" height={30} />
                <Skeleton variant="text" width="60%" height={30} />
              </>
            ) : (
              <div className="flex flex-col">
                <h2 className="text-4xl sm:text-4xl font-bold mb-4 font-bebas order-1">
                  {newSectionHeading}
                </h2>
                {/* Image for mobile view */}
                <div className="w-full mb-4 order-2 lg:hidden">
                  <img
                    src={F2}
                    alt="Approach Image"
                    className="w-full rounded-lg object-cover"
                    style={{ height: "300px" }}
                  />
                </div>
                <p className="text-md sm:text-lg mb-4 font-inria order-3">
                  {newSectionText}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;