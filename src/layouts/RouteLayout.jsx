import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export const RouteLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
