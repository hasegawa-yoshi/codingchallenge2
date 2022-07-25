import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { OpenWeather_API_KEY } from "./ApiKeys";
import { OneCallOpenWeatherInstance } from "./axios";

type Inweather = {
  description: string;
  icon: string;
};

type Indaily = {
  temp: { min: number; max: number };
  weather: [Inweather];
};

type WeekWeatherType = {
  daily: [
    Indaily,
    Indaily,
    Indaily,
    Indaily,
    Indaily,
    Indaily,
    Indaily,
    Indaily
  ];
};

const WeekWeather = () => {
  const [WeekWeather, setWeekWeather] = useState<WeekWeatherType>({
    daily: [
      { temp: { min: 0, max: 0 }, weather: [{ description: "", icon: "" }] },
      { temp: { min: 0, max: 0 }, weather: [{ description: "", icon: "" }] },
      { temp: { min: 0, max: 0 }, weather: [{ description: "", icon: "" }] },
      { temp: { min: 0, max: 0 }, weather: [{ description: "", icon: "" }] },
      { temp: { min: 0, max: 0 }, weather: [{ description: "", icon: "" }] },
      { temp: { min: 0, max: 0 }, weather: [{ description: "", icon: "" }] },
      { temp: { min: 0, max: 0 }, weather: [{ description: "", icon: "" }] },
      { temp: { min: 0, max: 0 }, weather: [{ description: "", icon: "" }] },
    ],
  });

  useEffect(() => {
    async function fetchData() {
      const request = await OneCallOpenWeatherInstance.get(
        `/onecall?lat=35&lon=137&exclude=current,minutely,hourly,alerts&appid=${OpenWeather_API_KEY}&lang=ja&units=metric`
      );
      setWeekWeather(request.data);
      return request;
    }
    fetchData();
  }, []);

  console.log(WeekWeather);

  return (
    <div style={{ margin: "auto" }}>
      <h2>週間予報</h2>
      {WeekWeather.daily.map((day, i) => (
        <Grid container direction="row" padding={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            {" "}
            <img
              src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
              alt="weather"
            />
          </Grid>
          <Grid item xs={3}>
            {"  "}
            <span>{day.weather[0].description}</span>
          </Grid>
          <Grid item xs={3}>
            {" "}
            <span>
              {Math.round(day.temp.max)}/{Math.round(day.temp.min)}℃
            </span>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default WeekWeather;
