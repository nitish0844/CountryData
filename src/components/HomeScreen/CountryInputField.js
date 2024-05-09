import React from "react";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../Store/Store";
import { useInput } from "../Store/Store";

const CountryInputField = () => {
  const { theme } = useTheme();
  const { setInput } = useInput();

  return (
    <div
      className={`flex items-center ${
        theme === "dark" ? "bg-slate-500" : "bg-white"
      } rounded-md shadow-md p-3 md:w-1/3 w-full mb-5 md:mb-0`}
    >
      <FaSearch
        className={`text-${
          theme === "dark" ? "white" : "black"
        } cursor-pointer`}
      />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setInput(e.target.value)}
        className={`w-full outline-none px-4 py-2 ${
          theme === "dark" ? "bg-slate-500 text-white" : "bg-white text-black"
        } `}
      />
    </div>
  );
};

export default CountryInputField;
