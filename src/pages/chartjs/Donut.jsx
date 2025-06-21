import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { formatChartNumber } from "../../consts/Calc";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement, // For Donut Chart
  Title,
  Tooltip,
  Legend
);

export const DoughnutChart = ({ data }) => (
  <Doughnut
    data={{
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          backgroundColor: ["#00C49F", "#FF8042", "#FFCE56"], // Custom slice colors
          borderColor: "#fff", // Border color for each slice
        },
      ],
    }}
    options={{
      responsive: true,
      maintainAspectRatio: false, // Allow resizing
      // aspectRatio: 1, // Optional to maintain a square shape
      plugins: {
        legend: {
          display: false, // Disables the legend completely
          // align: 'start',
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
              return `${tooltipItem.label}: ₹${formatChartNumber(
                tooltipItem.raw
              )}`;
            },
          },
        },
      },
      cutout: "65%",
    }}
  />
);

export const StackedBarChart = ({ data }) => (
  <Bar
    data={data}
    options={{
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "SIP Investment Growth",
        },
        tooltip: {
          callbacks: {
            // Custom tooltip to display both values
            label: function (tooltipItem) {
              const datasetIndex = tooltipItem.datasetIndex;
              const label = tooltipItem.label || "";
              const value = tooltipItem.raw || 0;
              const datasetLabel = data.datasets[datasetIndex].label;

              if (datasetLabel === "Invested Amount") {
                return `${label}: ₹${value.toLocaleString("en-IN")} (Invested)`;
              } else if (datasetLabel === "Estimated Returns") {
                return `${label}: ₹${value.toLocaleString("en-IN")} (Returns)`;
              }
              return label;
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
          stacked: true, // This makes the chart stacked
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
