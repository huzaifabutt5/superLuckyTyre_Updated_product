"use client";

import { useRouter } from "next/navigation";
import "./VendorTable.css";

const vendors = [
  {
    sl: "01",
    id: "TYRPNT-VN-0006",
    name: "Sara Khan",
    due: "Rs 15,000.00",
  },
  {
    sl: "02",
    id: "TYRPNT-VN-0002",
    name: "Hamza Iqbal",
    due: "Rs 45,200.00",
  },
  {
    sl: "03",
    id: "TYRPNT-VN-0003",
    name: "Asad Ullah",
    due: "Rs 98,300.00",
  },
  {
    sl: "04",
    id: "TYRPNT-VN-0004",
    name: "Anees",
    due: "Rs 88,700.00",
  },
  {
    sl: "05",
    id: "TYRPNT-VN-0005",
    name: "Huzaifa",
    due: "Rs 74,200.00",
  },
];

export default function VendorTable() {
  const router = useRouter();

  return (
    <div className="top-vendor-card">

      <div className="top-vendor-header">
        <h3>Top Vendors</h3>
        <button onClick={() => router.push("/vendor")}>View All</button>
      </div>

      <table className="top-vendor-table">

        <thead>
          <tr>
            <th>SL</th>
            <th>Vendor ID</th>
            <th>Vendor Name</th>
            <th>Due Amount</th>
          </tr>
        </thead>

        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.sl}</td>
              <td>{vendor.id}</td>
              <td>{vendor.name}</td>
              <td>{vendor.due}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}