import React from "react";
import WeekWeather from "../../api/WeekWeather";

const WeekWeatherComponent = () => {
  return (
    <div
      style={{ border: "1px solid black", height: "400px", overflow: "scroll" }}
    >
      <WeekWeather />
    </div>
  );
};

export default WeekWeatherComponent;
