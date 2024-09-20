// src/components/FilterOptions.jsx
import React from "react";

const FilterOptions = ({ setFilter }) => {
  return (
    <select
      onChange={(e) => setFilter(e.target.value)}
      className="border p-2 rounded-md"
    >
      <option value="all">All</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
    </select>
  );
};

export default FilterOptions;
