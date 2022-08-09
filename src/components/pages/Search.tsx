/* eslint-disable*/

import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { geocodingInstance } from "../../api/axios";
import GraphComponent from "../organisms/GraphComponent";
import HeaderComponents from "../organisms/HeaderComponents";
import MapComponent from "../organisms/MapComponent";
import TodayWeatherComponent from "../organisms/TodayWeatherComponent";
import WeekWeatherComponent from "../organisms/WeekWeatherComponent";

type geoob = {
  geometry: { coordinates: [number, number] };
  properties: { title: string };
};

type geo = [geoob];

const Search = () => {
  const latlngSelector = useSelector((state: any) => state.LatLngReducer);

  const dispatch = useDispatch();

  const presearchword = useLocation().search;

  const searchword = presearchword.slice(1);

  const [locdata, setLocdata] = useState<geo>([
    { geometry: { coordinates: [35, 135] }, properties: { title: "" } },
  ]);

  useEffect(() => {
    async function fetchData() {
      const request = await geocodingInstance.get(
        `https://msearch.gsi.go.jp/address-search/AddressSearch?q=${searchword}`
      );
      setLocdata(request.data);
      const latlngfunction = () => {
        dispatch({
          type: "LAT_LNG",
          payload: {
            lat: locdata[0].geometry.coordinates[1],
            lng: locdata[0].geometry.coordinates[0],
          },
        });
      };
      latlngfunction();
      return request;
    }
    fetchData();
  }, [searchword, locdata[0].properties.title]);

  console.log(locdata);
  console.log(locdata[0].geometry.coordinates[0]);
  console.log(locdata[0].properties.title);
  console.log(latlngSelector);

  return (
    <div className="App">
      <HeaderComponents />
      <br />
      <br />
      <br />
      <h1>天気予報</h1>
      <p>{locdata[0].properties.title}の天気を表示しています</p>
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

export default Search;
