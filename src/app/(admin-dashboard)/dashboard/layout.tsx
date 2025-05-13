import AdminDashboardFooter from "@/layouts/dashboard-admin/AdminDashboardFooter";
import AdminDashboardNavbar from "@/layouts/dashboard-admin/AdminDashboardNavbar";

interface IProps {
  children: React.ReactNode;
}

export default function AdminDashboardLayout(props: IProps) {
  return (
    <>
      <AdminDashboardNavbar />
      <main>{props.children}</main>
      <AdminDashboardFooter />
    </>
  );
}
