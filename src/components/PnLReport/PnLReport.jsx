"use client";

import { useState } from "react";
import {
  FaShoppingCart,
  FaFilePdf,
  FaFileCsv,
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

import "./PnLReport.css";

const pnlData = [
  {
    sl: 1,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expense: "PKR 15,000",
    balance: "PKR 15,000",
    positive: true,
  },
  {
    sl: 2,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expense: "PKR 15,000",
    balance: "PKR 15,000",
    positive: true,
  },
  {
    sl: 3,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expense: "PKR 15,000",
    balance: "PKR -15,000",
    positive: false,
  },
  {
    sl: 4,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expense: "PKR 15,000",
    balance: "PKR -15,000",
    positive: false,
  },
  {
    sl: 5,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expense: "PKR 15,000",
    balance: "PKR 15,000",
    positive: true,
  },
  {
    sl: 6,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expense: "PKR 15,000",
    balance: "PKR -15,000",
    positive: false,
  },
  {
    sl: 7,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expense: "PKR 15,000",
    balance: "PKR -15,000",
    positive: false,
  },
  {
    sl: 8,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expense: "PKR 15,000",
    balance: "PKR 15,000",
    positive: true,
  },
  {
    sl: 9,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expense: "PKR 15,000",
    balance: "PKR 15,000",
    positive: true,
  },
  {
    sl: 10,
    date: "June 15, 2026",
    sale: "PKR 15,000",
    cog: "PKR 15,000",
    expense: "PKR 15,000",
    balance: "PKR 15,000",
    positive: true,
  },
];

export default function PnLReport() {
  const [fromDate, setFromDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showReport, setShowReport] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleGetReport = () => {
    setShowReport(true);
    setCurrentPage(1);
  };

  return (
    <main className="pnl-page">

      {/* ================= BREADCRUMB ================= */}

      <div className="pnl-breadcrumb">
        <span>Tyre Shop</span>
        <b> &gt; </b>
        <span>Profit & Loss Management</span>
        <b> &gt; </b>
        <strong>PnL Report</strong>
      </div>

      {/* ================= PAGE TITLE ================= */}

      <h1 className="pnl-title">
        PnL Report
      </h1>

      {/* ================= SEARCH CARD ================= */}

      <section className="pnl-search-card">

        <div className="pnl-search-title">
          Search PnL Report
        </div>

        <div className="pnl-search-body">

          {/* FROM DATE */}

            <div className="date-field">
  <label>
    From Date <span>*</span>
  </label>

  <input
    type="text"
    placeholder="DD/MM/YYYY"
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
    type="text"
    placeholder="DD/MM/YYYY"
    value={endDate}
    onChange={(e) => setEndDate(e.target.value)}
  />
</div>

          {/* GET REPORT */}

          <button
            className="get-report-btn"
            onClick={handleGetReport}
          >
            Get Report
          </button>

        </div>
      </section>

      {/* ==================================================
          REPORT CONTENT
      ================================================== */}

      {showReport && (
        <>

          {/* ================= SUMMARY WHITE CONTAINER ================= */}

          <section className="pnl-summary-container">

            <div className="pnl-summary-grid">

              {/* NET SALE */}

              <div className="pnl-summary-card sale-card">

                <div className="summary-text">

                  <p>Net Sale</p>

                  <h3>
                    Rs. 53,659,748
                  </h3>

                </div>

                <div className="summary-icon">
                  <FaShoppingCart />
                </div>

              </div>

              {/* TOTAL COGS */}

              <div className="pnl-summary-card cogs-card">

                <div className="summary-text">

                  <p>Total COGS</p>

                  <h3>
                    Rs. 53,659,748
                  </h3>

                </div>

                <div className="summary-icon">
                  <FaShoppingCart />
                </div>

              </div>

              {/* TOTAL EXPENSE */}

              <div className="pnl-summary-card expense-card">

                <div className="summary-text">

                  <p>Total Expense</p>

                  <h3>
                    Rs. 53,659,748
                  </h3>

                </div>

                <div className="summary-icon">
                  <FaShoppingCart />
                </div>

              </div>

              {/* PNL */}

              <div className="pnl-summary-card profit-card">

                <div className="summary-text">

                  <p>PnL (Profit/Loss)</p>

                  <h3>
                    Rs. 53,659,748
                  </h3>

                </div>

                <div className="summary-icon">
                  <FaShoppingCart />
                </div>

              </div>

            </div>

          </section>

          {/* ================= TABLE ================= */}

          <section className="pnl-table-card">

            {/* TABLE TITLE */}

            <div className="pnl-table-title">
              Sales / Purchases / Expenses Breakdown
            </div>

            {/* TABLE TOP */}

            <div className="pnl-table-top">

              <div className="entries-control">

                <div className="entries-number">
                  10
                </div>

                <span>
                  entries per page
                </span>

              </div>

              <div className="export-buttons">

                <button className="pdf-btn">
                  <FaFilePdf />
                  <span>PDF</span>
                </button>

                <button className="csv-btn">
                  <FaFileCsv />
                  <span>CSV</span>
                </button>

              </div>

            </div>

            {/* TABLE */}

            <div className="pnl-table-wrapper">

              <table className="pnl-table">

                <thead>

                  <tr>
                    <th>SL</th>
                    <th>Date</th>
                    <th>Sale</th>
                    <th>COG</th>
                    <th>Expenses</th>
                    <th>Open Balance</th>
                  </tr>

                </thead>

                <tbody>

                  {pnlData.map((item) => (

                    <tr key={item.sl}>

                      <td>
                        {item.sl}
                      </td>

                      <td>
                        {item.date}
                      </td>

                      <td>
                        {item.sale}
                      </td>

                      <td>
                        {item.cog}
                      </td>

                      <td>
                        {item.expense}
                      </td>

                      <td>

                        <span
                          className={
                            item.positive
                              ? "positive-balance"
                              : "negative-balance"
                          }
                        >
                          {item.balance}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* TABLE BOTTOM */}

            <div className="pnl-table-bottom">

              <div className="showing-text">
                Showing 1 to 10 of 20 entries
              </div>

              <div className="pagination">

                <button>
                  <FaAngleDoubleLeft />
                </button>

                <button>
                  <FaChevronLeft />
                </button>

                <button
                  className={
                    currentPage === 1
                      ? "active-page"
                      : ""
                  }
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </button>

                <button
                  className={
                    currentPage === 2
                      ? "active-page"
                      : ""
                  }
                  onClick={() => setCurrentPage(2)}
                >
                  2
                </button>

                <button
                  onClick={() => setCurrentPage(2)}
                >
                  <FaChevronRight />
                </button>

                <button>
                  <FaAngleDoubleRight />
                </button>

              </div>

            </div>

          </section>

        </>
      )}

    </main>
  );
}