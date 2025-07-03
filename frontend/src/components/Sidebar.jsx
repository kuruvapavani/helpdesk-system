import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTicketAlt, FaDatabase } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

import DashboardIcon from "../assets/dashboard.png";
import TicketApprovalIcon from "../assets/ticketapproval.png";
import PerformanceIcon from "../assets/performance.svg";
import Arrow from "../assets/arrow.svg";
import NewTicketIcon from "../assets/newticket.png";
import TechnicalSupport from "../assets/techsupport.png";
import User from "../assets/user.png";
import UserLogHistory from "../assets/history.svg";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [role, setRole] = useState("");
  const [showDatabaseMenu, setShowDatabaseMenu] = useState(false);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  const isActive = (path) => currentPath === path;

  const renderLink = (to, icon, label) => (
    <Link
      to={to}
      className="flex items-center space-x-2 text-black hover:text-blue-600"
    >
      {isActive(to) && <img src={Arrow} alt="arrow" className="w-3 h-3" />}
      {typeof icon === "string" ? (
        <img src={icon} alt={label} className="w-5 h-5" />
      ) : (
        <span className="w-5 h-5 text-lg">{icon}</span>
      )}
      <span className="text-lg">{label}</span>
    </Link>
  );

  return (
    <div className="w-60 bg-gray-300 font-sanchez p-4 space-y-6 text-sm">
      {renderLink("/", DashboardIcon, "Dashboard")}

      {role === "user" && (
        <>
          {renderLink("/new-ticket", NewTicketIcon, "New Ticket")}
          {renderLink("/my-ticket", <FaTicketAlt className="w-5 h-5" />, "My Ticket")}
        </>
      )}

      {role === "operation" && (
        <>
          {renderLink("/ticket-approval", TicketApprovalIcon, "Ticket Approval")}
          {renderLink("/my-ticket", <FaTicketAlt className="w-5 h-5" />, "My Ticket")}
          {renderLink("/performance", PerformanceIcon, "Performance")}
        </>
      )}

      {role === "technical" && (
        <>
          {renderLink("/my-ticket", <FaTicketAlt className="w-5 h-5" />, "My Ticket")}
          {renderLink("/performance", PerformanceIcon, "Performance")}
        </>
      )}

      {role === "admin" && (
        <>
          {/* DATABASE MENU TOGGLE */}
          <div
            className="cursor-pointer flex items-center space-x-2 text-black hover:text-blue-600"
            onClick={() => setShowDatabaseMenu((prev) => !prev)}
          >
            <FaDatabase className="w-5 h-5" />
            <span className="text-lg">Database</span>
          </div>

          {/* DATABASE SUB-MENU */}
          {showDatabaseMenu && (
            <div className="pl-6 space-y-2">
              {renderLink("/database/user", User, "User")}
              {renderLink("/database/operation-team", TicketApprovalIcon, "Operation Team")}
              {renderLink("/database/technical-support", TechnicalSupport, "Technical Support")}
            </div>
          )}

          {renderLink("/admin-settings", <IoSettingsOutline className="w-5 h-5" />, "Setting")}
          {renderLink("/user-log-history", UserLogHistory, "User Log History")}
        </>
      )}
    </div>
  );
};

export default Sidebar;
