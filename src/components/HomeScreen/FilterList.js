import React, { useState } from "react";
import { useRegionFilter, useTheme } from "../Store/Store";

const regionList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const FilterList = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const { setRegionFilter } = useRegionFilter();
  const { theme } = useTheme();

  const handleChange = (e) => {
    setSelectedRegion(e.target.value);
    setRegionFilter(e.target.value);
  };

  return (
    <div>
      <select
        value={selectedRegion}
        onChange={handleChange}
        className={`p-3 px-6 border rounded-md ${
          theme === "dark"
            ? "bg-slate-500 text-white border-white"
            : "bg-white text-black border-black"
        }`}
      >
        <option value="">Filter by Region</option>
        {regionList.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterList;
