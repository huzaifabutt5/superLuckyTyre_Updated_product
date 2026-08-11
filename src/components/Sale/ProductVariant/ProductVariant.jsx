"use client";

import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import "./ProductVariant.css";

const variants = [
  {
    dot: "DOT 2224",
    batch: "Batch ID# 16287",
    code: "205/55 R 16",
    stock: "18pcs",
    cog: "Rs. 1500",
    quantity: null,
  },
  {
    dot: "DOT 2224",
    batch: "Batch ID# 16287",
    code: "205/55 R 16",
    stock: "18pcs",
    cog: "Rs. 1300",
    quantity: 1,
  },
  {
    dot: "DOT 2224",
    batch: "Batch ID# 16287",
    code: "205/55 R 16",
    stock: "18pcs",
    cog: "Rs. 1200",
    quantity: null,
  },
  {
    dot: "DOT 2224",
    batch: "Batch ID# 16287",
    code: "205/55 R 16",
    stock: "18pcs",
    cog: "Rs. 1200",
    quantity: null,
  },
];

export default function ProductVariant({ onClose , onApply}) {
  return (
    <div className="variant-overlay">

      <div className="variant-modal">

        {/* Header */}
        <div className="variant-header">
          <h2>Select Product Variant</h2>

          <button
            type="button"
            className="variant-close"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>


        {/* Search */}
        <div className="variant-search-wrapper">

          <input
            type="text"
            placeholder="Search DOT,Vendor or Batch ID#"
          />

        </div>


        {/* Variants */}
        <div className="variant-list">

          {variants.map((variant, index) => (
            <div
              className="variant-item"
              key={index}
            >

              {/* Product top row */}
              <div className="variant-top">

                <div className="variant-product-name">
                  Sporty Euro Racer

                  <span className="dot-badge">
                    {variant.dot}
                  </span>
                </div>

                <span className="batch-badge">
                  {variant.batch}
                </span>

              </div>


              {/* Product information */}
              <div className="variant-info">

                Code: {variant.code}
                <span>Stock: {variant.stock}</span>
                <span>COG: {variant.cog}</span>

              </div>


              {/* Bottom row */}
              <div className="variant-bottom">

                <div className="selling-price">

                  <span>
                    Selling Price
                  </span>

                  <input
                    type="text"
                    placeholder="Selling Price"
                  />

                </div>


                {variant.quantity ? (

                  <div className="quantity-control">

                    <button type="button">
                      <FaMinus />
                    </button>

                    <span>
                      {variant.quantity}
                    </span>

                    <button type="button">
                      <FaPlus />
                    </button>

                  </div>

                ) : (

                  <button
                    type="button"
                    className="add-cart-btn"
                  >
                    <FaPlus />
                    Add to Cart
                  </button>

                )}

              </div>

            </div>
          ))}

        </div>


        {/* Footer */}
        <div className="variant-footer">

          <button
            type="button"
            className="variant-cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className="apply-order-btn"
            onClick={onApply}
          >
            Apply to Order
          </button>

        </div>

      </div>

    </div>
  );
}