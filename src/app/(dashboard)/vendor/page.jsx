"use client";

import VendorHeader from "@/components/Vendor/VendorHeader/VendorHeader";
import VendorTable from "@/components/Vendor/VendorTable/VendorTable";

export default function VendorPage() {
  return (
    <div className="vendor-page">

      <VendorHeader />

      <VendorTable />

    </div>
  );
}
