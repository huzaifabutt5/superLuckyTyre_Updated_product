"use client";

import { useState } from "react";
import {
  FaPlay,
  FaSearch,
} from "react-icons/fa";

import stockData from "@/data/stockData.js";
import batchData from "@/data/batchData.js";

import "./StockTable.css";

export default function StockTable() {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [openRow, setOpenRow] = useState(null);

  /* =========================
     SEARCH
  ========================= */

const filteredData = stockData.filter((product) => {
    const searchText = search.toLowerCase();

    return (
      product.productName.toLowerCase().includes(searchText) ||
      product.size.toLowerCase().includes(searchText) ||
      product.brandName.toLowerCase().includes(searchText) ||
      product.status.toLowerCase().includes(searchText)
    );
  });

  /* =========================
     PAGINATION
  ========================= */

  const totalPages = Math.ceil(
    filteredData.length / entries
  );

  const startIndex = (currentPage - 1) * entries;

  const endIndex = startIndex + entries;

  const currentData = filteredData.slice(
    startIndex,
    endIndex
  );

  /* =========================
     SEARCH CHANGE
  ========================= */

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
    setOpenRow(null);
  };

  /* =========================
     ENTRIES CHANGE
  ========================= */

  const handleEntriesChange = (e) => {
    setEntries(Number(e.target.value));
    setCurrentPage(1);
    setOpenRow(null);
  };

  /* =========================
     OPEN / CLOSE BATCH
  ========================= */

  const handleRowClick = (id) => {
    if (openRow === id) {
      setOpenRow(null);
    } else {
      setOpenRow(id);
    }
  };

  /* =========================
     PAGE CHANGE
  ========================= */

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);
    setOpenRow(null);
  };

  return (
    <div className="stock-table-card">

      {/* =========================
          TABLE TITLE
      ========================= */}

      <div className="stock-table-title">
        <h2>All Product Listing</h2>
      </div>


      {/* =========================
          TABLE CONTROLS
      ========================= */}

      <div className="stock-table-controls">

        {/* ENTRIES */}

        <div className="entries-section">

          <select
            value={entries}
            onChange={handleEntriesChange}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>

          <span>
            entries per page
          </span>

        </div>


        {/* SEARCH */}

        <div className="search-section">

          <span>Search:</span>

          <div className="search-input-wrapper">

            <input
              type="text"
              placeholder="Search Product"
              value={search}
              onChange={handleSearch}
            />

            <FaSearch />

          </div>

        </div>

      </div>


      {/* =========================
          MAIN TABLE
      ========================= */}

      <div className="main-table-wrapper">

        <table className="main-stock-table">

          <thead>

            <tr>

              <th className="expand-column"></th>

              <th>
                Complete Product Name
              </th>

              <th>
                Brand Name
              </th>

              <th>
                Batches
              </th>

              <th>
                Total Quantity
              </th>

              <th>
                Status
              </th>

            </tr>

          </thead>


          <tbody>

            {currentData.length > 0 ? (

              currentData.map((product) => {

                const isOpen =
                  openRow === product.id;

                return (
                  <ProductRow
                    key={product.id}
                    product={product}
                    isOpen={isOpen}
                    onToggle={() =>
                      handleRowClick(
                        product.id
                      )
                    }
                  />
                );

              })

            ) : (

              <tr>

                <td
                  colSpan="6"
                  className="no-products"
                >
                  No products found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>


      {/* =========================
          FOOTER
      ========================= */}

      <div className="stock-table-footer">

        <div className="showing-text">

          Showing{" "}

          {filteredData.length === 0
            ? 0
            : startIndex + 1}

          {" "}to{" "}

          {Math.min(
            endIndex,
            filteredData.length
          )}

          {" "}of{" "}

          {filteredData.length}

          {" "}entries

        </div>


        {/* PAGINATION */}

        <div className="pagination">

          {/* FIRST */}

          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            className="pagination-arrow"
          >
            «
          </button>


          {/* PREVIOUS */}

          <button
            onClick={() =>
              goToPage(
                currentPage - 1
              )
            }
            disabled={currentPage === 1}
            className="pagination-arrow"
          >
            ‹
          </button>


          {/* PAGE NUMBERS */}

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (

            <button
              key={page}
              onClick={() =>
                goToPage(page)
              }
              className={
                currentPage === page
                  ? "pagination-number active"
                  : "pagination-number"
              }
            >
              {page}
            </button>

          ))}


          {/* NEXT */}

          <button
            onClick={() =>
              goToPage(
                currentPage + 1
              )
            }
            disabled={
              currentPage === totalPages ||
              totalPages === 0
            }
            className="pagination-arrow"
          >
            ›
          </button>


          {/* LAST */}

          <button
            onClick={() =>
              goToPage(totalPages)
            }
            disabled={
              currentPage === totalPages ||
              totalPages === 0
            }
            className="pagination-arrow"
          >
            »
          </button>

        </div>

      </div>

    </div>
  );
}


/* =====================================================
   PRODUCT ROW
===================================================== */

function ProductRow({
  product,
  isOpen,
  onToggle,
}) {
  return (
    <>
      {/* MAIN PRODUCT ROW */}

      <tr
        className={
          isOpen
            ? "product-row product-row-open"
            : "product-row"
        }
      >

        {/* ARROW */}

        <td className="expand-column">

          <button
            className="expand-button"
            onClick={onToggle}
            aria-label="Show batches"
          >

<FaPlay />

          </button>

        </td>


        {/* PRODUCT NAME */}

        <td>

<div className="product-name-wrapper">

            <span className="product-name">
              {product.productName}
            </span>

            <span className="product-size">
              {product.size}
            </span>

          </div>

        </td>


        {/* BRAND */}

        <td>
          {product.brandName}
        </td>


        {/* BATCHES */}

        <td>

          <span className="batch-count">
            {product.batches} Batches
          </span>

        </td>


        {/* QUANTITY */}

        <td>
          {product.totalQuantity}
        </td>


        {/* STATUS */}

        <td>

          <span
            className={`stock-status ${
              product.status ===
              "Low Stock"
                ? "status-low"
                : product.status ===
                  "Out of Stock"
                ? "status-out"
                : "status-in"
            }`}
          >
            {product.status}
          </span>

        </td>

      </tr>


      {/* =================================================
          BATCH TABLE
      ================================================= */}

      {isOpen && (
        <tr className="batch-row">

          <td colSpan="6">

            <div className="batch-container">

              <h3>
                Multi Vendor Batches
              </h3>


              <table className="batch-table">

                <thead>

                  <tr>

                    <th>SL</th>

                    <th>Batch ID#</th>

                    <th>Date</th>

                    <th>Vendor Name</th>

                    <th>DOT</th>

                    <th>Cost Price</th>

                    <th>Quantity Left</th>

                  </tr>

                </thead>


                <tbody>

                  {batchData[product.id] &&
                  batchData[product.id].length > 0 ? (

                    batchData[product.id].map(
                      (batch) => (

                        <tr
                          key={
                            batch.batchId
                          }
                        >

<td>
                            {batch.id}
                          </td>

                          <td>
                            {batch.batchId}
                          </td>

                          <td>
                            {batch.date}
                          </td>

                          <td>
                            {batch.vendorName}
                          </td>

                          <td>
                            {batch.dot}
                          </td>

                          <td>
                            {batch.costPrice}
                          </td>

                          <td>
                            {batch.quantityLeft}
                          </td>

                        </tr>

                      )
                    )

                  ) : (

                    <tr>

                      <td
                        colSpan="7"
                        className="no-batches"
                      >
                        No batches available
                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </td>

        </tr>
      )}

    </>
  );
}