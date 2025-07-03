import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { IoIosSearch } from "react-icons/io";
import TicketStatus from "../components/TicketStatus";
import TicketDetails from "../components/TicketDetails";

const MyTicket = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  const allTickets = [
    {
      ticketNo: "1234",
      subject: "Login issue",
      status: "In Progress",
      support: "Tech support",
      date: "13/08/21",
      rate: 1,
      category: "Login",
      priority: "High",
      inCharge: "Ankit",
    },
    {
      ticketNo: "1124",
      subject: "New ticket issue",
      status: "On hold",
      support: "Operation Team",
      date: "14/08/21",
      rate: 4.8,
      category: "Bug",
      priority: "Medium",
      inCharge: "Raj",
    },
    {
      ticketNo: "1224",
      subject: "New request",
      status: "Closed",
      support: "Tech support",
      date: "13/08/21",
      rate: 4.5,
      category: "UI",
      priority: "Low",
      inCharge: "Priya",
    },
    // Add more as needed
  ];

  const openModal = (ticketNo) => {
    const found = allTickets.find((t) => t.ticketNo === ticketNo);
    setSelectedTicket(found);
  };

  const totalPages = Math.ceil(allTickets.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentTickets = allTickets.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Layout>
      <div className="font-sanchez px-4">
        <div className="flex justify-center text-2xl my-4">List of Ticket</div>

        {/* Search Input */}
        <div className="relative w-full max-w-sm mb-4">
          <input
            type="text"
            placeholder="Find ticket"
            className="w-full bg-inputBg py-2 px-6 pr-10 rounded-lg placeholder:text-black"
          />
          <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-xl" />
        </div>

        {/* Entries selector */}
        <div className="mb-4 flex space-x-2 items-center">
          <span>Show :</span>
          <select
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-inputBg px-2 py-1 rounded-lg"
          >
            {[5, 10, 15, 20, 25].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span>Entries</span>
        </div>

        {/* Table Header */}
        <div
          className={`grid ${
            role === "user" ? "grid-cols-6" : "grid-cols-7"
          } gap-2 text-sm py-2 font-semibold items-center text-center bg-gray-200 rounded px-4`}
        >
          <div>Ticket No.</div>
          <div>Subject</div>
          {role !== "user" && <div>Category</div>}
          <div>{role === "user" ? "Status" : "Priority"}</div>
          <div>Date</div>
          {role !== "user" && <div>Person In Charge</div>}
          <div>{role === "user" ? "Rate" : "Action"}</div>
        </div>

        {/* Ticket Rows */}
        {currentTickets.map((ticket, index) => (
          <TicketStatus
            key={ticket.ticketNo}
            {...ticket}
            index={startIndex + index}
            onClick={openModal}
            role={role}
          />
        ))}

        {/* Info + Pagination */}
        <div className="flex items-center justify-between mt-4 px-4 text-sm">
          <p>
            Showing {startIndex + 1} to {Math.min(endIndex, allTickets.length)} of {allTickets.length} entries
          </p>
          <div className="flex gap-2 items-center text-lg select-none">
            <span onClick={() => handlePageChange(1)} className="cursor-pointer hover:text-blue-500">≪</span>
            <span onClick={() => handlePageChange(currentPage - 1)} className="cursor-pointer hover:text-blue-500">&lt;</span>
            <span className="px-2">{currentPage}</span>
            <span onClick={() => handlePageChange(currentPage + 1)} className="cursor-pointer hover:text-blue-500">&gt;</span>
            <span onClick={() => handlePageChange(totalPages)} className="cursor-pointer hover:text-blue-500">≫</span>
          </div>
        </div>

        {/* Modal */}
        {selectedTicket && (
          <TicketDetails ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />
        )}
      </div>
    </Layout>
  );
};

export default MyTicket;
