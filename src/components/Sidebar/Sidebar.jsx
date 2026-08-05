"use client";

import "./Sidebar.css";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi2";
import {
  FiGrid,
  FiHome,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* =======================
          LOGO
      ======================== */}

      <div className="sidebar-logo">

        <Image
          src="/images/logo.png"
          alt="Logo"
          width={45}
          height={45}
        />

        <div className="logo-text">
          <h2>Super Lucky Tyre</h2>
        </div>

      </div>

      {/* =======================
          MENU
      ======================== */}

      <div className="sidebar-menu">

        {/* Dashboard */}

        <Link href="/dashboard" className="menu-link active">

           <HiOutlineHome className="menu-icon" />

          <span>Dashboard</span>

        </Link>


        {/* Vendor */}

        <h5 className="menu-heading">
          VENDOR MANAGEMENT
        </h5>

        <Link href="/vendor" className="menu-link">

            <HiOutlineHome className="menu-icon" />

          <span>Manage Vendor</span>

        </Link>


        {/* Customer */}

        <h5 className="menu-heading">
          CUSTOMER MANAGEMENT
        </h5>

        <Link href="/customer" className="menu-link">

             <HiOutlineHome className="menu-icon" />

          <span>Manage Customer</span>

        </Link>


        {/* Product */}

        <h5 className="menu-heading">
          PRODUCT MANAGEMENT
        </h5>

        <Link href="/product" className="menu-link">

       <HiOutlineHome className="menu-icon" />

          <span>Manage Product</span>

        </Link>

        <Link href="/stock" className="menu-link">

             <HiOutlineHome className="menu-icon" />

          <span>Stock Listing</span>

        </Link>


        {/* Sale */}

        <h5 className="menu-heading">
          SALE / PURCHASE MANAGEMENT
        </h5>

        <Link href="/sale" className="menu-link">

          <HiOutlineHome className="menu-icon"/>

          <span>Sale</span>

        </Link>

        <Link href="/purchase" className="menu-link">

          <HiOutlineHome className="menu-icon"/>

          <span>Purchase</span>

        </Link>

        <Link href="/report" className="menu-link">

          <HiOutlineHome className="menu-icon"/>

          <span>Reporting</span>

        </Link>


        {/* Profit */}

        <h5 className="menu-heading">
          PROFIT & LOSS MANAGEMENT
        </h5>

        <Link href="/balance-sheet" className="menu-link">

          <HiOutlineHome className="menu-icon"/>

          <span>Open Balance Sheet</span>

        </Link>

        <Link href="/pnl-report" className="menu-link">

          <HiOutlineHome className="menu-icon"/>

          <span>PnL Report</span>

        </Link>


        {/* Expense */}

        <h5 className="menu-heading">
          EXPENSE MANAGEMENT
        </h5>

        <Link href="/expense" className="menu-link">

             <HiOutlineHome className="menu-icon" />

          <span>Manage Expenses</span>

        </Link>


        {/* Role */}

        <h5 className="menu-heading">
          ROLE MANAGEMENT
        </h5>

        <Link href="/role" className="menu-link">

             <HiOutlineHome className="menu-icon" />

          <span>Manage Role</span>

        </Link>

      </div>

      {/* =======================
          BOTTOM
      ======================== */}

      <div className="sidebar-bottom">

        <button className="setting-btn">

          <FiSettings />

          <span>Account Setting</span>

        </button>

        <button className="logout-btn">

          <FiLogOut />

          <span>Logout</span>

        </button>

      </div>

    </aside>
  );
}