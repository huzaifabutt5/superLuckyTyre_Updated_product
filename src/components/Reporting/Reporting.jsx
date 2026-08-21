"use client";

import { useState } from "react";
import {
  FaSearch,
  FaEye,
  FaPrint,
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import Link from "next/link";

import "./Reporting.css";

const saleData = [
  {
    sl: 2,
    date: "June 15, 2026",
    invoice: "Invoice -0002",
    customer: "Avery Collins",
    phone: "+92 300 1234567",
    products: "1 Product",
    type: "Sale",
  },
  {
    sl: 6,
    date: "June 15, 2026",
    invoice: "Invoice -0006",
    customer: "Jordan Blake",
    phone: "+92 301 2345678",
    products: "1 Product",
    type: "Return",
  },
  {
    sl: 2,
    date: "June 15, 2026",
    invoice: "Invoice -0002",
    customer: "Morgan Hayes",
    phone: "+92 302 3456789",
    products: "1 Product",
    type: "Sale",
  },
  {
    sl: 3,
    date: "June 15, 2026",
    invoice: "Invoice -0003",
    customer: "Riley Parker",
    phone: "+92 303 4567890",
    products: "1 Product",
    type: "Return",
  },
  {
    sl: 6,
    date: "June 15, 2026",
    invoice: "Invoice -0006",
    customer: "Casey Morgan",
    phone: "+92 304 5678901",
    products: "1 Product",
    type: "Return",
  },
  {
    sl: 7,
    date: "June 15, 2026",
    invoice: "Invoice -0007",
    customer: "Taylor Quinn",
    phone: "+92 305 6789012",
    products: "1 Product",
    type: "Sale",
  },
  {
    sl: 7,
    date: "June 15, 2026",
    invoice: "Invoice -0007",
    customer: "Sydney Reed",
    phone: "+92 306 7890123",
    products: "1 Product",
    type: "Sale",
  },
  {
    sl: 6,
    date: "June 15, 2026",
    invoice: "Invoice -0006",
    customer: "Dakota Lane",
    phone: "+92 307 8901234",
    products: "1 Product",
    type: "Return",
  },
  {
    sl: 10,
    date: "June 15, 2026",
    invoice: "Invoice -0010",
    customer: "Jamie Brooks",
    phone: "+92 308 9012345",
    products: "1 Product",
    type: "Sale",
  },
];

const purchaseData = [
  {
    sl: 2,
    date: "June 15, 2026",
    invoice: "Invoice -0002",
    vendor: "Avery Collins",
    phone: "+92 300 1234567",
    products: "1 Product",
    type: "Purchase",
  },
  {
    sl: 6,
    date: "June 15, 2026",
    invoice: "Invoice -0006",
    vendor: "Jordan Blake",
    phone: "+92 301 2345678",
    products: "1 Product",
    type: "Return",
  },
  {
    sl: 2,
    date: "June 15, 2026",
    invoice: "Invoice -0002",
    vendor: "Morgan Hayes",
    phone: "+92 302 3456789",
    products: "1 Product",
    type: "Purchase",
  },
  {
    sl: 3,
    date: "June 15, 2026",
    invoice: "Invoice -0003",
    vendor: "Riley Parker",
    phone: "+92 303 4567890",
    products: "1 Product",
    type: "Return",
  },
  {
    sl: 6,
    date: "June 15, 2026",
    invoice: "Invoice -0006",
    vendor: "Casey Morgan",
    phone: "+92 304 5678901",
    products: "1 Product",
    type: "Return",
  },
  {
    sl: 7,
    date: "June 15, 2026",
    invoice: "Invoice -0007",
    vendor: "Taylor Quinn",
    phone: "+92 305 6789012",
    products: "1 Product",
    type: "Purchase",
  },
  {
    sl: 7,
    date: "June 15, 2026",
    invoice: "Invoice -0007",
    vendor: "Sydney Reed",
    phone: "+92 306 7890123",
    products: "1 Product",
    type: "Purchase",
  },
  {
    sl: 6,
    date: "June 15, 2026",
    invoice: "Invoice -0006",
    vendor: "Dakota Lane",
    phone: "+92 307 8901234",
    products: "1 Product",
    type: "Return",
  },
  {
    sl: 10,
    date: "June 15, 2026",
    invoice: "Invoice -0010",
    vendor: "Jamie Brooks",
    phone: "+92 308 9012345",
    products: "1 Product",
    type: "Purchase",
  },
];

export default function Reporting() {
  const [activeTab, setActiveTab] = useState("sale");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const data = activeTab === "sale" ? saleData : purchaseData;

  const filteredData = data.filter((item) => {
    const searchText = search.toLowerCase();

    return (
      item.invoice.toLowerCase().includes(searchText) ||
      (item.customer &&
        item.customer.toLowerCase().includes(searchText)) ||
      (item.vendor &&
        item.vendor.toLowerCase().includes(searchText)) ||
      item.phone.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="reporting-page">

      {/* Breadcrumb */}
      <div className="reporting-breadcrumb">
        <Link href="/" className="breadcrumb-link" style={{ textDecoration: "none", color: "inherit" }}>
          Tyre Shop
        </Link>
        &gt;{" "}
        <Link href="/report" style={{ textDecoration: "none", color: "inherit" }}>
          Sale/Purchase Management
        </Link>{" "}
        &gt; Reporting
      </div>

      {/* Page Title */}
      <h1 className="reporting-title">Reporting</h1>

      {/* Tabs */}
      <div className="reporting-tabs">

        <button
          className={`reporting-tab ${
            activeTab === "sale" ? "active" : ""
          }`}
          onClick={() => {
            setActiveTab("sale");
            setCurrentPage(1);
          }}
        >
          Sale/Sale Return
        </button>

        <button
          className={`reporting-tab ${
            activeTab === "purchase" ? "active" : ""
          }`}
          onClick={() => {
            setActiveTab("purchase");
            setCurrentPage(1);
          }}
        >
          Purchase/Purchase Return
        </button>

      </div>

      {/* Table Card */}
      <div className="reporting-card">

        {/* Top controls */}
        <div className="reporting-controls">
<div className="entries-section">
          <select defaultValue="10">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>

          <span>entries per page</span>
        </div>
          <div className="search-control">
            <label>Search:</label>

            <div className="search-box">
              <FaSearch />

              <input
                type="text"
                placeholder={
                  activeTab === "sale"
                    ? "Search Customer"
                    : "Search Vendor"
                }
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

        </div>

        {/* Table */}
        <div className="reporting-table-wrapper">

          <table className="reporting-table">

            <thead>
              <tr>
                <th>SL</th>
                <th>Date</th>
                <th>Invoice ID</th>

                {activeTab === "sale" ? (
                  <th>Customer Name</th>
                ) : (
                  <th>Vendor Name</th>
                )}

                {activeTab === "sale" ? (
                  <th>Customer Phone</th>
                ) : (
                  <th>Vendor Phone</th>
                )}

                <th>Products</th>
                <th>Purchase/Return</th>
                <th>Transaction Type</th>
                <th>Transaction ID</th>
                <th>Payable Amount</th>
                <th>Paid Amount</th>
                <th>Remaining</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={`${item.invoice}-${index}`}>

                    <td>{item.sl}</td>

                    <td>{item.date}</td>

                    <td>
                      <span
                        className={
                          item.type === "Return"
                            ? "invoice-return"
                            : "invoice-normal"
                        }
                      >
                        {item.type === "Return" && (
                          <span className="invoice-dot"></span>
                        )}

                        {item.invoice}
                      </span>
                    </td>

                    <td>
                      {activeTab === "sale"
                        ? item.customer
                        : item.vendor}
                    </td>

                    <td>{item.phone}</td>

                    <td>{item.products}</td>

                    <td>
                      <span
                        className={`transaction-badge ${
                          item.type === "Return"
                            ? "return-badge"
                            : "purchase-badge"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>

                    <td>
                      {index % 2 === 0
                        ? "Cash"
                        : "Bank Transfer"}
                    </td>

                    <td>
                      {index % 2 === 0
                        ? "N/A"
                        : "45tyjguvtyb87GFu"}
                    </td>

                    <td>PKR 150,000</td>

                    <td>PKR 150,000</td>

                    <td>PKR 150,000</td>

                    <td>
                      <div className="action-buttons">

                        <button
                          className="action-btn print-btn"
                          title="Print"
                        >
                          <FaPrint />
                        </button>

                        <button
                          className="action-btn view-btn"
                          title="View"
                        >
                          <FaEye />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="14"
                    className="no-data"
                  >
                    No records found
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

        {/* Bottom */}
        <div className="reporting-bottom">

          <div className="showing-text">
            Showing 1 to {filteredData.length} of 20 entries
          </div>

          <div className="pagination">

            <button className="page-arrow">
              <FaAngleDoubleLeft />
            </button>

            <button className="page-arrow">
              <FaChevronLeft />
            </button>

            <button
              className={`page-number ${
                currentPage === 1 ? "selected" : ""
              }`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>

            <button
              className={`page-number ${
                currentPage === 2 ? "selected" : ""
              }`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>

            <button className="page-arrow">
              <FaChevronRight />
            </button>

            <button className="page-arrow">
              <FaAngleDoubleRight />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}