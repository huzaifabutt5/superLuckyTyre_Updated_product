import VendorTable from "../VendorTable/VendorTable";
import CoustomerTable from "../CoustomerTable/CustomerTable";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="bottom-tables">
      <VendorTable />
      <CoustomerTable />
    </div>
  );
}