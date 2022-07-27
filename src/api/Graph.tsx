import React from "react";
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

const Graph = () => {
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
        data: [65, 59, 60, 81, 56, 55, 100, 150],
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
