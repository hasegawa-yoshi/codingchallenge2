import React from "react";
import TodayWeather from "../../api/TodayWeather";

const TodayWeatherComponent = () => {
  return (
    <div style={{ border: "1px solid black" }}>
      <TodayWeather />
    </div>
  );
};

export default TodayWeatherComponent;
