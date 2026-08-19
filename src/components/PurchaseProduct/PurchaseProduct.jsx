"use client";

import { useState } from "react";
import {
  FaCheckCircle,
  FaTrash,
  FaShoppingCart,
  FaUndo,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

import "./PurchaseProduct.css";


const products = [
  { id: 1, name: "Sporty Euro Racer", size: "205/55 R 16" },
  { id: 2, name: "Luxury Touring Pro", size: "225/60 R 16" },
  { id: 3, name: "All-Season Comfort", size: "195/70 R 14" },
  { id: 4, name: "Eco-Friendly Green Tyre", size: "185/65 R 15" },

  { id: 5, name: "Heavy Duty Workhorse", size: "215/75 R 15" },
  { id: 6, name: "Performance Grip Master", size: "245/40 R 18" },
  { id: 7, name: "Winter Snow Defender", size: "205/80 R 14" },
  { id: 8, name: "Rugged Off-Road Champion", size: "265/70 R 17" },

  { id: 9, name: "City Commuter Classic", size: "175/65 R 14" },
  { id: 10, name: "Premium Sport Touring", size: "225/55 R 17" },
  { id: 11, name: "Budget Friendly All-Rounder", size: "195/65 R 15" },
  { id: 12, name: "SUV Adventure Trail", size: "255/65 R 17" },

  { id: 13, name: "Ultra High-Performance", size: "275/30 R 20" },
  { id: 14, name: "Mud Terrain Warrior", size: "33x12.50 R 15" },
  { id: 15, name: "City Slicker Tyre", size: "185/60 R 14" },
  { id: 16, name: "Highway Cruiser Elite", size: "245/50 R 18" },

  { id: 17, name: "Dirt Road Explorer", size: "215/65 R 16" },
  { id: 18, name: "Sport Utility All-Weather", size: "225/70 R 15" },
  { id: 19, name: "Track Day Pro", size: "265/35 R 19" },
  { id: 20, name: "Compromise-Free Touring", size: "195/75 R 14" },

  { id: 21, name: "Stealth Performance Tyre", size: "255/40 R 17" },
  { id: 22, name: "Year-Round Dependability", size: "195/60 R 15" },
  { id: 23, name: "Luxury SUV Comfort", size: "235/55 R 19" },
  { id: 24, name: "Extreme Terrain Conqueror", size: "31x10.50 R 15" },

  { id: 25, name: "Eco-Touring Efficiency", size: "195/65 R 16" },
  { id: 26, name: "Cold Weather Specialist", size: "205/65 R 15" },
  { id: 27, name: "Compact City Tyre", size: "175/55 R 15" },
  { id: 28, name: "All-Weather Classic", size: "205/60 R 16" },

  { id: 29, name: "Track Ready Performance", size: "285/25 R 21" },
  { id: 30, name: "Family Van Comfort", size: "215/70 R 16" },
 
];


const vendors = [
  "Super Tyre Supplier",
  "Premium Wheel Traders",
  "Global Tyre House",
  "City Auto Suppliers",
];


export default function PurchaseProduct() {

  /* =========================================
     STATES
  ========================================= */

  const [currentStep, setCurrentStep] = useState(1);

  const [search, setSearch] = useState("");

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [cart, setCart] = useState([]);

  const [showProductModal, setShowProductModal] =
    useState(false);
    

  const [dotMfg, setDotMfg] = useState("");

  const [quantity, setQuantity] = useState("");

  const [unitPrice, setUnitPrice] = useState("");

  const [paymentMode, setPaymentMode] =
    useState("");

  const [vendor, setVendor] = useState("");

  const [transactionId, setTransactionId] =
    useState("");

  const [paidAmount, setPaidAmount] =
    useState("");

  const [showConfirmation, setShowConfirmation] =
    useState(false);


  /* =========================================
     SEARCH
  ========================================= */

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.size
        .toLowerCase()
        .includes(search.toLowerCase())
  );


  /* =========================================
     SELECT PRODUCT
  ========================================= */

  const selectProduct = (product) => {

    setSelectedProduct(product);

    setDotMfg("");
    setQuantity("");
    setUnitPrice("");

    setShowProductModal(true);
  };


  /* =========================================
     ADD TO CART
  ========================================= */

  const addToCart = () => {

    if (!selectedProduct) {
      return;
    }

    if (!dotMfg.trim()) {
      alert("Please enter DOT/MFG");
      return;
    }

    if (!quantity || Number(quantity) <= 0) {
      alert("Please enter quantity");
      return;
    }

    if (!unitPrice || Number(unitPrice) <= 0) {
      alert("Please enter unit price");
      return;
    }


    const newItem = {
      ...selectedProduct,

      dotMfg,

      quantity: Number(quantity),

      unitPrice: Number(unitPrice),
    };


    setCart((previousCart) => [
      ...previousCart,
      newItem,
    ]);


    setShowProductModal(false);

    setSelectedProduct(null);

    setDotMfg("");

    setQuantity("");

    setUnitPrice("");
  };


  /* =========================================
     REMOVE CART ITEM
  ========================================= */

  const removeFromCart = (index) => {

    setCart((previousCart) =>
      previousCart.filter(
        (_, itemIndex) =>
          itemIndex !== index
      )
    );
  };


  /* =========================================
     CART TOTAL
  ========================================= */

  const totalProducts = cart.reduce(
    (total, item) =>
      total + Number(item.quantity),
    0
  );


  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      Number(item.quantity) *
        Number(item.unitPrice),
    0
  );


  /* =========================================
     FORMAT PRICE
  ========================================= */

  const formatPrice = (price) => {
    return `Rs. ${Number(price).toLocaleString()}`;
  };


  /* =========================================
     NEXT STEP
  ========================================= */

  const continueStep = () => {

    if (cart.length === 0) {
      alert("Please add at least one product to cart.");
      return;
    }


    if (currentStep === 1) {

      setCurrentStep(2);

      return;
    }


    if (currentStep === 2) {

      if (!paymentMode) {
        alert("Please select payment mode.");
        return;
      }

      if (!vendor) {
        alert("Please select vendor.");
        return;
      }

      setCurrentStep(3);

      return;
    }


    if (currentStep === 3) {

      setShowConfirmation(true);
    }
  };


  /* =========================================
      CHANGE STEP BY CLICKING STEP BAR
  ========================================= */

  const changeStep = (step) => {

    if (step === 1) {
      setCurrentStep(1);
      return;
    }


    if (step === 2 && cart.length > 0) {
      setCurrentStep(2);
      return;
    }


    if (
      step === 3 &&
      cart.length > 0 &&
      paymentMode &&
      vendor
    ) {
      setCurrentStep(3);
    }
  };


  const step1Complete = currentStep > 1;
  const step2Complete = currentStep > 2;
  const step3Complete = showConfirmation;


  return (

    <div className="purchase-product-page">


      {/* =====================================
          TOP HEADER
      ===================================== */}

      <div className="purchase-page-header">

        <div>

          <div className="purchase-breadcrumb">
            Tyre Shop &gt;{" "}
            <Link href="/purchase" style={{ textDecoration: "none", color: "inherit" }}>
              Sale/Purchase Management
            </Link>{" "}
            &gt; Purchase
          </div>

          <h1>
            Purchase Product
          </h1>

        </div>


        <button
          className="purchase-return-btn"
          onClick={() => {
            window.location.href =
              "/purchase/purchase-return";
          }}
        >
          <FaUndo />

          Purchase Return
        </button>

      </div>



      {/* =====================================
          STEP BAR
      ===================================== */}

      <div className="purchase-steps">


        {/* STEP 1 */}

        <button
          className={
            step1Complete
              ? "purchase-step completed"
              : currentStep === 1
              ? "purchase-step active"
              : "purchase-step"
          }

          onClick={() => changeStep(1)}
        >

          <span>
            Step 1:
          </span>

          Select Product

          <FaCheckCircle />

        </button>



        {/* STEP 2 */}

        <button
          className={
            step2Complete
              ? "purchase-step completed"
              : currentStep === 2
              ? "purchase-step active"
              : "purchase-step"
          }

          onClick={() => changeStep(2)}
        >

          <span>
            Step 2:
          </span>

          Select Vendor

          <FaCheckCircle />

        </button>



        {/* STEP 3 */}

        <button
          className={
            step3Complete
              ? "purchase-step completed"
              : currentStep === 3
              ? "purchase-step active"
              : "purchase-step"
          }

          onClick={() => changeStep(3)}
        >

          <span>
            Step 3:
          </span>

          Confirm Order & Pay

          <FaCheckCircle />

        </button>

      </div>



      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="purchase-main-layout">


        {/* ===================================
            LEFT CONTENT
        =================================== */}

        <div className="purchase-left-content">


          {/* =================================
              STEP 1
          ================================= */}

          {currentStep === 1 && (

            <div className="purchase-section">

              <div className="purchase-section-title">
                All Products
              </div>


              {/* SEARCH */}

              <div className="product-toolbar">

               
        <div className="entries-section">
          <select defaultValue="10">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>

          <span>entries per page</span>
        </div>


                <div className="product-search">

                  <label>
                    Search:
                  </label>

                  <input
                    type="text"
                    placeholder="Search Product"
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />

                </div>

              </div>



              {/* PRODUCT CARDS */}

              <div className="product-card-grid">

                {filteredProducts.map(
                  (product) => (

                    <button
                      key={product.id}

                      className="product-card"

                      onClick={() =>
                        selectProduct(product)
                      }
                    >

                      <span className="product-card-name">
                        {product.name}
                      </span>

                      <span className="product-card-size">
                        {product.size}
                      </span>

                    </button>

                  )
                )}

              </div>

            </div>

          )}



          {/* =================================
              STEP 2
          ================================= */}

          {currentStep === 2 && (

            <>

              {/* PAYMENT MODE */}

              <div className="purchase-section">

                <div className="purchase-section-title">
                  Payment Mode Selection
                </div>


                <div className="single-form">

                  <label>
                    Payment Mode
                  </label>

                  <select
                    value={paymentMode}
                    onChange={(e) =>
                      setPaymentMode(
                        e.target.value
                      )
                    }
                  >

                    <option value="">
                      --Select Payment Mode--
                    </option>

                    <option value="Cash">
                      Cash
                    </option>

                    <option value="Bank Transfer">
                      Bank Transfer
                    </option>

                    <option value="Credit">
                      Credit
                    </option>

                  </select>

                </div>

              </div>



              {/* VENDOR INFORMATION */}

              <div className="purchase-section">

                <div className="purchase-section-title">
                  Vendor Information
                </div>


                <div className="single-form">

                  <label>
                    Vendor
                    <span>*</span>
                  </label>

                  <select
                    value={vendor}
                    onChange={(e) =>
                      setVendor(
                        e.target.value
                      )
                    }
                  >

                    <option value="">
                      --Select Vendor--
                    </option>

                    {vendors.map(
                      (vendorName) => (

                        <option
                          key={vendorName}
                          value={vendorName}
                        >
                          {vendorName}
                        </option>

                      )
                    )}

                  </select>

                </div>

              </div>

            </>

          )}



          {/* =================================
              STEP 3
          ================================= */}

          {currentStep === 3 && (

            <div className="purchase-section">

              <div className="purchase-section-title">
                Payment Information
              </div>


              <div className="payment-form-grid">


                <div className="payment-form-field full">

                  <label>
                    Net Total
                  </label>

                  <input
                    type="text"
                    readOnly
                    value={formatPrice(totalPrice)}
                  />

                </div>


                <div className="payment-form-field">

                  <label>
                    Payment Type
                    <span>*</span>
                  </label>

                  <input
                    type="text"
                    readOnly
                    value={paymentMode}
                  />

                </div>


                <div className="payment-form-field">

                  <label>
                    Transaction ID
                    <span>*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Transaction ID"
                    value={transactionId}
                    onChange={(e) =>
                      setTransactionId(
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="payment-form-field">

                  <label>
                    Paid Amount
                    <span>*</span>
                  </label>

                  <input
                    type="number"
                    placeholder="Paid Amount"
                    value={paidAmount}
                    onChange={(e) =>
                      setPaidAmount(
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="payment-form-field">

                  <label>
                    Remaining Amount
                    <span>*</span>
                  </label>

                  <input
                    type="text"
                    readOnly
                    value={
                      totalPrice -
                      Number(paidAmount || 0)
                    }
                  />

                </div>

              </div>

            </div>

          )}

        </div>



        {/* ===================================
            CART
        =================================== */}

        {cart.length > 0 && (

          <div className="cart-detail">


            {/* CART HEADER */}

            <div className="cart-title">

              <span>
                Cart Detail
              </span>

              <FaShoppingCart />

            </div>



            {/* CART ITEMS */}

            <div className="cart-items">

              {cart.map(
                (item, index) => (

                  <div
                    className="cart-item"
                    key={`${item.id}-${index}`}
                  >

                    <div className="cart-item-info">

                      <div className="cart-product-name">
                        {item.name}
                      </div>


                      <div className="cart-product-size">
                        {item.size}
                      </div>


                      <div className="cart-product-dot">

                        <span>
                          {item.dotMfg}
                        </span>

                        <span className="dot-badge">
                          DOT 2224
                        </span>

                      </div>


                      <div className="cart-product-meta">

                        <span>
                          {item.quantity} X{" "}
                          {formatPrice(
                            item.unitPrice
                          )}
                        </span>

                        <strong>
                          {formatPrice(
                            item.quantity *
                              item.unitPrice
                          )}
                        </strong>

                      </div>

                    </div>


                    <button
                      className="cart-delete-btn"

                      onClick={() =>
                        removeFromCart(index)
                      }
                    >

                      <FaTrash />

                    </button>

                  </div>

                )
              )}

            </div>



            {/* CART BOTTOM */}

            <div className="cart-bottom">

              <div className="cart-total-row">

                <span>
                  Total Products
                </span>

                <strong>
                  {totalProducts}pcs
                </strong>

              </div>


              <div className="cart-total-row">

                <span>
                  Net Total
                </span>

                <strong className="cart-blue-price">
                  {formatPrice(totalPrice)}
                </strong>

              </div>


              <button
                className="cart-continue-btn"
                onClick={continueStep}
              >

                {currentStep === 3
                  ? "Continue"
                  : "Continue"}

              </button>

            </div>

          </div>

        )}

      </div>



      {/* =====================================
          PRODUCT DETAILS MODAL
      ===================================== */}

      {showProductModal &&
        selectedProduct && (

          <div className="modal-overlay">

            <div className="product-modal">


              <div className="modal-header">

                <span>
                  Product Details
                </span>

                <button
                  onClick={() =>
                    setShowProductModal(false)
                  }
                >
                  <FaTimes />
                </button>

              </div>


              <div className="modal-product">

                <div>
                  {selectedProduct.name}
                </div>

                <span>
                  {selectedProduct.size}
                </span>

              </div>


              <div className="modal-form">


                <div className="modal-field full">

                  <label>
                    DOT/MFG
                    <span>*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="DOT/MFG"
                    value={dotMfg}
                    onChange={(e) =>
                      setDotMfg(
                        e.target.value
                      )
                    }
                  />

                </div>



                <div className="modal-field">

                  <label>
                    Quantity
                    <span>*</span>
                  </label>

                  <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(
                        e.target.value
                      )
                    }
                  />

                </div>



                <div className="modal-field">

                  <label>
                    Unit Price
                    <span>*</span>
                  </label>

                  <input
                    type="number"
                    placeholder="Unit Price"
                    value={unitPrice}
                    onChange={(e) =>
                      setUnitPrice(
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>



              <div className="modal-buttons">

                <button
                  className="modal-cancel"
                  onClick={() =>
                    setShowProductModal(false)
                  }
                >
                  Cancel
                </button>


                <button
                  className="modal-add"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        )}



      {/* =====================================
          CONFIRMATION POPUP
      ===================================== */}

     {showConfirmation && (
  <div className="confirmation-overlay">

    <div className="confirmation-popup">

      {/* GREEN CHECK ICON */}
      <div className="confirmation-check">
        <span>✓</span>
      </div>

      {/* TITLE */}
      <h2>Purchase Confirmed</h2>

      {/* DETAILS */}
      <div className="confirmation-details">

        <p>
          {totalProducts} Product, Total {totalProducts} pcs Purchased.
        </p>

        <p>
          Total Amount : <strong>{formatPrice(totalPrice)}</strong>
        </p>

        <p>
          Paid : <strong>{formatPrice(totalPrice)}</strong>
        </p>

        <p>
          Remaining : <strong>{formatPrice(totalPrice)}</strong>
        </p>

        <p className="invoice-number">
          Invoice ID# &nbsp;
          <strong>345678906</strong>
        </p>

      </div>

      {/* BUTTONS */}
      <div className="confirmation-buttons">

        <button
          className="again-purchase-btn"
          onClick={() => {
            setShowConfirmation(false);
            setCart([]);
            setCurrentStep(1);
          }}
        >
          Again Purchase
        </button>

        <button
          className="download-invoice-btn"
          onClick={() => {
            alert("Invoice downloaded");
          }}
        >
          Download Invoice
        </button>

      </div>

    </div>

  </div>
)}

    </div>
  );
}