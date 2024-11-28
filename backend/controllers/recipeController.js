const axios = require("axios");
const mongoose = require("mongoose");
const User = require("../models/User");

// Search Recipes by Ingredients
exports.searchRecipes = async (req, res) => {
  const { ingredients } = req.query;

  if (!ingredients) {
    return res.status(400).json({ error: "Please provide ingredients." });
  }

  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/findByIngredients",
      {
        params: {
          ingredients,
          number: 10,
          apiKey: process.env.SPOONACULAR_API_KEY,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (err) {
    console.error("Error fetching recipes:", err.message);
    res.status(500).json({ error: "Failed to fetch recipes." });
  }
};

// Save a Recipe
exports.saveRecipe = async (req, res) => {
  const { userId, recipeId } = req.body;

  if (!userId || !recipeId) {
    return res
      .status(400)
      .json({ error: "User ID and Recipe ID are required." });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Check if recipe is already saved
    if (user.savedRecipes.includes(recipeId)) {
      return res.status(400).json({ error: "Recipe is already saved." });
    }

    // Add recipe ID to savedRecipes
    user.savedRecipes.push(recipeId);
    await user.save();

    res.status(200).json({
      message: "Recipe saved successfully!",
      savedRecipes: user.savedRecipes,
    });
  } catch (err) {
    console.error("Error saving recipe:", err.message);
    res.status(500).json({ error: "Failed to save the recipe." });
  }
};
