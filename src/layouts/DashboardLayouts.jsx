import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../features/sidebar/Sidebar";
import { Menu } from "lucide-react";
import { Navigate } from "react-router-dom";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1">
        {/* Mobile header */}
        <div className="md:hidden flex items-center gap-3 bg-white shadow px-4 py-3">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu />
          </button>
          <h1 className="font-semibold">Dashboard</h1>
        </div>

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
