"use client";

import "./SummaryCards.css";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

import { FaCalendarAlt } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  datasets: [
    {
      label: "Sales",
      data: [60, 50, 55, 53, 34, 48, 46, 58, 44, 60, 48, 42],
      borderColor: "#4A6CF7",
      backgroundColor: "rgba(74,108,247,.15)",
      fill: true,
      tension: .4,
    },

    {
      label: "Purchase",
      data: [22, 35, 24, 26, 28, 22, 25, 29, 20, 18, 16, 14],
      borderColor: "#8B5CF6",
      backgroundColor: "rgba(139,92,246,.15)",
      fill: true,
      tension: .4,
    },

    {
      label: "Profit",
      data: [42, 34, 52, 31, 36, 49, 37, 25, 56, 52, 60, 64],
      borderColor: "#10B981",
      backgroundColor: "rgba(16,185,129,.12)",
      fill: true,
      tension: .4,
    },

    {
      label: "Expenses",
      data: [18, 22, 20, 23, 18, 17, 25, 20, 19, 18, 28, 24],
      borderColor: "#F59E0B",
      backgroundColor: "rgba(245,158,11,.12)",
      fill: true,
      tension: .4,
    },
  ],
};

const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "bottom",
    },
  },

  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function SalesChart() {
  return (
    <div className="chart-card">

      <div className="chart-header">

        <h3>Sales vs Purchase</h3>

        <button className="chart-btn">
          <FaCalendarAlt />
          This Year
        </button>

      </div>

      <Line data={data} options={options} />

    </div>
  );
}