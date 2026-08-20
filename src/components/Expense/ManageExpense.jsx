"use client";
import Link from "next/link"
import { useState } from "react";
import { FaEye, FaEdit, FaPlus } from "react-icons/fa";
import "./ManageExpense.css";
;
export default function ManageExpense() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
 
  const expenses = [
    {
      id: 1,
      date: "June 15, 2026",
      name: "Shop Rent",
      description: "195/65 R 15",
      amount: "15,000",
    },
    {
      id: 2,
      date: "June 15, 2026",
      name: "Shop Rent",
      description: "185/70 R 14",
      amount: "15,000",
    },
    {
      id: 3,
      date: "June 15, 2026",
      name: "Shop Rent",
      description: "205/55 R 16",
      amount: "15,000",
    },
    {
      id: 4,
      date: "June 15, 2026",
      name: "Shop Rent",
      description: "195/50 R 15",
      amount: "15,000",
    },
    {
      id: 5,
      date: "June 15, 2026",
      name: "Shop Rent",
      description: "215/60 R 16",
      amount: "15,000",
    },
    {
      id: 6,
      date: "June 15, 2026",
      name: "Shop Rent",
      description: "185/65 R 15",
      amount: "15,000",
    },
    {
      id: 7,
      date: "June 15, 2026",
      name: "Shop Rent",
      description: "175/70 R 13",
      amount: "15,000",
    },
    {
      id: 8,
      date: "June 15, 2026",
      name: "Shop Rent",
      description: "205/65 R 15",
      amount: "15,000",
    },
    {
      id: 9,
      date: "June 15, 2026",
      name: "Shop Rent",
      description: "195/60 R 15",
      amount: "15,000",
    },
    {
      id: 10,
      date: "June 15, 2026",
      name: "Shop Rent",
      description: "225/45 R 17",
      amount: "15,000",
    },
  ];

  // Search
  const filteredExpenses = expenses.filter((expense) => {
    const text =
      `${expense.name} ${expense.description} ${expense.date}`.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  // Buttons
  const handleAddExpense = () => {
    console.log("Add New Expense clicked");
  };

  const handleView = (expense) => {
    console.log("View expense:", expense);
  };

  const handleEdit = (expense) => {
    console.log("Edit expense:", expense);
  };

  return (
    <div className="manage-expense-page">

      {/* Breadcrumb */}
      <div className="expense-breadcrumb">
        Tyre Shop &gt;{" "}
        <Link href="/expense" style={{ textDecoration: "none", color: "inherit" }}>
          Expense Management
        </Link>{" "}
        &gt; Manage Expense
      </div>

      {/* Header */}
      <div className="expense-header">

        <h1>Manage Expense</h1>
<Link
  href="/expense/add"
  className="add-expense-btn"
  onClick={handleAddExpense}
>
  <FaPlus />
  Add New Expense
</Link>
   

      </div>

      {/* Main Card */}
      <div className="expense-card">

        {/* Card Header */}
        <div className="expense-card-header">

          <h2>All Expense</h2>

        </div>

        {/* Toolbar */}
        <div className="expense-toolbar">

          {/* Entries */}
          <div className="entries-section">

            <select className="entries-select" defaultValue="10">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>

            <span>entries per page</span>

          </div>

          {/* Search */}
          <div className="expense-search-section">

            <label htmlFor="expense-search">
              Search:
            </label>

            <input
              id="expense-search"
              type="text"
              placeholder="Search Expense"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              type="button"
              className="calendar-btn"
              title="Select Date"
            >
              📅
            </button>

          </div>

        </div>

        {/* Table */}
        <div className="expense-table-wrapper">

          <table className="expense-table">

            <thead>
              <tr>
                <th>SL</th>
                <th>Date</th>
                <th>Expense Name</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredExpenses.length > 0 ? (

                filteredExpenses.map((expense) => (

                  <tr key={expense.id}>

                    <td data-label="SL">{expense.id}</td>

                    <td data-label="Date">{expense.date}</td>

                    <td data-label="Expense Name">{expense.name}</td>

                    <td data-label="Description">{expense.description}</td>

                    <td data-label="Amount">
                      PKR {expense.amount}
                    </td>

                    <td data-label="Actions">

                      <div className="expense-actions">

                        {/* View */}
                        <button
                          type="button"
                          className="action-btn view-action"
                          title="View"
                          onClick={() => handleView(expense)}

                        >
                          <FaEye/>
                        </button>

                        {/* Edit */}
                        <button
                          type="button"
                          className="action-btn edit-action"
                          title="Edit"
                          onClick={() => handleEdit(expense)}
                        >
                          <FaEdit />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                  <tr>
                    <td
                      colSpan="6"
                      className="no-expense"
                      data-label=""
                    >
                      No expenses found
                    </td>
                  </tr>

              )}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <div className="expense-table-footer">

          <div className="entries-info">
            Showing 1 to {filteredExpenses.length} of 20 entries
          </div>

          <div className="pagination">

            <button
              type="button"
              className="pagination-arrow"
              onClick={() =>
                setCurrentPage(Math.max(1, currentPage - 1))
              }
            >
              «
            </button>

            <button
              type="button"
              className="pagination-arrow"
              onClick={() =>
                setCurrentPage(Math.max(1, currentPage - 1))
              }
            >
              ‹
            </button>

            <button
              type="button"
              className="pagination-number active"
            >
              1
            </button>

            <button
              type="button"
              className="pagination-number"
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>

            <button
              type="button"
              className="pagination-arrow"
              onClick={() => setCurrentPage(2)}
            >
              ›
            </button>

            <button
              type="button"
              className="pagination-arrow"
              onClick={() => setCurrentPage(2)}
            >
              »
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

