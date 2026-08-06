"use client";

import "./SummaryCards.css";

import { FaCalendarAlt } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

import SummaryChart from "../SummaryChart/SummaryChart";

export default function SummaryCards() {
  return (
    <section className="summary-card">

      {/* Header */}

      <div className="summary-header">

        <h2 className="summary-title">
          Sales vs Purchase
        </h2>

        <div className="summary-actions">

          <button className="year-btn">

            <span>This Year</span>

            <IoChevronDown className="year-icon" />

          </button>

          <button className="calendar-btn">

            <FaCalendarAlt />

          </button>

        </div>

      </div>

      {/* Graph */}

      <SalesChart />

    </section>
  );
}