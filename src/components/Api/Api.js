import { useEffect } from "react";
import { useLocationData, useInput, useRegionFilter } from "../Store/Store";

const Api = () => {
  const { setLocationData } = useLocationData();
  const { input } = useInput();
  const { regionFilter } = useRegionFilter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${input}`
        );
        if (response.ok) {
          const data = await response.json();
          setLocationData(data);
        } else {
          console.error("Error fetching location data");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${regionFilter}`
        );
        if (response.ok) {
          const data = await response.json();
          setLocationData(data);
        } else {
          console.error("Error fetching location data");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [regionFilter]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        if (response.ok) {
          const data = await response.json();
          setLocationData(data);
        } else {
          console.error("Error fetching location data");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Api;
