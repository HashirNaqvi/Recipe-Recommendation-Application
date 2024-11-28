// const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const User = require("../models/User");
// const router = express.Router();

// // Register route
// router.post("/register", (req, res) => {
//   res.send("User registered");
// });

// // Login Route
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: "Email and password are required." });
//   }

//   try {
//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: "User not found." });
//     }

//     // Verify password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid password." });
//     }

//     // Generate JWT
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h", // Token validity (1 hour in this example)
//     });

//     res.status(200).json({ message: "Login successful", token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Login failed." });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register route
router.post("/register", authController.register);

// Login route
router.post("/login", authController.login);

module.exports = router;
