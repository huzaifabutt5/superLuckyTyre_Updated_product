"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import "./AddCustomer.css";
import customerData from "@/data/customerData";

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

function getNextCustomerId(customers) {
  const maxId = customers.reduce(
    (max, customer) => Math.max(max, customer.id),
    0
  );

  return maxId + 1;
}

function buildCustomerId(number) {
  return `TYRPNT-VN-${String(number).padStart(4, "0")}`;
}

function AddCustomerForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const editId = searchParams.get("edit");

  const initialCustomers = loadCustomers();

  const editingCustomer = editId
    ? initialCustomers.find(
        (customer) => customer.id.toString() === editId
      )
    : null;

  const [form, setForm] = useState({
    customerName: editingCustomer?.customerName || "",
    customerEmail: editingCustomer?.customerEmail || "",
    customerPhone: editingCustomer?.customerPhone || "",
    address: editingCustomer?.address || "",
    bankName: editingCustomer?.bankName || "",
    accountTitle: editingCustomer?.accountTitle || "",
    iban: editingCustomer?.iban || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    router.push("/customer");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const customers = loadCustomers();

    if (editingCustomer) {
      const updatedCustomers = customers.map((customer) =>
        customer.id === editingCustomer.id
          ? {
              ...customer,
              ...form,
            }
          : customer
      );

      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedCustomers)
      );
    } else {
      const newId = getNextCustomerId(customers);

      const newCustomer = {
        id: newId,
        customerId: buildCustomerId(newId),
        ...form,
      };

      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...customers, newCustomer])
      );
    }

    router.push("/customer");
  };

  return (
    <main className="add-customer-page">

      {/* =================================
          BREADCRUMB
      ================================= */}

      <div className="add-customer-breadcrumb">
        {"Tyre Shop > Customer Management > "}
        {editingCustomer ? "Edit Customer" : "Add Customer"}
      </div>


      {/* =================================
          PAGE TITLE
      ================================= */}

      <h1 className="add-customer-title">
        {editingCustomer ? "Edit Customer" : "Add Customer"}
      </h1>


      {/* =================================
          CUSTOMER DETAILS FORM
      ================================= */}

      <form onSubmit={handleSubmit}>

        {/* =================================
            GENERAL INFORMATION CARD
        ================================= */}

        <div className="customer-form-card">

          <div className="customer-form-heading">
            Customer Information
          </div>

          <div className="customer-form-content">

            {/* CUSTOMER NAME */}

            <div className="form-field">
              <label htmlFor="customerName">
                Customer Name <span>*</span>
              </label>

              <input
                id="customerName"
                name="customerName"
                type="text"
                placeholder="Enter customer name"
                value={form.customerName}
                onChange={handleChange}
                required
              />
            </div>


            {/* CUSTOMER EMAIL */}

            <div className="form-field">
              <label htmlFor="customerEmail">
                Customer Email <span>*</span>
              </label>

              <input
                id="customerEmail"
                name="customerEmail"
                type="email"
                placeholder="Enter customer email"
                value={form.customerEmail}
                onChange={handleChange}
                required
              />
            </div>


            {/* CUSTOMER PHONE */}

            <div className="form-field">
              <label htmlFor="customerPhone">
                Customer Phone <span>*</span>
              </label>

              <input
                id="customerPhone"
                name="customerPhone"
                type="tel"
                placeholder="Enter customer phone"
                value={form.customerPhone}
                onChange={handleChange}
                required
              />
            </div>


            {/* ADDRESS */}

            <div className="form-field">
              <label htmlFor="address">
                Address <span>*</span>
              </label>

              <input
                id="address"
                name="address"
                type="text"
                placeholder="Enter customer address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>

          </div>

        </div>


        {/* =================================
            ACCOUNT DETAIL CARD
        ================================= */}

        <div className="customer-form-card account-detail-card">

          <div className="customer-form-heading">
            Account Details
          </div>

          <div className="customer-form-content">

            {/* BANK NAME */}

            <div className="form-field">
              <label htmlFor="bankName">
                Bank Name <span>*</span>
              </label>

              <input
                id="bankName"
                name="bankName"
                type="text"
                placeholder="Enter bank name"
                value={form.bankName}
                onChange={handleChange}
                required
              />
            </div>


            {/* ACCOUNT TITLE */}

            <div className="form-field">
              <label htmlFor="accountTitle">
                Account Title <span>*</span>
              </label>

              <input
                id="accountTitle"
                name="accountTitle"
                type="text"
                placeholder="Enter account title"
                value={form.accountTitle}
                onChange={handleChange}
                required
              />
            </div>


            {/* AC / IBAN */}

            <div className="form-field full-field">
              <label htmlFor="iban">
                AC/IBAN <span>*</span>
              </label>

              <input
                id="iban"
                name="iban"
                type="text"
                placeholder="Enter account / IBAN number"
                value={form.iban}
                onChange={handleChange}
                required
              />
            </div>

          </div>

        </div>


        {/* =================================
            BOTTOM ACTION AREA
        ================================= */}

        <div className="customer-form-actions">

          <button
            type="button"
            className="cancel-customer-button"
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="add-customer-button"
          >
            {editingCustomer ? "Update Customer" : "Add Customer"}
          </button>

        </div>

      </form>

    </main>
  );
}

export default function AddCustomerPage() {
  return (
    <Suspense fallback={<div className="add-customer-page">Loading...</div>}>
      <AddCustomerForm />
    </Suspense>
  );
}


































