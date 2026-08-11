"use client";

import Link from "next/link";
import "./AddProduct.css";

export default function AddProduct() {
  return (
    <div className="add-product-page">

      {/* Breadcrumb */}
      <div className="add-product-breadcrumb">
        Tyre Shop &gt; Product Management &gt; Add New Product
      </div>

      {/* Page Heading */}
      <h1 className="add-product-title">
        Add New Product
      </h1>


      {/* Product Information Card */}
      <div className="product-information-card">

        <div className="product-card-title">
          Product Information
        </div>


        <div className="product-form">

          {/* Brand Name */}
          <div className="product-form-group">

            <label>
              Brand Name <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Brand Name"
            />

          </div>


          {/* Pattern / Model */}
          <div className="product-form-group">

            <label>
              Pattern/Model <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Pattern/Model"
            />

          </div>


          {/* Full Size Code */}
          <div className="product-form-group">

            <label>
              Full Size Code <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Full Size Code"
            />

          </div>


          {/* Rim Diameter */}
          <div className="product-form-group">

            <label>
              Rim Diameter
            </label>

            <input
              type="text"
              placeholder="Rim Diameter"
            />

          </div>


          {/* Low Stock Alert */}
          <div className="product-form-group full-width">

            <label>
              Low Stock Alert <span>*</span>
            </label>

            <input
              type="number"
              placeholder="0"
              defaultValue="0"
            />

          </div>

        </div>

      </div>


      {/* Buttons Card */}
      <div className="product-button-card">

        <Link
          href="/product"
          className="cancel-product-btn"
        >
          Cancel
        </Link>

        <button
          type="button"
          className="save-product-btn"
        >
          Add New Product
        </button>

      </div>

    </div>
  );
}