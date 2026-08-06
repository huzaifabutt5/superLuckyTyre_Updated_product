"use client";

import "./Navbar.css";
import { useState } from "react";
import { FiMenu, FiSearch, FiBell } from "react-icons/fi";
import Image from "next/image";

export default function Navbar({ toggleSidebar }) {
  const [search, setSearch] = useState("");

  return (
    <header className="navbar">

      {/* LEFT */}
      <div className="navbar-left">

        <button
          className="menu-btn"
          onClick={toggleSidebar}
        >
          <FiMenu />
        </button>

        <div className="search-box">

          <FiSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="navbar-right">

        <button className="icon-btn">

          <FiBell />

          <span className="notify-dot"></span>

        </button>

        <div className="profile">

          <Image
            src="/images/user.jpg"
            alt="User"
            width={36}
            height={36}
            className="profile-img"
          />

        </div>

      </div>

    </header>
  );
}