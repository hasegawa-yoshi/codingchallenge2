import axios from "axios";

export const OpenWeatherInstance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
});

export const OneCallOpenWeatherInstance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
});
