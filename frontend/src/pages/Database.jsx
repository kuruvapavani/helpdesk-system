import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { IoIosSearch } from "react-icons/io";
import { RiDeleteBin5Line, RiFileEditLine } from "react-icons/ri";

const TABS = [
  { label: "User", path: "user" },
  { label: "Operation Team", path: "operation-team" },
  { label: "Technical Support", path: "technical-support" },
];

const dummyData = [
  { id: "ABC123", name: "Abu", department: "IT", speciality: "Software" },
  { id: "ABC124", name: "Ahmad", department: "Software", speciality: "Networking" },
  { id: "ABC125", name: "Ali", department: "Technical", speciality: "Hardware" },
];

const Database = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const filteredData = dummyData.filter((entry) =>
    Object.values(entry).some((val) =>
      val.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentEntries = filteredData.slice(startIndex, startIndex + entriesPerPage);

  return (
    <Layout>
      <div className="font-sanchez px-6 py-4 bg-white min-h-screen">
        <h2 className="text-2xl mb-4">Database</h2>

        {/* Tabs */}
        <div className="flex mb-4">
          {TABS.map((tab) => (
            <button
              key={tab.path}
              onClick={() => navigate(`/database/${tab.path}`)}
              className={`flex-1 border py-2  ${
                type === tab.path ? "bg-[#4FD0C6] text-black" : "bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search + Entries */}
        <div className="flex flex-col space-y-4 mb-3 py-2 border-black border-b">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Find ticket"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full bg-gray-200 py-2 px-4 pr-10 rounded"
            />
            <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl" />
          </div>
          <div className="flex items-center gap-2">
            <span>Show:</span>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              {[5, 10, 15, 20].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <span>Entries</span>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-2">
                  {/* <input type="checkbox" /> */}
                </th>
                <th className="p-2 font-normal">Staff ID</th>
                <th className="p-2 font-normal">Name</th>
                <th className="p-2 font-normal">Department</th>
                <th className="p-2 font-normal">Speciality</th>
                <th className="p-2 font-normal">Setting</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((entry, i) => (
                <tr
                  key={entry.id}
                  className={`${
                    i % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  } border-t`}
                >
                  <td className="p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2">{entry.id}</td>
                  <td className="p-2">{entry.name}</td>
                  <td className="p-2">{entry.department}</td>
                  <td className="p-2">{entry.speciality}</td>
                  <td className="p-2 flex gap-2 items-center text-lg">
                    <RiFileEditLine className="cursor-pointer" />
                    <RiDeleteBin5Line className="cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-4 text-sm">
          <span
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="cursor-pointer mx-2 hover:text-blue-500"
          >
            ≪
          </span>
          <span>{currentPage}</span>
          <span
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="cursor-pointer mx-2 hover:text-blue-500"
          >
            ≫
          </span>
        </div>

        {/* Entry Info */}
        <p className="text-sm mt-2">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + entriesPerPage, filteredData.length)} of{" "}
          {filteredData.length} entries
        </p>
      </div>
    </Layout>
  );
};

export default Database;
