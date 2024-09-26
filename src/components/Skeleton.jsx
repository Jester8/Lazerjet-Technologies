import React from "react";

const Skeleton = ({ height, width, isDarkMode, rounded = "rounded" }) => {
  return (
    <div
      className={`animate-pulse ${rounded}`}
      style={{
        height: height || "20px",
        width: width || "100%",
        backgroundColor: isDarkMode ? "#2d2d2d" : "#e5e7eb", // Adjusting for dark mode and light mode
      }}
    ></div>
  );
};

export default Skeleton;
