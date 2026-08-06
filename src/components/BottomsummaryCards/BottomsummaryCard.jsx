"use client";

import "./BottomsummaryCard.css";

import {
  FaCircle,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const summary = [
  {
    title: "Sales",
    amount: "PKR 26,201",
    percent: "10%",
    color: "#4A6CF7",
    up: true,
  },
  {
    title: "Purchase",
    amount: "PKR 24,201",
    percent: "10%",
    color: "#8B5CF6",
    up: false,
  },
  {
    title: "COGS",
    amount: "PKR 24,201",
    percent: "10%",
    color: "#8B5CF6",
    up: false,
  },
  {
    title: "Total Expenses",
    amount: "PKR 18,500",
    percent: "5%",
    color: "#F59E0B",
    up: false,
  },
  {
    title: "PnL",
    amount: "PKR 2,000",
    percent: "0%",
    color: "#16A34A",
    up: false,
  },
];

export default function BottomSummaryCards() {
  return (
    <div className="bottom-summary">

      {summary.map((item, index) => (

        <div className="summary-item" key={index}>

          <div className="summary-title">

            <FaCircle
              className="circle"
              style={{ color: item.color }}
            />

            <span>{item.title}</span>

          </div>

          <div className="summary-price">

            {item.amount}

            <span
              className={
                item.up
                  ? "summary-up"
                  : "summary-down"
              }
            >
              {item.percent}

              {item.up ? (
                <FaArrowUp />
              ) : (
                <FaArrowDown />
              )}
            </span>

          </div>

        </div>

      ))}

    </div>
  );
}