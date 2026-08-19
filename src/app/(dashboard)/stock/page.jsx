"use client";
import Link from "next/link";
import StockSummaryCards from "@/components/StockListing/StockSummaryCards/StockSummaryCards";
import StockTable from "@/components/StockListing/StockTable/StockTable";
import "./StockListing.css";

export default function StockListingPage() {
  return (
    <div className="stock-page">

      {/* Breadcrumb */}
      <div className="stock-breadcrumb">
        Tyre Shop &gt;{" "}
        <Link href="/product" className="breadcrumb-link">
          Product Management
        </Link>{" "}
        &gt; Stock Listing
      </div>

      {/* Page Title */}
      <h1 className="stock-page-title">
        Stock Listing
      </h1>

      {/* Summary Cards */}
      <StockSummaryCards />
{ /* Stock Table */}
      <StockTable />
    </div>
  );
}