"use client";

import { useRouter } from "next/navigation";
import "./CustomerHeader.css";

export default function CustomerHeader() {
  const router = useRouter();

  const handleAddCustomer = () => {
    router.push("/customer/add-customer");
  };

  return (
    <div className="customer-header">

      <div className="customer-title-section">

        <div className="breadcrumb">
          Tyre Shop &gt; Customer Management &gt; Customer Listing
        </div>

        <h1>Customer Listing</h1>

      </div>


      <button
        type="button"
        className="add-customer-btn"
        onClick={handleAddCustomer}
      >
        <span className="add-icon">+</span>
        Add New Customer
      </button>

    </div>
  );
}