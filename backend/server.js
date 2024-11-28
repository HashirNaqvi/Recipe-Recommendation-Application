// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Middleware
// app.use(express.json());

// // Import and use recipe routes
// const recipeRoutes = require("./routes/recipe"); // Adjust path as needed
// app.use("/api/recipes", recipeRoutes);

// // Routes
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/recipes", require("./routes/recipe"));

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipe"); // Import the recipe routes

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes); // Register the recipe routes

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
