import React from "react";

import NaviBar from "./../components/HomeScreen/NaviBar";
import CountryDisplayScreen from "./CountryDisplayScreen";

import { useTheme } from "../components/Store/Store";

const HomeScreen = () => {
  const { theme } = useTheme();
  return (
    <div className={`h-full ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
      <NaviBar />
      <CountryDisplayScreen />
    </div>
  );
};

export default HomeScreen;
