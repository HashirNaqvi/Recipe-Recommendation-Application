// const express = require("express");
// const axios = require("axios");
// const User = require("../models/User"); // Import User model
// const Recipe = require("../models/Recipe"); // Optional: If you have a Recipe model
// const { verifyToken } = require("../middleware/auth"); // Optional: Authentication middleware

// const router = express.Router();

// // Search recipes by ingredients
// router.get("/search", async (req, res) => {
//   const { ingredients } = req.query;
//   if (!ingredients) {
//     return res
//       .status(400)
//       .json({ error: "Please provide ingredients to search for recipes." });
//   }

//   try {
//     const response = await axios.get(
//       "https://api.spoonacular.com/recipes/findByIngredients",
//       {
//         params: {
//           ingredients,
//           number: 10,
//           apiKey: process.env.SPOONACULAR_API_KEY,
//         },
//       }
//     );
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch recipes." });
//   }
// });

// // Save a recipe for a user
// router.post("/save", verifyToken, async (req, res) => {
//   const { userId, recipeId } = req.body;

//   if (!userId || !recipeId) {
//     return res
//       .status(400)
//       .json({ error: "Please provide both userId and recipeId." });
//   }

//   try {
//     // Check if user exists
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: "User not found." });
//     }

//     // Check if recipe is already saved
//     if (user.savedRecipes.includes(recipeId)) {
//       return res.status(400).json({ error: "Recipe already saved." });
//     }

//     // Add the recipe to the user's saved recipes
//     user.savedRecipes.push(recipeId);
//     await user.save();

//     res.status(200).json({
//       message: "Recipe saved successfully!",
//       savedRecipes: user.savedRecipes,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to save the recipe." });
//   }
// });

// module.exports = router;

const express = require("express");
const {
  searchRecipes,
  saveRecipe,
} = require("../controllers/recipeController");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

// Search recipes by ingredients
router.get("/search", searchRecipes);

// Save a recipe for logged-in users
router.post("/save", verifyToken, saveRecipe);

module.exports = router;
