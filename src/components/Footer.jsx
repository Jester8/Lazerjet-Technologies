import React from "react";
import Logoblue from "../assets/logo/1.png";
import LogoWhite from "../assets/logo/2.png";
import { FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../components/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`py-8 ${
        isDarkMode
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-800 font-inria "
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img
              src={isDarkMode ? LogoWhite : Logoblue}
              alt="Logo"
              className="h-[100px]"
            />
          </div>
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center">
              <li className="mx-4 my-2">
                <a href="/" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li className="mx-4 my-2">
                <a href="/about" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li className="mx-4 my-2">
                <a href="/services" className="hover:text-blue-500">
                  Services
                </a>
              </li>
              <li className="mx-4 my-2">
                <a href="/contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 flex justify-center md:justify-end">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-2xl hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-2xl hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-2xl hover:text-green-500"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 font-poppins">
          <p>© 2024 Lazerjet-Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
