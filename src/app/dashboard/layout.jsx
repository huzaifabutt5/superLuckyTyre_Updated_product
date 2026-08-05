import "./dashboard.css";

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">

      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Right Side */}

      <div className="dashboard-right">

        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content */}

        <main className="dashboard-content">

          {children}

        </main>

      </div>

    </div>
  );
}