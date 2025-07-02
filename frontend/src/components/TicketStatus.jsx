import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const TicketStatus = ({
  ticketNo,
  subject,
  status,
  support,
  date,
  rate,
  index,
  onClick
}) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
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
      className="grid grid-cols-6 gap-2 text-sm px-4 py-4 items-center text-center"
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
      <div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
            status
          )}`}
        >
          {status}
        </span>
      </div>
      <div>{support}</div>
      <div>{date}</div>
      <div className="flex justify-center gap-[2px]">{renderStars(rate)}</div>
    </div>
  );
};

export default TicketStatus;
