require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON data

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)  // Removed deprecated options
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Import routes
const patientRoutes = require("./routes/patientRoutes");
app.use("/api/patients", patientRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
