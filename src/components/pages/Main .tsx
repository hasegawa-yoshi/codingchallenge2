import { Grid } from "@mui/material";
import React from "react";
import GraphComponent from "../organisms/GraphComponent";
import HeaderComponents from "../organisms/HeaderComponents";
import MapComponent from "../organisms/MapComponent";
import TodayWeatherComponent from "../organisms/TodayWeatherComponent";
import WeekWeatherComponent from "../organisms/WeekWeatherComponent";

const Main = () => {
  return (
    <div className="App">
      <HeaderComponents />
      <br />
      <br />
      <br />
      <h1>天気予報</h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding={2}
      >
        <Grid item xs={5.9}>
          <TodayWeatherComponent />
        </Grid>
        <Grid item xs={0.2}></Grid>
        <Grid item xs={5.9}>
          <MapComponent />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding={2}
      >
        <Grid item xs={6.9}>
          <GraphComponent />
        </Grid>
        <Grid item xs={0.2}></Grid>
        <Grid item xs={4.9}>
          <WeekWeatherComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;