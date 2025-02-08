import React, { useState, useEffect } from "react";
import Hero from "../assets/img/background.png";
import { useTheme } from "../components/ThemeContext";
import host from "../assets/img/hosting.jpg";
import seo from "../assets/img/seo.png";
import web from "../assets/img/web.jpg";
import app from "../assets/img/app.jpg";
import { Skeleton } from "@mui/material";

const eventsData = [
  {
    title: "Web Development",
    description:
      "We build responsive and dynamic websites that showcase your brand and drive results. Our custom web solutions ensure that your site looks great, works flawlessly, and grows with your business.",
    image: web,
  },
  {
    title: "App Development",
    description:
      "We create user-friendly mobile apps tailored to your business needs. From concept to launch, our apps are designed to enhance customer engagement and deliver seamless experiences across all devices.",
    image: app,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Boost your online visibility and reach more customers with our expert SEO services. We optimize your website to rank higher on search engines, driving organic traffic and increasing your chances of being found online",
    image: seo,
  },
  {
    title: "Web Hosting",
    description:
      "Reliable and secure web hosting services to keep your website online 24/7. With fast loading speeds and robust support, we ensure your site performs at its best, no matter the traffic.",
    image: host,
  },
];

const Card = ({ title, description, isDark, image, isLoading }) => (
  <div
    className={`rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative ${
      isDark ? "bg-gray-800 text-white" : "bg-white text-black"
    }`}
  >
    {/* Image Container */}
    <div className="image-container">
      {isLoading ? (
        <Skeleton variant="rectangular" width="100%" height={192} />
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform scale-105 transition-transform duration-300"
        />
      )}
    </div>

    {/* Content Container */}
    <div className="content-container p-4 font-inria">
      {isLoading ? (
        <>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="90%" />
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold mb-2 font-bebas">{title}</h3>
          <p className="text-sm">{description}</p>
        </>
      )}
    </div>
  </div>
);

const CardSection = () => {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Set the loading time to 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`container mx-auto px-4 py-12 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-3xl font-bold font-bebas text-center mb-4">
        OUR SERVICES
      </h2>
      <p className="text-center mb-8 font-inria max-w-2xl mx-auto">
        We provide a tailored and needed services that will place your business in the fore front of the vast online audience 
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-inria">
        {eventsData.map((event, index) => (
          <Card
            key={index}
            {...event}
            isDark={isDarkMode}
            isLoading={isLoading}
            className="font-inria"
          />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
