import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

import { useTheme } from "../Store/Store";

const NaviBar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`flex flex-row justify-between items-center md:px-16 px-8 w-full h-24 shadow-xl ${
        theme === "dark" ? "bg-slate-500" : "bg-white"
      }`}
    >
      <div>
        <h1
          className={`md:text-2xl text-base font-bold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Where is the world?
        </h1>
      </div>

      <div
        className="flex flex-row items-center gap-3 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <FaRegMoon
            className={`md:text-2xl text-base ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          />
        ) : (
          <FaMoon
            className={`text-2xl ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          />
        )}
        <p
          className={`font-medium ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Dark Mode
        </p>
      </div>
    </nav>
  );
};

export default NaviBar;
