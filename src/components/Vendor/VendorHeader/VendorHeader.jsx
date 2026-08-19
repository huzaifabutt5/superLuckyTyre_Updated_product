"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import "./VendorHeader.css";

export default function VendorHeader() {
  const router = useRouter();

  const handleAddVendor = () => {
    router.push("/vendor/add-vendor");
  };

  return (
    <div className="vendor-header">

      <div className="vendor-title-section">

        <div className="breadcrumb">
          Tyre Shop &gt;{" "}
          <Link href="/vendor" style={{ textDecoration: "none", color: "inherit" }}>
            Vendor Management
          </Link>{" "}
          &gt; Vendor Listing
        </div>

        <h1>Vendor Listing</h1>

      </div>

      <button
        type="button"
        className="add-vendor-btn"
        onClick={handleAddVendor}
      >
        <span className="add-icon">+</span>
        Add New Vendor
      </button>

    </div>
  );
}