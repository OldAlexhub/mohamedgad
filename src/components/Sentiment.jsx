import React from "react";
import { Line } from "react-chartjs-2";
import TrumpFace from "../images/trump.png";
import HarrisFace from "../images/harris.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const rawData = [
  {
    month: "July",
    senti_ver: "Positive",
    "Donald Trump": 0.13,
    "Kamala Harris": 0.15,
  },
  {
    month: "August",
    senti_ver: "Positive",
    "Donald Trump": 0.14,
    "Kamala Harris": 0.15,
  },
    {
    month: "September",
    senti_ver: "Positive",
    "Donald Trump": 0.14,
    "Kamala Harris": 0.16,
  },
];

const data = rawData.map((entry) => {
  const total = entry["Donald Trump"] + entry["Kamala Harris"];
  return {
    month: entry.month,
    "Donald Trump": (entry["Donald Trump"] / total) * 100,
    "Kamala Harris": (entry["Kamala Harris"] / total) * 100,
  };
});

const chartData = {
  labels: data.map((d) => d.month),
  datasets: [
    {
      label: "Donald Trump",
      data: data.map((d) => d["Donald Trump"]),
      borderColor: "#FF6B6B",
      backgroundColor: "#FF6B6B",
      pointStyle: TrumpFace,
      pointRadius: 15,
      pointHoverRadius: 20,
    },
    {
      label: "Kamala Harris",
      data: data.map((d) => d["Kamala Harris"]),
      borderColor: "#4E73DF",
      backgroundColor: "#4E73DF",
      pointStyle: HarrisFace,
      pointRadius: 15,
      pointHoverRadius: 20,
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "AI-Driven Analysis of Public Sentiment & Approval Ratings",
      font: {
        size: 18,
        weight: "bold",
      },
      padding: {
        top: 10,
        bottom: 30,
      },
    },
    legend: {
      display: true,
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) =>
          `${tooltipItem.dataset.label}: ${tooltipItem.raw.toFixed(2)}%`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        callback: (value) => `${value}%`,
      },
    },
  },
};

const SentimentChart = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
    <Line data={chartData} options={options} />
  </div>
);

export default SentimentChart;
