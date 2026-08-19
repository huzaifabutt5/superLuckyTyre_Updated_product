"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import "./AddVendor.css";
import vendorData from "@/data/vendorData";

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

function getNextVendorId(vendors) {
  const maxId = vendors.reduce(
    (max, vendor) => {
      const num = parseInt(String(vendor.id).replace(/[^0-9]/g, ""), 10);

      return Math.max(max, isNaN(num) ? 0 : num);
    },
    0
  );

  return maxId + 1;
}

function buildVendorId(number) {
  return `TYRPNT-VD-${String(number).padStart(4, "0")}`;
}

function AddVendorForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const editId = searchParams.get("edit");

  const initialVendors = loadVendors();

  const editingVendor = editId
    ? initialVendors.find(
        (vendor) => vendor.id.toString() === editId
      )
    : null;

  const [form, setForm] = useState({
    vendorName: editingVendor?.vendorName || "",
    vendorEmail: editingVendor?.vendorEmail || "",
    vendorPhone: editingVendor?.vendorPhone || "",
    address: editingVendor?.address || "",
    bankName: editingVendor?.bankName || "",
    accountTitle: editingVendor?.accountTitle || "",
    iban: editingVendor?.iban || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    router.push("/vendor");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const vendors = loadVendors();

    if (editingVendor) {
      const updatedVendors = vendors.map((vendor) =>
        vendor.id === editingVendor.id
          ? {
              ...vendor,
              ...form,
            }
          : vendor
      );

      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedVendors)
      );
    } else {
      const newId = getNextVendorId(vendors);

      const newVendor = {
        id: newId,
        vendorId: buildVendorId(newId),
        ...form,
      };

      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...vendors, newVendor])
      );
    }

    router.push("/vendor");
  };

  return (
    <div className="add-vendor-page">

      {/* =================================
          BREADCRUMB
      ================================= */}

      <div className="add-vendor-breadcrumb">
        Tyre Shop &gt;{" "}
        <Link href="/vendor" className="breadcrumb-link">
          Vendor Management
        </Link>{" "}
        &gt;{" "}
        {editingVendor ? "Edit Vendor" : "Add Vendor"}
      </div>


      {/* =================================
          PAGE TITLE
      ================================= */}

      <h1 className="add-vendor-title">
        {editingVendor ? "Edit Vendor" : "Add Vendor"}
      </h1>


      {/* =================================
          VENDOR INFORMATION
      ================================= */}

      <form onSubmit={handleSubmit}>

        <div className="vendor-form-card">

          <div className="vendor-form-heading">
            Vendor Information
          </div>

          <div className="vendor-form-content">

            {/* VENDOR NAME */}

            <div className="form-field">
              <label htmlFor="vendorName">
                Vendor Name <span>*</span>
              </label>

              <input
                id="vendorName"
                name="vendorName"
                type="text"
                placeholder="Enter vendor name"
                value={form.vendorName}
                onChange={handleChange}
                required
              />
            </div>


            {/* VENDOR EMAIL */}

            <div className="form-field">
              <label htmlFor="vendorEmail">
                Vendor Email <span>*</span>
              </label>

              <input
                id="vendorEmail"
                name="vendorEmail"
                type="email"
                placeholder="Enter vendor email"
                value={form.vendorEmail}
                onChange={handleChange}
                required
              />
            </div>


            {/* VENDOR PHONE */}

            <div className="form-field">
              <label htmlFor="vendorPhone">
                Vendor Phone <span>*</span>
              </label>

              <input
                id="vendorPhone"
                name="vendorPhone"
                type="tel"
                placeholder="Enter vendor phone"
                value={form.vendorPhone}
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
                placeholder="Enter vendor address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>

          </div>

        </div>


        {/* =================================
            ACCOUNT DETAIL
        ================================= */}

        <div className="vendor-form-card account-detail-card">

          <div className="vendor-form-heading">
            Account Details
          </div>

          <div className="vendor-form-content">

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

        <div className="vendor-form-actions">

          <button
            type="button"
            className="cancel-vendor-button"
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="add-vendor-button"
          >
            {editingVendor ? "Update Vendor" : "Add Vendor"}
          </button>

        </div>

      </form>

    </div>
  );
}

export default function AddVendorPage() {
  return (
    <Suspense fallback={<div className="add-vendor-page">Loading...</div>}>
      <AddVendorForm />
    </Suspense>
  );
}
