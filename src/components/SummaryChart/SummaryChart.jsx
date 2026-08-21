"use client";

import { useState, useEffect } from "react";
import "./SummaryChart.css";

import {
  FaChevronDown,
  FaRegCalendarAlt,
  FaTimes,
} from "react-icons/fa";

import BottomSummaryCard from "@/components/BottomsummaryCards/BottomsummaryCard";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";


const data = [
  { month: "Jan", sales: 58, purchase: 12, cogs: 25, expenses: 47 },
  { month: "Feb", sales: 48, purchase: 20, cogs: 35, expenses: 34 },
  { month: "Mar", sales: 53, purchase: 15, cogs: 26, expenses: 49 },
  { month: "Apr", sales: 40, purchase: 27, cogs: 30, expenses: 32 },
  { month: "May", sales: 47, purchase: 22, cogs: 23, expenses: 47 },
  { month: "Jun", sales: 32, purchase: 30, cogs: 27, expenses: 41 },
  { month: "Jul", sales: 50, purchase: 26, cogs: 15, expenses: 54 },
  { month: "Aug", sales: 35, purchase: 35, cogs: 20, expenses: 49 },
  { month: "Sep", sales: 48, purchase: 25, cogs: 16, expenses: 58 },
  { month: "Oct", sales: 34, purchase: 34, cogs: 20, expenses: 48 },
  { month: "Nov", sales: 47, purchase: 25, cogs: 18, expenses: 48 },
  { month: "Dec", sales: 58, purchase: 35, cogs: 12, expenses: 58 },
];


