import React, { useState, useCallback, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const GOOGLE_API_KEY = "AIzaSyCXW5walPyHBo-IalDIA8CQHpAql9yb834";
const SEARCH_ENGINE_ID = "AIzaSyCXW5walPyHBo-IalDIA8CQHpAql9yb834";

const SearchBar = ({ setSearchTerm }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filterWords, setFilterWords] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);

  const handleSearch = useCallback(
    async (value) => {
      const words = value.split(" ");
      const searchTerms = words.filter((word) => !word.startsWith("-"));
      const newFilterWords = words
        .filter((word) => word.startsWith("-"))
        .map((word) => word.slice(1));

      setSearchTerm(searchTerms.join(" "));
      setFilterWords(newFilterWords);

      if (searchTerms.length > 0) {
        setIsLoading(true);
        try {
          const results = await performGoogleSearch(searchTerms.join(" "));
          setSearchResults(results);
          setShowResults(results.length > 0);
        } catch (error) {
          console.error("Error performing search:", error);
          setSearchResults([]);
          setShowResults(false);
        }
        setIsLoading(false);
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    },
    [setSearchTerm]
  );

  const performGoogleSearch = async (query) => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(
      query
    )}`;

    const response = await axios.get(url);
    return response.data.items.map((item) => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
    }));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handleSearch(value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <div className="hidden lg:flex items-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md w-full">
        <input
          type="text"
          className="flex-grow p-2 rounded-l-md bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="p-2">
          <FaSearch className="text-gray-500 dark:text-gray-300" />
        </button>
      </div>

      <button
        className="lg:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={() => setShowSearch(!showSearch)}
      >
        <FaSearch className="text-gray-500 dark:text-gray-300" />
      </button>

      {showSearch && (
        <div className="absolute top-12 left-0 right-0 lg:hidden flex items-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md p-2">
          <input
            type="text"
            className="flex-grow p-2 rounded-md bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search globally... (Use - to filter out words)"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="p-2">
            <FaSearch className="text-gray-500 dark:text-gray-300" />
          </button>
        </div>
      )}

      {isLoading && (
        <div className="absolute top-full left-0 right-0 mt-1 p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10">
          Loading...
        </div>
      )}

      {showResults && !isLoading && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-h-60 overflow-y-auto">
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                <a
                  href={result.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-blue-600 dark:text-blue-400 font-semibold">
                    {result.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {result.snippet}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {filterWords.length > 0 && (
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Filtered words: {filterWords.join(", ")}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
