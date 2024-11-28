import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if not logged in
      return;
    }

    // Fetch saved recipes
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get("/api/recipes/saved", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSavedRecipes(response.data);
      } catch (error) {
        console.error("Error fetching saved recipes:", error);
        alert("Failed to load saved recipes. Please try again.");
      }
    };

    fetchSavedRecipes();
  }, [navigate]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Saved Recipes</h1>

      {savedRecipes.length === 0 ? (
        <p className="text-gray-500">
          No saved recipes yet. Start saving some!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {savedRecipes.map((recipe) => (
            <div key={recipe.id} className="p-4 border rounded shadow-md">
              <img
                src={recipe.image || "/default-recipe.jpg"} // Use default image if none exists
                alt={recipe.title}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-bold mb-1">{recipe.title}</h2>
              <p className="text-gray-700 mb-2">{recipe.description}</p>
              <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;
