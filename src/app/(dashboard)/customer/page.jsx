"use client";

import CustomerHeader from "@/components/Customer/CustomerHeader";
import CustomerTable from "@/components/CustomerTable/CustomerTable";

export default function CustomerPage() {
  return (
    <div className="customer-page">

      <CustomerHeader />

      <CustomerTable />

    </div>
  );
}