//importing the node modules
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
require("./models/User.model");
require("./services/authService"); // requiring passport
const authRoutes = require("./routes/authRoutes");

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

// setting the cookie session
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //in milliseconds
    keys: [process.env.COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB database
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_DB_CONN_STRING, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => {
    console.info("Database successfully connected");
  })
  .catch(error => console.log(error));

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
  console.info(`Server running on port 8090`);
});
