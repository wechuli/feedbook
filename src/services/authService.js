const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  let user = await User.findById(id);
  if (user) {
    done(null, user);
  }
});
// passport oauth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("access token", accessToken);
      // console.log("refresh token", refreshToken);
      // console.log("profile", profile);
      try {
        // check to see if the person has already logged in
        const existingUser = await User.findOne({ googleID: profile.id });
        console.log(profile);
        if (!existingUser) {
          const newUser = new User({
            googleID: profile.id,
            name: profile.displayName
          });

          await newUser.save();
          done(null, newUser);
        } else {
          done(null, existingUser);
        }
      } catch (error) {
        done(error, "dd");
      }
    }
  )
);
