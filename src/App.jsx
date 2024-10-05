import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "../src/components/ThemeContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Loader from "../src/components/Loader";

const AppContent = ({ filteredResults }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-dark-900 text-dark" : "bg-light text-light"
      } transition-colors duration-300`}
    >
      <NavBar />
      <div className="pt-16">
        <Routes>
          <Route
            path="/"
            element={<Home filteredResults={filteredResults} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (term) => {
    // Implement your filtering logic here
    const results = []; // Replace with your actual data array
    const filteredResults = results.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredResults(filteredResults);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <Router>
        <NavBar onSearch={handleSearch} />
        <AppContent filteredResults={filteredResults} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
