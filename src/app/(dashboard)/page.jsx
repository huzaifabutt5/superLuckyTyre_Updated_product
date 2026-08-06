import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import StatsCards from "@/components/Statscard/Statscard";
import SummaryCards from "@/components/SummaryCards/SummaryCards";
import VendorTable from "@/components/VendorTable/VendorTable";
import CoustomerTable from "@/components/CoustomerTable/CoustomerTable";
import SalesChart from "@/components/SummaryChart/SummaryChart";
export default function HomePage() {
  return (
<>
      <DashboardHeader />
      <StatsCards />
<SalesChart />
      <div className="tables-row">
        <VendorTable />
        <CoustomerTable />
      </div>
    </>



  );
}
