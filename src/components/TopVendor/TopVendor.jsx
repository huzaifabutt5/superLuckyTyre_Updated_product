"use client";

import "./TopVendor.css";
import vendorData from "../../data/vendorData";

export default function TopVendor() {
  /* Show top 5 vendors */
  const topVendors = vendorData.slice(0, 5);

  return (
    <div className="customer-card">

      <div className="customer-header">
        <h3>Top Vendor</h3>
        <button>View All</button>
      </div>

      <table className="customer-table">

        <thead>
          <tr>
            <th>SL</th>
            <th>Vendor ID</th>
            <th>Vendor Name</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          {topVendors.map((vendor, index) => (
            <tr key={vendor.id}>
              <td>{String(index + 1).padStart(2, "0")}</td>
              <td>{vendor.vendorId}</td>
              <td>{vendor.vendorName}</td>
              <td>{vendor.vendorPhone}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}
