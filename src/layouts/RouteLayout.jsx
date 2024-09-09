import Footer from "../components.screen/Footer/Footer";
import Header from "../components.screen/Header/Header";
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
