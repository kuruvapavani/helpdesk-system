import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-hero font-roboto">
      <div className="bg-lightGrayTransparent w-3/5 h-4/5 flex flex-col items-center">
        <div className="mt-16 text-4xl font-bold">
          <i>Helpdesk System</i>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-12 w-3/5 text-black items-center"
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-2 border border-black rounded placeholder-black mt-8 w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 border border-black rounded placeholder-black mt-4 w-full"
            required
          />

          <button
            type="submit"
            className="mt-12 bg-green-500 hover:bg-green-600 text-white px-4 w-1/2 py-2 rounded-lg font-medium"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-between w-3/5 mt-8">
          <span className="text-red-600 hover:underline cursor-pointer text-sm">Forgot password</span>
          <Link to="/signup">
            <span className="text-black hover:underline cursor-pointer text-lg">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
