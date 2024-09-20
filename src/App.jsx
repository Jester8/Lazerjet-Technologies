import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../src/components/ThemeContext";
import { useTheme } from "../src/components/ThemeContext";
import NavBar from "../src/components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Loader from "../src/components/Loader"; // Assuming you have a Loader component

const AppContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-dark text-dark" : "bg-light text-light"
      } transition-colors duration-300`}
    >
      <NavBar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
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

  useEffect(() => {
    // Simulate a loading phase or perform actual data fetching here
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (example)
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  if (loading) {
    return <Loader />; // Show loader while loading is true
  }

  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
