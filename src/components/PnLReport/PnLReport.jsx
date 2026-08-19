"use client";

import { useState } from "react";
import {
  FaShoppingCart,
  FaFilePdf,
  FaFileCsv,
} from "react-icons/fa";
import Link from "next/link";

import "./PnLReport.css";

const reportData = [
  {
    id: 1,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expenses: "PKR 15,000",
    balance: "PKR 15,000",
    positive: true,
  },
  {
    id: 2,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expenses: "PKR 15,000",
    balance: "PKR 15,000",
    positive: true,
  },
  {
    id: 3,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expenses: "PKR 15,000",
    balance: "PKR -15,000",
    positive: false,
  },
  {
    id: 4,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expenses: "PKR 15,000",
    balance: "PKR -15,000",
    positive: false,
  },
  {
    id: 5,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expenses: "PKR 15,000",
    balance: "PKR 15,000",
    positive: true,
  },
  {
    id: 6,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expenses: "PKR 15,000",
    balance: "PKR -15,000",
    positive: false,
  },
  {
    id: 7,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expenses: "PKR 15,000",
    balance: "PKR -15,000",
    positive: false,
  },
  {
    id: 8,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expenses: "PKR 15,000",
    balance: "PKR 15,000",
    positive: true,
  },
  {
    id: 9,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expenses: "PKR 15,000",
    balance: "PKR 15,000",
    positive: true,
  },
  {
    id: 10,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expenses: "PKR 15,000",
    balance: "PKR 15,000",
    positive: true,
  },
];

export default function PnlReport() {
  const [fromDate, setFromDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [showReport, setShowReport] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const handleGetReport = () => {
    setShowReport(true);
    setCurrentPage(1);
  };

  return (
    <div className="pnl-page">

      {/* ================= BREADCRUMB ================= */}

      <div className="pnl-breadcrumb">
        Tyre Shop &gt;{" "}
        <Link href="/pnl-report" className="breadcrumb-link">
          Profit &amp; Loss Management
        </Link>{" "}
        &gt;{" "}
        <span>PnL Report</span>
      </div>


      {/* ================= PAGE TITLE ================= */}

      <h1 className="pnl-title">
        PnL Report
      </h1>


      {/* =================================================
          SEARCH PNL REPORT
      ================================================= */}

      <section className="pnl-search-card">

        <div className="pnl-section-header">
          Search PnL Report
        </div>

        <div className="pnl-search-body">

          {/* FROM DATE */}

          <div className="date-field">

            <label>
              From Date <span>*</span>
            </label>

            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />

          </div>


          {/* END DATE */}

          <div className="date-field">

            <label>
              End Date <span>*</span>
            </label>

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

          </div>


          {/* GET REPORT */}

          <button
            type="button"
            className="get-report-btn"
            onClick={handleGetReport}
          >
            Get Report
          </button>

        </div>

      </section>


      {/* =================================================
          REPORT CONTENT
      ================================================= */}

      {showReport && (
        <>

          {/* ================= SUMMARY CARDS ================= */}

          <div className="pnl-summary-wrapper">

            {/* NET SALE */}

            <div className="pnl-summary-card pnl-blue">

              <div className="pnl-summary-content">

                <span>
                  Net Sale
                </span>

                <strong>
                  Rs. 53,659,748
                </strong>

              </div>

              <div className="pnl-summary-icon">
                <FaShoppingCart />
              </div>

            </div>


            {/* TOTAL COGS */}

            <div className="pnl-summary-card pnl-purple">

              <div className="pnl-summary-content">

                <span>
                  Total COGS
                </span>

                <strong>
                  Rs. 53,659,748
                </strong>

              </div>

              <div className="pnl-summary-icon">
                <FaShoppingCart />
              </div>

            </div>


            {/* TOTAL EXPENSE */}

            <div className="pnl-summary-card pnl-orange">

              <div className="pnl-summary-content">

                <span>
                  Total Expense
                </span>

                <strong>
                  Rs. 53,659,748
                </strong>

              </div>

              <div className="pnl-summary-icon">
                <FaShoppingCart />
              </div>

            </div>


            {/* PNL */}

            <div className="pnl-summary-card pnl-green">

              <div className="pnl-summary-content">

                <span>
                  PnL (Profit/Loss)
                </span>

                <strong>
                  Rs. 53,659,748
                </strong>

              </div>

              <div className="pnl-summary-icon">
                <FaShoppingCart />
              </div>

            </div>

          </div>


          {/* =================================================
              TABLE CARD
          ================================================= */}

          <section className="pnl-table-card">

            {/* TABLE HEADER */}

            <div className="pnl-table-header">
              Sales / Purchases / Expenses Breakdown
            </div>


            {/* TABLE TOP CONTROLS */}

            <div className="pnl-table-controls">

              <div className="entries-control">

                <span className="entries-number">
                  10
                </span>

                <span>
                  entries per page
                </span>

              </div>


              <div className="export-buttons">

                <button
                  type="button"
                  className="pdf-btn"
                >
                  <FaFilePdf />
                  Pdf
                </button>

                <button
                  type="button"
                  className="csv-btn"
                >
                  <FaFileCsv />
                  CSV
                </button>

              </div>

            </div>


            {/* ================= TABLE ================= */}

            <div className="pnl-table-container">

              <table className="pnl-table">

                <thead>

                  <tr>
                    <th className="sl-column">
                      SL
                    </th>

                    <th>
                      Date
                    </th>

                    <th>
                      Sale
                    </th>

                    <th>
                      COG
                    </th>

                    <th>
                      Expenses
                    </th>

                    <th>
                      Open Balance
                    </th>
                  </tr>

                </thead>


                <tbody>

                  {reportData.map((row) => (

                    <tr key={row.id}>

                      <td className="sl-column">
                        {row.id}
                      </td>

                      <td>
                        {row.date}
                      </td>

                      <td>
                        {row.sale}
                      </td>

                      <td>
                        {row.cog}
                      </td>

                      <td>
                        {row.expenses}
                      </td>

                      <td
                        className={
                          row.positive
                            ? "balance-positive"
                            : "balance-negative"
                        }
                      >
                        {row.balance}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>


            {/* ================= TABLE FOOTER ================= */}

            <div className="pnl-table-footer">

              <span>
                Showing 1 to 10 of 20 entries
              </span>


              <div className="pagination">

                <button type="button">
                  «
                </button>

                <button type="button">
                  ‹
                </button>

                <button
                  type="button"
                  className="page-active"
                >
                  1
                </button>

                <button type="button">
                  2
                </button>

                <button type="button">
                  ›
                </button>

                <button type="button">
                  »
                </button>

              </div>

            </div>

          </section>

        </>
      )}

    </div>
  );
}