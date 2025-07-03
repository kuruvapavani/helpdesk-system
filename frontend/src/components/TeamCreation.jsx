import React from "react";
import { FaUserPlus, FaSync, FaArrowLeft } from "react-icons/fa";

const TeamCreation = ({ onBack }) => {
  return (
    <div className="text-center w-full relative">
      {/* Back Arrow */}
      <button
        onClick={onBack}
        className="absolute left-0 top-0 ml-2 mt-2 text-black hover:text-gray-700"
      >
        <FaArrowLeft className="text-xl" />
      </button>

      <h2 className="text-xl font-sanchez mb-4">My Ticket - Team Creation</h2>

      <div className="bg-teal-400 p-6 rounded-2xl w-full max-w-3xl mx-auto shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Side Inputs */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <input
              type="text"
              placeholder="Ticket No."
              className="w-full px-3 py-2 rounded shadow-inner placeholder:text-black placeholder:italic"
            />
            <input
              type="text"
              placeholder="Team name"
              className="w-full px-3 py-2 rounded shadow-inner placeholder:text-black"
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Team Member"
                className="w-full px-3 py-2 rounded shadow-inner placeholder:text-black pr-10"
              />
              <FaUserPlus className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-lg" />
            </div>
          </div>

          {/* Right Side Remark */}
          <div className="w-full md:w-1/2">
            <textarea
              placeholder="Remark"
              className="w-full h-full px-3 py-2 rounded shadow-inner resize-none placeholder:text-black"
              rows={6}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <FaSync className="text-2xl cursor-pointer text-black" />
          <button className="bg-gray-400 px-4 py-2 rounded shadow text-white hover:bg-gray-500">
            Close Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCreation;
