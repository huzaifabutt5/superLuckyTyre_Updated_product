import AppLayout from "@/components/AppLayout/AppLayout";

export const metadata = {
  title: "Super Lucky Tyre - Dashboard",
  description: "Inventory, sales and management system",
};

export default function DashboardLayout({ children }) {
  return <AppLayout>{children}</AppLayout>;
}
