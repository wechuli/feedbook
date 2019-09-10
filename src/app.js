//importing the node modules
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

require("./services/auth"); // requiring passport

//Instantiate the app
const app = express();

// Add necessary middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

// Connect to MongoDB database

// Custom Route Handlers

app.use("/api/auth", authRoutes);

//Default 404 page

app.use((req, res) => {
  res.status(404).json({
    error: true,
    message: "Route not found"
  });
});

// Get the port set in the environment
const PORT = process.env.PORT || 8090;

// listen on the specified port
app.listen(8090, () => {
  console.info(`Server running on port ${PORT}`);
});
