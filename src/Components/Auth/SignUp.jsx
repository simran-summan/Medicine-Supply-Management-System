import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../App.css'; // Ensure you have your styles imported

function SignUp() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false); // State for controlling fade-in

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set to true after a delay
    }, 200); // Delay in milliseconds before fade-in starts

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center rounded-b-lg transition-transform transform">
        <h1
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          className="text-2xl font-bold text-blue-600"
        >
          MedManage
        </h1>
      </nav>
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 min-h-screen flex items-center justify-center">
        <div
          className={`bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md transition-opacity duration-1000 ease-in ${
            isVisible ? "opacity-100" : "opacity-0"
          } transform ${isVisible ? "translate-y-0" : "translate-y-10"}`}
        >
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
            Create an Account
          </h2>

          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Choose a username"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Create a password"
              />
            </div>

            <button
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline transition duration-300 transform hover:translate-y-1"
              type="button"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
