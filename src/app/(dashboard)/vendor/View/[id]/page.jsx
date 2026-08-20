"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  FaShoppingCart,
  FaUndo,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaEye,
} from "react-icons/fa";

import "./ViewVendor.css";
import invoiceData from "@/data/invoiceData";
import vendorData from "@/data/vendorData";

function ViewVendorContent() {
  const searchParams = useSearchParams();
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const vendorId = searchParams.get("id");
  const selectedVendor = vendorData.find(
    (vendor) => vendor.id.toString() === vendorId
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  /* =================================
     SEARCH
  ================================= */

  const filteredInvoices = invoiceData.filter((invoice) => {
    const value = search.toLowerCase();

    return (
      invoice.invoiceId.toLowerCase().includes(value) ||
      invoice.products.toLowerCase().includes(value) ||
      invoice.transactionType.toLowerCase().includes(value) ||
      invoice.transactionId.toLowerCase().includes(value)
    );
  });

  /* =================================
     PAGINATION
  ================================= */

  const totalPages = Math.ceil(
    filteredInvoices.length / entriesPerPage
  );

  const startIndex =
    (currentPage - 1) * entriesPerPage;

  const currentInvoices = filteredInvoices.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  /* =================================
     SUMMARY AMOUNTS
  ================================= */

  const todayPurchase = "Rs. 53,659,748";
  const todayReturn = "Rs. 53,659,748";
  const remainingAmount = "Rs. 53,659,748";

  return (
    <div className="view-vendor-page">

      {/* =================================
          BREADCRUMB
      ================================= */}

      <div className="view-vendor-breadcrumb">
        Tyre Shop &gt; Vendor Management &gt; View Vendor
      </div>


      {/* =================================
          PAGE TITLE
      ================================= */}

      <h1 className="view-vendor-title">
        View Vendor
      </h1>

      {/* =================================
          TOP SUMMARY SECTION
      ================================= */}

      <div className="vendor-summary-area">

        {/* SUMMARY CARDS */}

        <div className="vendor-summary-cards">

          {/* TODAY PURCHASE */}

          <div className="vendor-summary-card purchase-card">

            <div className="summary-card-content">

              <span className="summary-card-label">
                Today Purchase
              </span>

              <strong>
                {todayPurchase}
              </strong>

            </div>

            <div className="summary-card-icon purchase-icon">
              <FaShoppingCart />
            </div>

          </div>


          {/* TODAY RETURN */}

          <div className="vendor-summary-card return-card">

            <div className="summary-card-content">

              <span className="summary-card-label">
                Today Purchase Return
              </span>

              <strong>
                {todayReturn}
              </strong>

            </div>

            <div className="summary-card-icon return-icon">
  <FaShoppingCart />
            </div>

          </div>


          {/* REMAINING AMOUNT */}

          <div className="vendor-summary-card remaining-card">

            <div className="summary-card-content">

              <span className="summary-card-label">
                Remaining Amount
              </span>

              <strong>
                {remainingAmount}
              </strong>

            </div>

            <div className="summary-card-icon remaining-icon">
               <FaShoppingCart />
            </div>

          </div>

        </div>


        {/* PAYMENT BUTTONS */}

        <div className="vendor-payment-buttons">

         <button
   type="button"
   className="get-payment-button"
   onClick={() => setShowPaymentPopup(true)}
 >
   Pay to Vendor
 </button>

          <button
            type="button"
            className="pay-vendor-button"
            disabled
          >
            Take from Vendor
          </button>

        </div>

      </div>


      {/* =================================
          INVOICE CARD
      ================================= */}

      <section className="invoice-card">

        {/* CARD HEADER */}

        <div className="invoice-card-header">
          All Invoices
        </div>


        {/* =================================
            TABLE CONTROLS
        ================================= */}

        <div className="invoice-controls">

          {/* ENTRIES */}

          <div className="invoice-entries">

            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>

            <span>
              entries per page
            </span>

          </div>


          {/* SEARCH */}

          <div className="invoice-search">

            <label>
              Search:
            </label>

            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />

          </div>


          {/* DATE */}

          <button
            type="button"
            className="date-filter-button"
          >
            <FaCalendarAlt />

            <span>
              Jul 12, 2026 - Aug 12, 2026
            </span>
          </button>

        </div>


        {/* =================================
            INVOICE TABLE
        ================================= */}

        <div className="invoice-table-wrapper">

          <table className="invoice-table">

            <thead>

              <tr>

                <th>SL</th>

                <th>Date</th>

                <th>Invoice ID</th>

                <th>Products</th>

                <th>Purchase/Return</th>

                <th>Transaction Type</th>

                <th>Transaction ID</th>

                <th>Payable Amount</th>

                <th>Paid Amount</th>

                <th>Receivable</th>

                 <th>Received</th>

                <th>Open Balance</th>

                <th>Actions</th>

              </tr>

            </thead>


            <tbody>

              {currentInvoices.length > 0 ? (

                currentInvoices.map((invoice, index) => (

                  <tr key={invoice.id}>

                    {/* SL */}

                    <td>
                      {startIndex + index + 1}
                    </td>


                    {/* DATE */}

                    <td>
                      {invoice.date}
                    </td>


                    {/* INVOICE ID */}

                    <td>

                      {invoice.invoiceId !== "N/A" &&
                        invoice.id % 3 === 0 && (
                          <span className="invoice-dot">
                            ●
                          </span>
                        )}

                      {invoice.invoiceId}

                    </td>


                    {/* PRODUCTS */}

                    <td>
                      {invoice.products}
                    </td>


                    {/* PURCHASE / RETURN */}

                    <td>

                      {invoice.purchaseReturn !== "N/A" ? (

                        <span
                          className={
                            invoice.id === 6
                              ? "transaction-badge return-badge"
                              : "transaction-badge purchase-badge"
                          }
                        >
                          {invoice.id === 6
                            ? "Return"
                            : "Purchase"}
                        </span>

                      ) : (
                        "N/A"
                      )}

                    </td>


                    {/* TRANSACTION TYPE */}

                    <td>
                      {invoice.transactionType}
                    </td>


                    {/* TRANSACTION ID */}

                    <td>
                      {invoice.transactionId}
                    </td>


                    {/* PAYABLE */}

                    <td>
                      {invoice.payableAmount}
                    </td>


                    {/* PAID */}

                    <td
                      className={
                        invoice.paidAmount.includes("-")
                          ? "negative-amount"
                          : ""
                      }
                    >
                    
                    </td>
                    {/* Receivable */}

                    <td>
{invoice.payableAmount}
                    </td>
 {/* Received */}
<td>
     className={
                        invoice.paidAmount.includes("-")
                          ? "negative-amount"
                          : ""
                      }
</td>

                    {/* OPEN BALANCE */}

                    <td>
                      {invoice.openBalance}
                    </td>


                    {/* ACTIONS */}

                    <td>

                      <div className="invoice-actions">

                        <button
                          type="button"
                          className="invoice-action-button payment-action"
                          title="Payment"
                        >
                          <FaMoneyBillWave />
                        </button>

                        <button
                          type="button"
                          className="invoice-action-button view-invoice-action"
                          title="View Invoice"
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
                    colSpan="11"
                    className="no-invoice"
                  >
                    No invoices found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>


        {/* =================================
            TABLE FOOTER
        ================================= */}

        <div className="invoice-table-footer">

          <div className="invoice-entry-info">

            Showing{" "}

            {filteredInvoices.length === 0
              ? 0
              : startIndex + 1}

            {" "}to{" "}

            {Math.min(
              startIndex + entriesPerPage,
              filteredInvoices.length
            )}

            {" "}of{" "}

            {filteredInvoices.length}

            {" "}entries

          </div>


          {/* PAGINATION */}

          <div className="invoice-pagination">

            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage(currentPage - 1)
              }
            >
              <FaChevronLeft />
            </button>


            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (

              <button
                type="button"
                key={page}
                className={
                  currentPage === page
                    ? "invoice-active-page"
                    : ""
                }
                onClick={() =>
                  setCurrentPage(page)
                }
              >
                {page}
              </button>

            ))}


            <button
              type="button"
              disabled={
                currentPage === totalPages ||
                totalPages === 0
              }
              onClick={() =>
                setCurrentPage(currentPage + 1)
              }
            >
              <FaChevronRight />
            </button>

          </div>

        </div>

           </section>


      {/* =================================
          GET PAYMENT POPUP
      ================================= */}

      {showPaymentPopup && (
        <div className="payment-modal-overlay">

          <div className="payment-modal">

            {/* HEADER */}
            <div className="payment-modal-header">
              Get Payment
            </div>


            {/* BODY */}
            <div className="payment-modal-body">

              {/* PAYABLE AMOUNT */}
              <div className="payment-form-group">
                <label>
                  Payable Amount
                </label>

                <div className="payable-amount-box">
                  Rs. 20,000
                </div>
              </div>


              {/* PAID AMOUNT */}
              <div className="payment-form-group">
                <label>
                  Paid Amount
                </label>

                <input
                  type="text"
                  placeholder="Enter Amount (That Vendor Pay)"
                />
              </div>


              {/* PAYMENT TYPE */}
              <div className="payment-form-group">
                <label>
                  Payment Type
                </label>

                <select defaultValue="">
                  <option value="" disabled>
                    -- Select Option --
                  </option>

                  <option value="cash">
                    Cash
                  </option>

                  <option value="bank">
                    Bank Transfer
                  </option>

                  <option value="cheque">
                    Cheque
                  </option>
                </select>
              </div>


              {/* TRANSACTION ID */}
              <div className="payment-form-group">
                <label>
                  Transaction ID
                </label>

                <input
                  type="text"
                  placeholder="Transaction ID"
                />
              </div>

            </div>


            {/* FOOTER BUTTONS */}
            <div className="payment-modal-footer">

              <button
                type="button"
                className="payment-cancel-button"
                onClick={() => setShowPaymentPopup(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="payment-submit-button"
              >
                Get Payment
              </button>

            </div>

          </div>

        </div>
      )}


    </div>
  );
}



export default function ViewVendorPage() {
  return (
    <Suspense
      fallback={
        <div className="view-vendor-page">
          <div className="view-vendor-breadcrumb">
            {"Tyre Shop > Vendor Management > View Vendor"}
          </div>
          <h1 className="view-vendor-title">View Vendor</h1>
          <div className="vendor-summary-area"></div>
        </div>
      }
    >
      <ViewVendorContent />
    </Suspense>
  );
}
