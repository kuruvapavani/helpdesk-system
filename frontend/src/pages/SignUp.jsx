import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = "user";
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password ,role , email}),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("username", data.username);

      alert("Sign Up successful!");
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-hero font-roboto">
      <div className="bg-lightGrayTransparent w-3/5 h-4/5 flex flex-col items-center">
        <div className="mt-16 text-4xl font-bold">
          <i>Helpdesk System</i>
        </div>
        <div className='text-xl mt-8'>Sign Up Here</div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-8 w-3/5 text-black items-center"
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-2 border border-black rounded placeholder-black  w-full"
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
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 border border-black rounded placeholder-black mt-4 w-full"
            required
          />

          <button
            type="submit"
            className="mt-12 bg-blue-500 hover:bg-blue-600 text-white px-4 w-1/2 py-2 rounded-lg font-medium"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-between w-3/5 mt-8">
          <span className="text-red-600 hover:underline cursor-pointer text-sm">Forgot password</span>
          <Link to="/signin">
            <span className="text-black hover:underline cursor-pointer text-lg">Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
