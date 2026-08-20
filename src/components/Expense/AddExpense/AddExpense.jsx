"use client";

import { useState } from "react";
import Link from "next/link";
import "./AddExpense.css";

export default function AddExpense() {
  const [date, setDate] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      date,
      expenseName,
      amount,
      description,
    });

    alert("Expense Added Successfully");
  };

  return (
    <div className="add-expense-page">

      {/* Breadcrumb */}
      <div className="add-expense-breadcrumb">
        Tyre Shop &gt;{" "}
        <Link href="/Expense" className="breadcrumb-link">
          Expense Management
        </Link>{" "}
        &gt; Add New Expense
      </div>

      {/* Page Heading */}
      <div className="add-expense-heading">
        <h1>Add New Expense</h1>
      </div>

      {/* Expense Information */}
      <form
        className="add-expense-form"
        onSubmit={handleSubmit}
      >

        <div className="expense-information-card">

          {/* Card Header */}
          <div className="expense-information-header">
            <h2>Expense Information</h2>
          </div>

          {/* Form Body */}
          <div className="expense-information-body">

            {/* First Row */}
            <div className="expense-fields-row">

              {/* Date */}
              <div className="expense-field">
                <label>
                  Date <span>*</span>
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              {/* Expense Name */}
              <div className="expense-field">
                <label>
                  Expense Name <span>*</span>
                </label>

                <input
                  type="text"
                  placeholder="Expense Name"
                  value={expenseName}
                  onChange={(e) =>
                    setExpenseName(e.target.value)
                  }
                  required
                />
              </div>

              {/* Amount */}
              <div className="expense-field">
                <label>
                  Amount <span>*</span>
                </label>

                <input
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) =>
                    setAmount(e.target.value)
                  }
                  required
                />
              </div>

            </div>

            {/* Description */}
            <div className="expense-description-field">

              <label>
                Description <span>*</span>
              </label>

              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                required
              />

            </div>

          </div>

        </div>

        {/* Buttons Card */}
        <div className="add-expense-buttons">

          <Link
            href="/Expense"
            className="cancel-expense-btn"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="save-expense-btn"
          >
            Add Expense
          </button>

        </div>

      </form>

    </div>
  );
}