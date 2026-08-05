import "./dashboard.css";
import { BsCalendar3 } from "react-icons/bs";
import {
  FaShoppingCart,
  FaMoneyBillWave,
  FaChartLine,
  FaWallet,
  FaDollarSign,
} from "react-icons/fa";

export default function Dashboard() {
  return (
    <div>
      <div className="dashboard-header">
        <div className="header-left">
          <p className="breadcrumb">
            Tyre Shop <span>Dashboard</span>
          </p>
          <h1>Dashboard</h1>
        </div>

        <div className="header-right">
          <button className="date-btn">
            <BsCalendar3 />
            <span>Jul 12,2026 - Aug 12,2026</span>
          </button>
        </div>
      </div>

      <div className="stats-wrapper">
        <div className="stats-grid">
          <div className="stat-card blue">
            <div>
              <p>Net Sale</p>
              <h3>Rs. 53,659,748</h3>
            </div>
            <div className="icon-box">
              <FaShoppingCart />
            </div>
          </div>

          <div className="stat-card sky">
            <div>
              <p>Total COG + Sale</p>
              <h3>Rs. 53,659,748</h3>
            </div>
            <div className="icon-box">
              <FaChartLine />
            </div>
          </div>

          <div className="stat-card purple">
            <div>
              <p>Net Purchase</p>
              <h3>Rs. 53,659,748</h3>
            </div>
            <div className="icon-box">
              <FaWallet />
            </div>
          </div>

          <div className="stat-card orange">
            <div>
              <p>Overall Expenses</p>
              <h3>Rs. 53,659,748</h3>
            </div>
            <div className="icon-box">
              <FaMoneyBillWave />
            </div>
          </div>

          <div className="stat-card green">
            <div>
              <p>Net Profit</p>
              <h3>Rs. 53,659,748</h3>
            </div>
            <div className="icon-box">
              <FaDollarSign />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
