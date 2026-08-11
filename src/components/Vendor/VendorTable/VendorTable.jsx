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

import "./VendorTable.css";
import vendorData from "../../../data/vendorData";

const STORAGE_KEY = "vendorData";

function loadVendors() {
  if (typeof window === "undefined") {
    return vendorData;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Failed to load vendors:", error);
  }

  return vendorData;
}

export default function VendorTable() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [vendors, setVendors] = useState(loadVendors);

  const router = useRouter();

  const entriesPerPage = 10;

  /* =========================
     SEARCH
  ========================= */

  const filteredVendors = vendors.filter((vendor) => {
    const searchValue = search.toLowerCase();

    return (
      vendor.vendorId.toLowerCase().includes(searchValue) ||
      vendor.vendorName.toLowerCase().includes(searchValue) ||
      vendor.vendorEmail.toLowerCase().includes(searchValue) ||
      vendor.vendorPhone.toLowerCase().includes(searchValue) ||
      vendor.address.toLowerCase().includes(searchValue) ||
      vendor.bankName.toLowerCase().includes(searchValue)
    );
  });

  /* =========================
     PAGINATION
  ========================= */

  const totalPages = Math.ceil(
    filteredVendors.length / entriesPerPage
  );

  const startIndex = (currentPage - 1) * entriesPerPage;

  const currentVendors = filteredVendors.slice(
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

  const handleViewVendor = (vendor) => {
    router.push(
      `/vendor/view-vendor?id=${vendor.id}`
    );
  };

  const handleEdit = (vendor) => {
    router.push(
      `/vendor/add-vendor?edit=${vendor.id}`
    );
  };

  const handleDelete = (vendor) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete vendor "${vendor.vendorName}"?`
    );

    if (confirmDelete) {
      const updatedVendors = vendors.filter(
        (v) => v.id !== vendor.id
      );

      setVendors(updatedVendors);

      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedVendors)
      );

      if (
        currentPage > 1 &&
        filteredVendors.length - 1 <=
          (currentPage - 1) * entriesPerPage
      ) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <div className="vendor-table-card">

      {/* =================================
          TOP CONTROLS
      ================================= */}

      <div className="vendor-table-top">

        <div className="entries-section">
          <select defaultValue="10">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>

          <span>entries per page</span>
        </div>


        <div className="vendor-search">

          <label htmlFor="vendor-search">
            Search:
          </label>

          <input
            id="vendor-search"
            type="text"
            placeholder="Search Vendor"
            value={search}
            onChange={handleSearch}
          />

        </div>

      </div>


      {/* =================================
          TABLE
      ================================= */}

      <div className="vendor-table-wrapper">

        <table className="vendor-table">

          <thead>
            <tr>

              <th>SL</th>

              <th>Vendor ID</th>

              <th>Vendor Name</th>

              <th>Vendor Email</th>

              <th>Vendor Phone</th>

              <th>Address</th>

              <th>Bank Name</th>

              <th>Account Title</th>

              <th>AC/IBAN</th>

              <th>Payable</th>

               <th>Receivable</th>

              <th>Actions</th>

            </tr>
          </thead>


          <tbody>

            {currentVendors.length > 0 ? (

              currentVendors.map((vendor, index) => (

                <tr key={vendor.id}>

                  {/* SL */}

                  <td>
                    {startIndex + index + 1}
                  </td>


                  {/* VENDOR ID */}

                  <td>
                    {vendor.vendorId}
                  </td>


                  {/* VENDOR NAME */}

                  <td>
                    {vendor.vendorName}
                  </td>


                  {/* EMAIL */}

                  <td>
                    {vendor.vendorEmail}
                  </td>


                  {/* PHONE */}

                  <td>
                    {vendor.vendorPhone}
                  </td>


                  {/* ADDRESS */}

                  <td>
                    {vendor.address}
                  </td>


                  {/* BANK */}

                  <td>
                    {vendor.bankName}
                  </td>


                  {/* ACCOUNT TITLE */}

                  <td>
                    {vendor.accountTitle}
                  </td>


                  {/* IBAN */}

                  <td>
                    {vendor.iban}
                  </td>
                  {/* {payable} */}
       <td>
        {vendor.pay}
       </td>
     {/* receivable */}
<td>
  {vendor.receive}
</td>
                  {/* ACTIONS */}

                  <td>

                    <div className="vendor-actions">

                      {/* VIEW */}

                      <button
                        type="button"
                        className="action-btn view-btn"
                        title="View Vendor"
                        onClick={() =>
                          handleViewVendor(vendor)
                        }
                      >
                        <FaEye />
                      </button>


                      {/* EDIT */}

                      <button
                        type="button"
                        className="action-btn edit-btn"
                        title="Edit Vendor"
                        onClick={() =>
                          handleEdit(vendor)
                        }
                      >
                        <FaEdit />
                      </button>


                      {/* DELETE */}

                      <button
                        type="button"
                        className="action-btn delete-btn"
                        title="Delete Vendor"
                        onClick={() =>
                          handleDelete(vendor)
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
                  className="no-vendor"
                >
                  No vendors found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>


      {/* =================================
          TABLE BOTTOM
      ================================= */}

      <div className="vendor-table-bottom">

        <div className="entries-info">

          Showing{" "}

          {filteredVendors.length === 0
            ? 0
            : startIndex + 1}

          {" "}to{" "}

          {Math.min(
            startIndex + entriesPerPage,
            filteredVendors.length
          )}

          {" "}of{" "}

          {filteredVendors.length}

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
