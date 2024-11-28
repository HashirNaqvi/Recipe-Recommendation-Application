import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/recipes?search=${query}`);
      setRecipes(response.data);
    } catch (error) {
      alert("Error fetching recipes!");
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for recipes..."
        className="w-full p-2 border rounded mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Search
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="p-4 border rounded">
            <h3 className="font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
