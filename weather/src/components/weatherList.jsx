import React, { useState, useEffect } from "react";
import getWeatherForecast from "../services/weatherService";
import WeatherReport from "./weatherReport";
const WeatherList = () => {
  const [foreCast, setForeCast] = useState([]);
  useEffect(() => {
    async function getWeatherFromApi() {
      const weatherData = await getWeatherForecast();
      setForeCast(weatherData);
    }
    getWeatherFromApi();
  }, []);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          margin: "100px 100px 100px 100px",
        }}
      >
        {foreCast.map((weatherDay) => (
          <WeatherReport
            key={weatherDay.day}
            day={weatherDay.day}
            weatherIcon={weatherDay.weatherIcon}
            tempMax={weatherDay.tempMax}
            tempMin={weatherDay.tempMin}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherList;
