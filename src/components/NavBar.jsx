import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchIcon from "@mui/icons-material/Search";
import Logoblue from "../assets/logo/1.png";
import LogoWhite from "../assets/logo/2.png";
import SearchBar from "../components/SearchBar.";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`${
        isDarkMode ? "bg-dark text-dark" : "bg-light text-light"
      } shadow-sm fixed top-0 left-0 right-0 z-10 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={isDarkMode ? LogoWhite : Logoblue}
              alt="Lazerjet-tech Logo"
              className="w-auto h-[100px]"
            />
          </Link>
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
                className={`font-inria text-lg hover:text-blue-500 transition-all duration-300 ${
                  isActive(link.path) ? "text-blue-500 font-bold relative" : ""
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 animate-slide-in"></span>
                )}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block w-64">
              <SearchBar setSearchTerm={setSearchTerm} />
            </div>
            <button
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-300"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Brightness7Icon className="h-6 w-6" />
              ) : (
                <Brightness4Icon className="h-6 w-6" />
              )}
            </button>
            <button
              className="lg:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <CloseIcon className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <MenuIcon className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
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
                  className={`block py-2 font-inria text-lg hover:text-blue-500 transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-blue-500 font-bold relative"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 animate-slide-in"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          {/* <div className="mt-4">
            <SearchBar setSearchTerm={setSearchTerm} />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
