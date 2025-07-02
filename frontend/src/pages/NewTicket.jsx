import React from 'react';
import Layout from '../Layout';

const NewTicket = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-1 font-sanchez">
        <h1 className="text-3xl font-bold text-center mb-8">Create New Ticket</h1>

        <form className="space-y-4">
          {/* Ticket No & Date (side-by-side label + input) */}
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] flex items-center justify-between">
              <label className="w-[40%] font-medium">Ticket No. :</label>
              <input type="text" className="bg-inputBg w-[55%] border rounded px-3 py-1 shadow" />
            </div>
            <div className="flex-1 min-w-[200px] flex items-center justify-between">
              <label className="w-[40%] font-medium">Date :</label>
              <input type="date" className="bg-inputBg w-[55%] border rounded px-3 py-1 shadow" />
            </div>
          </div>

          {/* Name & Department (side-by-side label + input) */}
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] flex items-center justify-between">
              <label className="w-[40%] font-medium">Name :</label>
              <input type="text" className="bg-inputBg w-[55%] border rounded px-3 py-1 shadow" />
            </div>
            <div className="flex-1 min-w-[200px] flex items-center justify-between">
              <label className="w-[40%] font-medium">Department :</label>
              <input type="text" className="bg-inputBg w-[55%] border rounded px-3 py-1 shadow" />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-1 font-medium">Subject :</label>
            <input type="text" className="bg-inputBg w-full border rounded px-3 py-1 shadow" />
          </div>

          {/* Category, Type, Priority & Description */}
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] space-y-2">
              <div>
                <label className="block mb-1 font-medium">Category :</label>
                <input type="text" className="bg-inputBg w-full border rounded px-3 py-1 shadow" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Type :</label>
                <input type="text" className="bg-inputBg w-full border rounded px-3 py-1 shadow" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Priority :</label>
                <input type="text" className="bg-inputBg w-full border rounded px-3 py-1 shadow" />
              </div>
            </div>

            <div className="flex-1 min-w-[300px]">
              <label className="block mb-1 font-medium">Description :</label>
              <div className="relative">
                <textarea className="bg-inputBg w-full h-40 border rounded px-3 py-1 shadow resize-none" />
                <div className="absolute bottom-2 right-2 bg-teal-300 p-2 rounded shadow cursor-pointer">
                  📎
                </div>
              </div>
            </div>
          </div>

          {/* Captcha & Submit */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
            <div className="border rounded px-4 py-4 shadow flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <label className="text-gray-700">I'm not a robot</label>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                className="w-6 h-6 ml-2"
                alt="captcha"
              />
            </div>
            <button
              type="submit"
              className="bg-hero hover:bg-teal-400 text-black px-10 py-2 rounded shadow"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default NewTicket;
