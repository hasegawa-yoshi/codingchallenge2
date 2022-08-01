import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { OneCallOpenWeatherInstance } from "./axios";
import { OpenWeather_API_KEY } from "./ApiKeys";

type Inhourly = {
  temp: number;
};

type TempType = {
  hourly: Inhourly[];
};

const Graph = () => {
  const [hourtemp, setHourTemp] = useState<TempType>();

  useEffect(() => {
    async function fetchData() {
      const request = await OneCallOpenWeatherInstance.get(
        `/onecall?lat=35&lon=137&exclude=current,minutely,daily,alerts&appid=${OpenWeather_API_KEY}&lang=ja&units=metric`
      );
      setHourTemp(request.data);
      return request;
    }
    fetchData();
  }, []);

  console.log(hourtemp?.hourly[0].temp);

  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = [
    "現在",
    "1時間後",
    "2時間後",
    "3時間後",
    "4時間後",
    "5時間後",
    "6時間後",
    "7時間後",
    "8時間後",
  ];
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "気温変化（℃）",
        data: [
          hourtemp?.hourly[0].temp,
          hourtemp?.hourly[1].temp,
          hourtemp?.hourly[2].temp,
          hourtemp?.hourly[3].temp,
          hourtemp?.hourly[4].temp,
          hourtemp?.hourly[5].temp,
          hourtemp?.hourly[6].temp,
          hourtemp?.hourly[7].temp,
          hourtemp?.hourly[8].temp,
        ],
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  const options: {} = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "1時間毎の予想気温",
      },
    },
  };
  return (
    <div style={{ margin: "auto", width: "100%" }}>
      <Line data={graphData} options={options} />
    </div>
  );
};

export default Graph;
