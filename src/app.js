//importing the node modules
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

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

// passport oauth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token',refreshToken);
      console.log('profile',profile);
    }
  )
);

//auth flow handler
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

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
app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});
