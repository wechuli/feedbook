const express = require("express");
const passport = require("passport");

const router = express.Router();

//auth flow handler
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/google/callback", passport.authenticate("google"));

module.exports = router;
