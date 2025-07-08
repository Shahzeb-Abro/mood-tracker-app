import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

export const DashboardLayout = () => {
  return (
    <main className="w-full min-h-screen bg-surface">
      <Navbar />
      <Outlet />
    </main>
  );
};
