// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { LogOut } from "lucide-react";
// import {
//   ChevronDown,
//   ChevronUp,
//   LayoutDashboard,
//   Banknote,
//   ShieldCheck,
//   Layers,
//   X,
// } from "lucide-react";

// function Sidebar({ sidebarOpen, setSidebarOpen }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const [dropdown, setDropdown] = useState({
//     loans: false,
//     policies: false,
//     chit: false,
//   });

//   // Auto-open dropdown based on route
//   useEffect(() => {
//     setDropdown({
//       loans: location.pathname.includes("loans"),
//       policies: location.pathname.includes("policies"),
//       chit: location.pathname.includes("chit"),
//     });
//   }, [location.pathname]);

//   const toggle = (key) =>
//     setDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
//   const linkClass = ({ isActive }) =>
//     `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
//       isActive
//         ? "bg-blue-600 text-white"
//         : "text-gray-300 hover:bg-gray-700 hover:text-white"
//     }`;

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     // localStorage.removeItem("user");
//     navigate("/");
//   };

//   return (
//     <>
//       {/* Overlay (mobile) */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static z-50 top-0 left-0 min-h-screen w-64 bg-gray-900 p-4 transform transition-transform duration-300
//         ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-xl font-bold text-white">My Dashboard</h2>
//           <button
//             className="md:hidden text-gray-300"
//             onClick={() => setSidebarOpen(false)}
//           >
//             <X />
//           </button>
//         </div>

//         <nav className="space-y-2">
//           {/* Home */}
//           <NavLink to="/dashboard" end className={linkClass}>
//             <div className="flex items-center gap-3">
//               <LayoutDashboard size={18} /> Home
//             </div>
//           </NavLink>

//           {/* Loans */}
//           <button
//             onClick={() => toggle("loans")}
//             className="w-full flex justify-between items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
//           >
//             <div className="flex gap-3">
//               <Banknote size={18} /> Loans
//             </div>
//             {dropdown.loans ? <ChevronUp /> : <ChevronDown />}
//           </button>

//           {dropdown.loans && (
//             <div className="ml-6 text-sm space-y-1">
//               <NavLink to="/dashboard/loans" className={linkClass}>
//                 All Loans
//               </NavLink>
//               <NavLink to="/dashboard/personal-loan" className={linkClass}>
//                 Personal Loan
//               </NavLink>
//               <span className="block px-4 py-1 text-gray-400">
//                 Education Loan
//               </span>
//               <span className="block px-4 py-1 text-gray-400">Home Loan</span>
//             </div>
//           )}

//           {/* Policies */}
//           <button
//             onClick={() => toggle("policies")}
//             className="w-full flex justify-between items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
//           >
//             <div className="flex gap-3">
//               <ShieldCheck size={18} /> Policies
//             </div>
//             {dropdown.policies ? <ChevronUp /> : <ChevronDown />}
//           </button>

//           {dropdown.policies && (
//             <div className="ml-6 text-sm space-y-1">
//               <NavLink to="/dashboard/policies" className={linkClass}>
//                 All Policies
//               </NavLink>
//               <span className="block px-4 py-1 text-gray-400">
//                 Term Insurance
//               </span>
//               <span className="block px-4 py-1 text-gray-400">
//                 Health Insurance
//               </span>
//               <span className="block px-4 py-1 text-gray-400">
//                 Vehicle Insurance
//               </span>
//             </div>
//           )}

//           {/* Chit */}
//           <button
//             onClick={() => toggle("chit")}
//             className="w-full flex justify-between items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
//           >
//             <div className="flex gap-3">
//               <Layers size={18} /> Chit
//             </div>
//             {dropdown.chit ? <ChevronUp /> : <ChevronDown />}
//           </button>

//           {dropdown.chit && (
//             <div className="ml-6 text-sm space-y-1">
//               <NavLink to="/dashboard/chit" className={linkClass}>
//                 Overview
//               </NavLink>
//               <NavLink to="/dashboard/chit-act" className={linkClass}>
//                 Chit Act
//               </NavLink>
//               <NavLink to="/dashboard/chit-services" className={linkClass}>
//                 Services
//               </NavLink>
//             </div>
//           )}
//         </nav>

//         {/* Logout */}
//         <button
//           onClick={handleLogout}
//           className="flex items-center gap-3 px-4 py-2 mt-4 rounded-lg
//                    text-red-400 hover:bg-red-600 hover:text-white transition"
//         >
//           <LogOut size={18} />
//           Logout
//         </button>
//       </aside>
//     </>
//   );
// }

// export default Sidebar;

import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Banknote,
  ShieldCheck,
  Wallet,
  Layers,
  Settings,
  Boxes,
  LogOut,
  X,
} from "lucide-react";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

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
          <NavLink
            to="/dashboard"
            end
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/income"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <Wallet size={18} /> Income
          </NavLink>

          <NavLink
            to="/dashboard/expenses"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <Wallet size={18} /> Expenses
          </NavLink>

          <NavLink
            to="/dashboard/policies"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <ShieldCheck size={18} /> Policies
          </NavLink>

          <NavLink
            to="/dashboard/loans"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <Banknote size={18} /> Loans
          </NavLink>

          <NavLink
            to="/dashboard/chit"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <Layers size={18} /> Chits
          </NavLink>

          <NavLink
            to="/dashboard/misc"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <Boxes size={18} /> MISC
          </NavLink>

          <NavLink
            to="/dashboard/settings"
            className={linkClass}
            onClick={() => setSidebarOpen(false)}
          >
            <Settings size={18} /> Settings
          </NavLink>
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 mt-6 rounded-lg
                   text-red-400 hover:bg-red-600 hover:text-white transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>
    </>
  );
}

export default Sidebar;
