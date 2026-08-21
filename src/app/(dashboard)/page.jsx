import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import StatsCards from "@/components/Statscard/Statscard";
import CoustomerTable from "@/components/CoustomerTable/CoustomerTable";
import TopVendor from "@/components/TopVendor/TopVendor";
import SalesChart from "@/components/SummaryChart/SummaryChart";
export default function HomePage() {
  return (
<>
      <DashboardHeader />
      <StatsCards />
<SalesChart />
      <div className="tables-row">
        <TopVendor/>
        <CoustomerTable />
       
      </div>
    </>



  );
}
