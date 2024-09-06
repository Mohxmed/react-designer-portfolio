import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export const RouteLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
