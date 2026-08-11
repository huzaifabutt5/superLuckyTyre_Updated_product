"use client";

import "./BalanceSheet.css";

export default function BalanceSheet() {
  const balanceData = [
    {
      date: "June 01, 2026 - 08:30",
      detail: "Sale",
      amount: "PKR 3,400,000",
      balance: "PKR 600,000",
      negative: false,
    },
    {
      date: "June 02, 2026 - 11:45",
      detail: "Sale Return",
      amount: "PKR -4,200,000",
      balance: "PKR 700,000",
      negative: true,
    },
    {
      date: "June 03, 2026 - 02:00",
      detail: "Purchase",
      amount: "PKR -5,100,000",
      balance: "PKR 800,000",
      negative: true,
    },
    {
      date: "June 04, 2026 - 05:15",
      detail: "Purchase Return",
      amount: "PKR 6,000,000",
      balance: "PKR 1,000,000",
      negative: false,
    },
    {
      date: "June 05, 2026 - 09:30",
      detail: "Sale",
      amount: "PKR 6,800,000",
      balance: "PKR 1,100,000",
      negative: false,
    },
    {
      date: "June 04, 2026 - 05:15",
      detail: "Purchase Return",
      amount: "PKR 6,000,000",
      balance: "PKR 1,000,000",
      negative: false,
    },
    {
      date: "June 05, 2026 - 09:30",
      detail: "Sale",
      amount: "PKR 6,800,000",
      balance: "PKR 1,100,000",
      negative: false,
    },
    {
      date: "June 10, 2026 - 01:45",
      detail: "Expense - Daily Wages",
      amount: "PKR -9,700,000",
      balance: "PKR 1,600,000",
      negative: true,
    },
    {
      date: "June 11, 2026 - 04:00",
      detail: "Sale Return",
      amount: "PKR -9,700,000",
      balance: "PKR 1,600,000",
      negative: true,
    },
    {
      date: "June 12, 2026 - 07:15",
      detail: "Purchase",
      amount: "PKR -9,700,000",
      balance: "PKR 1,600,000",
      negative: true,
    },
    {
      date: "June 13, 2026 - 11:30",
      detail: "Purchase Return",
      amount: "PKR 9,700,000",
      balance: "PKR 1,600,000",
      negative: false,
    },
    {
      date: "June 14, 2026 - 02:45",
      detail: "Sale",
      amount: "PKR 9,700,000",
      balance: "PKR 1,600,000",
      negative: false,
    },
  ];

  return (
    <div className="balance-sheet-page">

      {/* Breadcrumb */}
      <div className="balance-breadcrumb">
        Tyre Shop &gt; Profit & Loss Management &gt; Open Balance Sheet
      </div>

      {/* Page Header */}
      <div className="balance-page-header">
        <h1>Open Balance Sheet</h1>
      </div>

      {/* Main Card */}
      <div className="balance-card">

        {/* Card Header */}
        <div className="balance-card-header">

          <h3>Sales and Purchases</h3>

          <select className="balance-select">
            <option>--Select Option--</option>
            <option>Sales</option>
            <option>Purchases</option>
            <option>Sales Return</option>
            <option>Purchase Return</option>
            <option>Expenses</option>
          </select>

        </div>

        {/* Table Wrapper */}
        <div className="balance-table-wrapper">

          <table className="balance-table">

            <thead>
              <tr>
                <th>Date</th>
                <th>Detail</th>
                <th>Amount</th>
                <th>Open Balance</th>
              </tr>
            </thead>

            <tbody>

              {balanceData.map((item, index) => (

                <tr key={index}>

                  <td data-label="Date">
                    {item.date}
                  </td>

                  <td data-label="Detail">
                    {item.detail}
                  </td>

                  <td
                    data-label="Amount"
                    className={item.negative ? "negative-amount" : ""}
                  >
                    {item.amount}
                  </td>

                  <td data-label="Open Balance">
                    {item.balance}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}