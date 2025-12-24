import { Outlet } from "react-router-dom";
import Sidebar from "../features/sidebar/Sidebar.jsx";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-300">
      <Sidebar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
