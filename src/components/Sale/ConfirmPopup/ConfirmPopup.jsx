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
        <h2>Sale Confirmed</h2>

        {/* DETAILS */}
        <div className="confirm-popup-details">

          <p>
            {totalProducts || 3} Items selected, from{" "}
            {totalProducts || 2} Batches.
          </p>

         

          <p>
            Recieved : <strong>Rs. 62,500</strong>
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
            Again Sell
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