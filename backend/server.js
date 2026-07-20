import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();


// ==========================================
// CORS
// ==========================================

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://hexoniquetechnology.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {

      // Allow requests without origin
      // Example: Postman or server-to-server
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error("Not allowed by CORS")
      );

    },

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],

    credentials: true,

  })
);


// ==========================================
// MIDDLEWARE
// ==========================================

app.use(express.json());


// ==========================================
// DATABASE
// ==========================================

connectDB();


// ==========================================
// ROUTES
// ==========================================

app.use("/api/contact", contactRoutes);


// ==========================================
// TEST ROUTE
// ==========================================

app.get("/", (req, res) => {

  res.json({
    success: true,
    message: "Hexonique Backend API Running",
  });

});


// ==========================================
// SERVER
// ==========================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {

  console.log(
    `Server running on port ${PORT}`
  );

});