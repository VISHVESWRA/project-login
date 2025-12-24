import { Routes, Route } from "react-router-dom";
import Login from "../features/auth/Login.jsx";
// import Dashboard from "../features/dashboard/Dashboard.jsx";
import Register from "../features/auth/Register.jsx";
import ForgotPassword from "../features/auth/ForgotPassword.jsx";
import ResetPassword from "../features/auth/ResetPassword.jsx";
import Loans from "../features/sidebar/list/Loans.jsx";
import Policies from "../features/sidebar/list/Policies.jsx";
import Chit from "../features/sidebar/list/Chit.jsx";
import Home from "../features/sidebar/list/Home.jsx";
import AuthLayout from "../layouts/AuthLayouts.jsx";
import DashboardLayout from "../layouts/DashboardLayouts.jsx";

function AppRoutes() {
  return (
    <Routes>
      {/* AUTH ROUTES */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
      {/* <Route index element={<Home />} /> */}

      {/* DASHBOARD ROUTES */}
      {/* <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/chit" element={<Chit />} />
      </Route> */}

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="loans" element={<Loans />} />
        <Route path="policies" element={<Policies />} />
        <Route path="chit" element={<Chit />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
