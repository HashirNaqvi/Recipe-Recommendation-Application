import React from "react";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Recipe App</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/register" className="hover:underline">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
