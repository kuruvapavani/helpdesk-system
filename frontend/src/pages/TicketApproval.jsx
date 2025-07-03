import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import Reject from "../assets/reject.svg";
import Accept from "../assets/accept.svg";

const TicketApproval = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [assignedUsers, setAssignedUsers] = useState({});

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole !== "operation") {
      navigate("/404");
    }
  }, [navigate]);

  const allTickets = [
    {
      ticketNo: "1234",
      subject: "Login issue",
      category: "Login",
      priority: "High",
      date: "13/08/21",
    },
    {
      ticketNo: "1124",
      subject: "New ticket issue",
      category: "Bug",
      priority: "Medium",
      date: "14/08/21",
    },
    {
      ticketNo: "1224",
      subject: "New request",
      category: "UI",
      priority: "Low",
      date: "13/08/21",
    },
  ];

  const assignableUsers = ["Ankit", "Priya", "Raj", "Kavya", "Manoj"];

  const totalPages = Math.ceil(allTickets.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentTickets = allTickets.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAssignChange = (ticketNo, value) => {
    setAssignedUsers((prev) => ({ ...prev, [ticketNo]: value }));
  };

  const handleApprove = (ticketNo) => {
    alert(`Approved ticket ${ticketNo}`);
  };

  const handleReject = (ticketNo) => {
    alert(`Rejected ticket ${ticketNo}`);
  };

  return (
    <Layout>
      <div className="font-sanchez px-4">
        <div className="flex text-2xl my-4">Ticket Approval</div>

        {/* Search */}
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
            {[5, 10, 15, 20].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span>Entries</span>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-7 gap-2 text-sm py-2 font-semibold text-center bg-gray-200 rounded px-4">
          <div>Ticket No.</div>
          <div>Subject</div>
          <div>Category</div>
          <div>Priority</div>
          <div>Date</div>
          <div>Action</div>
          <div>Assign To</div>
        </div>

        {/* Ticket Rows */}
        {currentTickets.map((ticket, index) => (
          <div
            key={ticket.ticketNo}
            className="grid grid-cols-7 gap-2 text-sm py-3 items-center text-center px-4"
            style={{
              backgroundColor:
                index % 2 === 0
                  ? "rgba(196, 196, 196, 0.56)"
                  : "rgba(196, 196, 196, 0.37)",
            }}
          >
            <div className="text-blue-600 underline cursor-pointer">
              {ticket.ticketNo}
            </div>
            <div>{ticket.subject}</div>
            <div>{ticket.category}</div>
            <div>{ticket.priority}</div>
            <div>{ticket.date}</div>
            <div className="flex justify-center gap-2">
              <img
                src={Accept}
                alt="Accept"
                className="w-5 h-5 cursor-pointer"
                onClick={() => handleApprove(ticket.ticketNo)}
              />
              <img
                src={Reject}
                alt="Reject"
                className="w-5 h-5 cursor-pointer"
                onClick={() => handleReject(ticket.ticketNo)}
              />
            </div>
            <div>
              <select
                className= "bg-[#C4C4C4] border border-gray-300 rounded px-2 py-1"
                value={assignedUsers[ticket.ticketNo] || ""}
                onChange={(e) =>
                  handleAssignChange(ticket.ticketNo, e.target.value)
                }
              >
                <option value="">-- Select --</option>
                {assignableUsers.map((user) => (
                  <option key={user} value={user}>
                    {user}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}

        {/* Info + Pagination */}
        <div className="flex items-center justify-between mt-4 px-4 text-sm">
          <p>
            Showing {startIndex + 1} to {Math.min(endIndex, allTickets.length)} of{" "}
            {allTickets.length} entries
          </p>
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
        </div>
      </div>
    </Layout>
  );
};

export default TicketApproval;
