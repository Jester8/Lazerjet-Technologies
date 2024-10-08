import React from "react";
import img from "../assets/img/background.png";
import ContactForm from "./../components/ContactForm";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext";

const Contact = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="content-wrapper pt-12">
        <div
          className={`flex-grow flex flex-col md:flex-row items-center justify-center px-4 py-6 md:py-12 bg-cover bg-center ${
            isDarkMode ? "bg-opacity-50" : ""
          } relative`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60 md:opacity-70"></div>

          <div className="md:w-1/2 text-left md:pr-8 relative z-10 text-center ml-0 lg:ml-[590px] md:ml-0">
            <h1
              className={`${
                isDarkMode ? "text-gray-100" : "text-white"
              } text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-bebas mb-4 animate-slide-in-slow text-start`}
            >
              Home / Contact Us
            </h1>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
