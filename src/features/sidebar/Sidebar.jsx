import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Banknote,
  ShieldCheck,
  Layers,
} from "lucide-react";

function Sidebar() {
  const [chitOpen, setChitOpen] = useState(false);
  const location = useLocation();

  // Auto-open dropdown when inside chit routes
  useEffect(() => {
    if (location.pathname.includes("/dashboard/chit")) {
      setChitOpen(true);
    }
  }, [location.pathname]);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <aside className="w-64 bg-gray-900 min-h-screen p-4">
      {/* Logo */}
      <h2 className="text-2xl font-bold text-white mb-8">My Dashboard</h2>

      <nav className="space-y-2">
        {/* Home */}
        <NavLink
          to="/dashboard"
          end
          className={linkClass}
          onClick={() => setChitOpen(false)}
        >
          <LayoutDashboard size={18} />
          Home
        </NavLink>

        {/* Loans */}
        <NavLink
          to="/dashboard/loans"
          className={linkClass}
          onClick={() => setChitOpen(false)}
        >
          <Banknote size={18} />
          Loans
        </NavLink>

        {/* Policies */}
        <NavLink
          to="/dashboard/policies"
          className={linkClass}
          onClick={() => setChitOpen(false)}
        >
          <ShieldCheck size={18} />
          Policies
        </NavLink>

        {/* Chit Dropdown */}
        <button
          onClick={() => setChitOpen(!chitOpen)}
          className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition"
        >
          <div className="flex items-center gap-3">
            <Layers size={18} />
            Chit
          </div>
          {chitOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Dropdown items */}
        {chitOpen && (
          <div className="ml-6 mt-1 space-y-1 text-sm">
            <NavLink
              to="/dashboard/chit"
              className={({ isActive }) =>
                `block px-3 py-1 rounded ${
                  isActive
                    ? "text-blue-600 bg-gray-100"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Overview
            </NavLink>

            <NavLink
              to="/dashboard/chit-act"
              className={({ isActive }) =>
                `block px-3 py-1 rounded ${
                  isActive
                    ? "text-blue-600 bg-gray-100"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Chit Act
            </NavLink>
            <NavLink
              to="/dashboard/chit-services"
              className={({ isActive }) =>
                `block px-3 py-1 rounded ${
                  isActive
                    ? "text-blue-600 bg-gray-100"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Services
            </NavLink>
          </div>
        )}
      </nav>
    </aside>
  );
}

export default Sidebar;
