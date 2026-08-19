"use client";

import { useState } from "react";
import {
  FaEdit,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";

import "./PurchaseReturn.css";

const productsData = [
  {
    id: 1,
    name: "All-Season Comfort",
    size: "195/70 R 14",
    price: 5000,
    quantity: 3,
  },
  {
    id: 2,
    name: "Winter Performance",
    size: "205/65 R 15",
    price: 6000,
    quantity: 4,
  },
  {
    id: 3,
    name: "Summer Grip",
    size: "225/60 R 16",
    price: 7500,
    quantity: 2,
  },
  {
    id: 4,
    name: "Off-Road Adventure",
    size: "245/75 R 17",
    price: 8500,
    quantity: 1,
  },
];

export default function PurchaseReturn() {
  const [invoiceId, setInvoiceId] = useState("");
  const [invoiceLoaded, setInvoiceLoaded] = useState(false);

  const [products, setProducts] = useState(productsData);

  const [editingId, setEditingId] = useState(null);

  const [returnQuantities, setReturnQuantities] = useState({});

  const [returnAmount, setReturnAmount] = useState(0);

  const handleGetInvoice = () => {
    if (!invoiceId.trim()) {
      return;
    }

    setInvoiceLoaded(true);
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleQuantityChange = (id, value) => {
    const product = products.find((item) => item.id === id);

    if (!product) return;

    let quantity = Number(value);

    if (quantity < 0) {
      quantity = 0;
    }

    if (quantity > product.quantity) {
      quantity = product.quantity;
    }

    setReturnQuantities((prev) => ({
      ...prev,
      [id]: quantity,
    }));

    setEditingId(null);
  };

  const calculateReturnAmount = () => {
    let total = 0;

    products.forEach((product) => {
      const returnQty = returnQuantities[product.id] || 0;

      total += returnQty * product.price;
    });

    return total;
  };

  const totalReturnAmount = calculateReturnAmount();

  const hasReturn = totalReturnAmount > 0;

  return (
    <div className="purchase-return-page">

      {/* Breadcrumb */}
      <div className="purchase-return-breadcrumb">
        <Link href="/" className="breadcrumb-link">Tyre Shop</Link>
        <FaChevronRight />
        <Link href="/purchase" style={{ textDecoration: "none", color: "inherit" }}>Sale/Purchase Management</Link>
        <FaChevronRight />
        <strong>Purchase Return</strong>
      </div>

      {/* Page Title */}
      <h1 className="purchase-return-title">
        Purchase Return
      </h1>

      {/* ================= ORDER INFORMATION ================= */}
      <section className="return-card order-card">

        <div className="return-card-header">
          Order Information
        </div>

        <div className="return-card-body">

          <label className="return-label">
            Invoice ID#
            <span>*</span>
          </label>

          <div className="invoice-row">

            <input
              type="text"
              value={invoiceId}
              onChange={(e) => setInvoiceId(e.target.value)}
              placeholder="Enter Invoice ID#"
              className="invoice-input"
            />

            <button
              type="button"
              className="get-invoice-btn"
              onClick={handleGetInvoice}
            >
              Get Invoice
            </button>

          </div>

        </div>
      </section>

      {/* ================= PRODUCT DETAIL ================= */}
      {invoiceLoaded && (
        <>
          <section className="return-card product-card">

            <div className="return-card-header">
              Product Detail
            </div>

            <div className="product-list">

              {products.map((product) => {
                const returnedQty =
                  returnQuantities[product.id] || 0;

                const remainingQty =
                  product.quantity - returnedQty;

                const productReturnAmount =
                  returnedQty * product.price;

                return (
                  <div
                    className="product-row"
                    key={product.id}
                  >

                    <div className="product-left">

                      <div className="product-name">

                        {product.name}

                        {returnedQty > 0 && (
                          <span className="returned-quantity">
                            -{returnedQty}
                          </span>
                        )}

                      </div>

                      <div className="product-size">
                        {product.size}
                      </div>

                      <div className="product-quantity">
                        {remainingQty} X {product.price.toLocaleString()}
                      </div>

                      {editingId === product.id && (
                        <div className="edit-quantity-box">

                          <input
                            type="number"
                            min="0"
                            max={product.quantity}
                            autoFocus
                            defaultValue={returnedQty}
                            onBlur={(e) =>
                              handleQuantityChange(
                                product.id,
                                e.target.value
                              )
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleQuantityChange(
                                  product.id,
                                  e.target.value
                                );
                              }
                            }}
                          />

                          <span>
                            Return Qty
                          </span>

                        </div>
                      )}

                    </div>

                    <div className="product-right">

                      <button
                        type="button"
                        className="product-edit-btn"
                        onClick={() =>
                          handleEdit(product.id)
                        }
                      >
                        <FaEdit />
                      </button>

                      <div className="product-price">
                        ={" "}
                        {productReturnAmount > 0
                          ? productReturnAmount.toLocaleString()
                          : (
                              product.quantity *
                              product.price
                            ).toLocaleString()
                        }
                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </section>

          {/* ================= PAYMENT INFO ================= */}
          <section className="return-card payment-card">

            <div className="return-card-header">
              Payment Info
            </div>

            <div className="payment-body">

              <div className="payment-row">

                <div className="payment-field">

                  <label>
                    Return Quantity
                  </label>

                  <input
                    type="text"
                    readOnly
                    value={
                      hasReturn
                        ? Object.values(returnQuantities).reduce(
                            (sum, qty) => sum + qty,
                            0
                          )
                        : ""
                    }
                    placeholder="Returning Quantity (Auto Calculate)"
                  />

                </div>

                <div className="payment-field">

                  <label>
                    Returning Amount
                  </label>

                  <input
                    type="text"
                    readOnly
                    value={
                      hasReturn
                        ? totalReturnAmount.toLocaleString()
                        : ""
                    }
                    placeholder="Returning Amount (Auto Calculated)"
                  />

                </div>

              </div>

              <div className="payment-field deducted-field">

                <label>
                  Deducted Profit
                </label>

                <input
                  type="text"
                  readOnly
                  placeholder="Returning Amount (Auto Calculated)"
                />

              </div>

            </div>

          </section>

          {/* ================= BOTTOM BUTTONS ================= */}
          <div className="return-actions">

            <button
              type="button"
              className="cancel-btn"
            >
              Cancel
            </button>

            <button
              type="button"
              className={`return-only-btn ${
                hasReturn ? "active" : ""
              }`}
              disabled={!hasReturn}
            >
              Return Only
            </button>

            <button
              type="button"
              className={`payback-btn ${
                hasReturn ? "active" : ""
              }`}
              disabled={!hasReturn}
            >
              Return &amp; Payback
            </button>

          </div>
        </>
      )}

    </div>
  );
}