const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const path = require("path");
const fileRoutes = require("./routes/fileRoutes");
const mlRoutes = require("./routes/mlRoutes");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const app = express();
const { connectDB } = require("./lib/db");
const { error } = require("console");

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Logging
app.use(morgan("dev"));

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL
  })
);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//AuthRoutes
app.use("/api/auth", authRoutes);

// File upload routes
app.use("/api", fileRoutes);

// ML routes
app.use("/api", mlRoutes);

//Error Handler
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
};
app.use(errorHandler);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
});

module.exports = app;
