import React from "react";
import { AdminNavbar } from "../admin/AdminNavbar";
import { Outlet, useNavigate } from "react-router-dom";

export const VendorSidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminNavbar />
      <div className="flex">
        <aside className="bg-gray-900 text-white w-60 min-h-screen fixed top-12 left-0 py-11 px-8">
          <h5 className="text-center text-lg font-semibold mb-4">Vendor Panel</h5>
          <hr className="border-gray-300 mb-3" />
          <ul className="space-y-2">
            {[
              // { path: "dashboard", icon: "bi bi-speedometer", label: "Dashboard" },

              { path: "myprofile", icon: "bi bi-person", label: "My Profile" },
              { path: "bookings", icon: "bi bi-calendar-check", label: "My Bookings" },
              // { path: "payments", icon: "bi bi-cash-stack", label: "Payments" },
            ].map((item, index) => (
              <li key={index}>
                <button
                  className="w-full text-left flex items-center space-x-2 p-2 hover:bg-gray-800 rounded transition"
                  onClick={() => navigate(item.path)}
                >
                  <i className={item.icon} /> <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-grow p-4 ml-56">
          <Outlet />
        </main>
      </div>
    </>
  );
};
