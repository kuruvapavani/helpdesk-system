import React, { useState } from "react";
import Notification from "../assets/notification.svg";
import Profile from "../assets/profile.svg";
import Logout from "../assets/logout.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("BM");

  return (
    <div className="text-white bg-hero h-16 w-screen flex justify-between items-center font-roboto">
      <Link to="/" className="font-bold text-3xl py-2 px-6">
        <i>Helpdesk</i>
      </Link>
      <div className="flex space-x-4 pr-6 items-center">
        <div className="flex rounded-full overflow-hidden border border-black text-sm">
          <button
            onClick={() => setSelected("BM")}
            className={`px-3 py-1 font-bold transition ${
              selected === "BM" ? "bg-black text-white" : "text-black bg-[#55D6C2]"
            }`}
          >
            BM
          </button>
          <button
            onClick={() => setSelected("BI")}
            className={`px-3 py-1 font-bold transition ${
              selected === "BI" ? "bg-black text-white" : "text-black bg-[#55D6C2]"
            }`}
          >
            BI
          </button>
        </div>

        <Link to="/notifications">
          <img src={Notification} alt="notifications" className="w-5 h-5" />
        </Link>
        <Link to="/profile">
          <img src={Profile} alt="profile" className="w-5 h-5" />
        </Link>
        <Link to="/signin">
          <img src={Logout} alt="logout" className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
