// const mongoose = require("mongoose");

// const RecipeSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   ingredients: [String], // Store ingredients as an array
//   image: String, // URL for recipe image
//   apiId: String, // Unique ID from Spoonacular API for reference
// });

// module.exports = mongoose.model("Recipe", RecipeSchema);

const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [String], // Optional: For additional details
  image: { type: String }, // Store the image URL
  instructions: { type: String }, // Optional: For full recipe details
});

module.exports = mongoose.model("Recipe", RecipeSchema);
