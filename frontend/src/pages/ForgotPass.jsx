import React from "react";

const ForgotPass = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-hero font-roboto">
      <div className="bg-lightGrayTransparent w-3/5 h-4/5 flex flex-col items-center justify-center">
        {/* Message */}
        <p className="text-center text-black font-medium mb-6 px-4">
          Don’t worry, Enter your email below and we will <br />
          send you a link to change password.
        </p>

        {/* Form */}
        <form className="flex flex-col items-center space-y-6 w-full max-w-sm">
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-2 text-black border border-black focus:outline-none placeholder:text-black"
          />
          <button
            type="submit"
            className="bg-[#03CC17] text-white px-12 py-2 rounded-xl hover:bg-green-600"
          >
            Submit
          </button>
        </form>

        {/* Sign In Button */}
        <button
          className="mt-4 bg-[#0769DC] text-white px-12 max-w-sm py-2 rounded-xl  hover:bg-blue-700"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default ForgotPass;
