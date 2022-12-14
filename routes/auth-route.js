const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/google", (req, res) => {
  passport.authenticate("google", {
    scope: ["profile"],
  });
});

module.exports = router;
