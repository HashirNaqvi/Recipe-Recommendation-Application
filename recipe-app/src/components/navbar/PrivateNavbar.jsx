import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PrivateNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    navigate("/login");
  };

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Recipe App</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/saved-recipes" className="hover:underline">
            Saved Recipes
          </Link>
          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PrivateNavbar;
