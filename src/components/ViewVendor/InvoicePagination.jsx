import "./InvoicePagination.css";

export default function InvoicePagination() {
  return (
    <div className="invoice-pagination">

      <div className="pagination-info">
        Showing 1 to 10 of 20 entries
      </div>

      <div className="pagination-buttons">

        <button className="page-btn">&laquo;</button>

        <button className="page-btn">&lsaquo;</button>

        <button className="page-btn active">1</button>

        <button className="page-btn">2</button>

        <button className="page-btn">&rsaquo;</button>

        <button className="page-btn">&raquo;</button>

      </div>

    </div>
  );
}