const Facts = require("./models/fact");
const Reviews = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");  
const {factSchema, reviewSchema} = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
    //console.log(req.path, "..." , req.originalUrl);
    if (!req.isAuthenticated()) { 
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to do it!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    const {id} = req.params;
    let fact = await Facts.findById(id);
    if(!(fact.owner.equals(res.locals.currUser._id))){
        req.flash("error", "You are not the owner of the fact!");
        return res.redirect(`/facts/${id}`);
    }
    next();
};

module.exports.validateFact = (req, res, next) => {

    if(req.body.factValidation && req.body.factValidation.is_verified){
        req.body.factValidation.is_verified = ["yes", "true", "1"].includes(req.body.factValidation.is_verified.toLowerCase());
    }else{ 
        req.body.factValidation.is_verified = false;
    }
//console.log(req.body.factValidation.is_verified);
    let {error} = factSchema.validate(req.body);
    //console.log(error);
    if(error){
        throw new ExpressError(400, error.details[0].message);
    }else{
        next();
    }
};


module.exports.validateReview = (req, res, next) => {

    let {error} = reviewSchema.validate(req.body);
    //console.log(error);
    if(error){
        throw new ExpressError(400, error.details[0].message);
    }else{
        next();
    }
}

module.exports.isAuthor = async (req, res, next) => {
    const {id, reviewId} = req.params;
    let review = await Reviews.findById(reviewId);
    if(!(review.author.equals(res.locals.currUser._id))){
        req.flash("error", "You are not the author of this review!");
        return res.redirect(`/facts/${id}`);
    }
    next();
};