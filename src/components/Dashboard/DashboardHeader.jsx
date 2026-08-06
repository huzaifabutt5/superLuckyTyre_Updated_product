"use client";

import "./DashboardHeader.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function DashboardHeader() {
  return (
    <div className="dashboard-header">

      {/* Left Side */}
      <div className="header-left">

        <p className="breadcrumb">
          Tyre Shop <span>{">"}</span> Dashboard
        </p>

        <h1>Dashboard</h1>

      </div>

      {/* Right Side */}
      <div className="header-right">

        <button className="date-btn">
          <FaCalendarAlt />
          Jul 21,2026 - Aug 12,2026
        </button>

      </div>

    </div>
  );
}
