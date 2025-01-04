const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Routes
const quizRoutes = require("./routes/quizRoutes");
app.use("/api/quiz", quizRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
