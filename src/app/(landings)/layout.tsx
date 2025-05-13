import AppFooter from "@/layouts/landings/AppFooter";
import AppNavbar from "@/layouts/landings/AppNavbar";

interface IProps {
  children: React.ReactNode;
}

export default function AppLayout(props: IProps) {
  return (
    <>
      <AppNavbar />
      <main>{props.children}</main>
      <AppFooter />
    </>
  );
}
