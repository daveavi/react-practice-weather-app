import React from "react";
import { imageURL } from "../config.json";

const WeatherReport = (props) => {
  return (
    <div
      style={{
        height: "400px",
        width: "400px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>{props.day}</h2>
      <img src={`${imageURL}` + `${props.weatherIcon}` + `@2x.png`} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>{props.tempMax}</h1>
        <h1 style={{ marginLeft: "20px" }}>{props.tempMin}</h1>
      </div>
    </div>
  );
};

export default WeatherReport;
