import { Grid, Hidden } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { OpenWeather_API_KEY } from "./ApiKeys";
import { OneCallOpenWeatherInstance } from "./axios";

type Inweather = {
  description: string;
  icon: string;
};

type Indaily = {
  temp: { min: number; max: number };
  dt: number;
  weather: [Inweather];
};

type WeekWeatherType = {
  daily: Indaily[];
};

const WeekWeather = () => {
  const latlngSelector = useSelector((state: any) => state.LatLngReducer);

  const [WeekWeather, setWeekWeather] = useState<WeekWeatherType>({
    daily: [
      {
        temp: { min: 0, max: 0 },
        dt: 0,
        weather: [{ description: "", icon: "" }],
      },
    ],
  });

  useEffect(() => {
    async function fetchData() {
      const request = await OneCallOpenWeatherInstance.get(
        `/onecall?lat=${latlngSelector.lat}&lon=${latlngSelector.lng}&exclude=current,minutely,hourly,alerts&appid=${OpenWeather_API_KEY}&lang=ja&units=metric`
      );
      setWeekWeather(request.data);
      return request;
    }
    fetchData();
  }, [latlngSelector]);

  console.log(WeekWeather);

  let jpdatearr: any = [];

  WeekWeather.daily.map((day, i) => {
    let date = new Date(day.dt * 1000);
    let jpdate = date.toLocaleDateString();
    jpdatearr[i] = jpdate;
    return jpdatearr;
  });

  console.log(jpdatearr);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>週間予報</h2>
      {WeekWeather.daily.map((day, i) => (
        <Grid
          container
          spacing={0.5}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          marginBottom={2}
          key={i}
        >
          <Grid item xs={12} md={2}>
            {jpdatearr[i]}
          </Grid>
          <Grid item xs={2}>
            <img
              src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
              alt="weather"
            />
          </Grid>
          <Hidden mdDown>
            <Grid item md={3}>
              <span>{day.weather[0].description}</span>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={3}>
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
