const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userControllerr = require("../controllers/users.js");

router
.route("/signup")
.get( userControllerr.renderSignUpForm)
.post( wrapAsync(userControllerr.signup));


// router.get("/signup", userControllerr.renderSignUpForm);

// router.post("/signup",
//  wrapAsync(userControllerr.signup));


router.route("/login")
.get( userControllerr.renderLoginForm)
.post(saveRedirectUrl, 
    passport.authenticate("local", 
    { failureRedirect: '/login',
     failureFlash: true,}),
     userControllerr.login
     );

// router.get("/login", userControllerr.renderLoginForm);

// router.post(
// "/login", 
// saveRedirectUrl, 
// passport.authenticate("local", 
// { failureRedirect: '/login',
//  failureFlash: true,}),
//  userControllerr.login
//  );

router.get("/logout", userControllerr.logout);

module.exports = router;