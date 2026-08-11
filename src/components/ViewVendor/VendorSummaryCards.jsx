import "./VendorSummaryCards.css";
import { FaShoppingCart } from "react-icons/fa";

export default function VendorSummaryCards() {
  return (
    <div className="vendor-summary">

      {/* Card 1 */}
      <div className="summary-card purchase-card">
        <div className="card-content">
          <p>Today Purchase</p>
          <h3>Rs. 53,659,748</h3>
        </div>

        <div className="card-icon blue">
          <FaShoppingCart />
        </div>
      </div>

      {/* Card 2 */}
      <div className="summary-card return-card">
        <div className="card-content">
          <p>Today Purchase Return</p>
          <h3>Rs. 53,659,748</h3>
        </div>

        <div className="card-icon purple">
          <FaShoppingCart />
        </div>
      </div>

      {/* Card 3 */}
      <div className="summary-card amount-card">
        <div className="card-content">
          <p>Remaining Amount</p>
          <h3>Rs. 53,659,748</h3>
        </div>

        <div className="card-icon orange">
          <FaShoppingCart />
        </div>
      </div>

      {/* Buttons */}
      <div className="vendor-buttons">

        <button className="pay-btn">
          Pay to Vendor
        </button>

        <button className="take-btn">
          Take From Vendor
        </button>

      </div>

    </div>
  );
}