import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import TicketCards from "../components/TicketCards";
import chart from "../assets/chart.svg";
import technicalTeam from "../assets/techteam.png";
import operationTeam from "../assets/operationteam.png";
import { FaStar } from "react-icons/fa";

const Dashboard = () => {
  const [role, setRole] = useState("");
  const data = { rating: 4 };

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole || "");
  }, []);

  return (
    <Layout>
      <div className="flex flex-col space-y-6 mt-4 font-sanchez">
        <div className="text-3xl font-sanchez flex justify-center">
          Dashboard
        </div>

        {/* Ticket Cards - always shown */}
        <div className="flex space-x-8">
          <TicketCards name="Total Tickets" number="12" color="#2F82FF" />
          <TicketCards name="Total Solved" number="8" color="#0BFF68" />
          <TicketCards
            name="Total Awaiting Approval"
            number="2"
            color="#FE594E"
          />
          <TicketCards name="Total in Progress" number="2" color="#FCFF6C" />
        </div>

        {/* Only show for technical or operation roles */}
        {role !== "user" && (
          <div className="flex space-x-12">
            {/* Chart */}
            <div className="h-auto py-4 w-1/3 flex justify-center bg-hero rounded-lg">
              <img src={chart} alt="graph" />
            </div>

            {/* Team & Feedback */}
            <div className="flex flex-col flex-1">
              {/* Team Images */}
              <div className="flex bg-hero px-6 py-4 justify-evenly rounded-lg text-center">
                {/* Technical Support */}
                <div className="flex flex-col items-center">
                  <img
                    src={technicalTeam}
                    alt="Technical Team"
                    className="w-20 h-20"
                  />
                  <p className="text-lg font-semibold mt-2 text-black">3</p>
                  <p className="text-sm text-black">Technical Supports</p>
                </div>

                {/* Operation Team */}
                <div className="flex flex-col items-center">
                  <img
                    src={operationTeam}
                    alt="Operation Team"
                    className="w-20 h-20"
                  />
                  <p className="text-lg font-semibold mt-2 text-black">4</p>
                  <p className="text-sm text-black">Operation Team</p>
                </div>
              </div>

              {/* Rating */}
              <div className="bg-hero mt-4 py-8 flex flex-col items-center space-y-2 rounded-xl">
                <div className="text-xl">Customer Feedback</div>
                <span className="flex items-center gap-[2px]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-400 text-xl ${
                        i < data.rating ? "" : "text-gray-300"
                      }`}
                    />
                  ))}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
