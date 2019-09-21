const express = require("express");
const passport = require("passport");

const router = express.Router();

//auth flow handler
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: true
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: true
  })
);
router.get("/logout", async (req, res) => {
  req.logout();
  res.json(req.user);
});

router.get("/current_user", async (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

module.exports = router;
