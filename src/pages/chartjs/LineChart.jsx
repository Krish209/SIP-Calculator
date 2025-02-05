import React from "react";
import { Line } from "react-chartjs-2";
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

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = ({ data }) => (
  <Line
    data={data}
    options={{
      responsive: true,
      aspectRatio: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "top",
          labels: {
            font: {
              size: 10, // Set the desired font size for the legend text
            },
          },
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.label}: ₹${tooltipItem.raw.toLocaleString(
                "en-IN"
              )}`;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Years",
          },
        },
        y: {
          title: {
            display: true,
            text: "Amount (₹)",
          },
          ticks: {
            callback: function (value) {
              return value.toLocaleString("en-IN");
            },
          },
        },
      },
    }}
  />
);
