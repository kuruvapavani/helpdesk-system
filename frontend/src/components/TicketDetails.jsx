import React, { useEffect, useState } from "react";
import CloseTicket from "./CloseTicket";
import TeamCreation from "./TeamCreation";

const TicketDetails = ({ ticket, onClose }) => {
  const [role, setRole] = useState("");
  const [step, setStep] = useState("details"); // "details", "close", "team"

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  if (!ticket) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        {step === "details" && (
          <>
            <h2 className="text-lg mb-4 text-center">Ticket Details</h2>
            <div className="text-sm space-y-2">
              <p>Ticket No : {ticket.ticketNo}</p>
              <p>Date : {ticket.date}</p>
              <p>Name : {ticket.name || "—"}</p>
              <p>Dept : {ticket.dept || "—"}</p>
              <p>Title : {ticket.subject}</p>
              <p>Description : {ticket.description || "—"}</p>
              <p>Category : {ticket.category || "—"}</p>
              <p>Type : {ticket.type || "—"}</p>
              <p>Priority : {ticket.priority || "—"}</p>
              <p>Status : {ticket.status}</p>
              <p>Attachment : {ticket.attachment || "—"}</p>
            </div>

            <div
              className={`mt-4 ${
                role === "technical" || role === "operation"
                  ? "flex justify-between"
                  : "text-center"
              }`}
            >
              {(role === "technical" || role === "operation") && (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => setStep("options")}
                >
                  Update
                </button>
              )}
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </>
        )}

        {step === "options" && (
          <>
            <h2 className="text-lg mb-4 text-center">Choose an Option</h2>
            <div className="flex flex-col gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setStep("close")}
              >
                Close Ticket
              </button>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                onClick={() => setStep("team")}
              >
                Team Creation
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setStep("details")}
              >
                Back
              </button>
            </div>
          </>
        )}

        {step === "close" && (
          <CloseTicket
            ticket={ticket}
            onBack={() => setStep("options")}
          />
        )}

        {step === "team" && (
          <TeamCreation
            ticket={ticket}
            onBack={() => setStep("options")}
          />
        )}
      </div>
    </div>
  );
};

export default TicketDetails;
