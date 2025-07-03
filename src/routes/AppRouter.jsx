import { ROUTES } from "@/constants/routes";
import { Login } from "@/modules/public/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
