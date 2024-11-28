import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicNavbar from "./components/navbar/PublicNavbar";
import PrivateNavbar from "./components/navbar/PrivateNavbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import SavedRecipes from "./pages/SavedRecipes";
import "./index.css";

const App = () => {
  const isLoggedIn = localStorage.getItem("token"); // Check if user is logged in

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? <PrivateNavbar /> : <PublicNavbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
