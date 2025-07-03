import { ROUTES } from "@/constants/routes";
import { Login, Onboarding, Register } from "@/modules/public/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.ONBOARDING} element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
};
