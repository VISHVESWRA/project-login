import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded text-white ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200 hover:text-black"
    }`;

  return (
    <aside className="w-64 bg-gray-500 shadow-lg p-4">
      <h2 className="text-xl text-white font-bold mb-6">My Dashboard</h2>

      <nav className="space-y-2">
        <NavLink to="/dashboard" end className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/dashboard/loans" className={linkClass}>
          Loans
        </NavLink>

        <NavLink to="/dashboard/policies" className={linkClass}>
          Policies
        </NavLink>

        <NavLink to="/dashboard/chit" className={linkClass}>
          Chit
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
