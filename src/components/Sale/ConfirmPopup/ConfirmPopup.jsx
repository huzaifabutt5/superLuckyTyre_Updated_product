"use client";

import "./ConfirmPopup.css";

export default function ConfirmPopup({
  cartProducts = [],
  onClose,
  onAgainPurchase,
}) {
  const totalProducts = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className="confirm-popup-overlay">

      <div className="confirm-popup">

        {/* SUCCESS ICON */}
        <div className="success-icon">
          ✓
        </div>

        {/* TITLE */}
        <h2>Purchase Confirmed</h2>

        {/* DETAILS */}
        <div className="confirm-popup-details">

          <p>
            {totalProducts || 4} Product, Total{" "}
            {totalProducts || 15} pcs Purchased.
          </p>

          <p>
            Total Amount : <strong>Rs. 62,500</strong>
          </p>

          <p>
            Paid : <strong>Rs. 62,500</strong>
          </p>

          <p>
            Remaining : <strong>Rs. 0</strong>
          </p>

          <p>
            Invoice ID : <strong>345678906</strong>
          </p>

        </div>

        {/* BUTTONS */}
        <div className="confirm-popup-buttons">

          <button
            type="button"
            className="again-purchase-btn"
            onClick={onAgainPurchase}
          >
            Again Purchase
          </button>

          <button
            type="button"
            className="download-invoice-btn"
          >
            Download Invoice
          </button>

        </div>

      </div>

    </div>
  );
}