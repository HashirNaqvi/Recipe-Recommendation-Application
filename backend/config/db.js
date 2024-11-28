// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI); // Removed deprecated options
//     console.log("MongoDB Connected");
//   } catch (err) {
//     console.error(`Error: ${err.message}`);
//     process.exit(1); // Exit process with failure
//   }
// };

// module.exports = connectDB;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Simplified connection without deprecated options
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
