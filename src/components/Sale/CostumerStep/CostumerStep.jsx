"use client";

import "./CostumerStep.css";

export default function CustomerStep({
  cartProducts,
  setCartProducts,
  onBack,
  onContinue,
}) {
  return (
    <div className="customer-step-page">
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
      <div className="sale-steps">

        <button
          type="button"
          className="sale-step completed"
          onClick={onBack}
        >
          <span>Step 1:</span>
          Select Product
          <b className="step-dot-green">●</b>
        </button>

        <button
          type="button"
          className="sale-step active"
        >
          <span>Step 2:</span>
          Select Customer
          <b className="step-dot-green">●</b>
        </button>

        <button
          type="button"
          className="sale-step"
        >
          <span>Step 3:</span>
          Confirm Order & Pay
          <span>⊙</span>
        </button>

      </div>

      {/* CONTENT */}
      <div className="customer-layout">

        {/* LEFT */}
        <div className="customer-left">

          {/* PAYMENT MODE */}
          <div className="customer-box">

            <h3>Payment Mode Selection</h3>

            <div className="customer-box-body">

              <label>Payment Mode</label>

              <select>
                <option>--Select Payment Mode --</option>
                <option>Cash</option>
                <option>Bank Transfer</option>
                <option>Credit</option>
              </select>

            </div>

          </div>


          {/* CUSTOMER INFORMATION */}
          <div className="customer-box">

            <h3>Customer Information</h3>

            <div className="customer-fields">

              <div>
                <label>
                  Customer Phone <span>*</span>
                </label>

                <input
                  type="text"
                  placeholder="Customer Phone Number"
                />
              </div>


              <div>
                <label>
                  Customer Name <span>*</span>
                </label>

                <select>
                  <option>--Select Customer--</option>
                  <option>General Customer</option>
                  <option>Customer 1</option>
                  <option>Customer 2</option>
                </select>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT CART */}
        <CartDetail
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          onContinue={onContinue}
        />

      </div>

    </div>
  );
}


/* =========================================
   CART DETAIL
========================================= */

function CartDetail({
  cartProducts = [],
  setCartProducts,
  onContinue,
}) {

  return (
    <div className="customer-cart">

      <h3>Cart Detail</h3>


      {/* CART PRODUCT */}
      
      
              <div className="cart-products">

                {cartProducts.map((product) => (

                  <div
                    className="cart-product"
                    key={product.id}
                  >

                    <div className="cart-product-info">

                      <div className="cart-product-name">
                        {product.name}
                      </div>

                      <div className="cart-product-size">
                        {product.size}
                      </div>

                      <div className="cart-product-qty">
                        {product.quantity} X{" "}
                        {product.price.toLocaleString()}
                      </div>

                    </div>

                    <button className="cart-delete" onClick={() => {
                      setCartProducts(prev => prev.filter(p => p.id !== product.id || p.batch !== product.batch));
                    }}>
                      🗑
                    </button>

                    <div className="cart-product-total">
                       ≈ {" "}
                      {(
                        product.quantity *
                        product.price
                      ).toLocaleString()}
                    </div>

                  </div>

                ))}

              </div>


      {/* SUMMARY */}
      <div className="customer-cart-summary">

        <div>
          <span>Total Products</span>
          <b>7pcs</b>
        </div>

        <div>
          <span>COG</span>
          <b>Rs. 50,000</b>
        </div>

        <div>
          <span>Net Profit</span>
          <b className="profit">
            Rs. 12,500
          </b>
        </div>

        <div>
          <span>Net Total</span>
          <b className="total">
            Rs. 62,500
          </b>
        </div>

      </div>


      {/* PROCEED TO PAY */}
      <button
        type="button"
        className="proceed-pay"
        onClick={onContinue}
      >
        Proceed to Pay
      </button>

    </div>
  );
}