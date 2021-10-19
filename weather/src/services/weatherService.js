import http from "./httpService";
import { apiURL } from "../config.json";

const weekday_list = {
  1: "Mon",
  2: "Tues",
  3: "Wed",
  4: "Thurs",
  5: "Fri",
  6: "Sat",
  0: "Sun",
};
export default async function getWeatherForecast() {
  const { data } = await http.get(apiURL);

  const dateList = data.list;

  const weatherData = dateList.map((day, index) =>
    mapWeatherModelToView(day, index)
  );

  return weatherData;
}

function mapWeatherModelToView(weatherDay, index) {
  let weatherObj = {
    day: setDay(weatherDay.dt, index),
    tempMax: Math.round(weatherDay.temp.max),
    tempMin: Math.round(weatherDay.temp.min),
    weatherIcon: weatherDay.weather[0].icon,
  };
  return weatherObj;
}

function setDay(dateTime, index) {
  const date = new Date(dateTime);
  let day = date.getDay() + index;
  return weekday_list[day % 7];
}
