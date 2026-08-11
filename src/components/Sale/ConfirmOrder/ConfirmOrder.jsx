"use client";

import "./ConfirmOrder.css";

export default function ConfirmOrder({
  cartProducts = [],
  onConfirm,
}) {
  const totalProducts = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalCOG = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const netProfit = 12500;
  const netTotal = totalCOG + netProfit;

  return (
    <div className="order-confirm-page">

      {/* BREADCRUMB */}
      <div className="order-confirm-breadcrumb">
        Tyre Shop &gt; Sale/Purchase Management &gt; Sale
      </div>

      {/* HEADING */}
      <div className="order-confirm-heading">
        <h1>Confirm Order &amp; Pay</h1>

        <button className="sale-return-btn">
          ↶ Sale Return
        </button>
      </div>

      {/* STEP BAR */}
      <div className="order-step-bar">

        <div className="order-step completed">
          <span>Step 1:</span>
          Select Product
          <b>✓</b>
        </div>

        <div className="order-step completed">
          <span>Step 2:</span>
          Select Customer
          <b>✓</b>
        </div>

        <div className="order-step active">
          <span>Step 3:</span>
          Confirm Order &amp; Pay
          <b>●</b>
        </div>

      </div>

      {/* MAIN LAYOUT */}
      <div className="order-confirm-layout">

        {/* LEFT - PAYMENT INFORMATION */}
        <div className="order-confirm-left">

          <div className="payment-information-card">

            <div className="payment-information-header">
              <h3>Payment Information</h3>
            </div>

            <div className="payment-information-body">

              {/* NET TOTAL */}
              <div className="payment-field">
                <label>
                  Net Total
                </label>

                <input
                  type="text"
                  readOnly
                  value={`Rs. ${netTotal.toLocaleString()}`}
                />
              </div>

              {/* PAYMENT TYPE */}
              <div className="payment-field">
                <label>
                  Payment Type
                </label>

                <select defaultValue="">
                  <option value="" disabled>
                    -- Select Payment Type --
                  </option>

                  <option value="cash">
                    Cash
                  </option>

                  <option value="bank">
                    Bank Transfer
                  </option>

                  <option value="credit">
                    Credit
                  </option>
                </select>
              </div>

              {/* TRANSACTION ID */}
              <div className="payment-field">
                <label>
                  Transaction ID
                </label>

                <input
                  type="text"
                  placeholder="Enter Transaction ID"
                />
              </div>

              {/* PAID AMOUNT */}
              <div className="payment-field">
                <label>
                  Paid Amount
                </label>

                <input
                  type="text"
                  placeholder="Enter Paid Amount"
                />
              </div>

              {/* REMAINING AMOUNT */}
              <div className="payment-field">
                <label>
                  Remaining Amount
                </label>

                <input
                  type="text"
                  readOnly
                  value="Rs. 0"
                />
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT - CART */}
        <div className="order-cart-card">

          <h3>Cart Detail</h3>

          <div className="order-cart-products">

            {cartProducts.map((product, index) => (
              <div
                className="order-cart-product"
                key={product.id || index}
              >

                <div className="order-cart-product-info">

                  <div className="order-cart-product-name">
                    {product.name}
                  </div>

                  <div className="order-cart-product-size">
                    {product.size}
                  </div>

                  <div className="order-cart-product-quantity">
                    {product.quantity} X {product.price?.toLocaleString()}
                  </div>

                </div>

                <div className="order-cart-product-right">

                  <button
                    type="button"
                    className="order-delete-btn"
                  >
                    🗑
                  </button>

                  <span>
                    Rs.{" "}
                    {(
                      product.price *
                      product.quantity
                    ).toLocaleString()}
                  </span>

                </div>

              </div>
            ))}

          </div>

          {/* CART SUMMARY */}
          <div className="order-cart-summary">

            <div className="order-summary-row">
              <span>Total Products</span>
              <strong>{totalProducts}pcs</strong>
            </div>

            <div className="order-summary-row">
              <span>COG</span>
              <strong>Rs. {totalCOG.toLocaleString()}</strong>
            </div>

            <div className="order-summary-row">
              <span>Net Profit</span>
              <strong className="profit">
                Rs. {netProfit.toLocaleString()}
              </strong>
            </div>

            <div className="order-summary-row remaining">
              <span>Net Total</span>
              <strong className="total">
                Rs. {netTotal.toLocaleString()}
              </strong>
            </div>

          </div>

          {/* CONFIRM BUTTON */}
          <button
            type="button"
            className="confirm-order-btn"
            onClick={onConfirm}
          >
            Confirm
          </button>

        </div>

      </div>

    </div>
  );
}
