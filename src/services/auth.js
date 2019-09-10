const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// passport oauth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile", profile);
    }
  )
);
