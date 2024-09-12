import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import { Outlet } from "react-router-dom";

export const RouteLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
