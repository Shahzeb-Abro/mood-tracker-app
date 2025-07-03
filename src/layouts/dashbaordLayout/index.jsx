import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

export const DashboardLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};
