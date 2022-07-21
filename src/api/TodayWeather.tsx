import React, { useEffect, useState } from "react";
import { OpenWeather_API_KEY } from "./ApiKeys";
import { OpenWeatherInstance } from "./axios";

type InWeather = {
  description: string;
};

type Weather = {
  name: string;
  weather: [InWeather];
};

const TodayWeather = () => {
  const [TodayWeather, setTodayWeather] = useState<Weather>({
    name: "",
    weather: [{ description: "" }],
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
      <p>{TodayWeather.weather[0].description}</p>
    </div>
  );
};

export default TodayWeather;
