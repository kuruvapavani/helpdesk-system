import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTicketAlt } from "react-icons/fa";
import DashboardIcon from "../assets/dashboard.png";
import TicketApprovalIcon from "../assets/ticketapproval.png";
import PerformanceIcon from "../assets/performance.svg";
import Arrow from "../assets/arrow.svg"
import NewTicketIcon from "../assets/newticket.png"
const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-48 bg-gray-300 font-sanchez p-4 space-y-6">
      <Link
        to="/"
        className={`flex items-center space-x-2 text-black hover:text-blue-600`}
      >
        {currentPath === "/" && <span><img src={Arrow} alt="arrow" className="w-3 h-3"/></span>}
        <img src={DashboardIcon} alt="Dashboard" className="w-5 h-5" />
        <span className="text-lg">Dashboard</span>
      </Link>
      <Link
        to="/new-ticket"
        className={`flex items-center space-x-2 text-black hover:text-blue-600`}
      >
        {currentPath === "/new-ticket" && <span><img src={Arrow} alt="arrow" className="w-3 h-3"/></span>}
        <img
          src={NewTicketIcon}
          alt="New Ticket"
          className="w-5 h-5"
        />
        <span className="text-lg">New Ticket</span>
      </Link>
      <Link
        to="/ticket-approval"
        className={`flex items-center space-x-2 text-black hover:text-blue-600`}
      >
        {currentPath === "/ticket-approval" && <span><img src={Arrow} alt="arrow" className="w-3 h-3"/></span>}
        <img
          src={TicketApprovalIcon}
          alt="Ticket Approval"
          className="w-5 h-5"
        />
        <span className="text-lg">Ticket Approval</span>
      </Link>
      <Link
        to="/my-ticket"
        className={`flex items-center space-x-2 text-black hover:text-blue-600`}
      >
        {currentPath === "/my-ticket" && <span><img src={Arrow} alt="arrow" className="w-3 h-3"/></span>}
        <FaTicketAlt className="w-5 h-5" />
        <span className="text-lg">My Ticket</span>
      </Link>

      <Link
        to="/performance"
        className={`flex items-center space-x-2 text-black hover:text-blue-600`}
      >
        {currentPath === "/performance" && <span><img src={Arrow} alt="arrow" className="w-3 h-3"/></span>}
        <img src={PerformanceIcon} alt="Performance" className="w-5 h-5" />
        <span className="text-lg">Performance</span>
      </Link>
    </div>
  );
};

export default Sidebar;
