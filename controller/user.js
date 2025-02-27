const User = require("../models/user");

module.exports.renderSignUpForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signUp = async (req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to World Beyond Facts");
            res.redirect("/facts");
        });

    }catch(err) {
        req.flash("error", err.message);
        //console.log(err);
        res.redirect("/signUp");
    };
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async(req, res) => {
    req.flash("success", "Welcome back to World Beyond Facts");
    let redirectUrl = res.locals.redirectUrl || "/facts";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err){
            next(err);
        }else{
            req.flash("success", "you are logged out!");
            res.redirect("/facts");
        }
    })
};