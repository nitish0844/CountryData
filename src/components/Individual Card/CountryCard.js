import React, { useEffect, useState } from "react";
import Navi from "../HomeScreen/NaviBar";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useTheme } from "../Store/Store";

const CountryCard = () => {
  const { name } = useParams();
  const [countryInfo, setCountryInfo] = useState({});
  const { theme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        if (response.ok) {
          const data = await response.json();
          setCountryInfo(data);
        } else {
          console.error("Error fetching location data");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
  }, [name]);

  console.log(countryInfo[0]);

  return (
    <div className={`h-screen ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
      <Navi />
      <div>
        <button
          className={`flex shadow-2xl flex-row items-center border-2 gap-6 px-4 p-2 rounded-md font-semibold mt-14 md:ml-24 ml-10 ${
            theme === "dark"
              ? "bg-slate-500 text-white"
              : "bg-white text-black border-black"
          }`}
          onClick={() => window.history.back()}
        >
          <FaArrowLeft className="text-xl" />
          Back
        </button>

        <div className="flex justify-center lg:flex-row md:flex-col flex-col gap-10 md:mt-10 mt:2 items-center">
          <img
            className="md:w-[550px] md:h-[300px] w-[300px] h-[200px] object-cover mt-5 shadow-2xl"
            src={countryInfo[0]?.flags?.svg}
            alt={countryInfo[0]?.name?.common}
          />

          <div
            className={`p-6 ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            <h1 className="text-3xl font-bold">
              {countryInfo[0]?.name?.common}
            </h1>

            <div className="flex flex-row gap-8 mt-5">
              <div className="text-base">
                <p style={{ marginBottom: "8px" }}>
                  <strong className="font-semibold">Native Name:</strong>{" "}
                  {countryInfo[0]?.name?.official}
                </p>
                <p style={{ marginBottom: "8px" }}>
                  <strong className="font-semibold">Population:</strong>{" "}
                  {countryInfo[0]?.population}
                </p>
                <p style={{ marginBottom: "8px" }}>
                  <strong className="font-semibold">Region:</strong>{" "}
                  {countryInfo[0]?.region}
                </p>
                <p style={{ marginBottom: "8px" }}>
                  <strong className="font-semibold">Sub Region:</strong>{" "}
                  {countryInfo[0]?.subregion}
                </p>
                <p style={{ marginBottom: "8px" }}>
                  <strong className="font-semibold">Capital:</strong>{" "}
                  {countryInfo[0]?.capital}
                </p>
              </div>

              <div>
                <p style={{ marginBottom: "8px" }}>
                  <strong className="font-semibold">Top Level Domain:</strong>{" "}
                  {countryInfo[0]?.tld[0]}
                </p>
                <p style={{ marginBottom: "8px" }}>
                  <strong className="font-semibold">Currencies:</strong>{" "}
                  {
                    countryInfo[0]?.currencies[
                      Object.keys(countryInfo[0]?.currencies)[0]
                    ].name
                  }
                </p>
                <p style={{ marginBottom: "8px" }}>
                  <strong className="font-semibold">Language:</strong>{" "}
                  {
                    countryInfo[0]?.languages[
                      Object.keys(countryInfo[0]?.languages)[0]
                    ]
                  }
                </p>
              </div>
            </div>

            {countryInfo[0]?.borders && (
              <div className="mt-6">
                <p>
                  <strong className="font-semibold">Border Countries:</strong>{" "}
                  {countryInfo[0]?.borders}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
