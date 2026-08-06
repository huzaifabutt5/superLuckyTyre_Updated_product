"use client";

import "./Statscard.css";

import {
  FaShoppingCart,
  FaShoppingBag,
  FaWallet,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

const cards = [
  {
    title: "Net Sale",
    amount: "Rs. 53,659,748",
    icon: <FaShoppingCart />,
    bg: "#EEF4FF",
    iconBg: "#D8E6FF",
    iconColor: "#4A6CF7",
  },
  {
    title: "Total COGS - Sale",
    amount: "Rs. 53,659,748",
    icon: <FaShoppingCart />,
    bg: "#EEF4FF",
    iconBg: "#D8E6FF",
    iconColor: "#4A6CF7",
  },
  {
    title: "Net Purchase",
    amount: "Rs. 53,659,748",
    icon: <FaShoppingCart />,
    bg: "#F3ECFF",
    iconBg: "#E6DAFF",
    iconColor: "#8B5CF6",
  },
  {
    title: "Overall Expenses",
    amount: "Rs. 53,659,748",
    icon: <FaShoppingCart />,
    bg: "#FFF1E5",
    iconBg: "#FFE0C2",
    iconColor: "#F59E0B",
  },
  {
    title: "Net Profit",
    amount: "Rs. 53,659,748",
    icon: <FaShoppingCart />,
    bg: "#EAFBF1",
    iconBg: "#D3F5E3",
    iconColor: "#22C55E",
  },
];

export default function StatsCards() {
  return (
    <div className="stats-grid">
      {cards.map((card, index) => (
<div
          className="stats-card"
          key={index}
          style={{ background: card.bg }}
        >
          <div className="stats-content">
            <span className="stats-title">
              {card.title}
            </span>

            <h3 className="stats-value">
              {card.amount}
            </h3>
          </div>

          <div
            className="stats-icon"
            style={{
              background: card.iconBg,
              color: card.iconColor,
            }}
          >
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}