export default function SalesChart() {

  /* ================================
     POPUP
  ================================= */

  const [showDatePopup, setShowDatePopup] = useState(false);


  /* ================================
     DATES
  ================================= */

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");


  /* ================================
     APPLIED DATES
  ================================= */

  const [appliedFromDate, setAppliedFromDate] = useState("");
  const [appliedToDate, setAppliedToDate] = useState("");


  /* ================================
     ERROR
  ================================= */

  const [dateError, setDateError] = useState("");


  /* ================================
      CHART HEIGHT
  ================================= */

  const [chartHeight, setChartHeight] = useState(350);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 2560) {
        setChartHeight(450);
      } else if (window.innerWidth >= 2000) {
        setChartHeight(400);
      } else if (window.innerWidth >= 1600) {
        setChartHeight(370);
      } else {
        setChartHeight(350);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);


  /* ================================
      OPEN CALENDAR POPUP
  ================================= */

  const handleCalendarClick = () => {
    setShowDatePopup(true);
    setDateError("");
  };


  /* ================================
     CLOSE POPUP
  ================================= */

  const closeDatePopup = () => {
    setShowDatePopup(false);
    setDateError("");
  };


  /* ================================
     RESET
  ================================= */

  const handleReset = () => {

    setFromDate("");
    setToDate("");

    setAppliedFromDate("");
    setAppliedToDate("");

    setDateError("");
  };


  /* ================================
     APPLY FILTER
  ================================= */

  const handleApplyFilter = () => {

    if (!fromDate || !toDate) {

      setDateError(
        "Please select both dates."
      );

      return;
    }


    if (fromDate > toDate) {

      setDateError(
        "From Date cannot be greater than To Date."
      );

      return;
    }


    setAppliedFromDate(fromDate);
    setAppliedToDate(toDate);

    setDateError("");

    setShowDatePopup(false);
  };


  return (

    <div className="chart-wrapper">


      {/* =================================
          CHART HEADER
      ================================= */}

      <div className="chart-header">

        <h2 className="chart-title">
          Purchase &amp; Sale
        </h2>


        <div className="chart-actions">

          <button
            type="button"
            className="year-btn"
          >

            <span>
              This Year
            </span>

            <FaChevronDown
              className="year-icon"
            />

          </button>


          {/* CALENDAR BUTTON */}

          <button
            type="button"
            className="calendar-btn"
            onClick={handleCalendarClick}
          >

            <FaRegCalendarAlt />

          </button>

        </div>

      </div>


      {/* =================================
          APPLIED DATE
      ================================= */}

      {(appliedFromDate || appliedToDate) && (

        <div className="applied-date">

          <span>
            {appliedFromDate}
          </span>

          <span className="date-arrow">
            →
          </span>

          <span>
            {appliedToDate}
          </span>

          <button
            type="button"
            onClick={handleReset}
          >
            Clear
          </button>

        </div>

      )}


      {/* =================================
          CHART
      ================================= */}

      <ResponsiveContainer
        width="100%"
        height={chartHeight}
      >

        <AreaChart
          data={data}
          isAnimationActive={false}
        >

          <defs>

            <linearGradient
              id="blue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#3B82F6"
                stopOpacity={0.25}
              />

              <stop
                offset="95%"
                stopColor="#3B82F6"
                stopOpacity={0}
              />

            </linearGradient>


            <linearGradient
              id="green"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#16A34A"
                stopOpacity={0.25}
              />

              <stop
                offset="95%"
                stopColor="#16A34A"
                stopOpacity={0}
              />

            </linearGradient>


            <linearGradient
              id="purple"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#7C3AED"
                stopOpacity={0.25}
              />

              <stop
                offset="95%"
                stopColor="#7C3AED"
                stopOpacity={0}
              />

            </linearGradient>


            <linearGradient
              id="orange"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#F97316"
                stopOpacity={0.25}
              />

              <stop
                offset="95%"
                stopColor="#F97316"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>


          <CartesianGrid
            stroke="#EEF1F6"
            strokeDasharray="3 3"
            vertical={false}
          />


          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#8A94A6",
              fontSize: 13,
            }}
          />


          <YAxis
            tickFormatter={(value) =>
              `${value}k`
            }
            domain={[0, 70]}
            ticks={[
              0,
              10,
              20,
              30,
              40,
              50,
              60,
              70,
            ]}
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#8A94A6",
              fontSize: 13,
            }}
          />


          <Area
            type="monotone"
            dataKey="sales"
            stroke="#3B82F6"
            fill="url(#blue)"
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />


          <Area
            type="monotone"
            dataKey="expenses"
            stroke="#16A34A"
            fill="url(#green)"
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />


          <Area
            type="monotone"
            dataKey="purchase"
            stroke="#F97316"
            fill="url(#orange)"
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />


          <Area
            type="monotone"
            dataKey="cogs"
            stroke="#7C3AED"
            fill="url(#purple)"
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />

        </AreaChart>

      </ResponsiveContainer>


      <BottomSummaryCard />


      {/* =========================================
          DATE POPUP
      ========================================= */}

      {showDatePopup && (

        <div
          className="date-popup-overlay"
          onMouseDown={(e) => {

            if (
              e.target.classList.contains(
                "date-popup-overlay"
              )
            ) {
              closeDatePopup();
            }

          }}
        >

          <div className="date-popup">


            {/* POPUP HEADER */}

            <div className="date-popup-header">

              <h2>
                Select Date
              </h2>

              <button
                type="button"
                className="date-popup-close"
                onClick={closeDatePopup}
              >

                <FaTimes />

              </button>

            </div>


            {/* POPUP BODY */}

            <div className="date-popup-content">


              {/* FROM DATE */}

              <div className="date-input-group">

                <label>
                  From Date
                </label>

                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) =>
                    setFromDate(e.target.value)
                  }
                />

              </div>


              {/* TO DATE */}

              <div className="date-input-group">

                <label>
                  To Date
                </label>

                <input
                  type="date"
                  value={toDate}
                  onChange={(e) =>
                    setToDate(e.target.value)
                  }
                />

              </div>


              {/* ERROR */}

              {dateError && (

                <div className="date-error">
                  {dateError}
                </div>

              )}


              {/* BUTTONS */}

              <div className="date-popup-buttons">

                <button
                  type="button"
                  className="reset-date-btn"
                  onClick={handleReset}
                >
                  Reset
                </button>


                <button
                  type="button"
                  className="apply-date-btn"
                  onClick={handleApplyFilter}
                >
                  Apply Filter
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}