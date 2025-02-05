const express = require("express");
const router = express.Router({mergeParams: true});
const User = require("../models/user");
const wrapAsync = require("../../MajorProject/utils/wrapAsync");
const passport = require("passport");

router.get("/signUp", (req, res) => {
    res.render("users/signup.ejs");
})

router.post("/signUp", wrapAsync(async (req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        await User.register(newUser, password);
        req.flash("success", "Welcome to World Beyond Facts");
        res.redirect("/facts");
    }catch(err) {
        req.flash("error", err.message);
        //console.log(err);
        res.redirect("/signUp");
    };
}));

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login", passport.authenticate("local", 
    {
        failureRedirect:"/login",
        failureFlash: true
    
    }), async(req, res) => {
    req.flash("success", "Welcome back to World Beyond Facts");
    res.redirect("/facts")
});

module.exports = router;