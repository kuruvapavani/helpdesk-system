import React, { useState } from "react";
import Layout from "../Layout";
import { IoIosSearch } from "react-icons/io";
import TicketStatus from "../components/TicketStatus";
import TicketDetails from "../components/TicketDetails";
const MyTicket = () => {
  const allTickets = [
    {
      ticketNo: "1234",
      subject: "Login issue",
      status: "In Progress",
      support: "Tech support",
      date: "13/08/21",
      rate: 1,
    },
    {
      ticketNo: "1124",
      subject: "New ticket issue",
      status: "On hold",
      support: "Operation Team",
      date: "14/08/21",
      rate: 4.8,
    },
    {
      ticketNo: "1224",
      subject: "New request",
      status: "Closed",
      support: "Tech support",
      date: "13/08/21",
      rate: 4.5,
    },
    {
      ticketNo: "1244",
      subject: "Ticket submission",
      status: "In Progress",
      support: "Operation Team",
      date: "14/08/21",
      rate: 2,
    },
    {
      ticketNo: "1114",
      subject: "Login issue",
      status: "In Progress",
      support: "Tech support",
      date: "3/08/21",
      rate: 1,
    },
    {
      ticketNo: "1344",
      subject: "Server error",
      status: "In Progress",
      support: "DevOps",
      date: "15/08/21",
      rate: 3,
    },
    {
      ticketNo: "1434",
      subject: "UI bug",
      status: "Closed",
      support: "Frontend Team",
      date: "15/08/21",
      rate: 5,
    },
    // Add more if needed
  ];

  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(null);

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
      <div className="font-sanchez">
        <div className="flex justify-center text-2xl">List of Ticket</div>

        {/* Search Input */}
        <div className="relative w-full max-w-sm mt-4">
          <input
            type="text"
            placeholder="Find ticket"
            className="w-full bg-inputBg py-2 px-6 pr-10 rounded-lg placeholder:text-black"
          />
          <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-xl" />
        </div>

        {/* Entries per page selector */}
        <div className="mt-6 flex space-x-2 items-center">
          <span>Show :</span>
          <select
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-inputBg px-1 py-2 rounded rounded-lg"
          >
            {[5, 10, 15, 20, 25].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span>Entries</span>
        </div>

        {/* Ticket Table */}
        <div className="p-6">
          {/* Table Head */}
          <div className="grid grid-cols-6 gap-2 text-sm mx-2 py-2 rounded-md items-center text-center my-4 px-4">
            <div>Ticket No.</div>
            <div>Subject</div>
            <div>Status</div>
            <div>Support by</div>
            <div>Date</div>
            <div>Rate</div>
          </div>

          {/* Ticket Rows */}
          {currentTickets.map((ticket, index) => (
            <TicketStatus
              key={ticket.ticketNo}
              {...ticket}
              index={startIndex + index}
              onClick={openModal}
            />
          ))}

          {/* Info + Pagination */}
          <div className="flex items-center justify-between mt-2 px-4 text-sm">
            <p>
              Showing {startIndex + 1} to{" "}
              {Math.min(endIndex, allTickets.length)} of {allTickets.length}{" "}
              entries
            </p>

            {/* Pagination */}
            <div className="flex gap-2 items-center text-lg select-none">
              <span
                onClick={() => handlePageChange(1)}
                className="cursor-pointer hover:text-blue-500"
              >
                ≪
              </span>
              <span
                onClick={() => handlePageChange(currentPage - 1)}
                className="cursor-pointer hover:text-blue-500"
              >
                &lt;
              </span>
              <span className="px-2">{currentPage}</span>
              <span
                onClick={() => handlePageChange(currentPage + 1)}
                className="cursor-pointer hover:text-blue-500"
              >
                &gt;
              </span>
              <span
                onClick={() => handlePageChange(totalPages)}
                className="cursor-pointer hover:text-blue-500"
              >
                ≫
              </span>
            </div>
            {/* Ticket Details Modal */}
            {selectedTicket && (
              <TicketDetails
                ticket={selectedTicket}
                onClose={() => setSelectedTicket(null)}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyTicket;
