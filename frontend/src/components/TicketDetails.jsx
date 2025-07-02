import React from "react";

const TicketDetails = ({ ticket, onClose }) => {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-lg mb-4 text-center">Ticket Details</h2>
        <div className="text-sm space-y-2">
          <p>Ticket No :  {ticket.ticketNo}</p>
          <p>Date :  {ticket.date}</p>
          <p>Name :  {ticket.name || "—"}</p>
          <p>Dept :  {ticket.dept || "—"}</p>
          <p>Title :  {ticket.subject}</p>
          <p>Description :  {ticket.description || "—"}</p>
          <p>Category :  {ticket.category || "—"}</p>
          <p>Type :  {ticket.type || "—"}</p>
          <p>Priority :  {ticket.priority || "—"}</p>
          <p>Status :  {ticket.status}</p>
          <p>Attachment :  {ticket.attachment || "—"}</p>
        </div>
        <div className="text-center mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
