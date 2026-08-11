"use client";

import {
  FaShoppingCart,
 
} from "react-icons/fa";

import "./StockSummaryCards.css";

const cards = [
  {
    title: "Total Stock Cost",
    value: "Rs. 53,659,748",
    icon: <FaShoppingCart />,
    className: "stock-card-blue",
  },
  {
    title: "Product Quantity",
    value: "53,659",
    icon:<FaShoppingCart />,
    className: "stock-card-purple",
  },
  {
    title: "No. of Vendors",
    value: "9,748",
    icon: <FaShoppingCart />,
    className: "stock-card-blue",
  },
  {
    title: "Low Stock Alerts",
    value: "48",
    icon: <FaShoppingCart />,
    className: "stock-card-orange",
  },
];

export default function StockSummaryCards() {
  return (
    <div className="stock-summary-cards">
      {cards.map((card, index) => (
        <div
          className={`stock-summary-card ${card.className}`}
          key={index}
        >
          <div className="stock-card-content">
            <span className="stock-card-title">
              {card.title}
            </span>

            <strong className="stock-card-value">
              {card.value}
            </strong>
          </div>

          <div className="stock-card-icon">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}