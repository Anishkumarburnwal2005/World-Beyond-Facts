const express = require("express");
const router = express.Router({mergeParams: true});
//const User = require("../models/user");
const wrapAsync = require("../../MajorProject/utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware");
const userController = require("../controller/user");

router 
    .route("/signUp")
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.signUp));

router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate("local", 
        {
            failureRedirect:"/login",
            failureFlash: true,
        
        }),     
        userController.login
    );

router.get("/logout", userController.logout);

module.exports = router;