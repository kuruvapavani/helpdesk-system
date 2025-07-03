import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaDownload } from "react-icons/fa";
import { RiFileEditLine } from "react-icons/ri";
import addPerson from "../assets/addperson.svg";

const TicketStatus = ({
  ticketNo,
  subject,
  status,
  support,
  date,
  rate,
  category,
  priority,
  inCharge,
  index,
  onClick,
  role,
}) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "in progress":
        return "bg-green-400 text-white";
      case "on hold":
        return "bg-blue-800 text-white";
      case "closed":
        return "bg-gray-600 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <div
      className={`grid ${
        role === "user" ? "grid-cols-6" : "grid-cols-7"
      } gap-2 text-sm px-4 py-4 items-center text-center`}
      style={{
        backgroundColor:
          index % 2 === 0
            ? "rgba(196, 196, 196, 0.56)"
            : "rgba(196, 196, 196, 0.37)",
      }}
    >
      <div
        className="text-blue-600 underline cursor-pointer"
        onClick={() => onClick(ticketNo)}
      >
        {ticketNo}
      </div>
      <div>{subject}</div>
      {role !== "user" && <div>{category || "—"}</div>}
      <div>
        {role === "user" ? (
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>
        ) : (
          priority || "—"
        )}
      </div>
      <div>{date}</div>
      {role !== "user" && <div>{inCharge || "—"}</div>}

      <div className="flex justify-center gap-2">
        {role === "user" ? (
          <div className="flex gap-[2px]">{renderStars(rate)}</div>
        ) : (
          <>
            <RiFileEditLine
              className="w-5 h-5 cursor-pointer"
              title="Edit Ticket"
              onClick={() => onClick(ticketNo)}
            />
            <img
              src={addPerson}
              alt="Assign"
              className="w-6 h-6 cursor-pointer"
              title="Assign Person"
              onClick={() => onClick(ticketNo)}
            />
            <FaDownload
              className="w-5 h-5 cursor-pointer"
              title="Download"
              onClick={() => console.log("Download", ticketNo)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TicketStatus;
