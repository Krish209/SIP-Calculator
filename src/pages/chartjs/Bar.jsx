import React from "react";
import { Bar } from "react-chartjs-2";
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

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ data }) => (
  <Bar
    data={{
      ...data,
      datasets: data.datasets.map((dataset, index) => ({
        ...dataset,
        // Use alternating colors for bars based on the index
        backgroundColor: index % 2 === 0 ? "#00C49F" : "#FF8042", // Alternate between the two colors
      })),
    }}
    options={{
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            // Set font size and color for legend labels
            font: {
              size: 14, // Adjust the font size
              family: "Arial", // Font family for legend
            },
            color: "#001219", // Font color for legend
          },
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          title: {
            display: false,
            text: "Years",
          },
          ticks: {
            font: {
              size: 12, // Adjust the font size for x-axis labels
              family: "Arial", // Font family for x-axis labels
            },
            color: "#001219", // Color for x-axis labels
          },
        },
        y: {
          ticks: {
            callback: function (value) {
              if (value >= 1e11) {
                return `${(value / 1e11).toFixed(1)} Kh`;
              } else if (value >= 1e7) {
                return `${(value / 1e7).toFixed(1)} Cr`;
              } else if (value >= 1e5) {
                return `${(value / 1e5).toFixed(1)} Lakh`;
              } 
              return value.toLocaleString(); // Regular formatting
            },
            font: {
              size: 12, // Adjust the font size for y-axis labels
              family: "Arial", // Font family for y-axis labels
            },
            color: "#001219", // Color for y-axis labels
          },
        },
      },
      elements: {
        bar: {
          // Set maximum bar width
          maxBarThickness: 5, // Maximum bar width
        },
      },
      layout: {
        padding: {
          bottom: 10, // Adds space between the chart and the legend
        },
      },
    }}
  />
);
