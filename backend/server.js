// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// console.log("MONGO_URI:", process.env.MONGO_URI);

// const app = express();

// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//   })
//   .catch((err) => {
//     console.log("❌ MongoDB Error:", err.message);
//   });

// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });