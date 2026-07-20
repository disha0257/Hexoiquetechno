import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();


// Connect MongoDB
connectDB();


// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());


// Routes
app.use("/api/contact", contactRoutes);


// Test route
app.get("/", (req, res) => {
  res.send("Hexonique Backend API Running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});