import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon from react-icons

const SearchBar = ({ setSearchTerm }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="relative">
      {/* Search bar with button for larger screens */}
      <div className="hidden lg:flex items-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md w-full">
        <input
          type="text"
          className="flex-grow p-2 rounded-l-md bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="p-2">
          <FaSearch className="text-gray-500 dark:text-gray-300" />
        </button>
      </div>

      {/* Search Icon for mobile */}
      <button
        className="lg:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={() => setShowSearch(!showSearch)}
      >
        <FaSearch className="text-gray-500 dark:text-gray-300" />
      </button>

      {/* Full search bar for mobile when the search icon is clicked */}
      {showSearch && (
        <div className="absolute top-12 left-0 right-0 lg:hidden flex items-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md p-2">
          <input
            type="text"
            className="flex-grow p-2 rounded-md bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="p-2">
            <FaSearch className="text-gray-500 dark:text-gray-300" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
