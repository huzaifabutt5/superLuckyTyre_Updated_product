"use client";

import "./Statscard.css";

import { FaShoppingCart } from "react-icons/fa";

const cards = [
  {
    title: "Net Sale",
    amount: "Rs. 53,659,748",
    bg: "linear-gradient(270deg, #EEF7FF 0%, #DFF0FF 100%)",
    iconBg: "#D8E8FF",
    color: "#4A6CF7",
  },
  {
    title: "Total COG - Sale",
    amount: "Rs. 53,659,748",
    bg: "linear-gradient(270deg, #EEF7FF 0%, #DFF0FF 100%)",
    iconBg: "#D8E8FF",
    color: "#4A6CF7",
  },
  {
    title: "Net Purchase",
    amount: "Rs. 53,659,748",
    bg:"linear-gradient(270deg, #E0D4FA 0%, #E0D4FA 100%)",
    iconBg: "#E4D8FF",
    color: "#8B5CF6",
  },
  {
    title: "Overall Expenses",
    amount: "Rs. 53,659,748",
    bg: "linear-gradient(270deg, #FFE4C2 0%, #FFE4C2 100%)",
    iconBg: "#FFE0C2",
    color: "#F59E0B",
  },
  {
    title: "Net Profit",
    amount: "Rs. 53,659,748",
    bg: "linear-gradient(270deg, #E5FEEE 0%, #D2F9E0 100%)",
    iconBg: "#D2F5E1",
    color: "#22C55E",
  },
];

export default function StatsCards() {
  return (
    <div className="stats-wrapper">
      <div className="stats-grid">

        {cards.map((card, index) => (
          <div
            className="stats-card"
            key={index}
            style={{
              "--card-bg": card.bg,
              "--card-color": card.color,
              "--icon-bg": card.iconBg,
            }}
          >

            {/* LEFT DARK LINE */}
            <div className="stats-left-line"></div>

            {/* CARD CONTENT */}
            <div className="stats-content">
              <div className="stats-title">
                {card.title}
              </div>

              <div className="stats-value">
                {card.amount}
              </div>
            </div>

            {/* ICON */}
            <div className="stats-icon">
              <FaShoppingCart />
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}