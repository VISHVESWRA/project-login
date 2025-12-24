// import { Navigate, NavLink, Outlet } from "react-router-dom";

// function Dashboard() {
//   const isLoggedIn = localStorage.getItem("isLoggedIn");

//   if (!isLoggedIn) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md">
//         <h2 className="text-xl font-bold p-6 border-b">My Finance</h2>

//         <nav className="p-4 space-y-2">
//           <NavLink
//             to="/dashboard"
//             end
//             className={({ isActive }) =>
//               `block px-4 py-2 rounded ${
//                 isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
//               }`
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/dashboard/loans"
//             className={({ isActive }) =>
//               `block px-4 py-2 rounded ${
//                 isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
//               }`
//             }
//           >
//             Loans
//           </NavLink>

//           <NavLink
//             to="/dashboard/policies"
//             className={({ isActive }) =>
//               `block px-4 py-2 rounded ${
//                 isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
//               }`
//             }
//           >
//             Policies
//           </NavLink>

//           <NavLink
//             to="/dashboard/chit"
//             className={({ isActive }) =>
//               `block px-4 py-2 rounded ${
//                 isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
//               }`
//             }
//           >
//             Chit
//           </NavLink>
//         </nav>
//       </aside>

//       {/* Page Content */}
//       <main className="flex-1 p-6">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default Dashboard;
