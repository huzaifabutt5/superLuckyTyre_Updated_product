import "./InvoiceTable.css";
import { FaCalendarAlt } from "react-icons/fa";

const invoiceData = [
  {
    id: 1,
    date: "June 15,2026",
    invoice: "N/A",
    products: "N/A",
    status: "N/A",
    transactionType: "Bank Transfer",
    transactionId: "TrX 6tgbGY7I89",
  },
  {
    id: 2,
    date: "June 15,2026",
    invoice: "Invoice - 0001",
    products: "5 Products",
    status: "Purchase",
    transactionType: "Cash",
    transactionId: "N/A",
  },
  {
    id: 3,
    date: "June 15,2026",
    invoice: "Invoice - 0002",
    products: "7 Products",
    status: "Purchase",
    transactionType: "Cash",
    transactionId: "N/A",
  },
  {
    id: 4,
    date: "June 15,2026",
    invoice: "Invoice - 0003",
    products: "10 Products",
    status: "Purchase",
    transactionType: "Cash",
    transactionId: "N/A",
  },
  {
    id: 5,
    date: "June 15,2026",
    invoice: "Invoice - 0004",
    products: "15 Products",
    status: "Purchase",
    transactionType: "Cash",
    transactionId: "N/A",
  },
  {
    id: 6,
    date: "June 15,2026",
    invoice: "Invoice - 0005",
    products: "20 Products",
    status: "Purchase",
    transactionType: "Cash",
    transactionId: "N/A",
  },
  {
    id: 7,
    date: "June 15,2026",
    invoice: "Invoice - 0006",
    products: "25 Products",
    status: "Purchase",
    transactionType: "Cash",
    transactionId: "N/A",
  },
  {
    id: 8,
    date: "June 15,2026",
    invoice: "Invoice - 0007",
    products: "30 Products",
    status: "Purchase",
    transactionType: "Cash",
    transactionId: "N/A",
  },
  {
    id: 9,
    date: "June 15,2026",
    invoice: "Invoice - 0008",
    products: "50 Products",
    status: "Purchase",
    transactionType: "Cash",
    transactionId: "N/A",
  },
  {
    id: 10,
    date: "June 15,2026",
    invoice: "Invoice - 0009",
    products: "100 Products",
    status: "Purchase",
    transactionType: "Cash",
    transactionId: "N/A",
  },
];

export default function InvoiceTable() {
  return (
    <div className="invoice-card">

      <h2 className="invoice-heading">All Invoices</h2>

      <div className="invoice-toolbar">

        <div className="entries-section">
          <select>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>

          <span>entries per page</span>
        </div>

        <div className="right-toolbar">

          <div className="search-box">
            <label>Search:</label>

            <input
              type="text"
              placeholder="Search"
            />
          </div>

          <button className="date-btn">
            <FaCalendarAlt />
            Jul 12,2026 - Aug 12,2026
          </button>

        </div>

      </div>

      <div className="table-wrapper">

        <table className="invoice-table">

          <thead>

            <tr>
              <th>SL</th>
              <th>Date</th>
              <th>Invoice ID</th>
              <th>Products</th>
              <th>Purchase/Return</th>
              <th>Transaction Type</th>
              <th>Transaction ID</th>
            </tr>

          </thead>

          <tbody>

            {invoiceData.map((item) => (

              <tr key={item.id}>

                <td>{item.id}</td>

                <td>{item.date}</td>

                <td>{item.invoice}</td>

                <td>{item.products}</td>

                <td>
                  {item.status === "Purchase" ? (
                    <span className="purchase-badge">
                      Purchase
                    </span>
                  ) : (
                    item.status
                  )}
                </td>

                <td>{item.transactionType}</td>

                <td>{item.transactionId}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}