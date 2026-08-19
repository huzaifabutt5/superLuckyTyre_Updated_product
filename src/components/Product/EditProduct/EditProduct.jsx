"use client";

import Link from "next/link";
import "./EditProduct.css";

export default function EditProduct() {
  return (
    <div className="edit-product-page">

      {/* Breadcrumb */}
      <div className="edit-product-breadcrumb">
        Tyre Shop &gt;{" "}
        <Link href="/product" className="breadcrumb-link">
          Product Management
        </Link>{" "}
        &gt; Edit Product
      </div>

      {/* Heading */}
      <h1 className="edit-product-title">
        Edit Product
      </h1>


      {/* Product Information */}
      <div className="edit-product-information-card">

        <div className="edit-product-card-title">
          Product Information
        </div>


        <div className="edit-product-form">

          {/* Brand Name */}
          <div className="edit-product-form-group">

            <label>
              Brand Name <span>*</span>
            </label>

            <input
              type="text"
              defaultValue="General"
              placeholder="Brand Name"
            />

          </div>


          {/* Pattern / Model */}
          <div className="edit-product-form-group">

            <label>
              Pattern/Model <span>*</span>
            </label>

            <input
              type="text"
              defaultValue="Euro Tycoon"
              placeholder="Pattern/Model"
            />

          </div>


          {/* Full Size Code */}
          <div className="edit-product-form-group">

            <label>
              Full Size Code <span>*</span>
            </label>

            <input
              type="text"
              defaultValue="195/65 R 15"
              placeholder="Full Size Code"
            />

          </div>


          {/* Rim Diameter */}
          <div className="edit-product-form-group">

            <label>
              Rim Diameter
            </label>

            <input
              type="text"
              defaultValue='15"'
              placeholder="Rim Diameter"
            />

          </div>


          {/* Low Stock Alert */}
          <div className="edit-product-form-group full-width">

            <label>
              Low Stock Alert <span>*</span>
            </label>

            <input
              type="number"
              defaultValue="0"
              placeholder="0"
            />

          </div>

        </div>

      </div>


      {/* Buttons */}
      <div className="edit-product-button-card">

        <Link
          href="/product"
          className="edit-cancel-product-btn"
        >
          Cancel
        </Link>

        <button
          type="button"
          className="update-product-btn"
        >
          Update Product
        </button>

      </div>

    </div>
  );
}