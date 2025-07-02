import React, { useState } from "react";
import Layout from "../Layout";
import { IoPersonCircle } from "react-icons/io5";
import { RiFileEditLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const UserProfile = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <Layout>
      <div className="font-sanchez text-2xl mt-6">User Profile</div>

      <div className="mt-6 h-4/5 w-auto mx-6 bg-hero my-2 flex justify-between font-sanchez">
        {/* Profile Card */}
        <div className="relative mx-12 my-12 w-1/4 h-auto bg-white rounded-lg shadow shadow-xl p-6 flex flex-col items-center">
          <RiFileEditLine
            className="absolute top-3 right-3 cursor-pointer text-xl"
            title="Edit Profile"
          />

          <IoPersonCircle className="w-48 h-48 text-[#C4C4C4]" />

          <div className="mt-4 space-y-1 text-left">
            <div>Username: John Doe</div>
            <div>Contact Number: +91-9876543210</div>
            <div>Email: john@example.com</div>
            <div>Department: Technical</div>
          </div>
        </div>

        {/* Feedback */}
        <div className="bg-white w-72 h-48 mt-12 rounded-lg mx-12 flex flex-col items-center shadow shadow-xl">
          <div className="mt-2">Give Your Feedback</div>
          <span className="py-2 px-6 bg-[#9C9C9C] mt-2 text-white rounded-md text-sm">
            [Loreum ipsum]
          </span>
          <div className="flex justify-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer text-2xl transition-colors duration-200 ${
                  (hoverRating || rating) >= star
                    ? "text-yellow-400"
                    : "text-gray-400"
                }`}
                onClick={() => handleClick(star)}
                onMouseEnter={() => handleMouseEnter(star)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
          <button className="bg-hero px-6 py-2 mt-2 rounded-xl">Submit Feedback</button>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
