import React, { useState } from 'react';
import Layout from '../Layout';

const UserLogHistory = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const logs = [
    {
      signIn: '130821 / 0800',
      staffId: 'XL000001',
      department: 'OT',
      activity: 'Create Team',
      signOut: '130821 / 0815',
    },
    {
      signIn: '130821 / 0805',
      staffId: '',
      department: '',
      activity: '',
      signOut: '130821 / 0810',
    },
    {}, {}, {}, // For empty rows
  ];

  const startIndex = 0;
  const filteredData = logs;
  const showingTo = Math.min(startIndex + entriesPerPage, filteredData.length);

  return (
    <Layout>
      <div className="px-4 py-6 font-sanchez">
        <div className="text-2xl mb-4">User Log History</div>

        {/* Entries Selector */}
        <div className="flex items-center mb-4 text-sm">
          <span className="mr-2">Show:</span>
          <select
            className="bg-gray-200 px-2 py-1 rounded"
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
          >
            {[5, 10, 15].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span className="ml-2">Entries</span>
        </div>

        <hr className="border border-black mb-4" />

        {/* Table */}
        <div className="w-full overflow-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-center">
                <th className="px-3 py-2 font-normal">No.</th>
                <th className="px-3 py-2 font-normal">Date/Sign InTime</th>
                <th className="px-3 py-2 font-normal">Staff ID</th>
                <th className="px-3 py-2 font-normal">Department</th>
                <th className="px-3 py-2 font-normal">Activity</th>
                <th className="px-3 py-2 font-normal">Date/Sign Out time</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => {
                const log = logs[i] || {};
                return (
                  <tr
                    key={i}
                    className={`text-center ${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}
                  >
                    <td className="px-2 py-2">{i + 1}.</td>
                    <td className="px-2 py-2">{log.signIn || ''}</td>
                    <td className="px-2 py-2">{log.staffId || ''}</td>
                    <td className="px-2 py-2">{log.department || ''}</td>
                    <td className="px-2 py-2">{log.activity || ''}</td>
                    <td className="px-2 py-2">{log.signOut || ''}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Showing entries */}
        <p className="text-sm mt-2">
          Showing {startIndex + 1} to {showingTo} of {filteredData.length} entries
        </p>

        {/* Pagination */}
        <div className="flex justify-end text-sm mt-2">
          <span className="cursor-pointer hover:text-blue-500">{'≪ 1 ≫'}</span>
        </div>
      </div>
    </Layout>
  );
};

export default UserLogHistory;
