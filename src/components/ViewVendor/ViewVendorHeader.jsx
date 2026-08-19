import Link from "next/link";
import "./ViewVendorHeader.css";

export default function ViewVendorHeader() {
  return (
    <div className="view-vendor-header">
      <p className="breadcrumb">
        Tyre Shop &gt;{" "}
        <Link href="/vendor" style={{ textDecoration: "none", color: "inherit" }}>
          Vendor Management
        </Link>{" "}
        &gt; View Vendor
      </p>

      <h1 className="page-title">
        View Vendor
      </h1>
    </div>
  );
}