import React, { useEffect, useState } from "react";
import { OpenWeather_API_KEY } from "./ApiKeys";
import { OpenWeatherInstance } from "./axios";

type InWeather = {
  description: string;
  icon: string;
};

type Inmain = {
  temp_max: number;
  temp_min: number;
};

type Weather = {
  name: string;
  main: Inmain;
  weather: [InWeather];
};

const TodayWeather = () => {
  const [TodayWeather, setTodayWeather] = useState<Weather>({
    name: "",
    main: { temp_max: 0, temp_min: 0 },
    weather: [{ description: "", icon: "" }],
  });

  useEffect(() => {
    async function fetchData() {
      const request = await OpenWeatherInstance.get(
        `/weather?q=Nagoya,JP&appid=${OpenWeather_API_KEY}&lang=ja&units=metric`
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
      <p>{TodayWeather.name}</p>
      <img
        src={`http://openweathermap.org/img/w/${TodayWeather.weather[0].icon}.png`}
        alt="weather"
      />
      <p>{TodayWeather.weather[0].description}</p>
      <p>最高気温:{TodayWeather.main.temp_max}</p>
      <p>最低気温:{TodayWeather.main.temp_min}</p>
    </div>
  );
};

export default TodayWeather;
