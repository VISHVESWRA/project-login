import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-500 to-purple-600">
    <div className="min-h-screen min-w-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
