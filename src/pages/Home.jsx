import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import img1 from "../assets/img/background.png";
import FeatureSection from "../components/FeatureSection";
import Hero from "../assets/img/herop.png";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
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

      <NavBar className="py-4 sm:py-[90%]" />

      {/* Hero Section */}
      <div
        className="flex-grow flex  flex-col md:flex-row items-center justify-center px-4 py-8 md:py-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="md:w-1/2 text-left md:pr-8">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-bebas mb-4 animate-slide-in-slow">
            Welcome to Lazerjet Technologies
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-inria max-w-3xl animate-slide-in-slower font-inria">
            We develop scalable websites for businesses across Africa and
            beyond.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={Hero}
            alt="Hero"
            className="w-4/5 h-auto object-contain animate-fade-in mx-auto"
          />
        </div>
      </div>

      {/* Feature Section */}
      <FeatureSection />

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
        @font-face {
          font-family: "Inria";
          src: url("/path/to/inria-font.woff2") format("woff2"),
            url("/path/to/inria-font.woff") format("woff");
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
    </div>
  );
};

export default Home;
