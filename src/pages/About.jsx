import React from "react";
import { useTheme } from "../components/ThemeContext";
import img from "../assets/img/background.png";
import Aboutdetails from "../components/Aboutdetails";
import FloatingIcon from "../components/FloatingIcons";
import Animate from "../assets/vid/Animation.gif";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <div className="content-wrapper pt-12">
        <div
          className={`flex-grow flex flex-col md:flex-row items-center justify-center px-4 py-6 md:py-12 bg-cover bg-center ${
            isDarkMode ? "bg-opacity-50" : ""
          } relative`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60 md:opacity-70"></div>

          <div className="md:w-1/2 text-left md:pr-8 relative z-10 text-center ml-0 lg:ml-[560px] md:ml-0">
            <h1
              className={`${
                isDarkMode ? "text-gray-100" : "text-white"
              } text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-bebas mb-4 animate-slide-in-slow text-start`}
            >
              Home / About Us
            </h1>
          </div>
        </div>
      </div>

      <Aboutdetails />
      <AboutCard />

      <Footer />
    </div>
  );
};

export default About;
