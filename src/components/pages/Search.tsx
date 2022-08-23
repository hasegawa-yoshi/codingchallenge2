/* eslint-disable*/

import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { geocodingInstance } from "../../api/axios";
import PrimaryButton from "../atoms/PrimaryButton";
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

  const history = useHistory();

  const presearchword = useLocation().search;

  const searchword = presearchword.slice(1);

  const [locdata, setLocdata] = useState<geo>([
    { geometry: { coordinates: [999, 999] }, properties: { title: "" } },
  ]);

  /*
  const [load, setLoad] = useState(false);

  console.log(load);

  setTimeout(() => {
    setLoad(true);
  }, 1000);
  */

  useEffect(() => {
    async function fetchData() {
      const request = await geocodingInstance.get(
        `https://msearch.gsi.go.jp/address-search/AddressSearch?q=${searchword}`
      );
      console.log(request);
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
      if (request.data.length === 0) {
        history.push("/error");
      }
      latlngfunction();
      return request;
    }
    fetchData();
  }, [searchword, locdata[0].properties.title]);

  console.log(locdata);
  console.log(locdata[0].geometry.coordinates[0]);
  console.log(locdata[0].properties.title);
  console.log(latlngSelector);

  const onClickReturnButton = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <div className="App">
      {latlngSelector.lat === 999 ? (
        <p>loading</p>
      ) : (
        <div>
          <HeaderComponents />
          <br />
          <br />
          <br />
          <h1>天気予報</h1>
          <p>{locdata[0].properties.title}の天気を表示しています</p>
          <Button onClick={onClickReturnButton} variant="outlined">
            現在地に戻る
          </Button>
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
      )}
    </div>
  );
};
export default Search;
