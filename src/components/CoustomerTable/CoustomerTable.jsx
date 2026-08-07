"use client";

import "./CoustomerTable.css";

const customers = [
  {
    sl: "01",
    id: "TYRPNT-CS-0001",
    name: "Sara Khan",
    due: "Rs 15,000.00",
  },
  {
    sl: "02",
    id: "TYRPNT-CS-0002",
    name: "Hamza Iqbal",
    due: "Rs 45,200.00",
  },
  {
    sl: "03",
    id: "TYRPNT-CS-0003",
    name: "Asad Ullah",
    due: "Rs 98,300.00",
  },
  {
    sl: "04",
    id: "TYRPNT-CS-0004",
    name: "Anees",
    due: "Rs 88,700.00",
  },
  {
    sl: "05",
    id: "TYRPNT-CS-0005",
    name: "Huzaifa",
    due: "Rs 74,200.00",
  },
];

export default function CoustomerTable() {
  return (
    <div className="top-customer-card">

      <div className="top-customer-header">
        <h3>Top Customer</h3>
        <button>View All</button>
      </div>

      <table className="top-customer-table">

        <thead>
          <tr>
            <th>SL</th>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Due Amount</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.sl}</td>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.due}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

