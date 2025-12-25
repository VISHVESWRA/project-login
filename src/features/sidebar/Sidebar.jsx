import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Banknote,
  ShieldCheck,
  Layers,
  X,
} from "lucide-react";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const [dropdown, setDropdown] = useState({
    loans: false,
    policies: false,
    chit: false,
  });

  // Auto-open dropdown based on route
  useEffect(() => {
    setDropdown({
      loans: location.pathname.includes("loans"),
      policies: location.pathname.includes("policies"),
      chit: location.pathname.includes("chit"),
    });
  }, [location.pathname]);

  const toggle = (key) =>
    setDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <>
      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 min-h-screen w-64 bg-gray-900 p-4 transform transition-transform duration-300
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white">My Dashboard</h2>
          <button
            className="md:hidden text-gray-300"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </button>
        </div>

        <nav className="space-y-2">
          {/* Home */}
          <NavLink to="/dashboard" end className={linkClass}>
            <div className="flex items-center gap-3">
              <LayoutDashboard size={18} /> Home
            </div>
          </NavLink>

          {/* Loans */}
          <button
            onClick={() => toggle("loans")}
            className="w-full flex justify-between items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            <div className="flex gap-3">
              <Banknote size={18} /> Loans
            </div>
            {dropdown.loans ? <ChevronUp /> : <ChevronDown />}
          </button>

          {dropdown.loans && (
            <div className="ml-6 text-sm space-y-1">
              <NavLink to="/dashboard/loans" className={linkClass}>
                All Loans
              </NavLink>
              <NavLink to="/dashboard/personal-loan" className={linkClass}>
                Personal Loan
              </NavLink>
              <span className="block px-4 py-1 text-gray-400">
                Education Loan
              </span>
              <span className="block px-4 py-1 text-gray-400">Home Loan</span>
            </div>
          )}

          {/* Policies */}
          <button
            onClick={() => toggle("policies")}
            className="w-full flex justify-between items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            <div className="flex gap-3">
              <ShieldCheck size={18} /> Policies
            </div>
            {dropdown.policies ? <ChevronUp /> : <ChevronDown />}
          </button>

          {dropdown.policies && (
            <div className="ml-6 text-sm space-y-1">
              <NavLink to="/dashboard/policies" className={linkClass}>
                All Policies
              </NavLink>
              <span className="block px-4 py-1 text-gray-400">
                Term Insurance
              </span>
              <span className="block px-4 py-1 text-gray-400">
                Health Insurance
              </span>
              <span className="block px-4 py-1 text-gray-400">
                Vehicle Insurance
              </span>
            </div>
          )}

          {/* Chit */}
          <button
            onClick={() => toggle("chit")}
            className="w-full flex justify-between items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            <div className="flex gap-3">
              <Layers size={18} /> Chit
            </div>
            {dropdown.chit ? <ChevronUp /> : <ChevronDown />}
          </button>

          {dropdown.chit && (
            <div className="ml-6 text-sm space-y-1">
              <NavLink to="/dashboard/chit" className={linkClass}>
                Overview
              </NavLink>
              <NavLink to="/dashboard/chit-act" className={linkClass}>
                Chit Act
              </NavLink>
              <NavLink to="/dashboard/chit-services" className={linkClass}>
                Services
              </NavLink>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
