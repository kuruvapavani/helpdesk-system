import React, { useState } from "react";
import Layout from "../Layout";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const sections = [
  {
    title: "General",
    items: [
      { name: "Language", hasButtons: true },
      { name: "Data Backup", hasToggle: true },
    ],
  },
  {
    title: "Connect To",
    items: [
      { name: "GoDash", hasToggle: true },
      { name: "SuperController", hasToggle: true },
    ],
  },
  {
    title: "Email",
    items: [{ name: "Enable SMTP", hasToggle: true }],
  },
  {
    title: "Authorization",
    items: [
      { name: "Edit authorization", hasToggle: true },
      { name: "Authority Level", hasDropdown: true },
    ],
  },
  {
    title: "Notification",
    items: [{ name: "Enable Notification", hasToggle: true }],
  },
];

const AdminSettings = () => {
  const [openSection, setOpenSection] = useState("General");
  const [selectedBM, setSelectedBM] = useState("BM");
  const [authorityLevel, setAuthorityLevel] = useState("Admin");

  const handleToggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <Layout>
      <div className="p-2 font-sanchez bg-white">
        <h1 className="text-2xl mb-4">Setting</h1>

        {sections.map((section) => (
          <div key={section.title} className="mb-4">
            <div
              className="bg-[#4FD0C6] px-4 py-2 cursor-pointer flex justify-between items-center"
              onClick={() => handleToggleSection(section.title)}
            >
              <span>{section.title}</span>
              {openSection === section.title ? (
                <IoIosArrowUp className="text-lg" />
              ) : (
                <IoIosArrowDown className="text-lg" />
              )}
            </div>

            {openSection === section.title && (
              <div className="bg-gray-100 px-4 py-2 text-sm">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2 border-b border-white last:border-none"
                  >
                    <span>{item.name}</span>

                    {/* Conditional Controls */}
                    <div className="flex gap-2 items-center">
                      {item.hasButtons && (
                        <div className="flex rounded-full overflow-hidden border border-black text-sm">
                          <button
                            onClick={() => setSelectedBM("BM")}
                            className={`px-3 py-1 font-bold transition ${
                              selectedBM === "BM"
                                ? "bg-black text-white"
                                : "text-black bg-[#55D6C2]"
                            }`}
                          >
                            BM
                          </button>
                          <button
                            onClick={() => setSelectedBM("BI")}
                            className={`px-3 py-1 font-bold transition ${
                              selectedBM === "BI"
                                ? "bg-black text-white"
                                : "text-black bg-[#55D6C2]"
                            }`}
                          >
                            BI
                          </button>
                        </div>
                      )}

                      {item.hasToggle && (
                        <FaCheck className="text-black bg-white p-[2px] rounded-sm text-sm border border-black" />
                      )}

                      {item.hasDropdown && (
                        <select
                          value={authorityLevel}
                          onChange={(e) => setAuthorityLevel(e.target.value)}
                          className="px-2 py-1 bg-white border border-black rounded text-sm"
                        >
                          <option>Admin</option>
                          <option>Editor</option>
                          <option>Viewer</option>
                        </select>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AdminSettings;
