import React from "react";
import CountryInputField from "../components/HomeScreen/CountryInputField";
import FilterList from "../components/HomeScreen/FilterList";
import { Link } from "react-router-dom";

import { useLocationData, useTheme } from "../components/Store/Store";

const CountryDisplayScreen = () => {
  const { theme } = useTheme();
  const { locationData } = useLocationData();

  const CountryCard = ({ country }) => {
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-16 gap-8 p-6">
          {country.map((country) => (
            <Link
              // to={`/${country.name.common}`}
              to={`/${encodeURIComponent(country.name.common)}`}
              className={`rounded-md shadow-xl w-[300px] ${
                theme === "dark" ? "bg-slate-500 text-white" : "bg-white"
              } border-2 border-slate-500`}
              key={country.cca3}
            >
              <img
                src={country.flags.png}
                alt={`${country.name.common} Flag`}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{country.name.common}</h2>
                <p>
                  <strong>Population:</strong> {country.population}
                </p>
                <p>
                  <strong>Capital:</strong> {country.capital}
                </p>
                <p>
                  <strong>Region:</strong> {country.region}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="flex md:flex-row flex-col justify-between items-center px-16 mt-10">
        <CountryInputField />
        <FilterList />
      </div>

      <div>
        <CountryCard country={locationData} />
      </div>
    </div>
  );
};

export default CountryDisplayScreen;
