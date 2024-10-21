import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import img1 from "../assets/img/background.png";
import FeatureSection from "../components/FeatureSection";
import Hero from "../assets/img/herop.png";
import CardSection from "../components/CardSection";
import { useTheme } from "../components/ThemeContext";
import Button from "../components/button";
import { FaWhatsapp } from "react-icons/fa";
import pic from "../assets/img/pic.jpg";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useTheme();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const showWhatsAppPopup = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      window.open("https://wa.me/+2348059674789", "_blank");
    }, 5000);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      <Helmet>
        <title>Home | Lazerjet-Technologies</title>
        <meta
          name="description"
          content="Welcome to the homepage of Lazerjet-technologies."
        />
        <meta property="og:title" content="Home | My SEO Optimized Website" />
        <meta
          property="og:description"
          content="Explore our website with fast loading and great content."
        />
        <meta property="og:image" content={img1} />
      </Helmet>

      <NavBar />

      <div className="content-wrapper pt-12">
        <div
          className={`flex-grow flex flex-col md:flex-row items-center justify-center px-4 py-6 md:py-12 bg-cover bg-center ${
            isDarkMode ? "bg-opacity-50" : ""
          } relative`}
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60 md:opacity-70"></div>

          <div className="md:w-1/2 text-left md:pr-8 relative z-10">
            <h1
              className={`${
                isDarkMode ? "text-gray-100" : "text-white"
              } text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-bebas mb-4 animate-slide-in-slow`}
            >
              Welcome to Lazerjet Technologies
            </h1>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-white"
              } text-md sm:text-xl md:text-md lg:text-md font-inria max-w-3xl animate-slide-in-slower mb-6`}
            >
              Our expertise lies in designing and developing innovative,
              scalable websites that not only meet the needs of businesses
              across Africa but also extend their digital presence far beyond.
              we build platforms that are tailored to your goals, optimized for
              growth, and ready to engage audiences globally. We empower
              businesses to thrive in today’s fast-paced digital landscape
            </p>

            <Button
              text={
                <>
                  <FaWhatsapp className="inline-block mr-2 text-2xl" />
                  Contact us on WhatsApp
                </>
              }
              onClick={showWhatsAppPopup}
              className="w-full sm:w-auto font-bold text-lg sm:text-xl py-2 px-6 animate-slide-in-slower mt-4 flex items-center justify-center"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative z-10 hidden md:block">
            <img
              src={Hero}
              alt="Hero"
              className="w-4/5 h-auto object-contain animate-fade-in mx-auto"
            />
          </div>
        </div>
        <FeatureSection />
        <hr
          className={`my-8 border-t ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
        />

        <CardSection />
        <hr
          className={`my-8 border-t ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
        />
        <Slider />
      </div>

      <Footer />

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full mx-4 relative ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">WhatsApp Redirect</h2>
            <div className="flex flex-col items-center">
              <img
                src={pic}
                alt="Lazerjet Logo"
                className="w-[900px] h-32 mb-4"
              />
              <p className="text-center">
                This will redirect you to WhatsApp in 5 seconds.
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInSlow {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slide-in-slow {
          animation: slideInSlow 1.5s ease-out forwards;
        }
        .animate-slide-in-slower {
          animation: slideInSlow 2s ease-out 0.5s forwards;
        }
        .animate-fade-in {
          animation: fadeIn 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
export default Home;
