import { ROUTES } from "@/constants/routes";
import { Dashboard } from "@/modules/private";
import { Login, Onboarding, Register } from "@/modules/public/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/modules/private";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.ONBOARDING} element={<Onboarding />} />
        <Route element={<DashboardLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
