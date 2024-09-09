import Header from "../screen.components/Header/Header";
import { Outlet } from "react-router-dom";

export const RouteLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
