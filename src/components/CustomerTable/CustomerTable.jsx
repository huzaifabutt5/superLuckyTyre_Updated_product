"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "./CustomerTable.css";
import customerData from "../../data/customerData";

const STORAGE_KEY = "customerData";

function loadCustomers() {
  if (typeof window === "undefined") {
    return customerData;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Failed to load customers:", error);
  }

  return customerData;
}

export default function CustomerTable() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [customers, setCustomers] = useState(loadCustomers);

  const router = useRouter();

  const entriesPerPage = 10;

  /* =========================
     SEARCH
  ========================= */

  const filteredCustomers = customers.filter((customer) => {
    const searchValue = search.toLowerCase();

    return (
      customer.customerId.toLowerCase().includes(searchValue) ||
      customer.customerName.toLowerCase().includes(searchValue) ||
      customer.customerEmail.toLowerCase().includes(searchValue) ||
      customer.customerPhone.toLowerCase().includes(searchValue) ||
      customer.address.toLowerCase().includes(searchValue) ||
      customer.bankName.toLowerCase().includes(searchValue)
    );
  });

  /* =========================
     PAGINATION
  ========================= */

  const totalPages = Math.ceil(
    filteredCustomers.length / entriesPerPage
  );

  const startIndex = (currentPage - 1) * entriesPerPage;

  const currentCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  /* =========================
     SEARCH CHANGE
  ========================= */

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  /* =========================
     ACTIONS
  ========================= */

  const handleViewCustomer = (customer) => {
    router.push(
      `/customer/view-customer?id=${customer.id}`
    );
  };

  const handleEdit = (customer) => {
    router.push(
      `/customer/add-customer?edit=${customer.id}`
    );
  };

  const handleDelete = (customer) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete customer "${customer.customerName}"?`
    );

    if (confirmDelete) {
      const updatedCustomers = customers.filter(
        (c) => c.id !== customer.id
      );

      setCustomers(updatedCustomers);

      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedCustomers)
      );

      // If the current page becomes empty after deletion, go back a page.
      if (
        currentPage > 1 &&
        filteredCustomers.length - 1 <=
          (currentPage - 1) * entriesPerPage
      ) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <div className="customer-table-card">

      {/* =================================
          TOP CONTROLS
      ================================= */}

      <div className="customer-table-top">

        <div className="entries-section">
          <select defaultValue="10">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>

          <span>entries per page</span>
        </div>


        <div className="customer-search">

          <label htmlFor="customer-search">
            Search:
          </label>

          <input
            id="customer-search"
            type="text"
            placeholder="Search Customer"
            value={search}
            onChange={handleSearch}
          />

        </div>

      </div>


      {/* =================================
          TABLE
      ================================= */}

      <div className="customer-table-wrapper">

        <table className="customer-table">

          <thead>
            <tr>

              <th>SL</th>

              <th>Customer ID</th>

              <th>Customer Name</th>

              <th>Customer Email</th>

              <th>Customer Phone</th>

              <th>Address</th>

              <th>Bank Name</th>

              <th>Account Title</th>

              <th>AC/IBAN</th>

              <th>Actions</th>

            </tr>
          </thead>


          <tbody>

            {currentCustomers.length > 0 ? (

              currentCustomers.map((customer, index) => (

                <tr key={customer.id}>

                  {/* SL */}

                  <td>
                    {startIndex + index + 1}
                  </td>


                  {/* CUSTOMER ID */}

                  <td>
                    {customer.customerId}
                  </td>


                  {/* CUSTOMER NAME */}

                  <td>
                    {customer.customerName}
                  </td>


                  {/* EMAIL */}

                  <td>
                    {customer.customerEmail}
                  </td>


                  {/* PHONE */}

                  <td>
                    {customer.customerPhone}
                  </td>


                  {/* ADDRESS */}

                  <td>
                    {customer.address}
                  </td>


                  {/* BANK */}

                  <td>
                    {customer.bankName}
                  </td>


                  {/* ACCOUNT TITLE */}

                  <td>
                    {customer.accountTitle}
                  </td>


                  {/* IBAN */}

                  <td>
                    {customer.iban}
                  </td>


                  {/* ACTIONS */}

                  <td>

                    <div className="customer-actions">

                      {/* VIEW */}

                      <button
                        type="button"
                        className="action-btn view-btn"
                        title="View Customer"
                        onClick={() =>
                          handleViewCustomer(customer)
                        }
                      >
                        <FaEye />
                      </button>


                      {/* EDIT */}

                      <button
                        type="button"
                        className="action-btn edit-btn"
                        title="Edit Customer"
                        onClick={() =>
                          handleEdit(customer)
                        }
                      >
                        <FaEdit />
                      </button>


                      {/* DELETE */}

                      <button
                        type="button"
                        className="action-btn delete-btn"
                        title="Delete Customer"
                        onClick={() =>
                          handleDelete(customer)
                        }
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="10"
                  className="no-customer"
                >
                  No customers found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>


      {/* =================================
          TABLE BOTTOM
      ================================= */}

      <div className="customer-table-bottom">

        <div className="entries-info">

          Showing{" "}

          {filteredCustomers.length === 0
            ? 0
            : startIndex + 1}

          {" "}to{" "}

          {Math.min(
            startIndex + entriesPerPage,
            filteredCustomers.length
          )}

          {" "}of{" "}

          {filteredCustomers.length}

          {" "}entries

        </div>


        {/* PAGINATION */}

        <div className="pagination">

          {/* PREVIOUS */}

          <button
            type="button"
            className="pagination-arrow"
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage(
                currentPage - 1
              )
            }
          >
            <FaChevronLeft />
          </button>


          {/* PAGE NUMBERS */}

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (

            <button
              type="button"
              key={page}
              className={`page-number ${
                currentPage === page
                  ? "active-page"
                  : ""
              }`}
              onClick={() =>
                setCurrentPage(page)
              }
            >
              {page}
            </button>

          ))}


          {/* NEXT */}

          <button
            type="button"
            className="pagination-arrow"
            disabled={
              currentPage === totalPages ||
              totalPages === 0
            }
            onClick={() =>
              setCurrentPage(
                currentPage + 1
              )
            }
          >
            <FaChevronRight />
          </button>

        </div>

      </div>

    </div>
  );
}

