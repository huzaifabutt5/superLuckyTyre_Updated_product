"use client";

import { useState } from "react";
import {
  FaRedo,
  FaCheckSquare,
} from "react-icons/fa";
import Link from "next/link";

import "./SaleReturn.css";


const products = [
  {
    id: 1,
    name: "All-Season Comfort",
    size: "195/70 R 14",
    quantity: 3,
    unitPrice: 5000,
  },
  {
    id: 2,
    name: "Winter Performance",
    size: "205/65 R 15",
    quantity: 4,
    unitPrice: 6000,
  },
  {
    id: 3,
    name: "Summer Grip",
    size: "225/60 R 16",
    quantity: 2,
    unitPrice: 7500,
  },
  {
    id: 4,
    name: "Off-Road Adventure",
    size: "245/75 R 17",
    quantity: 1,
    unitPrice: 8500,
  },
];


export default function SaleReturn() {

  const [invoiceId, setInvoiceId] = useState("");

  const [invoiceLoaded, setInvoiceLoaded] = useState(false);

  const [returnedProducts, setReturnedProducts] = useState([]);


  /* =========================================
     GET INVOICE
  ========================================= */

  const handleGetInvoice = () => {

    if (!invoiceId.trim()) {
      alert("Please enter Invoice ID");
      return;
    }

    setInvoiceLoaded(true);

    setReturnedProducts([]);
  };


  /* =========================================
     RETURN PRODUCT
  ========================================= */

  const handleReturnProduct = (product) => {

    const alreadyReturned =
      returnedProducts.some(
        (item) => item.id === product.id
      );

    if (alreadyReturned) {
      return;
    }

    setReturnedProducts([
      ...returnedProducts,
      product,
    ]);
  };


  /* =========================================
     REMOVE RETURN
  ========================================= */

  const handleRemoveReturn = (productId) => {

    setReturnedProducts(
      returnedProducts.filter(
        (item) => item.id !== productId
      )
    );
  };


  /* =========================================
     TOTAL RETURN QUANTITY
  ========================================= */

  const totalReturnQuantity =
    returnedProducts.reduce(
      (total, product) =>
        total + product.quantity,
      0
    );


  /* =========================================
     TOTAL RETURN AMOUNT
  ========================================= */

  const totalReturnAmount =
    returnedProducts.reduce(
      (total, product) =>
        total +
        product.quantity *
          product.unitPrice,
      0
    );


  return (

    <div className="sale-return-page">


      {/* =====================================
          HEADER
      ===================================== */}

      <div className="return-header">

        <div>

          <div className="return-breadcrumb">
            Tyre Shop &gt;{" "}
            <Link href="/sale" style={{ textDecoration: "none", color: "inherit" }}>
              Sale/Purchase Management
            </Link>{" "}
            &gt; Sale Return
          </div>

          <h1>
            Sale Return
          </h1>

        </div>


        {invoiceLoaded && (

          <button
            className="return-product-top-btn"
          >
            <FaRedo />

            Return Product
          </button>

        )}

      </div>



      {/* =====================================
          ORDER INFORMATION
      ===================================== */}

      <div className="return-section">

        <div className="section-title">
          Order Information
        </div>


        <div className="invoice-row">

          <div className="invoice-input-box">

            <label>
              Invoice ID
              <span>*</span>
            </label>


            <input
              type="text"
              placeholder="Enter Invoice ID"
              value={invoiceId}
              onChange={(e) =>
                setInvoiceId(e.target.value)
              }
            />

          </div>


          <button
            className="get-invoice-btn"
            onClick={handleGetInvoice}
          >
            Get Invoice
          </button>

        </div>

      </div>



      {/* =====================================
          PRODUCT DETAIL
      ===================================== */}

      {invoiceLoaded && (

        <div className="return-section">

          <div className="section-title">
            Product Detail
          </div>


          <div className="return-product-list">

            {products.map((product) => {

              const alreadyReturned =
                returnedProducts.some(
                  (item) =>
                    item.id === product.id
                );


              const productTotal =
                product.quantity *
                product.unitPrice;


              return (

                <div
                  className="return-product-row"
                  key={product.id}
                >


                  {/* LEFT */}

                  <div className="return-product-info">

                    <div className="return-product-name">
                      {product.name}
                    </div>


                    <div className="return-product-size">
                      {product.size}
                    </div>


                    <div className="return-product-quantity">
                      {product.quantity} X{" "}
                      {product.unitPrice.toLocaleString()}
                    </div>

                  </div>



                  {/* RIGHT */}

                  <div className="return-product-right">


                    <button
                      className={
                        alreadyReturned
                          ? "product-return-icon returned"
                          : "product-return-icon"
                      }

                      onClick={() => {

                        if (
                          alreadyReturned
                        ) {

                          handleRemoveReturn(
                            product.id
                          );

                        } else {

                          handleReturnProduct(
                            product
                          );

                        }

                      }}
                    >

                      <FaCheckSquare />

                    </button>


                    <div className="return-product-total">

                      Rs.{" "}
                      {productTotal.toLocaleString()}

                    </div>

                  </div>


                </div>

              );

            })}

          </div>

        </div>

      )}



      {/* =====================================
          PAYMENT INFO
      ===================================== */}

      {invoiceLoaded && (

        <div className="return-section">

          <div className="section-title">
            Payment Info
          </div>


          <div className="payment-grid">


            {/* RETURN QUANTITY */}

            <div className="payment-field">

              <label>
                Return Quantity
              </label>

              <input
                type="text"
                readOnly
                value={
                  totalReturnQuantity
                    ? `${totalReturnQuantity} pcs`
                    : ""
                }

                placeholder="Returning Quantity (Auto Calculated)"
              />

            </div>



            {/* RETURNING AMOUNT */}

            <div className="payment-field">

              <label>
                Returning Amount
              </label>

              <input
                type="text"
                readOnly
                value={
                  totalReturnAmount
                    ? `Rs. ${totalReturnAmount.toLocaleString()}`
                    : ""
                }

                placeholder="Returning Amount (Auto Calculated)"
              />

            </div>



            {/* DEDUCTED PROFIT */}

            <div className="payment-field full">

              <label>
                Deducted Profit
              </label>

              <input
                type="text"
                placeholder="Returning Amount (Auto Calculated)"
              />

            </div>



            
          </div>



          {/* =================================
              BOTTOM BUTTONS
          ================================= */}

          <div className="return-bottom-buttons">

            <button
              className="cancel-return-btn"
            >
              Cancel
            </button>


            <button
              className="return-only-btn"
              disabled={
                returnedProducts.length === 0
              }
            >
              Return Only
            </button>


            <button
              className="return-payback-btn"
              disabled={
                returnedProducts.length === 0
              }
            >
              Return & Payback
            </button>

          </div>

        </div>

      )}

    </div>

  );

}
