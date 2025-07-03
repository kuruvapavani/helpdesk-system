import React from 'react'
import Layout from '../Layout'

const UserSettings = () => {
  return (
    <Layout>
      <div className="font-sanchez">
        {/* Heading */}
        <h2 className="text-2xl font-serif font-semibold inline-block p-1 mb-2">
          User Profile
        </h2>

        {/* Tab */}
        <div className="bg-teal-400 w-fit px-4 py-2 text-lg font-medium font-serif text-black">
          Edit Account
        </div>

        {/* Form */}
        <form className="w-full border border-gray-300">
          <div className="grid grid-cols-2 bg-[#8F8C8C] text-white font-medium">
            {/* Labels & Inputs Row by Row */}
            {[
              'Username',
              'Current Password',
              'New Password',
              'Comfirm Password',
              'Email',
              'Real Name',
              'Access Level',
              'Project Access Level',
            ].map((label, idx) => (
              <React.Fragment key={idx}>
                <div className="p-3 border-2 border-[#C4C4C4]">{label}</div>
                <div className="p-3 border-2 border-[#C4C4C4] bg-white">
                  <input
                    type={
                      label.toLowerCase().includes('password') ? 'password' :
                      label.toLowerCase().includes('email') ? 'email' : 'text'
                    }
                    className="w-full border-none focus:outline-none bg-transparent"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Button Row */}
          <div className="bg-[#C4C4C4] flex items-center p-2">
            <button
              type="submit"
              className="bg-teal-400 px-6 py-2 text-black font-medium rounded-md"
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default UserSettings
