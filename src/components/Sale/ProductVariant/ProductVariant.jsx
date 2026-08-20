"use client";

import { useState } from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import "./ProductVariant.css";

export default function ProductVariant({ product, onClose, onApply }) {
  const [selectedItems, setSelectedItems] = useState({});

  const variants = [
    {
      dot: "DOT 2224",
      batch: "Batch ID# 16287",
      code: "205/55 R 16",
      stock: "18pcs",
      cog: 1500,
    },
    {
      dot: "DOT 2224",
      batch: "Batch ID# 16288",
      code: "205/55 R 16",
      stock: "12pcs",
      cog: 1300,
    },
    {
      dot: "DOT 2224",
      batch: "Batch ID# 16289",
      code: "205/55 R 16",
      stock: "8pcs",
      cog: 1200,
    },
    {
      dot: "DOT 2225",
      batch: "Batch ID# 16300",
      code: "205/55 R 16",
      stock: "20pcs",
      cog: 1400,
    },
  ];

  const handleSellingPriceChange = (batch, value) => {
    setSelectedItems((prev) => ({
      ...prev,
      [batch]: {
        ...prev[batch],
        sellingPrice: value,
      },
    }));
  };

  const handleAddToCart = (batch) => {
    const variant = variants.find((v) => v.batch === batch);
    if (!variant) return;

    const sellingPrice = selectedItems[batch]?.sellingPrice;
    if (!sellingPrice || sellingPrice.trim() === "") {
      alert("Please enter a selling price");
      return;
    }

    const numSellingPrice = parseInt(sellingPrice.replace(/\D/g, "")) || 0;
    if (numSellingPrice < variant.cog) {
      alert(`Selling price cannot be less than COG (Rs. ${variant.cog})`);
      return;
    }

    setSelectedItems((prev) => ({
      ...prev,
      [batch]: {
        ...prev[batch],
        quantity: 1,
        sellingPrice: sellingPrice,
      },
    }));
  };

  const handleQuantityChange = (batch, delta) => {
    setSelectedItems((prev) => {
      const current = prev[batch]?.quantity || 1;
      const newQuantity = Math.max(1, current + delta);
      return {
        ...prev,
        [batch]: {
          ...prev[batch],
          quantity: newQuantity,
        },
      };
    });
  };

  const handleApply = () => {
    const invalidItem = variants.find((v) => {
      const item = selectedItems[v.batch];
      if (!item || item.quantity <= 0) return false;
      const price = parseInt(item.sellingPrice.replace(/\D/g, "")) || 0;
      return price < v.cog;
    });

    if (invalidItem) {
      alert(`Selling price cannot be less than COG for ${invalidItem.batch}`);
      return;
    }

    const cartItems = variants
      .filter((v) => selectedItems[v.batch]?.quantity > 0)
      .map((v) => ({
        id: v.batch,
        name: product?.name || "Product",
        size: v.code,
        quantity: selectedItems[v.batch].quantity,
        price: parseInt(selectedItems[v.batch].sellingPrice.replace(/\D/g, "")) || v.cog,
        cog: v.cog,
        batch: v.batch,
        dot: v.dot,
      }));

    onApply(cartItems);
  };

  const isInCart = (batch) => {
    return selectedItems[batch]?.quantity > 0;
  };

  return (
    <div className="variant-overlay">
      <div className="variant-modal">
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

        <div className="variant-search-wrapper">
          <input
            type="text"
            placeholder="Search DOT, Vendor or Batch ID#"
          />
        </div>

        <div className="variant-list">
          {variants.map((variant, index) => (
            <div className="variant-item" key={variant.batch || index}>
              <div className="variant-top">
                <div className="variant-product-name">
                  {product?.name || "Product"}
                  <span className="dot-badge">{variant.dot}</span>
                </div>
                <span className="batch-badge">{variant.batch}</span>
              </div>

              <div className="variant-info">
                Code: {variant.code}
                <span>Stock: {variant.stock}</span>
                <span>COG: Rs. {variant.cog}</span>
              </div>

              <div className="variant-bottom">
                <div className="selling-price">
                  <span>Selling Price</span>
                  <input
                    type="text"
                    placeholder="Selling Price"
                    value={selectedItems[variant.batch]?.sellingPrice || ""}
                    onChange={(e) =>
                      handleSellingPriceChange(variant.batch, e.target.value)
                    }
                  />
                </div>

                {isInCart(variant.batch) ? (
                  <div className="quantity-control">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(variant.batch, -1)}
                    >
                      <FaMinus />
                    </button>
                    <span>{selectedItems[variant.batch].quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(variant.batch, 1)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="add-cart-btn"
                    onClick={() => handleAddToCart(variant.batch)}
                  >
                    <FaPlus />
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

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
            onClick={handleApply}
          >
            Apply to Order
          </button>
        </div>
      </div>
    </div>
  );
}
