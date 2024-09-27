import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Logoblue from "../assets/logo/1.png";
import LogoWhite from "../assets/logo/2.png";
import SearchBar from "../components/SearchBar.";
import { useTheme } from "../components/ThemeContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const isActive = (path) => location.pathname === path;
  return (
    <nav
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-light text-gray-900"
      } shadow-sm fixed top-0 left-0 right-0 z-50 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={isDarkMode ? LogoWhite : Logoblue}
              alt="Lazerjet-tech Logo"
              className="w-auto h-[100px]"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-4 font-inria">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-inria text-lg ${
                  isDarkMode
                    ? "hover:text-white" // White text on hover in dark mode
                    : "hover:text-black" // Black text on hover in light mode
                } transition-all duration-300 ${
                  isActive(link.path)
                    ? isDarkMode
                      ? "text-white font-bold relative"
                      : "text-black font-bold relative"
                    : ""
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white animate-slide-in"></span> // White underline for active link in dark mode
                )}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle, Menu and Search */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden lg:block w-64">
              <SearchBar setSearchTerm={setSearchTerm} />
            </div>

            {/* Dark Mode Toggle Button */}
            <button
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Brightness7Icon className="h-6 w-6 text-white" />
              ) : (
                <Brightness4Icon className="h-6 w-6 text-gray-900" />
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <CloseIcon className="h-6 w-6 text-black transition-transform duration-300 rotate-90" />
              ) : (
                <MenuIcon className="h-6 w-6 text-black transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } lg:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  to={link.path}
                  className={`block py-2 font-inria text-lg ${
                    isDarkMode
                      ? "hover:text-white" // White text on hover in dark mode
                      : "hover:text-black" // Black text on hover in light mode
                  } transition-all duration-300 ${
                    isActive(link.path)
                      ? isDarkMode
                        ? "text-black font-bold relative"
                        : "text-black font-bold relative"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white animate-slide-in"></span> // White underline in dark mode
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
