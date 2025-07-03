import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { FaUser, FaStar } from "react-icons/fa";

const Performance = () => {
  const [role, setRole] = useState("");
  const [data, setData] = useState({
    name: "",
    contact: "",
    department: "",
    total: 0,
    solved: 0,
    pending: 0,
    inProgress: 0,
    rating: 0,
    others: [],
  });

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);

    // You can later fetch this from API
    if (storedRole === "operation") {
      setData({
        name: "Operation Name",
        contact: "0123456789",
        department: "ABC",
        total: 5,
        solved: 2,
        pending: 1,
        inProgress: 2,
        rating: 4,
        others: ["Operation Name 1", "Operation Name 2", "Operation Name 3"],
      });
    } else if (storedRole === "technical") {
      setData({
        name: "Technical Name",
        contact: "9876543210",
        department: "XYZ",
        total: 6,
        solved: 3,
        pending: 2,
        inProgress: 1,
        rating: 5,
        others: ["Technical Name 1", "Technical Name 2", "Technical Name 3"],
      });
    }
  }, []);

  return (
    <Layout>
      <div className="px-4 py-6 font-sanchez">
        <h1 className="text-xl mb-6">Performance</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Panel */}
          <div className="flex-[2] space-y-4">
            {/* Name & Contact Card */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-md shadow-md">
              <div className="bg-gray-200 p-6 rounded-xl">
                <FaUser className="text-7xl" />
              </div>
              <div>
                <h2 className="text-lg">{data.name}</h2>
                <div className="bg-gray-200 px-4 py-2 rounded-xl mt-4">
                  <p className="text-sm">Contact No: {data.contact}</p>
                  <p className="text-sm">Department: {data.department}</p>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md text-sm space-y-2">
              <div className="flex justify-between items-center text-xl">
                <span >Total Ticket Handle</span>
                <span >{data.total}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Ticket Solved</span>
                <span className="font-medium">{data.solved}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Ticket Pending</span>
                <span className="font-medium">{data.pending}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Ticket In Progress</span>
                <span className="font-medium">{data.inProgress}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Rating</span>
                <span className="flex items-center gap-[2px]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-400 ${
                        i < data.rating ? "" : "text-gray-300"
                      }`}
                    />
                  ))}
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex-1 space-y-4">
            {data.others.map((person, i) => (
              <div
                key={i}
                className="flex bg-white p-4 rounded-md shadow-md gap-4 items-center"
              >
                {/* Icon */}
                <div className="bg-gray-200 p-5 rounded-xl flex-shrink-0">
                  <FaUser className="text-xl" />
                </div>

                {/* Name + Button vertically */}
                <div className="flex flex-col items-start justify-center">
                  <span className="mb-1">{person}</span>
                  <button className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm hover:bg-teal-600">
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Performance;
