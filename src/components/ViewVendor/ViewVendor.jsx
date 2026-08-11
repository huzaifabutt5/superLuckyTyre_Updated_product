import "./ViewVendor.css";

import ViewVendorHeader from "./ViewVendorHeader";
import VendorSummaryCards from "./VendorSummaryCards";
import InvoiceTable from "./InvoiceTable";
import InvoicePagination from "./InvoicePagination";

export default function ViewVendor() {
  return (
    <div className="view-vendor-page">

      <ViewVendorHeader />

      <VendorSummaryCards />

      <InvoiceTable />

      <InvoicePagination />

    </div>
  );
}
