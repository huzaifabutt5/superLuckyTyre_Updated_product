"use client";

import CustomerHeader from "@/components/Customer/CustomerHeader";
import CustomerTable from "@/components/CustomerTable/CustomerTable";

export default function CustomerPage() {
  return (
    <main className="customer-page">

      <CustomerHeader />

      <CustomerTable />

    </main>
  );
}