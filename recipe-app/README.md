# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import React, { useState } from "react";
import axios from "axios";
import RecipeCard from "./components/RecipeCard";

const App = () => {
const [searchQuery, setSearchQuery] = useState("");
const [recipes, setRecipes] = useState([]);
const [loading, setLoading] = useState(false);

const fetchRecipes = async (query) => {
if (!query) return;
setLoading(true);
try {
const response = await axios.get(
`https://api.edamam.com/search?q=${query}&app_id=a52b4d43&app_key=e0e5c667605f5e91d8275c973531b80a`
);
setRecipes(response.data.hits);
} catch (error) {
console.error("Error fetching recipes:", error);
} finally {
setLoading(false);
}
};

const handleSearch = (e) => {
e.preventDefault();
fetchRecipes(searchQuery);
};

return (
<div className="min-h-screen bg-gray-100">
{/_ Header _/}
<header className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-6 px-8 shadow-lg">
<div className="flex justify-between items-center max-w-7xl mx-auto">
<h1 className="text-3xl font-bold">Recipe Finder</h1>
<form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-md overflow-hidden shadow-md"
          >
<input
type="text"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
placeholder="Search Recipes..."
className="px-4 py-2 w-64 outline-none"
/>
<button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition"
            >
Search
</button>
</form>
</div>
</header>

      {/* Recipes Section */}
      <main className="py-10 px-8 max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center text-xl text-gray-700">
            Loading recipes...
          </div>
        ) : recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe.recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No recipes found</div>
        )}
      </main>
    </div>

);
};

export default App;
