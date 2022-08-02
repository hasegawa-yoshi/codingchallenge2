import React, { useEffect, useState } from "react";
import { OpenWeather_API_KEY } from "./ApiKeys";
import { OpenWeatherInstance } from "./axios";

type InWeather = {
  description: string;
  icon: string;
};

type Weather = {
  current: { temp: number; weather: InWeather[] };
};

const TodayWeather = () => {
  const [TodayWeather, setTodayWeather] = useState<Weather>({
    current: { temp: 0, weather: [{ description: "", icon: "" }] },
  });

  useEffect(() => {
    async function fetchData() {
      const request = await OpenWeatherInstance.get(
        `/onecall?lat=35&lon=137&exclude=minutely,hourly,daily,alerts&appid=${OpenWeather_API_KEY}&lang=ja&units=metric`
      );
      setTodayWeather(request.data);
      return request;
    }
    fetchData();
  }, []);

  console.log(TodayWeather);

  return (
    <div style={{ margin: "auto" }}>
      <h2>今日の天気</h2>
      <img
        src={`http://openweathermap.org/img/w/${TodayWeather.current.weather[0].icon}.png`}
        alt="weather"
      />
      <p>{TodayWeather.current.weather[0].description}</p>
      <p>現在の気温:{TodayWeather.current.temp}</p>
    </div>
  );
};

export default TodayWeather;
