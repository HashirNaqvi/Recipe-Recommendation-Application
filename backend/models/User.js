// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   savedRecipes: [
//     {
//       type: mongoose.Schema.Types.ObjectId, // Refers to the ID of a recipe
//       ref: "Recipe", // Reference to the Recipe model
//     },
//   ],
// });

// module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedRecipes: [
    {
      type: mongoose.Schema.Types.ObjectId, // Refers to the ID of a recipe
      ref: "Recipe", // Reference to the Recipe model
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
