
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./SaleProduct.css";
import ProductVariant from "./ProductVariant/ProductVariant";
import CustomerStep from "./CostumerStep/CostumerStep";
import ConfirmOrder from "./ConfirmOrder/ConfirmOrder";
import ConfirmPopup from "./ConfirmPopup/ConfirmPopup";

export default function SaleProduct() {
  const router = useRouter();
  const [showVariantModal, setShowVariantModal] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);


  const products = [
    {
      id: 1,
      name: "Sporty Euro Racer",
      size: "205/55 R16",
      price: "15,000",
    },
    {
      id: 2,
      name: "Luxury Touring Pro",
      size: "225/60 R16",
      price: "24,000",
    },
    {
      id: 3,
      name: "All-Season Comfort",
      size: "195/70 R14",
      price: "15,000",
    },
    {
      id: 4,
      name: "Eco-Friendly Green Tyre",
      size: "185/65 R15",
      price: "12,500",
    },
    {
      id: 5,
      name: "Heavy Duty Workhorse",
      size: "215/75 R15",
      price: "18,000",
    },
    {
      id: 6,
      name: "Performance Grip Master",
      size: "245/40 R18",
      price: "20,000",
    },
    {
      id: 7,
      name: "Winter Snow Defender",
      size: "195/80 R14",
      price: "16,000",
    },
    {
      id: 8,
      name: "Rugged Off-Road Champion",
      size: "265/70 R17",
      price: "22,000",
    },
    {
      id: 9,
      name: "City Commuter Classic",
      size: "175/65 R14",
      price: "13,000",
    },
    {
      id: 10,
      name: "Premium Sport Touring",
      size: "225/55 R17",
      price: "19,000",
    },
    {
      id: 11,
      name: "Budget Friendly All-Rounder",
      size: "195/65 R15",
      price: "14,000",
    },
    {
      id: 12,
      name: "SUV Adventure Trail",
      size: "255/65 R17",
      price: "25,000",
    },
    {
      id: 13,
      name: "Ultra High-Performance",
      size: "275/30 R20",
      price: "30,000",
    },
    {
      id: 14,
      name: "Mud Terrain Warrior",
      size: "33×12.50 R15",
      price: "27,000",
    },
    {
      id: 15,
      name: "City Slicker Tyre",
      size: "185/60 R14",
      price: "13,500",
    },
    {
      id: 16,
      name: "Highway Cruiser Elite",
      size: "245/50 R18",
      price: "23,000",
    },
    {
      id: 17,
      name: "Dirt Road Explorer",
      size: "215/65 R16",
      price: "18,500",
    },
    {
      id: 18,
      name: "Sport Utility All-Weather",
      size: "225/70 R18",
      price: "21,000",
    },
    {
      id: 19,
      name: "Track Day Pro",
      size: "265/35 R19",
      price: "28,000",
    },
    {
      id: 20,
      name: "Compromise-Free Touring",
      size: "195/75 R14",
      price: "17,000",
    },
    {
      id: 21,
      name: "All-Terrain Explorer",
      size: "265/75 R16",
      price: "24,000",
    },
    {
      id: 22,
      name: "Stealth Performance Tyre",
      size: "255/40 R17",
      price: "20,000",
    },
    {
      id: 23,
      name: "Year-Round Dependability",
      size: "195/60 R15",
      price: "15,000",
    },
    {
      id: 24,
      name: "Luxury SUV Comfort",
      size: "235/55 R19",
      price: "26,000",
    },
    {
      id: 25,
      name: "Extreme Terrain Conqueror",
      size: "31×10.50 R15",
      price: "23,000",
    },
    {
      id: 26,
      name: "Eco-Touring Efficiency",
      size: "205/65 R15",
      price: "16,000",
    },
    {
      id: 27,
      name: "Cold Weather Specialist",
      size: "205/65 R15",
      price: "18,000",
    },
    {
      id: 28,
      name: "Compact City Tyre",
      size: "175/55 R15",
      price: "14,000",
    },
    {
      id: 29,
      name: "All-Weather Classic",
      size: "205/60 R16",
      price: "17,000",
    },
    {
      id: 30,
      name: "Track Ready Performance",
      size: "295/25 R21",
      price: "32,000",
    },
    {
      id: 31,
      name: "Family Van Comfort",
      size: "215/70 R16",
      price: "19,000",
    },
    {
      id: 32,
      name: "Petrolhead's Choice",
      size: "255/35 R19",
      price: "25,000",
    },
  ];

  // Product clicked
  const handleProductClick = (product) => {
    setShowVariantModal(true);
  };

  // Apply to order from popup
  const handleApplyOrder = () => {
    // Demo products for Cart Detail
    const selectedProducts = [
      {
        id: 1,
        name: "All-Season Comfort",
        size: "195/70 R14",
        quantity: 1,
        price: 15000,
      },
      {
        id: 2,
        name: "Winter Performance",
        size: "205/65 R15",
        quantity: 1,
        price: 24000,
      },
      {
        id: 3,
        name: "Summer Grip",
        size: "225/60 R16",
        quantity: 1,
        price: 15000,
      },
      {
        id: 4,
        name: "Off-Road Adventure",
        size: "245/75 R17",
        quantity: 1,
        price: 8500,
      },
    ];

    setCartProducts(selectedProducts);
    setShowVariantModal(false);
  };

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
  <div className="sale-product-page">

    {currentStep === 3 ? (

      <ConfirmOrder
        cartProducts={cartProducts}
        onConfirm={() => setShowConfirmPopup(true)}
      />

    ) : currentStep === 2 ? (

      <CustomerStep
        cartProducts={cartProducts}
        onBack={() => setCurrentStep(1)}
        onContinue={() => setCurrentStep(3)}
      />

    ) : (

      // ==============================
      // STEP 1 - YOUR EXISTING CONTENT
      // ==============================

      <>
        {/* Breadcrumb */}
        <div className="sale-breadcrumb">
          Tyre Shop &gt;{" "}
          <Link href="/sale" style={{ textDecoration: "none", color: "inherit" }}>
            Sale/Purchase Management
          </Link>{" "}
          &gt; Sale
        </div>

        {/* Heading */}
        <div className="sale-heading-row">
          <h1>Sale Product</h1>

          <button
            className="sale-return-btn"
            type="button"
            onClick={() => router.push("/sale/sale-return")}
          >
            ↶ Sale Return
          </button>
        </div>

        {/* STEP BAR */}
        <div className="sale-steps">

          <button
            className="sale-step active"
            onClick={() => setShowVariantModal(true)}
          >
            <span>Step 1:</span>
            Select Product
            <span>◉</span>
          </button>

          <button
            className="sale-step"
            type="button"
          >
            <span>Step 2:</span>
            Select Customer
            <span>⊙</span>
          </button>

          <button
            className="sale-step"
            type="button"
          >
            <span>Step 3:</span>
            Confirm Order & Pay
            <span>⊙</span>
          </button>

        </div>


        {/* ==============================
            STEP 1 MAIN CONTENT
        ============================== */}

        <div
          className={`sale-main-content${
            cartProducts.length > 0 ? " has-cart" : ""
          }`}
        >

          {/* LEFT PRODUCT SECTION */}
          <div className="all-products-card">

            <h3>All Products</h3>

            <div className="product-toolbar">

              <div className="entries-box">
              
            <select defaultValue="10">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>

                <span>entries per page</span>
              </div> 
           

         

              <div className="product-search">
                <label>Search:</label>

                <input
                  type="text"
                  placeholder="Search Product"
                />
              </div>

            </div>


            {/* PRODUCT GRID */}

            <div className="product-grid">

              {products.map((product) => (

                <button
                  key={product.id}
                  className="product-item"
                  onClick={() =>
                    handleProductClick(product)
                  }
                >

                  <span className="product-name">
                    {product.name}
                  </span>

                  <span className="product-size">
                    {product.size}
                  </span>

                </button>

              ))}

            </div>

          </div>


          {/* ==============================
              RIGHT CART DETAIL
          ============================== */}

          {cartProducts.length > 0 && (

            <div className="cart-detail-card">

              <h3>Cart Detail</h3>

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

                    <button className="cart-delete">
                      🗑
                    </button>

                    <div className="cart-product-total">
                      Rs.{" "}
                      {(
                        product.quantity *
                        product.price
                      ).toLocaleString()}
                    </div>

                  </div>

                ))}

              </div>


              {/* CART SUMMARY */}

              <div className="cart-summary">

                <div className="summary-row">
                  <span>Total Products</span>
                  <span>{totalProducts}pcs</span>
                </div>

                <div className="summary-row">
                  <span>COG</span>
                  <span>
                    Rs. {totalCOG.toLocaleString()}
                  </span>
                </div>

                <div className="summary-row profit">
                  <span>Net Profit</span>
                  <span>
                    Rs. {netProfit.toLocaleString()}
                  </span>
                </div>

                <div className="summary-row total">
                  <span>Net Total</span>
                  <span>
                    Rs. {netTotal.toLocaleString()}
                  </span>
                </div>


                {/* IMPORTANT */}
                {/* Continue changes Step 1 -> Step 2 */}

                <button
                  className="continue-btn"
                  type="button"
                  onClick={() => setCurrentStep(2)}
                >
                  Continue
                </button>

              </div>

            </div>

          )}

        </div>


        {/* ==============================
            PRODUCT VARIANT POPUP
        ============================== */}

        {showVariantModal && (

          <ProductVariant
            onClose={() =>
              setShowVariantModal(false)
            }
            onApply={handleApplyOrder}
          />

        )}

      </>

    )}

    {showConfirmPopup && (
      <ConfirmPopup
        onClose={() =>
          setShowConfirmPopup(false)
        }
        onAgainPurchase={() => {
          setShowConfirmPopup(false);
          setCurrentStep(1);
          setCartProducts([]);
        }}
      />
    )}

  </div>
);
}